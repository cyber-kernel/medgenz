'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  ChevronRight,
  ListTree
} from 'lucide-react';

interface TableOfContentsItem {
  id: string;
  label: string;
  level: number;
}

interface BlogSidebarProps {
  categories: string[];
  allCategories: string[];
  tableOfContents: TableOfContentsItem[];
}

export default function BlogSidebar({ categories, allCategories, tableOfContents }: BlogSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28 space-y-4">

      {/* 1. TABLE OF CONTENTS */}
      <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white shadow-xl">
        <div className="mb-4 flex items-center gap-2.5">
          <ListTree className="h-5 w-5 text-brand-500" />
          <h3 className="text-sm font-black uppercase tracking-[0.16em]">On this page</h3>
        </div>
        {tableOfContents.length > 0 ? (
          <nav aria-label="Table of contents">
            <ol className="space-y-1.5">
              {tableOfContents.map((item, index) => (
                <li key={item.id} style={{ paddingLeft: `${Math.max(0, item.level - 2) * 0.75}rem` }}>
                  <a
                    href={`#${item.id}`}
                    className="flex gap-2 rounded-lg px-2.5 py-2 text-[11px] font-bold leading-snug text-slate-300 transition-colors hover:bg-white/10 hover:text-brand-400"
                  >
                    <span className="shrink-0 text-brand-500">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : (
          <p className="text-xs leading-relaxed text-slate-400">Explore the article below.</p>
        )}
      </div>

      {/* 2. DIRECT CONTACT - Bold & Clear */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm group hover:shadow-md transition-all">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-tighter mb-4 flex items-center gap-2">
          <div className="w-1.5 h-4 bg-brand-600 rounded-full" />
          Direct Contact
        </h3>

        <div className="space-y-4">
          <a href="tel:+919716412630" className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover/item:bg-brand-600 group-hover/item:text-white transition-all border border-brand-100/50">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Call for Quote</div>
              <div className="text-base font-bold text-slate-900 tracking-tight">+91 97164 12630</div>
            </div>
          </a>

          <a href="mailto:sales@medgenz.com" className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all border border-blue-100/50">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Email Inquiry</div>
              <div className="text-base font-bold text-slate-900 tracking-tight">sales@medgenz.com</div>
            </div>
          </a>
        </div>
      </div>

      {/* 3. CATEGORIES - Bold List */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-tighter mb-4 flex items-center gap-2">
          <div className="w-1.5 h-4 bg-brand-600 rounded-full" />
          Explore Topics
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {allCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blogs?category=${encodeURIComponent(cat)}`}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider ${
                categories.includes(cat)
                ? 'bg-brand-50 border-brand-200 text-brand-600 shadow-sm'
                : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:border-brand-500 hover:text-brand-600 hover:shadow-sm'
              }`}

            >
              <span>{cat}</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
