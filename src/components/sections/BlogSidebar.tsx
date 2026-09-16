'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  User,
  Building,
  Send,
  ChevronRight,
  MessageSquare,
  Clock
} from 'lucide-react';

interface BlogSidebarProps {
  category: string;
  tags: string[];
  allCategories: string[];
}

export default function BlogSidebar({ category, tags, allCategories }: BlogSidebarProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <aside className="space-y-3 lg:sticky lg:top-28">

      {/* 1. EXPERT CONSULTATION FORM - Ultra Compact */}
      <div className="bg-slate-900 rounded-2xl p-4 text-white shadow-xl relative overflow-hidden group border border-white/5">
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-600 rounded-full blur-[50px] opacity-10 -mr-6 -mt-6" />

        <div className="relative z-10 mb-3">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="w-4 h-4 text-brand-500" />
            <h3 className="text-base font-black uppercase tracking-tighter">Expert <span className="text-brand-500">Guidance</span></h3>
          </div>
          <p className="text-slate-400 text-[9px] font-light leading-tight">
            Need advice? Request a professional consultation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 relative z-10">
          <div className="relative group/field">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500 group-focus-within/field:text-brand-500 transition-colors" />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-8 pr-3 text-[10px] outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-[10px] outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-[10px] outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <input
            type="text"
            placeholder="Hospital / Company"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-[10px] outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
          />

          <textarea
            placeholder="Requirements..."
            required
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full h-14 bg-white/5 border border-white/10 rounded-md p-2.5 text-[10px] outline-none focus:border-brand-500 transition-all placeholder:text-slate-600 resize-none"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-brand-600 text-white font-black uppercase tracking-widest text-[8px] py-3 rounded-md shadow-lg shadow-brand-600/20 hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2"
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : (
              <>Submit Request <Send className="w-2.5 h-2.5" /></>
            )}
          </button>
        </form>
      </div>

      {/* 2. DIRECT CONTACT CARD - Ultra Compact */}
      <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm group hover:shadow-md transition-all">
        <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-tighter mb-2 flex items-center gap-1.5">
          <div className="w-0.5 h-3 bg-brand-600 rounded-full" />
          Direct Contact
        </h3>

        <div className="grid grid-cols-1 gap-1.5 relative z-10">
          <a href="tel:+919716412630" className="flex items-center gap-2.5 p-1.5 rounded-lg bg-slate-50 hover:bg-brand-50 transition-colors group/item">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-brand-600 shadow-sm border border-slate-100 group-hover/item:bg-brand-600 group-hover/item:text-white transition-all">
              <Phone className="w-3 h-3" />
            </div>
            <div>
              <div className="text-[6px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Call</div>
              <div className="text-[9px] font-bold text-slate-900">+91 97164 12630</div>
            </div>
          </a>

          <a href="mailto:sales@medgenz.com" className="flex items-center gap-2.5 p-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors group/item">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
              <Mail className="w-3 h-3" />
            </div>
            <div>
              <div className="text-[6px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Email</div>
              <div className="text-[9px] font-bold text-slate-900">sales@medgenz.com</div>
            </div>
          </a>
        </div>
      </div>

      {/* 3. CATEGORIES - Compressed List */}
      <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm">
        <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-tighter mb-2 flex items-center gap-1.5">
          <div className="w-0.5 h-3 bg-brand-600 rounded-full" />
          Categories
        </h3>
        <div className="grid grid-cols-1 gap-1">
          {allCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blogs?category=${encodeURIComponent(cat)}`}
              className={`flex items-center justify-between px-2 py-1 rounded border transition-all text-[8px] font-bold uppercase tracking-wider ${
                cat === category
                ? 'bg-brand-50 border-brand-200 text-brand-600'
                : 'bg-slate-50 border-slate-50 text-slate-500 hover:bg-white hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              <span>{cat}</span>
              <ChevronRight className="w-2.5 h-2.5 opacity-30" />
            </Link>
          ))}
        </div>
      </div>

      {/* 4. TAGS - Minimized */}
      {tags.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm">
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 6).map((tag) => (
              <Link
                key={tag}
                href={`/blogs?tag=${encodeURIComponent(tag)}`}
                className="px-2 py-0.5 bg-slate-50 border border-slate-50 rounded text-[7px] font-bold text-slate-400 uppercase tracking-widest hover:border-brand-400 hover:text-brand-600 transition-all"
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
