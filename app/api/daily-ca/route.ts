import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { getTodayISTDate, generateDailyCAEdition } from '@/lib/dailyCAGenerator';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * GET /api/daily-ca?date=YYYY-MM-DD
 * Fetches today's 20 Current Affairs questions.
 * If cached in Supabase, returns instant cache.
 * If not, generates on-the-fly, saves to Supabase, and returns.
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const requestedDate = searchParams.get('date') || getTodayISTDate();

    // 1. Check Supabase Cache if configured
    if (isSupabaseConfigured && supabase) {
      try {
        const { data: cachedEdition, error: fetchError } = await supabase
          .from('daily_ca_editions')
          .select('*')
          .eq('edition_date', requestedDate)
          .maybeSingle();

        if (!fetchError && cachedEdition && cachedEdition.questions?.length > 0) {
          return NextResponse.json({
            success: true,
            date: requestedDate,
            headline: cachedEdition.headline,
            questions: cachedEdition.questions,
            sources: cachedEdition.sources,
            total: cachedEdition.questions.length,
            isCached: true,
          });
        }
      } catch (dbErr) {
        console.warn('Supabase query error for daily_ca_editions:', dbErr);
      }
    }

    // 2. Not cached or DB not configured: Generate fresh 20 questions
    const generated = await generateDailyCAEdition(requestedDate);

    // 3. Save to Supabase for future requests
    if (isSupabaseConfigured && supabase && generated.questions.length > 0) {
      try {
        await supabase.from('daily_ca_editions').upsert(
          {
            edition_date: generated.edition_date,
            headline: generated.headline,
            questions: generated.questions,
            sources: generated.sources,
            total_count: generated.total_count,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'edition_date' }
        );
      } catch (saveErr) {
        console.warn('Could not cache generated edition to Supabase:', saveErr);
      }
    }

    return NextResponse.json({
      success: true,
      date: requestedDate,
      headline: generated.headline,
      questions: generated.questions,
      sources: generated.sources,
      total: generated.total_count,
      isCached: false,
    });
  } catch (error: any) {
    console.error('Failed to process /api/daily-ca request:', error);
    // Fallback to today's static questions so the user never gets an error
    const fallback = await generateDailyCAEdition(getTodayISTDate());
    return NextResponse.json({
      success: true,
      date: fallback.edition_date,
      headline: fallback.headline,
      questions: fallback.questions,
      sources: fallback.sources,
      total: fallback.total_count,
      fallback: true,
    });
  }
}
