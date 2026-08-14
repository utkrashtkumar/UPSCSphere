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

### 7. 🇮🇳 Liquid-Glass Design & Indian Tricolour Aesthetics
- Running animated Indian Tricolour ambient light stream (Saffron, White, Green, Navy Blue).
- **Default Light Mode** for crisp readability with one-click Dark Mode toggle.
- **Typography Scaler**: Switch between **Lora (Serif)**, **Inter (Sans)**, **JetBrains Mono**, **Roboto**, and **Sora** fonts with real-time text scaling.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Hydration) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode & Type Safety) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + Custom Glassmorphic Design System |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Database & Auth** | [Supabase](https://supabase.com/) (Cloud PostgreSQL, RLS Policies, Real-Time Auth) |
| **Local Storage** | Browser `localStorage` / `sessionStorage` fallback (100% Offline-First) |
| **Visual Effects** | Canvas Confetti & CSS3 GPU-accelerated Keyframe Animations |

---

## 📂 Project Architecture

```
UPSC/
├── app/
│   ├── auth/              # Sign-In, Sign-Up & Password Recovery
│   ├── contact/           # Interactive Contact Us Desk & Social Connect
│   ├── daily-ca/          # Daily 7 AM Editorial & Current Affairs Tests
│   ├── duel/              # 1v1 Aspirant Speed Duel Arena
│   ├── how-to-use/        # Comprehensive 6-Step Platform Walkthrough
│   ├── leaderboard/       # All-India Simulated AIR Rankings
│   ├── privacy-policy/    # Zero-Ad & Transparent Privacy Policy
│   ├── pyq/               # 12-Year Official PYQ Archive (2015–2026)
│   ├── quiz/
│   │   ├── [id]/          # Dynamic Subject Speed Drills
│   │   ├── create/        # Custom Mock & Drill Configurator
│   │   ├── results/[id]/  # Scorecards & Diagnostic Question Review
│   │   └── session/       # Active Test Session & Question Palette
│   ├── revision/          # Spaced Repetition & Bookmarks Vault
│   ├── syllabus/          # Micro-Topic Tracker (GS-1 & CSAT)
│   ├── terms/             # Educational Fair Use Terms & Conditions
│   ├── globals.css        # Liquid-Glass Design Tokens & Tricolour Animations
│   ├── layout.tsx         # Root Layout, Metadata & Ambient Aurora
│   └── page.tsx           # Homepage & Aspirant Launchpad
├── components/
│   ├── Footer.tsx         # 2-Tier Structured Footer with Legal & Social Links
│   ├── Navbar.tsx         # Sticky Header with Prelims Countdown & Streak
│   ├── TypographyPanel.tsx# Font Family & Size Switcher
│   └── Quiz/              # OptionButton, Palette, Timer, Feedback Banner
├── data/
│   ├── dailyCAData.ts     # Curated Daily Editorial CA Questions
│   ├── pyqVault.ts        # 12-Year Official UPSC Prelims Question Bank
│   ├── questionsBank.ts   # 60+ Subject Standard Questions (2019-2024 Patterns)
│   └── syllabusData.ts    # 37 GS-1 & CSAT Micro-Topics Checklist
├── lib/
│   ├── authContext.tsx    # Supabase Authentication State Provider
│   ├── localDB.ts         # Client-Side Database & Local Cache Management
│   ├── questionLoader.ts  # Fisher-Yates Question Filtering & Mock Generator
│   ├── scoringEngine.ts   # UPSC Negative Marking & Cutoff Analysis
│   ├── supabaseClient.ts  # Supabase Cloud Client Initializer
│   ├── themeContext.tsx   # Light/Dark Theme Switcher with Zero-Flash
│   └── typographyContext.tsx # Dynamic Font Scaling Controller
└── supabase_schema.sql    # Complete SQL Database Schema & RLS Policies
```

---

## ⚡ Quick Start & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/upscsphere.git
cd upscsphere
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
```
*(Note: The platform works 100% offline out-of-the-box using local storage even without Supabase keys).*

### 4. Setup Supabase Database (Optional for Cloud Sync)
1. Go to [supabase.com](https://supabase.com) and create a project in the **South Asia (Mumbai)** region.
2. Open the **SQL Editor** in your Supabase dashboard.
3. Copy and run the script in [`supabase_schema.sql`](./supabase_schema.sql).

### 5. Run the Development Server
```bash
npm run dev
```
Open [**http://localhost:3000**](http://localhost:3000) in your browser.

---

## 🔒 Security & Privacy Commitments
- **Zero Ads & Zero Data Selling**: We do not monetize student data or display third-party tracking ads.
- **Client-Side Sovereignty**: All test configs, answers, and bookmarks are preserved in your browser's `localStorage`.
- **Row Level Security (RLS)**: Cloud database tables enforce strict user-level access policies via PostgreSQL RLS.

---

## 👨‍💻 Author & Connect

Developed with ❤️ for Civil Services Aspirants across Bharat 🇮🇳

* **Developer**: **Utkrasht Kumar**
* **Email**: [`utkrashtkumar@gmail.com`](mailto:utkrashtkumar@gmail.com)
* **LinkedIn**: [linkedin.com/in/utkrashtkumar](https://www.linkedin.com/in/utkrashtkumar/)
* **X (Twitter)**: [x.com/utkrashtkumar](https://x.com/utkrashtkumar)
* **Instagram**: [instagram.com/utkrashtkumarr](https://www.instagram.com/utkrashtkumarr/)

---

## 📄 License & Disclaimer
This project is licensed under the [MIT License](./LICENSE).

*Disclaimer: UPSCSphere is an independent open educational portal and is not officially affiliated with or endorsed by the Union Public Service Commission (UPSC) or the Government of India. Official UPSC notifications and papers can be accessed at [upsc.gov.in](https://upsc.gov.in).*
