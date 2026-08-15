import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { getTodayISTDate, generateDailyCAEdition } from '@/lib/dailyCAGenerator';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Daily Automated Cron Handler
 * Triggered at 7:00 AM IST (1:30 AM UTC) daily via Vercel Cron or GitHub Actions.
 * Generates 20 authentic UPSC MCQs with citations and stores them in Supabase.
 */
export async function GET(req: NextRequest) {
  return handleCronJob(req);
}

export async function POST(req: NextRequest) {
  return handleCronJob(req);
}

async function handleCronJob(req: NextRequest) {
  try {
    const cronSecret = process.env.CRON_SECRET;
    const authHeader = req.headers.get('authorization');
    const isVercelCron = req.headers.get('user-agent')?.includes('vercel-cron');

    // Security check: If CRON_SECRET is configured, enforce authorization
    if (cronSecret && !isVercelCron) {
      if (authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json(
          { error: 'Unauthorized: Invalid Cron Secret' },
          { status: 401 }
        );
      }
    }

    const todayIST = getTodayISTDate();
    console.log(`[Daily CA Cron] Generating 20 UPSC current affairs questions for ${todayIST}...`);

    // 1. Generate 20 authentic questions for today
    const generated = await generateDailyCAEdition(todayIST);

    // 2. Upsert into Supabase database if configured
    let dbSaved = false;
    if (isSupabaseConfigured && supabase) {
      try {
        const { error: upsertError } = await supabase
          .from('daily_ca_editions')
          .upsert(
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

        if (upsertError) {
          console.warn('[Daily CA Cron] Notice: Supabase table daily_ca_editions not created yet. Run supabase_schema.sql in Supabase SQL editor to enable cloud caching:', upsertError.message);
        } else {
          dbSaved = true;
        }
      } catch (dbErr: any) {
        console.warn('[Daily CA Cron] Supabase connection error:', dbErr?.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully generated 20 UPSC Current Affairs questions for ${todayIST}`,
      edition_date: generated.edition_date,
      headline: generated.headline,
      total_count: generated.total_count,
      dbSaved: dbSaved,
      sources: generated.sources,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('[Daily CA Cron] Unhandled execution error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
