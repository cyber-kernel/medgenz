"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import {
  Save,
  Image as ImageIcon,
  X,
  Loader2,
  Globe,
  FileText,
  ChevronRight,
  Sparkles,
  RefreshCcw,
  Trash,
  Trash2
} from "lucide-react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-64 bg-slate-50 animate-pulse rounded-2xl" />
});

// Production-Safe Quill Setup
const setupQuill = () => {
  if (typeof window !== 'undefined' && !(window as any).__medgenz_quill_registered) {
    try {
      const QuillLib = require('react-quill-new');
      const Quill = QuillLib.Quill || QuillLib.default?.Quill;
      if (Quill) {
        const Parchment = Quill.import('parchment');
        const AttributeAttributor = Parchment.AttributeAttributor || (Parchment.Attributor ? Parchment.Attributor.Attribute : null);
        if (AttributeAttributor) {
            Quill.register(new AttributeAttributor('width', 'width', { scope: 3 }), true);
        }
        (window as any).__medgenz_quill_registered = true;
      }
    } catch (e) {
      console.error('Quill config failed', e);
    }
  }
};

interface BlogEditorProps {
  initialData?: any;
  id?: string;
}

export default function BlogEditor({ initialData, id }: BlogEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isDraftLoaded, setIsDraftLoaded] = useState(false);
  const [savingStep, setSavingStep] = useState('');

  // Floating Toolbar State
  const [selectedImage, setSelectedImage] = useState<{ element: HTMLImageElement } | null>(null);
  const [toolbarPos, setToolbarPos] = useState({ top: 0, left: 0 });

  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [category, setCategory] = useState(initialData?.category || 'Healthcare');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || '');
  const [published, setPublished] = useState(initialData?.published || false);
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || '');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<any>(null);
  const QuillComp: any = ReactQuill;

  // Initialize
  useEffect(() => { setupQuill(); }, []);

  // Persistence: Load Draft
  useEffect(() => {
    const draftKey = `medgenz-blog-draft-${id || 'new'}`;
    const savedDraft = localStorage.getItem(draftKey);
    if (savedDraft) {
      try {
        const data = JSON.parse(savedDraft);
        if (!initialData || confirm('Restore unsaved blog draft?')) {
            setTitle(data.title || ''); setSlug(data.slug || ''); setContent(data.content || '');
            setExcerpt(data.excerpt || ''); setCategory(data.category || 'Healthcare');
            setCoverImage(data.coverImage || ''); setPublished(data.published || false);
            setMetaTitle(data.metaTitle || ''); setMetaDescription(data.metaDescription || '');
        }
      } catch (e) {}
    }
    setIsDraftLoaded(true);
  }, [id, initialData]);

  // Persistence: Save Draft
  useEffect(() => {
    if (!isDraftLoaded) return;
    const timer = setTimeout(() => {
      localStorage.setItem(`medgenz-blog-draft-${id || 'new'}`, JSON.stringify({
        title, slug, content, excerpt, category, coverImage, published, metaTitle, metaDescription
      }));
    }, 2000);
    return () => clearTimeout(timer);
  }, [title, slug, content, excerpt, category, coverImage, published, metaTitle, metaDescription, isDraftLoaded, id]);

  // Detect image clicks
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && target.closest('.ql-editor')) {
        const img = target as HTMLImageElement;
        const rect = img.getBoundingClientRect();
        setSelectedImage({ element: img });
        setToolbarPos({ top: rect.top + window.scrollY - 60, left: rect.left + window.scrollX + (rect.width / 2) });
      } else if (!target.closest('.image-action-toolbar')) { setSelectedImage(null); }
    };
    window.addEventListener('mousedown', handleGlobalClick);
    return () => window.removeEventListener('mousedown', handleGlobalClick);
  }, []);

  const handleHeroImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setCoverImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const uploadImage = async (source: string): Promise<string> => {
    if (!source.startsWith('data:image/')) return source;
    const res = await fetch(source);
    const blob = await res.blob();
    const formData = new FormData();
    formData.append('file', new File([blob], "upload.webp", { type: blob.type }));
    const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData });
    const data = await uploadRes.json();
    return data.url;
  };

  const processContentImages = async (html: string): Promise<string> => {
    const div = document.createElement('div'); div.innerHTML = html;
    const images = div.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
      if (images[i].src.startsWith('data:image/')) {
        try { images[i].src = await uploadImage(images[i].src); } catch (e) {}
      }
    }
    return div.innerHTML;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setSavingStep('Processing images...');
    try {
      let finalCoverImage = coverImage;
      if (coverImage && coverImage.startsWith('data:image/')) {
        setSavingStep('Uploading banner...');
        finalCoverImage = await uploadImage(coverImage);
      }
      setSavingStep('Finalizing content...');
      const finalContent = await processContentImages(content);
      setSavingStep('Saving data...');
      const res = await fetch(id ? `/api/blogs/${id}` : '/api/blogs', {
        method: id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, slug, content: finalContent, excerpt, category, coverImage: finalCoverImage, published, metaTitle, metaDescription })
      });
      if (res.ok) { localStorage.removeItem(`medgenz-blog-draft-${id || 'new'}`); router.push('/admin/blogs'); router.refresh(); }
      else { const err = await res.json(); alert(err.error || 'Save failed'); }
    } catch (err) { alert('Error saving blog'); }
    finally { setLoading(false); setSavingStep(''); }
  };

  const updateImageSize = (size: string) => {
    if (!selectedImage) return;
    const img = selectedImage.element;
    const quill = quillRef.current?.getEditor();
    if (!quill) return;

    try {
        const blot = (quill as any).scroll.find(img);
        if (blot) {
            const index = blot.offset(quill.scroll);
            quill.formatText(index, 1, 'width', size);
            setContent(quill.root.innerHTML);
        }
    } catch (e) {
        img.style.width = size;
        setContent(quill.root.innerHTML);
    }
  };

  const removeImage = () => {
    if (!selectedImage) return;
    const img = selectedImage.element;
    const quill = quillRef.current?.getEditor();
    try {
        const blot = (quill as any).scroll.find(img);
        if (blot) {
            const index = blot.offset(quill.scroll);
            quill.deleteText(index, 1);
        } else { img.remove(); }
    } catch (e) { img.remove(); }
    if (quill) setContent(quill.root.innerHTML);
    setSelectedImage(null);
  };

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], ['link', 'image'], ['clean']],
      handlers: { image: () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file'); input.setAttribute('accept', 'image/*'); input.click();
        input.onchange = () => {
          const file = input.files?.[0]; if (!file) return;
          const reader = new FileReader();
          reader.onloadend = () => {
            const q = quillRef.current?.getEditor();
            if (q) {
              const range = q.getSelection() || { index: q.getLength() };
              q.insertEmbed(range.index, 'image', reader.result as string);
            }
          };
          reader.readAsDataURL(file);
        };
      }}
    },
    clipboard: { matchVisual: false }
  }), []);

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-12 pb-32 relative">
      {selectedImage && (
        <div className="image-action-toolbar" style={{ top: toolbarPos.top, left: toolbarPos.left, transform: 'translateX(-50%)' }} onMouseDown={(e) => e.preventDefault()}>
          <button type="button" className="size-btn" onMouseDown={(e) => { e.preventDefault(); updateImageSize('25%'); }}>25%</button>
          <button type="button" className="size-btn" onMouseDown={(e) => { e.preventDefault(); updateImageSize('50%'); }}>50%</button>
          <button type="button" className="size-btn" onMouseDown={(e) => { e.preventDefault(); updateImageSize('100%'); }}>FULL</button>
          <div className="divider" />
          <button type="button" onMouseDown={(e) => { e.preventDefault(); removeImage(); }} className="text-red-400 hover:text-red-500"><Trash className="w-4 h-4" /></button>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs" className="p-3 bg-white rounded-xl border border-slate-100 text-slate-400 hover:text-slate-900 shadow-sm"><ChevronRight className="w-5 h-5 rotate-180" /></Link>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">{id ? 'Edit' : 'Create'} <span className="text-brand-600">Post</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => { if(confirm('Reset draft?')) { localStorage.removeItem(`medgenz-blog-draft-${id || 'new'}`); window.location.reload(); } }} className="p-4 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-red-500 shadow-sm group"><RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" /></button>
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm mr-4">
             <span className={`w-3 h-3 rounded-full ${published ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
             <select value={published ? 'true' : 'false'} onChange={(e) => setPublished(e.target.value === 'true')} className="bg-transparent text-[10px] font-black uppercase tracking-widest outline-none pr-4"><option value="false">Draft</option><option value="true">Live</option></select>
          </div>
          <button type="submit" disabled={loading} className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-500 shadow-xl shadow-brand-600/20 disabled:opacity-50 min-w-[240px] justify-center">
            {loading ? <><Loader2 className="w-5 h-5 animate-spin" /><span className="text-[10px] uppercase">{savingStep}</span></> : <><Save className="w-5 h-5" /><span>{id ? 'Update' : 'Publish'}</span></>}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-8">
             <div className="space-y-2"><label className="text-xs font-black text-slate-400 uppercase tracking-widest">Title</label><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full text-3xl font-black text-slate-900 outline-none border-none focus:ring-0 p-0" required /></div>
             <div className="space-y-4"><label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><FileText className="w-3 h-3" /> Content</label><div className="prose prose-slate max-w-none"><QuillComp ref={quillRef} theme="snow" value={content} onChange={setContent} modules={quillModules} className="min-h-[400px] border-none" scrollingContainer="body" /></div></div>
          </div>
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-6"><div className="flex items-center gap-3 mb-2"><Sparkles className="w-5 h-5 text-brand-600" /><h3 className="text-xl font-bold text-slate-900 uppercase text-xs">Excerpt</h3></div><textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full h-32 p-6 rounded-2xl bg-slate-50 border-none outline-none focus:ring-4 focus:ring-brand-600/10 transition-all font-medium text-slate-600" /></div>
        </div>
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between"><h3 className="text-lg font-bold text-slate-900 uppercase">Cover</h3>{coverImage && (<button type="button" onClick={() => setCoverImage('')} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white"><Trash2 className="w-4 h-4" /></button>)}</div>
              <div onClick={() => fileInputRef.current?.click()} className={`relative aspect-video rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center cursor-pointer hover:border-brand-400 overflow-hidden group ${coverImage ? 'border-none' : ''}`}>{coverImage ? (<><Image src={coverImage} alt="Cover" fill className="object-cover transition-transform group-hover:scale-110" /><div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><span className="text-white text-xs font-bold uppercase tracking-widest">Change</span></div></>) : (<div className="text-center space-y-2"><ImageIcon className="w-8 h-8 text-slate-200 mx-auto" /><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Upload</p></div>)}</div>
              <input type="file" ref={fileInputRef} onChange={handleHeroImageSelect} className="hidden" accept="image/*" />
           </div>
           <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white space-y-8">
              <div className="flex items-center gap-3"><Globe className="w-5 h-5 text-brand-500" /><h3 className="text-lg font-bold uppercase text-xs">SEO</h3></div>
              <div className="space-y-6">
                 <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Category</label><select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-sm font-medium"><option className="bg-slate-900" value="Modular OT">Modular OT</option><option className="bg-slate-900" value="MGPS">MGPS</option><option className="bg-slate-900" value="Nurse Call">Nurse Call</option><option className="bg-slate-900" value="Hospital Furniture">Hospital Furniture</option><option className="bg-slate-900" value="Healthcare">Healthcare</option></select></div>
                 <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Meta Title</label><input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-sm" /></div>
                 <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Meta Description</label><textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} className="w-full h-24 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-sm resize-none" /></div>
              </div>
           </div>
        </div>
      </div>
    </form>
  );
}
