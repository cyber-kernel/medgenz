"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
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
import ReactCrop, { type Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-64 bg-slate-50 animate-pulse rounded-2xl" />
});

const createCroppedImage = async (source: string, crop: Crop): Promise<string> => {
  const image = new window.Image();
  image.crossOrigin = 'anonymous';
  image.src = source;
  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = reject;
  });

  const sourceCrop = {
    x: (crop.x / 100) * image.naturalWidth,
    y: (crop.y / 100) * image.naturalHeight,
    width: (crop.width / 100) * image.naturalWidth,
    height: (crop.height / 100) * image.naturalHeight,
  };
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(sourceCrop.width));
  canvas.height = Math.max(1, Math.round(sourceCrop.height));
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas is unavailable');
  context.drawImage(image, sourceCrop.x, sourceCrop.y, sourceCrop.width, sourceCrop.height, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/webp', 0.92);
};

// Production-Safe Quill Setup
const setupQuill = () => {
  if (typeof window !== 'undefined' && !(window as any).__medgenz_quill_registered) {
    try {
      console.log('[MedGenz Debug] Initializing Quill Engine (Blog)...');
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
    } catch (e) { console.error(e); }
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
  const [cropSource, setCropSource] = useState<string | null>(null);
  const [cropTarget, setCropTarget] = useState<'cover' | 'content' | null>(null);
  const [cropContentTarget, setCropContentTarget] = useState<HTMLImageElement | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: '%', x: 10, y: 10, width: 80, height: 80 });
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);

  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [categories, setCategories] = useState<string>(initialData?.categories?.join(', ') || 'Healthcare');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialData?.categories || ['Healthcare']);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string>(initialData?.tags?.join(', ') || '');
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || '');
  const [published, setPublished] = useState(initialData?.published || false);
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || '');
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>(initialData?.faqs || []);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<any>(null);
  const QuillComp: any = ReactQuill;

  // Initialize
  useEffect(() => { setupQuill(); }, []);

  useEffect(() => {
    fetch('/api/categories').then((res) => res.ok ? res.json() : []).then((data) => {
      setAvailableCategories(data.map((category: { name: string }) => category.name));
    }).catch(() => undefined);
  }, []);

  // Persistence: Load Draft
  useEffect(() => {
    const draftKey = `medgenz-blog-draft-${id || 'new'}`;
    const savedDraft = localStorage.getItem(draftKey);
    if (savedDraft) {
      try {
        const data = JSON.parse(savedDraft);
        if (!initialData || confirm('Restore unsaved blog draft?')) {
            setTitle(data.title || ''); setSlug(data.slug || ''); setContent(data.content || '');
            setExcerpt(data.excerpt || ''); setCategories(data.categories || 'Healthcare'); setSelectedCategories(data.selectedCategories || data.categories?.split(',').map((value: string) => value.trim()).filter(Boolean) || ['Healthcare']);
            setCoverImage(data.coverImage || ''); setPublished(data.published || false);
            setMetaTitle(data.metaTitle || ''); setMetaDescription(data.metaDescription || ''); setFaqs(data.faqs || []);
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
        title, slug, content, excerpt, categories, selectedCategories, coverImage, published, metaTitle, metaDescription, faqs
      }));
    }, 2000);
    return () => clearTimeout(timer);
  }, [title, slug, content, excerpt, categories, selectedCategories, coverImage, published, metaTitle, metaDescription, faqs, isDraftLoaded, id]);

  // Detect image clicks
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && target.closest('.ql-editor')) {
        const img = target as HTMLImageElement;
        const rect = img.getBoundingClientRect();
        setSelectedImage({ element: img });
        setToolbarPos({ top: rect.top + window.scrollY - 60, left: rect.left + window.scrollX + (rect.width / 2) });
      } else if (!target.closest('.image-action-toolbar') && !target.closest('.crop-dialog')) { setSelectedImage(null); }
    };
    window.addEventListener('mousedown', handleGlobalClick);
    return () => window.removeEventListener('mousedown', handleGlobalClick);
  }, []);

  const clearDraft = () => localStorage.removeItem(`medgenz-blog-draft-${id || 'new'}`);

  const handleHeroImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setCoverImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const openCropper = (source: string, target: 'cover' | 'content') => {
    setCropSource(source);
    setCropTarget(target);
    setCropContentTarget(target === 'content' && selectedImage ? selectedImage.element : null);
    setCrop({ unit: '%', x: 10, y: 10, width: 80, height: 80 });
    setAspect(target === 'cover' ? 16 / 9 : undefined);
  };

  const closeCropper = () => {
    setCropSource(null);
    setCropTarget(null);
    setCropContentTarget(null);
  };

  const applyCrop = async () => {
    if (!cropSource || !cropTarget) return;
    try {
      const result = await createCroppedImage(cropSource, crop);
      if (cropTarget === 'cover') {
        setCoverImage(result);
      } else if (cropContentTarget) {
        cropContentTarget.src = result;
        const quill = quillRef.current?.getEditor();
        if (quill) setContent(quill.root.innerHTML);
      }
      closeCropper();
      setSelectedImage(null);
    } catch (error) {
      console.error('Blog image crop failed', error);
      alert('Unable to crop this image. Please try again.');
    }
  };

  const uploadImageToBlob = async (source: string): Promise<string> => {
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
        try { images[i].src = await uploadImageToBlob(images[i].src); } catch (e) {}
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
        finalCoverImage = await uploadImageToBlob(coverImage);
      }
      setSavingStep('Finalizing content...');
      const finalContent = await processContentImages(content);
      setSavingStep('Saving data...');
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
      const categoriesArray = selectedCategories.length ? selectedCategories : ['Healthcare'];
      const res = await fetch(id ? `/api/blogs/${id}` : '/api/blogs', {
        method: id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          content: finalContent,
          excerpt,
          categories: categoriesArray,
          tags: tagsArray,
          coverImage: finalCoverImage,
          published,
          metaTitle,
          metaDescription,
          faqs: faqs.filter((faq) => faq.question.trim() && faq.answer.trim())
        })
      });
      if (res.ok) { clearDraft(); router.push('/admin/blogs'); router.refresh(); }
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
        quill.focus();
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
            quill.focus();
            quill.deleteText(index, 1);
        } else { img.remove(); }
    } catch (e) { img.remove(); }
    if (quill) setContent(quill.root.innerHTML);
    setSelectedImage(null);
  };

  // Stable Image Handler
  const selectLocalImage = useCallback(() => {
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
  }, []);

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [[{ header: [1, 2, 3, false] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], ['link', 'image'], ['clean']],
      handlers: { image: selectLocalImage }
    },
    clipboard: { matchVisual: false }
  }), [selectLocalImage]);

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-12 pb-32 relative">
      {/* Simplified Floating Toolbar */}
      {selectedImage && (
        <div className="image-action-toolbar" style={{ top: toolbarPos.top, left: toolbarPos.left, transform: 'translateX(-50%)' }} onMouseDown={(e) => e.preventDefault()}>
          <button type="button" className="size-btn" onMouseDown={(e) => { e.preventDefault(); updateImageSize('25%'); }}>25%</button>
          <button type="button" className="size-btn" onMouseDown={(e) => { e.preventDefault(); updateImageSize('50%'); }}>50%</button>
          <button type="button" className="size-btn" onMouseDown={(e) => { e.preventDefault(); updateImageSize('100%'); }}>FULL</button>
          <div className="divider" />
          <button type="button" className="size-btn" title="Crop image" onMouseDown={(e) => { e.preventDefault(); openCropper(selectedImage.element.src, 'content'); }}>CROP</button>
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
          <button type="button" onClick={() => { if(confirm('Reset draft?')) { clearDraft(); window.location.reload(); } }} className="p-4 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-red-500 shadow-sm group"><RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" /></button>
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
             <div className="space-y-4"><label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><FileText className="w-3 h-3" /> Content</label><div className="prose prose-slate max-w-none"><QuillComp ref={quillRef} theme="snow" value={content} onChange={setContent} modules={quillModules} className="admin-rich-text-editor border-none" /></div></div>
          </div>
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-6"><div className="flex items-center gap-3 mb-2"><Sparkles className="w-5 h-5 text-brand-600" /><h3 className="text-xl font-bold text-slate-900 uppercase text-xs">Excerpt</h3></div><textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full h-32 p-6 rounded-2xl bg-slate-50 border-none outline-none focus:ring-4 focus:ring-brand-600/10 transition-all font-medium text-slate-600" /></div>
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-5">
            <div className="flex items-center justify-between"><h3 className="text-xl font-bold text-slate-900 uppercase text-xs">Article FAQs</h3><button type="button" onClick={() => setFaqs([...faqs, { question: '', answer: '' }])} className="text-[10px] font-black uppercase tracking-widest text-brand-600">Add FAQ</button></div>
            {faqs.map((faq, index) => <div key={index} className="space-y-3 rounded-2xl bg-slate-50 p-4"><div className="flex gap-2"><input value={faq.question} onChange={(e) => setFaqs(faqs.map((item, i) => i === index ? { ...item, question: e.target.value } : item))} placeholder="Question" className="flex-1 rounded-xl border-none px-4 py-3 text-sm font-bold outline-none" /><button type="button" onClick={() => setFaqs(faqs.filter((_, i) => i !== index))} className="p-2 text-red-400" aria-label="Remove FAQ"><Trash2 className="w-4 h-4" /></button></div><textarea value={faq.answer} onChange={(e) => setFaqs(faqs.map((item, i) => i === index ? { ...item, answer: e.target.value } : item))} placeholder="Answer" className="w-full rounded-xl border-none px-4 py-3 text-sm outline-none" rows={3} /></div>)}
          </div>
        </div>
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between"><h3 className="text-lg font-bold text-slate-900 uppercase">Cover</h3>{coverImage && (<button type="button" onClick={() => setCoverImage('')} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white"><Trash2 className="w-4 h-4" /></button>)}</div>
              <div onClick={() => fileInputRef.current?.click()} className={`relative aspect-video rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center cursor-pointer hover:border-brand-400 overflow-hidden group ${coverImage ? 'border-none' : ''}`}>{coverImage ? (<><Image src={coverImage} alt="Cover" fill className="object-cover transition-transform group-hover:scale-110" /><div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"><button type="button" className="rounded-lg bg-white px-3 py-2 text-[10px] font-black uppercase tracking-widest text-slate-900" onClick={(e) => { e.stopPropagation(); openCropper(coverImage, 'cover'); }}>Crop</button><span className="text-white text-xs font-bold uppercase tracking-widest">Change</span></div></>) : (<div className="text-center space-y-2"><ImageIcon className="w-8 h-8 text-slate-200 mx-auto" /><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Upload</p></div>)}</div>
              <input type="file" ref={fileInputRef} onChange={handleHeroImageSelect} className="hidden" accept="image/*" />
           </div>
           <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white space-y-8">
              <div className="flex items-center gap-3"><Globe className="w-5 h-5 text-brand-500" /><h3 className="text-lg font-bold uppercase text-xs">SEO</h3></div>
              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Categories (select in display order)</label>
                    <div className="space-y-2">{[...new Set([...selectedCategories, ...availableCategories])].map((category) => <label key={category} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2 text-sm"><input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => setSelectedCategories(selectedCategories.includes(category) ? selectedCategories.filter((item) => item !== category) : [...selectedCategories, category])} className="accent-brand-600" />{category}</label>)}</div>
                    <input type="text" value={categories} onChange={(e) => { setCategories(e.target.value); setSelectedCategories(e.target.value.split(',').map((value) => value.trim()).filter(Boolean)); }} placeholder="Add category names, comma separated" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-sm font-medium" />
                    <div className="space-y-1">{selectedCategories.map((category, index) => <div key={`${category}-${index}`} className="flex items-center justify-between rounded-lg bg-brand-600/10 px-3 py-2 text-xs"><span>{index + 1}. {category}</span><span className="flex gap-1"><button type="button" disabled={index === 0} onClick={() => setSelectedCategories(selectedCategories.map((item, i) => i === index - 1 ? selectedCategories[index] : i === index ? selectedCategories[index - 1] : item))} className="px-1 disabled:opacity-30" aria-label="Move category up">↑</button><button type="button" disabled={index === selectedCategories.length - 1} onClick={() => setSelectedCategories(selectedCategories.map((item, i) => i === index ? selectedCategories[index + 1] : i === index + 1 ? selectedCategories[index] : item))} className="px-1 disabled:opacity-30" aria-label="Move category down">↓</button></span></div>)}</div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Tags (Comma Separated)</label>
                    <input
                      type="text"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="e.g. NABH, Sterility, OT Design"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-sm"
                    />
                 </div>
                 <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Meta Title</label><input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-sm" /></div>
                 <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Meta Description</label><textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} className="w-full h-24 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-sm resize-none" /></div>
              </div>
           </div>
        </div>
      </div>

      {cropSource && (
        <div className="crop-dialog fixed inset-0 z-[1100] flex items-center justify-center bg-slate-950/80 p-4" role="dialog" aria-modal="true" aria-label="Crop image">
          <div className="flex max-h-[calc(100vh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><div><h2 className="text-lg font-black uppercase tracking-tight text-slate-900">Crop Image</h2><p className="text-xs text-slate-400">Drag the image or resize the crop handles.</p></div><button type="button" onClick={closeCropper} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900" aria-label="Close crop dialog"><X className="h-5 w-5" /></button></div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-slate-900 p-4"><ReactCrop crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)} aspect={aspect} keepSelection minWidth={80} minHeight={80}><img src={cropSource} alt="Crop preview" className="block max-h-[calc(100vh-14rem)] w-auto max-w-full object-contain" /></ReactCrop></div>
            <div className="flex shrink-0 flex-wrap items-center gap-4 border-t border-slate-100 px-5 py-4"><span className="text-xs font-bold uppercase tracking-wider text-slate-500">Drag the edges or corners to resize</span><label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">Ratio<select value={aspect ?? 'free'} onChange={(e) => setAspect(e.target.value === 'free' ? undefined : Number(e.target.value))} className="rounded-lg border border-slate-200 px-2 py-2 text-slate-900"><option value="free">Free</option><option value={1}>1:1</option><option value={4 / 3}>4:3</option><option value={16 / 9}>16:9</option></select></label><div className="ml-auto flex gap-2"><button type="button" onClick={closeCropper} className="rounded-lg px-4 py-2 text-xs font-bold uppercase text-slate-500 hover:bg-slate-100">Cancel</button><button type="button" onClick={applyCrop} className="rounded-lg bg-brand-600 px-5 py-2 text-xs font-black uppercase text-white hover:bg-brand-700">Apply Crop</button></div></div>
          </div>
        </div>
      )}
    </form>
  );
}
