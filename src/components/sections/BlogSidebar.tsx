'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, User, Building, Send, ChevronRight, MessageSquare } from 'lucide-react';

interface BlogSidebarProps {
  category: string;
  tags: string[];
  allCategories: string[];
}

export default function BlogSidebar({ category, tags, allCategories }: BlogSidebarProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Mocking submission logic
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <aside className="space-y-10 lg:sticky lg:top-32">
      {/* 1. EXPERT CONSULTATION FORM */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group border border-white/5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 rounded-full blur-[80px] opacity-20 -mr-10 -mt-10" />

        <div className="relative z-10 mb-8">
          <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-brand-600/30">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Expert <span className="text-brand-500">Guidance</span></h3>
          <p className="text-slate-400 text-xs font-light leading-relaxed">
            Need specialized advice on your hospital infrastructure project? Request a professional consultation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="relative group/field">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/field:text-brand-500 transition-colors" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="relative group/field">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/field:text-brand-500 transition-colors" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="relative group/field">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/field:text-brand-500 transition-colors" />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="relative group/field">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/field:text-brand-500 transition-colors" />
            <input
              type="text"
              placeholder="Company / Hospital Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-brand-600 text-white font-black uppercase tracking-widest text-[10px] py-5 rounded-xl shadow-xl shadow-brand-600/20 hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2"
          >
            {status === 'loading' ? 'Processing...' : status === 'success' ? 'Request Sent!' : (
              <>Submit Request <Send className="w-3 h-3" /></>
            )}
          </button>
        </form>
      </div>

      {/* 2. CATEGORIES */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-sm">
        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-8 flex items-center gap-3">
          <div className="w-1.5 h-6 bg-brand-600 rounded-full" />
          Categories
        </h3>
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blogs?category=${encodeURIComponent(cat)}`}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all group ${
                cat === category
                ? 'bg-brand-50 border-brand-200 text-brand-600'
                : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:border-brand-500 hover:text-brand-600'
              }`}
            >
              <span className="font-bold text-sm">{cat}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${cat === category ? 'translate-x-1' : 'group-hover:translate-x-1 opacity-40'}`} />
            </Link>
          ))}
        </div>
      </div>

      {/* 3. TAGS */}
      {tags.length > 0 && (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-8 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-brand-600 rounded-full" />
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blogs?tag=${encodeURIComponent(tag)}`}
                className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:border-brand-600 hover:text-brand-600 hover:bg-white transition-all"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
