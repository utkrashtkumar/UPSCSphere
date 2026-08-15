# 🏛️ UPSCSphere — UPSC Civil Services Prelims Portal 🇮🇳

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database_%26_Auth-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![100% Free](https://img.shields.io/badge/100%25_Free-Open_Educational_Portal-orange?style=for-the-badge)](#)

> **India's 100% Free, High-Performance UPSC Civil Services Preliminary Examination Platform** — featuring a 12-Year Official PYQ Vault (2015–2026), instant on-the-spot evaluation, 50:50 option elimination tools, page-exact standard book citations, and real-time All-India ranking benchmarks.

---

## 🌟 Key Features & Core Pillars

### 1. 📜 12-Year Official PYQ Archive (2015 – 2026)
- Complete Preliminary Exam coverage for **GS Paper 1** and **CSAT Paper 2** from 2015 to 2026.
- Authentic UPSC Prelims option styles:
  - **Type A**: 3-Statement options (`1 and 2 only`, `1 and 3 only`, etc.)
  - **Type B**: 2-Statement options (`1 only`, `2 only`, `Both 1 and 2`, `Neither 1 nor 2`)
  - **Type C**: Direct factual 4-choice questions
  - **Type D**: Pair matching options (`Only one pair`, `Only two pairs`, `All four pairs`)
- Verified against official UPSC master answer keys with 1-click full-length 2-hour test launch.

### 2. 📖 Exact Standard Reference Book Citations
Every question is mapped to standard UPSC textbooks with edition, chapter, and page-exact excerpts:
- **Indian Polity**: M. Laxmikanth (7th Edition)
- **Modern Indian History**: Rajiv Ahir / Spectrum Publications
- **Indian Economy**: Ramesh Singh (15th Edition) / NCERT Class XII Macroeconomics
- **Environment & Biodiversity**: Shankar IAS Academy (9th Edition)
- **Geography**: NCERT Class XI & XII Physical & Human Geography
- **Daily Current Affairs**: The Hindu, PIB, and Down To Earth Editorials

### 3. 🎯 50:50 Option Elimination Strike Tool
- Interactive strike-through feature on every option button to replicate real OMR exam-hall elimination techniques.
- Embedded **"50:50 Elimination Strategy"** on every explanation showing how to identify distracters and extreme statements.

### 4. ⚡ Dual Mock Modes (Instant Learning vs Strict Exam Simulation)
- **Instant Learning Mode**: Immediate answer revelation, detailed logic, and textbook citations after every question.
- **Strict Exam Simulation Mode**: 2-Hour countdown timer, negative marking penalty ($-0.66$ marks per wrong answer), question navigation palette, and comprehensive diagnostic scorecards.

### 5. 🗂️ GS-1 & CSAT Micro-Syllabus Tracker
- 37 foundational topics broken down into **180+ micro-concepts**.
- Tracks **1st Round (Reading)**, **2nd Round (Notes Consolidation)**, and **3rd Round (Active Recall Testing)** with persistent offline progress saving.

### 6. ⚔️ 1v1 Aspirant Speed Duels & All-India Rankings
- Fast 5-question rapid battle arena against other civil services aspirants.
- Live simulated All-India Rank (AIR) and historical Prelims general cutoff probability predictor.

### 8. ⚡ Automated 20-Question Daily Current Affairs AI Pipeline
- **2-Tier Architecture**: Standard Set 1 (Q1–Q10) and Extended Editorial Dossier Set 2 (Q11–Q20) with on-demand expansion.
- **Automated Cloud Synthesis**: Powered by a daily 7:00 AM IST Cron (`/api/daily-ca/cron`) leveraging **Google Gemini AI** and **OpenAI (GPT-4o-mini)** with verified multi-source editorial fallbacks (The Hindu, Indian Express, PIB, Down To Earth, PRS India).
- **Exact Official Citations**: Book/Ministry name, edition, chapter, reference page ID, and key excerpt for every question.

### 9. 🔔 Progressive Web App (PWA) & Daily Push Notifications
- Installable on Android, iOS, and Desktop as a standalone native app (`/manifest.json`).
- Morning 07:30 AM IST Daily Push Notifications via background Service Worker (`/sw.js`) to alert aspirants the moment today's 20 MCQs are ready.

### 10. 👤 Comprehensive Aspirant Profile & Academic Dossier (`/profile`)
- Manage **Full Name**, **DOB**, **Home Town/State**, **Examination Medium** (English/Hindi).
- Track **Target UPSC Year** (2025–2030), **Mains Optional Subject**, **Attempt Count**, and **Reservation Category**.
- Academic credentials: **Graduation Degree, College, City, Passing Year** and **Post-Graduation (Masters/PhD)**.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server Actions & Edge Route Handlers) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode & Type Safety) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + Custom Liquid-Glass Design System |
| **AI Synthesis** | [Google Gemini 1.5](https://aistudio.google.com/) + [OpenAI GPT-4o](https://platform.openai.com/) |
| **PWA & Notifications** | W3C Service Worker API + Web Push API + Web App Manifest |
| **Database & Auth** | [Supabase](https://supabase.com/) (Cloud PostgreSQL, RLS Security Policies, Auth) |
| **Scheduled Automation** | Vercel Cron (`30 1 * * *` UTC) + GitHub Actions Daily Workflow |

---

## 📂 Project Architecture

```
UPSCSphere/
├── app/
│   ├── about/             # Mission, Vision & Platform Values
│   ├── api/
│   │   └── daily-ca/      # Serverless API & Cron Automation Route Handlers
│   ├── auth/              # Sign-In, Sign-Up, Magic Link & Password Reset
│   ├── contact/           # Interactive Aspirant Contact Desk
│   ├── daily-ca/          # 20-Question Daily Current Affairs Hub & Quiz Runner
│   ├── duel/              # 1v1 Live Aspirant Speed Duel Arena
│   ├── how-to-use/        # Comprehensive 6-Step Platform Walkthrough
│   ├── leaderboard/       # All-India Aspirant Leaderboard & Percentiles
│   ├── privacy-policy/    # Zero-Ad & Transparent Privacy Policy
│   ├── profile/           # Aspirant Profile Dashboard & Academic Tracker
│   ├── pyq/               # 12-Year Official PYQ Archive (2015–2026)
│   ├── quiz/              # Custom Mock Generator & Diagnostic Scorecards
│   ├── revision/          # Spaced Repetition & Bookmarks Vault
│   ├── syllabus/          # GS-1 & CSAT Micro-Topic Checklist Tracker
│   ├── terms/             # Fair Use Educational Terms
│   └── globals.css        # Liquid-Glass Design Tokens & Tricolour Animations
├── components/
│   ├── DailyCANotificationBell.tsx # Push Notification Bell & Daily Reminder
│   ├── Footer.tsx         # Liquid Glass Footer with Links & Socials
│   ├── Navbar.tsx         # Fixed Navigation Header with Countdown & Streak
│   └── Quiz/              # OptionButton, QuestionPalette, Timer, Feedback Banner
├── lib/
│   ├── authContext.tsx    # Supabase Auth Provider & Profile State Sync
│   ├── dailyCAGenerator.ts# Dual-AI & Editorial Daily MCQ Synthesis Engine
│   ├── notificationManager.ts # PWA & Push Notification Lifecycle Manager
│   ├── questionLoader.ts  # Dynamic Slicing & Exam Question Loader
│   ├── supabaseClient.ts  # Supabase Cloud Client Initializer
│   └── types.ts           # Unified TypeScript Data Contracts
├── public/
│   ├── manifest.json      # PWA App Manifest & Launch Shortcuts
│   ├── sw.js              # Service Worker for Offline Caching & Push Alerts
│   └── emblem.png         # State Emblem of India Graphic Asset
└── supabase_schema.sql    # Complete Idempotent PostgreSQL Database Schema
```

---

## ⚡ Quick Start & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/utkrashtkumar/UPSCSphere.git
cd UPSCSphere
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
CRON_SECRET=your_random_secret_token_here
GEMINI_API_KEY=your_gemini_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Setup Supabase Database
Run [`supabase_schema.sql`](./supabase_schema.sql) in your Supabase SQL Editor.

### 5. Run the Development Server
```bash
npm run dev -- -H 0.0.0.0 -p 3000
```
Open [**http://localhost:3000**](http://localhost:3000) on your machine or access on your local network on mobile!

---

## 👨‍💻 Author & Connect

Developed with ❤️ for Civil Services Aspirants across Bharat 🇮🇳

* **Developer**: **Utkrasht Kumar**
* **Repository**: [github.com/utkrashtkumar/UPSCSphere](https://github.com/utkrashtkumar/UPSCSphere)
* **Email**: [`utkrashtkumar@gmail.com`](mailto:utkrashtkumar@gmail.com)
* **LinkedIn**: [linkedin.com/in/utkrashtkumar](https://www.linkedin.com/in/utkrashtkumar/)
* **X (Twitter)**: [x.com/utkrashtkumar](https://x.com/utkrashtkumar)
* **Instagram**: [instagram.com/utkrashtkumarr](https://www.instagram.com/utkrashtkumarr/)

---

## 📄 License & Disclaimer
This project is licensed under the [MIT License](./LICENSE).

*Disclaimer: UPSCSphere is an independent open educational portal and is not officially affiliated with or endorsed by the Union Public Service Commission (UPSC) or the Government of India.*

