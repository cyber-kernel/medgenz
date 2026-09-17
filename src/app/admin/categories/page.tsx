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
  Edit2,
  ExternalLink,
  Plus,
  Trash2,
  Save
} from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  categories: string[];
}

interface Category {
  id: string;
  name: string;
  blogs: { position: number; blog: Blog }[];
}

export default function AdminCategoriesPage() {
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => {
        setCategoriesData(data);
        setLoading(false);
      });
  }, []);

  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const createCategory = async () => {
    if (!newCategory.trim()) return;
    const res = await fetch('/api/categories', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: newCategory }) });
    if (res.ok) { setNewCategory(''); setCategoriesData([...categoriesData, { ...(await res.json()), blogs: [] }].sort((a, b) => a.name.localeCompare(b.name))); }
    else alert((await res.json()).error || 'Unable to create category');
  };

  const renameCategory = async (category: Category) => {
    const name = prompt('Rename category', category.name)?.trim();
    if (!name || name === category.name) return;
    const res = await fetch('/api/categories', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: category.id, name }) });
    if (res.ok) setCategoriesData(categoriesData.map((item) => item.id === category.id ? { ...item, name } : item));
    else alert((await res.json()).error || 'Unable to rename category');
  };

  const deleteCategory = async (category: Category) => {
    if (!confirm(`Remove category "${category.name}"? Articles will remain published in their other categories.`)) return;
    const res = await fetch(`/api/categories?id=${category.id}`, { method: 'DELETE' });
    if (res.ok) setCategoriesData(categoriesData.filter((item) => item.id !== category.id));
  };

  const reorderArticles = async (category: Category, index: number, direction: -1 | 1) => {
    const next = [...category.blogs];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    const res = await fetch(`/api/categories/${category.id}/order`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ blogIds: next.map((link) => link.blog.id) }) });
    if (res.ok) setCategoriesData(categoriesData.map((item) => item.id === category.id ? { ...item, blogs: next.map((link, position) => ({ ...link, position })) } : item));
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Category <span className="text-brand-600">Overview</span></h1>
          <p className="text-slate-500 font-medium mt-2">Detailed view of your multi-category content strategy.</p>
        </div>
        <Link href="/admin/blogs/new" className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/20">
          <Plus className="w-5 h-5" /> New Article
        </Link>
      </div>

      <div className="flex gap-3"><input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && createCategory()} placeholder="Create a category" className="flex-1 rounded-2xl border border-slate-100 bg-white px-5 py-4 outline-none focus:ring-4 focus:ring-brand-600/10" /><button onClick={createCategory} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-xs font-black uppercase tracking-widest text-white"><Plus className="w-4 h-4" /> Add</button></div>

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
            {filteredCategories.length} Categories Live
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-8 bg-slate-50/50">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-white rounded-3xl animate-pulse border border-slate-100" />
            ))
          ) : filteredCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 uppercase tracking-tight text-lg leading-none">{category.name}</h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1.5">{category.blogs.length} Linked Blogs</p>
                  </div>
                </div>
                <div className="flex gap-1"><button onClick={() => renameCategory(category)} className="p-2 text-slate-400 hover:text-blue-600" aria-label="Rename category"><Edit2 className="w-4 h-4" /></button><button onClick={() => deleteCategory(category)} className="p-2 text-slate-400 hover:text-red-600" aria-label="Delete category"><Trash2 className="w-4 h-4" /></button></div>
              </div>

              <div className="p-4 space-y-1 flex-grow overflow-y-auto max-h-60">
                {category.blogs.map((link, index) => (
                  <Link
                    key={link.blog.id}
                    href={`/admin/blogs/${link.blog.id}/edit`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <FileText className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                      <span className="text-xs font-bold text-slate-600 truncate">{index + 1}. {link.blog.title}</span>
                    </div>
                    <span className="flex gap-1" onClick={(e) => e.preventDefault()}><button onClick={() => reorderArticles(category, index, -1)} disabled={index === 0} className="text-xs disabled:opacity-30" aria-label="Move article up">↑</button><button onClick={() => reorderArticles(category, index, 1)} disabled={index === category.blogs.length - 1} className="text-xs disabled:opacity-30" aria-label="Move article down">↓</button></span>
                  </Link>
                ))}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 mt-auto">
                <Link
                  href={`/blogs?category=${encodeURIComponent(category.name)}`}
                  target="_blank"
                  className="w-full py-3.5 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand-600 hover:border-brand-500 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  View Public Filter <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}

          {!loading && filteredCategories.length === 0 && (
             <div className="col-span-full py-20 text-center text-slate-400 font-bold uppercase tracking-widest">
                No categories found.
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
