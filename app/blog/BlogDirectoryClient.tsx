'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  HelpCircle,
  FileText
} from 'lucide-react';
import { BlogPost } from '@/data/blogData';

interface Props {
  posts: BlogPost[];
}

export default function BlogDirectoryClient({ posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Polity', 'Economy', 'Environment', 'Strategy'];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = posts[0];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-10 max-w-6xl mx-auto">
      
      {/* 1. Header Hero Banner */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border-orange-500/30 shadow-xl space-y-4 relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30 shrink-0">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-black border border-emerald-500/20 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>High-Yield Revision &amp; Concepts</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              UPSC Prelims Knowledge Hub
            </h1>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Deep-dive study guides curated specifically for UPSC Civil Services Prelims. Each article features <strong>concise takeaways</strong>, <strong>standard textbook citations</strong> (M. Laxmikanth, NCERT, Spectrum), and <strong>embedded practice questions</strong> from official past papers.
        </p>

        {/* Search & Category Filter Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. Fundamental Rights, Ramsar, Monetary Policy, Elimination)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Featured Masterclass Article (Shown when no search query and 'All' category) */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <span>Featured Masterclass Guide</span>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block liquid-glass-card rounded-3xl p-6 sm:p-8 border border-orange-500/30 hover:border-orange-500 transition-all hover:scale-[1.005] group shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-black uppercase">
                  {featuredPost.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredPost.readTime}</span>
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Updated: {featuredPost.lastUpdated}
                </span>
              </div>

              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                <span>Read Full Article &amp; Solve MCQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                {featuredPost.description}
              </p>
            </div>

            {/* Quick Takeaways Snapshot */}
            <div className="mt-5 p-4 rounded-2xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/20 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                <span>Core Takeaways Snapshot</span>
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                {featuredPost.takeaways.slice(0, 2).map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="line-clamp-2">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </section>
      )}

      {/* 3. Article Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-orange-500" />
            <span>All High-Yield Guides ({filteredPosts.length})</span>
          </h2>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="liquid-glass-card rounded-3xl p-12 text-center space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base">No Articles Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No articles matched your search query &ldquo;{searchQuery}&rdquo;. Try searching for general keywords like &ldquo;Polity&rdquo;, &ldquo;Economy&rdquo;, or &ldquo;Environment&rdquo;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="liquid-glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/5 hover:border-orange-500/40 transition-all hover:scale-[1.01] flex flex-col justify-between space-y-4 group shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-400 text-[11px] font-black uppercase border border-orange-500/20">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400">
                    <span>{post.relatedQuestionIds.length} Linked PYQs</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
