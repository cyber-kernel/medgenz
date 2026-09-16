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
  MessageSquare
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
    <aside className="lg:sticky lg:top-28 space-y-4">

      {/* 1. EXPERT CONSULTATION FORM - Professional & Dense */}
      <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden group border border-white/5">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-600 rounded-full blur-[60px] opacity-10 -mr-8 -mt-8" />

        <div className="relative z-10 mb-4">
          <div className="flex items-center gap-2.5 mb-1.5">
            <MessageSquare className="w-5 h-5 text-brand-500" />
            <h3 className="text-xl font-black uppercase tracking-tighter">Expert <span className="text-brand-500">Guidance</span></h3>
          </div>
          <p className="text-slate-400 text-[10px] font-light leading-snug">
            Professional consultation for your hospital infrastructure projects.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 relative z-10">
          <div className="relative group/field">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/field:text-brand-500 transition-colors" />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-3.5 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-3.5 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <input
            type="text"
            placeholder="Hospital / Company"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-3.5 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600"
          />

          <textarea
            placeholder="Describe your requirements..."
            required
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full h-16 bg-white/5 border border-white/10 rounded-lg p-3.5 text-sm outline-none focus:border-brand-500 transition-all placeholder:text-slate-600 resize-none"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-brand-600 text-white font-black uppercase tracking-widest text-[11px] py-4 rounded-lg shadow-lg shadow-brand-600/20 hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2"
          >
            {status === 'loading' ? 'Processing...' : status === 'success' ? 'Request Sent!' : (
              <>Submit Request <Send className="w-3.5 h-3.5" /></>
            )}
          </button>
        </form>
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
                cat === category
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
