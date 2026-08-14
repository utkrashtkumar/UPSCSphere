-- ============================================================================
--  UPSCSphere Complete Supabase Database Schema & RLS Security Policies
--  Copy and run this entire script in your Supabase SQL Editor (supabase.com)
-- ============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ----------------------------------------------------------------------------
-- 2. User Profiles Table (Linked to Supabase Auth)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT DEFAULT 'Aspirant',
  target_year INTEGER DEFAULT 2026,
  optional_subject TEXT DEFAULT 'General Studies',
  streak_count INTEGER DEFAULT 1,
  total_quizzes INTEGER DEFAULT 0,
  average_score NUMERIC DEFAULT 0.0,
  highest_score NUMERIC DEFAULT 0.0,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for Profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone for leaderboard"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- ----------------------------------------------------------------------------
-- 3. Quiz Results & Diagnostic History Table
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  score NUMERIC NOT NULL,
  total_questions INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  wrong_count INTEGER NOT NULL,
  unanswered_count INTEGER NOT NULL,
  accuracy_percentage NUMERIC NOT NULL,
  time_spent_seconds INTEGER NOT NULL,
  paper_type TEXT DEFAULT 'GS',
  mode TEXT DEFAULT 'instant',
  subject_breakdown JSONB DEFAULT '{}'::jsonb,
  answers JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for Quiz Results
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own quiz results"
  ON public.quiz_results FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quiz results"
  ON public.quiz_results FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 4. Bookmarks Table
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.bookmarks (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  question_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, question_id)
);

ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own bookmarks"
  ON public.bookmarks FOR ALL
  USING (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 5. Syllabus Progress Table
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.syllabus_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  is_completed BOOLEAN DEFAULT false,
  revision_count INTEGER DEFAULT 0,
  notes TEXT DEFAULT '',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, topic_id)
);

ALTER TABLE public.syllabus_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their syllabus progress"
  ON public.syllabus_progress FOR ALL
  USING (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 6. 1v1 Aspirant Speed Duels Table
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.duels (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  player1_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  player2_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  player1_name TEXT NOT NULL,
  player2_name TEXT DEFAULT 'Waiting...',
  player1_score NUMERIC DEFAULT 0,
  player2_score NUMERIC DEFAULT 0,
  winner_id UUID,
  status TEXT DEFAULT 'waiting', -- 'waiting', 'active', 'finished'
  subject TEXT DEFAULT 'mixed',
  question_ids JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.duels ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view live duels"
  ON public.duels FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create/update duels"
  ON public.duels FOR ALL
  USING (auth.role() = 'authenticated');

-- ----------------------------------------------------------------------------
-- 7. Automatic Profile Creation on New User Signup Trigger
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, target_year, avatar_url)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    COALESCE((new.raw_user_meta_data->>'target_year')::integer, 2026),
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger definition
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================================================
-- End of Supabase Schema Script
-- ============================================================================
