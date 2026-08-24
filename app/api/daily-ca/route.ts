import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { getTodayISTDate, generateDailyCAEdition } from '@/lib/dailyCAGenerator';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * GET /api/daily-ca?date=YYYY-MM-DD&subject=polity|economy|...&refresh=true
 * 
 * Hybrid daily CA question system:
 * 1. Checks Supabase cache first (fastest)
 * 2. Uses curated question archive if available
 * 3. Generates fresh questions via Gemini API for uncached dates
 * 4. Saves to Supabase to avoid re-generation
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const requestedDate = searchParams.get('date') || getTodayISTDate();
    const subjectFilter = searchParams.get('subject') || undefined;
    const forceRefresh = searchParams.get('refresh') === 'true' || searchParams.get('force') === 'true';

    // 1. Check Supabase Cache if configured and not forcing refresh
    if (!forceRefresh && !subjectFilter && isSupabaseConfigured && supabase) {
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
            generated_at: cachedEdition.updated_at || cachedEdition.created_at,
            questions: cachedEdition.questions,
            sources: cachedEdition.sources || [],
            total: cachedEdition.questions.length,
            subject_counts: cachedEdition.subject_counts || {},
            source_type: cachedEdition.source_type || 'cached',
            isCached: true,
          });
        }
      } catch (dbErr) {
        console.warn('Supabase query error for daily_ca_editions:', dbErr);
      }
    }

    // 2. Generate via hybrid system (curated → Gemini → fallback)
    const generated = await generateDailyCAEdition(requestedDate, subjectFilter);

    // 3. Save full edition to Supabase for future requests (avoid re-generation)
    if (!subjectFilter && isSupabaseConfigured && supabase && generated.questions.length > 0) {
      try {
        await supabase.from('daily_ca_editions').upsert(
          {
            edition_date: generated.edition_date,
            headline: generated.headline,
            questions: generated.questions,
            sources: generated.sources,
            total_count: generated.total_count,
            subject_counts: generated.subject_counts,
            source_type: generated.source_type || 'generated',
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
      generated_at: generated.generated_at,
      questions: generated.questions,
      sources: generated.sources,
      total: generated.total_count,
      subject_counts: generated.subject_counts,
      source_type: generated.source_type || 'generated',
      isCached: false,
    });
  } catch (error: any) {
    console.error('Failed to process /api/daily-ca request:', error);
    // Fallback — serve curated data at minimum
    const fallback = await generateDailyCAEdition(getTodayISTDate());
    return NextResponse.json({
      success: true,
      date: fallback.edition_date,
      headline: fallback.headline,
      generated_at: fallback.generated_at,
      questions: fallback.questions,
      sources: fallback.sources,
      total: fallback.total_count,
      source_type: 'fallback',
      fallback: true,
    });
  }
}
