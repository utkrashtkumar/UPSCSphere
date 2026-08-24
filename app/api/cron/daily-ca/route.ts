import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { getTodayISTDate, generateDailyCAEdition } from '@/lib/dailyCAGenerator';

export const dynamic = 'force-dynamic';

/**
 * GET /api/cron/daily-ca
 * 
 * Vercel Cron Job — runs at 00:31 IST (19:01 UTC) daily.
 * Pre-generates and caches today's Daily CA edition so the first user
 * load of the day is instant (served from Supabase cache).
 * 
 * Vercel Cron Schedule: "1 19 * * *" (19:01 UTC = 00:31 IST)
 * 
 * Security: Protected by CRON_SECRET environment variable.
 */
export async function GET(request: NextRequest) {
  // Validate cron secret to prevent unauthorized triggering
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const todayIST = getTodayISTDate();

  try {
    // Check if today's edition already exists in Supabase
    if (isSupabaseConfigured && supabase) {
      const { data: existing } = await supabase
        .from('daily_ca_editions')
        .select('edition_date, total_count, source_type')
        .eq('edition_date', todayIST)
        .maybeSingle();

      if (existing && existing.total_count >= 30) {
        return NextResponse.json({
          success: true,
          message: `Edition for ${todayIST} already cached (${existing.total_count} questions, source: ${existing.source_type})`,
          date: todayIST,
          already_cached: true,
        });
      }
    }

    // Generate fresh edition for today using hybrid system
    console.log(`[CronJob] Generating Daily CA edition for ${todayIST}...`);
    const edition = await generateDailyCAEdition(todayIST);

    // Save to Supabase
    if (isSupabaseConfigured && supabase && edition.questions.length > 0) {
      const { error: upsertError } = await supabase.from('daily_ca_editions').upsert(
        {
          edition_date: edition.edition_date,
          headline: edition.headline,
          questions: edition.questions,
          sources: edition.sources,
          total_count: edition.total_count,
          subject_counts: edition.subject_counts,
          source_type: edition.source_type || 'cron_generated',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'edition_date' }
      );

      if (upsertError) {
        console.error('[CronJob] Failed to save to Supabase:', upsertError);
        return NextResponse.json({
          success: false,
          error: 'Failed to cache edition',
          date: todayIST,
        }, { status: 500 });
      }
    }

    console.log(`[CronJob] ✅ Generated ${edition.questions.length} questions for ${todayIST} (source: ${edition.source_type})`);

    return NextResponse.json({
      success: true,
      date: todayIST,
      total_questions: edition.questions.length,
      subject_counts: edition.subject_counts,
      source_type: edition.source_type,
      message: `Daily CA edition for ${todayIST} generated and cached successfully.`,
    });
  } catch (error: any) {
    console.error('[CronJob] Error generating daily CA:', error);
    return NextResponse.json({
      success: false,
      error: error?.message || 'Internal server error',
      date: todayIST,
    }, { status: 500 });
  }
}
