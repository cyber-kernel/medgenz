'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Folder,
  ChevronRight,
  FileText,
  Search,
  LayoutGrid,
  List,
  MoreVertical,
  Edit2
} from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  categories: string[];
}

export default function AdminCategoriesPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  // Extract unique categories
  const categoryMap: Record<string, Blog[]> = {};
  blogs.forEach(blog => {
    blog.categories.forEach(cat => {
      if (!categoryMap[cat]) categoryMap[cat] = [];
      categoryMap[cat].push(blog);
    });
  });

  const categories = Object.keys(categoryMap).sort();

  const filteredCategories = categories.filter(cat =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Category <span className="text-brand-600">Overview</span></h1>
          <p className="text-slate-500 font-medium mt-2">Manage and view your blog content by category.</p>
        </div>
        <Link href="/admin/blogs/new" className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-50 transition-all shadow-xl shadow-brand-600/20">
          <Folder className="w-5 h-5" /> New Blog
        </Link>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-600/10 outline-none transition-all font-medium"
            />
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            {filteredCategories.length} Categories Found
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-8 bg-slate-50/50">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-white rounded-3xl animate-pulse border border-slate-100" />
            ))
          ) : filteredCategories.map((cat) => (
            <div key={cat} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 uppercase tracking-tight text-lg leading-none">{cat}</h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1.5">{categoryMap[cat].length} Articles</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-brand-600">
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 space-y-1.5 flex-grow overflow-y-auto max-h-48 scrollbar-hide">
                {categoryMap[cat].slice(0, 5).map(blog => (
                  <Link
                    key={blog.id}
                    href={`/admin/blogs/${blog.id}/edit`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <FileText className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                      <span className="text-xs font-bold text-slate-600 truncate">{blog.title}</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-300 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                  </Link>
                ))}
                {categoryMap[cat].length > 5 && (
                  <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest pt-2">+{categoryMap[cat].length - 5} More Articles</p>
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 mt-auto">
                <Link
                  href={`/blogs?category=${encodeURIComponent(cat)}`}
                  target="_blank"
                  className="w-full py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand-600 hover:border-brand-500 transition-all flex items-center justify-center gap-2"
                >
                  View Live <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
