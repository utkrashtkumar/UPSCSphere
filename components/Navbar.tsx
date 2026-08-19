'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Flame, 
  Calendar, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  LogOut, 
  ChevronDown, 
  Trophy, 
  RotateCcw, 
  User, 
  BookOpen, 
  HelpCircle,
  Zap,
  Award
} from 'lucide-react';
import { useTheme } from '@/lib/themeContext';
import { useAuth } from '@/lib/authContext';
import { isImageUrl } from '@/lib/types';
import TypographyPanel from '@/components/TypographyPanel';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { user, profile, signOut } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    }
    if (userDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [userDropdownOpen]);

  // Calculate days to next upcoming UPSC Prelims 2027 (May 23, 2027)
  const calculateDaysToPrelims = () => {
    const prelimsDate = new Date('2027-05-23T09:30:00');
    const now = new Date();
    const diffTime = prelimsDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const navLinks = [
    { name: 'Custom Mock', href: '/quiz/create' },
    { name: '12-Yr PYQ Vault', href: '/pyq' },
    { name: 'Daily CA', href: '/daily-ca' },
    { name: 'Rewards', href: '/rewards' },
    { name: 'Exam Tracker', href: '/tracker' },
    { name: 'Knowledge Hub', href: '/blog' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Syllabus', href: '/syllabus' },
    { name: '1v1 Duel', href: '/duel' },
    { name: 'Revision', href: '/revision' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-2xl bg-white/95 dark:bg-[#050b14]/95 border-b border-slate-200/80 dark:border-white/10 transition-colors shadow-sm">
      {/* Running Tricolour Ambient Top Stream Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] running-tricolor-line opacity-90" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Left: Indian Tricolour Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-500 shadow-sm group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="UPSCSphere Official Logo"
                width={36}
                height={36}
                className="w-full h-full object-cover rounded-full bg-white dark:bg-slate-900"
                priority
              />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                UPSC<span className="text-orange-500 dark:text-orange-400">Sphere</span>
              </span>
              <span className="hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                Prelims
              </span>
            </div>
          </Link>

          {/* Center: Minimal Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(`${link.href}/`) && link.href !== '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-xl text-[13px] font-medium transition-all ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-400/10 font-bold shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Countdown, Streak, Font Size, Theme, Auth) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Prelims Countdown Chip */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/5 text-xs text-slate-600 dark:text-slate-300 font-medium border border-slate-200/50 dark:border-white/5">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-bold text-slate-900 dark:text-white" suppressHydrationWarning>
                {calculateDaysToPrelims()}d
              </span>
              <span className="text-[11px] opacity-70">to Prelims</span>
            </div>

            {/* Daily Streak Chip */}
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-xs border border-orange-500/20">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span suppressHydrationWarning>{mounted ? (profile?.streakCount ?? 0) : 0}</span>
            </div>

            {/* XP Points Chip (Logged-In Users Only) */}
            {user && (
              <Link
                href="/rewards"
                title="View Aspirant Rewards & Badges Vault"
                className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs border border-amber-500/25 transition-all shadow-xs"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span suppressHydrationWarning>{mounted ? (profile?.xp ?? 0) : 0} XP</span>
              </Link>
            )}

            {/* Typography Font & Size Panel */}
            <TypographyPanel />

            {/* Dark / Light Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-orange-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* User Auth / Profile Dropdown */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-1.5 p-1 pl-1.5 pr-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-left border border-slate-200 dark:border-white/10"
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shadow-sm shrink-0 border border-orange-500/20">
                    {isImageUrl(profile?.avatarUrl || user.avatarUrl) ? (
                      <img
                        src={profile?.avatarUrl || user.avatarUrl}
                        alt={user.name || 'User'}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (profile?.avatarUrl && !isImageUrl(profile.avatarUrl)) ? (
                      <span className="text-[10px] leading-none">{profile.avatarUrl}</span>
                    ) : (
                      <span>{user.name ? user.name.charAt(0).toUpperCase() : 'A'}</span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 hidden md:inline max-w-[100px] truncate">
                    {user.name}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl shadow-xl z-50 animate-slide-up overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-2 space-y-1">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-white/10 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl overflow-hidden bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        {isImageUrl(profile?.avatarUrl || user.avatarUrl) ? (
                          <img
                            src={profile?.avatarUrl || user.avatarUrl}
                            alt={user.name || 'User'}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (profile?.avatarUrl && !isImageUrl(profile.avatarUrl)) ? (
                          <span className="text-base">{profile.avatarUrl}</span>
                        ) : (
                          <span className="text-xs font-black text-orange-600 dark:text-orange-400">
                            {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">{user.name}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{user.email}</div>
                      </div>
                    </div>

                    <Link
                      href="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 transition-colors"
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>My Aspirant Profile</span>
                    </Link>

                    <Link
                      href="/rewards"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs text-amber-700 dark:text-amber-300 hover:bg-amber-500/10 transition-colors font-semibold"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>Rewards &amp; Badges Vault</span>
                    </Link>

                    <Link
                      href="/leaderboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>Nationwide Leaderboard</span>
                    </Link>

                    <Link
                      href="/how-to-use"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                      <span>How to Use Guide</span>
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Contact Support</span>
                    </Link>

                    <div className="pt-1 border-t border-slate-100 dark:border-white/10">
                      <button
                        onClick={async () => {
                          setUserDropdownOpen(false);
                          await signOut();
                          router.push('/auth');
                        }}
                        className="w-full flex items-center gap-2 px-3 py-1.5 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 text-xs font-medium transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth"
                className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-emerald-600 text-white hover:opacity-95 transition-all shadow-sm"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#050b14]/95 backdrop-blur-2xl animate-fade-in space-y-3">
          <div className="flex items-center justify-between py-1 text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-white/5">
            <span>UPSC Prelims: <strong className="text-slate-900 dark:text-white">{calculateDaysToPrelims()} days left</strong></span>
            <span className="text-orange-500 font-semibold">{profile?.streakCount || 5} Day Streak 🔥</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {user ? (
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
              <Link
                href="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-xs border border-orange-500/20"
              >
                My Aspirant Profile
              </Link>
              <button
                onClick={async () => {
                  setMobileMenuOpen(false);
                  await signOut();
                  router.push('/auth');
                }}
                className="px-3 py-2 rounded-xl text-rose-500 bg-rose-500/10 font-bold text-xs"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center rounded-xl bg-gradient-to-r from-orange-500 to-emerald-600 text-white font-bold text-xs shadow-sm"
            >
              Sign In / Create Account
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
