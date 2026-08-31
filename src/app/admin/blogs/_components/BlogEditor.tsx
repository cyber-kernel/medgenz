"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import {
  Save,
  Eye,
  Image as ImageIcon,
  X,
  Loader2,
  Globe,
  FileText,
  Search,
  Settings,
  ChevronRight,
  Sparkles,
  RefreshCcw,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Trash,
  Trash2
} from "lucide-react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-64 bg-slate-50 animate-pulse rounded-2xl" />
});

interface BlogEditorProps {
  initialData?: any;
  id?: string;
}

export default function BlogEditor({ initialData, id }: BlogEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
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
  const Quill: any = ReactQuill;

  // Persistence: Load Draft
  useEffect(() => {
    const draftKey = `medgenz-blog-draft-${id || 'new'}`;
    const savedDraft = localStorage.getItem(draftKey);
    if (savedDraft) {
      try {
        const data = JSON.parse(savedDraft);
        if (!initialData || confirm('Found an unsaved blog draft. Restore it?')) {
            setTitle(data.title || '');
            setSlug(data.slug || '');
            setContent(data.content || '');
            setExcerpt(data.excerpt || '');
            setCategory(data.category || 'Healthcare');
            setCoverImage(data.coverImage || '');
            setPublished(data.published || false);
            setMetaTitle(data.metaTitle || '');
            setMetaDescription(data.metaDescription || '');
        }
      } catch (e) {
        console.error('Failed to parse draft', e);
      }
    }
    setIsDraftLoaded(true);
  }, [id, initialData]);

  // Persistence: Save Draft
  useEffect(() => {
    if (!isDraftLoaded) return;
    const draftKey = `medgenz-blog-draft-${id || 'new'}`;
    const timer = setTimeout(() => {
      const data = {
        title, slug, content, excerpt, category, coverImage, published,
        metaTitle, metaDescription
      };
      localStorage.setItem(draftKey, JSON.stringify(data));
    }, 1000);
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
        setToolbarPos({
          top: rect.top + window.scrollY - 60,
          left: rect.left + window.scrollX + (rect.width / 2)
        });
      } else if (!target.closest('.image-action-toolbar')) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('mousedown', handleGlobalClick);
    return () => window.removeEventListener('mousedown', handleGlobalClick);
  }, []);

  const clearDraft = () => {
    const draftKey = `medgenz-blog-draft-${id || 'new'}`;
    localStorage.removeItem(draftKey);
  };

  const handleHeroImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const selectLocalImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        const quill = quillRef.current?.getEditor();
        if (quill) {
          const range = quill.getSelection() || { index: quill.getLength() };
          quill.insertEmbed(range.index, 'image', base64);
        }
      };
      reader.readAsDataURL(file);
    };
  };

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: selectLocalImage
      }
    },
    clipboard: { matchVisual: false }
  }), []);

  const uploadImage = async (source: string): Promise<string> => {
    if (!source.startsWith('data:image/')) return source;

    const res = await fetch(source);
    const blob = await res.blob();
    const file = new File([blob], "upload.webp", { type: blob.type });

    const formData = new FormData();
    formData.append('file', file);

    const uploadRes = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    const data = await uploadRes.json();
    return data.url;
  };

  const processContentImages = async (html: string): Promise<string> => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const images = div.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (img.src.startsWith('data:image/')) {
        try {
          const url = await uploadImage(img.src);
          img.src = url;
        } catch (e) {
          console.error('Failed to upload embedded image', e);
        }
      }
    }
    return div.innerHTML;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSavingStep('Processing images...');

    try {
      let finalCoverImage = coverImage;
      if (coverImage.startsWith('data:image/')) {
        setSavingStep('Uploading banner...');
        finalCoverImage = await uploadImage(coverImage);
      }

      setSavingStep('Uploading content images...');
      const finalContent = await processContentImages(content);

      setSavingStep('Saving to database...');
      const data = {
        title,
        slug,
        content: finalContent,
        excerpt,
        category,
        coverImage: finalCoverImage,
        published,
        metaTitle,
        metaDescription
      };

      const url = id ? `/api/blogs/${id}` : '/api/blogs';
      const method = id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        clearDraft();
        router.push('/admin/blogs');
        router.refresh();
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to save blog');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during upload or save');
    } finally {
      setLoading(false);
      setSavingStep('');
    }
  };

  const updateImageStyle = (style: string, value: string) => {
    if (!selectedImage) return;
    const img = selectedImage.element;

    if (style === 'align') {
      img.className = value === 'left' ? 'ql-image-left' : value === 'right' ? 'ql-image-right' : 'ql-image-center';
    } else if (style === 'width') {
      img.style.width = value;
    }

    setContent(quillRef.current.getEditor().root.innerHTML);
  };

  const removeImage = () => {
    if (!selectedImage) return;
    selectedImage.element.remove();
    setContent(quillRef.current.getEditor().root.innerHTML);
    setSelectedImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-12 pb-32 relative">
      {/* Floating Toolbar */}
      {selectedImage && (
        <div
          className="image-action-toolbar"
          style={{
            top: toolbarPos.top,
            left: toolbarPos.left,
            transform: 'translateX(-50%)'
          }}
        >
          <button type="button" onClick={() => updateImageStyle('align', 'left')} title="Align Left"><AlignLeft className="w-4 h-4" /></button>
          <button type="button" onClick={() => updateImageStyle('align', 'center')} title="Align Center"><AlignCenter className="w-4 h-4" /></button>
          <button type="button" onClick={() => updateImageStyle('align', 'right')} title="Align Right"><AlignRight className="w-4 h-4" /></button>
          <div className="divider" />
          <button type="button" className="size-btn" onClick={() => updateImageStyle('width', '25%')}>25%</button>
          <button type="button" className="size-btn" onClick={() => updateImageStyle('width', '50%')}>50%</button>
          <button type="button" className="size-btn" onClick={() => updateImageStyle('width', '100%')}>FULL</button>
          <div className="divider" />
          <button type="button" onClick={removeImage} className="text-red-400 hover:text-red-500"><Trash className="w-4 h-4" /></button>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs" className="p-3 bg-white rounded-xl border border-slate-100 text-slate-400 hover:text-slate-900 transition-all shadow-sm">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Link>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
              {id ? 'Edit' : 'Create'} <span className="text-brand-600">Post</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => { if(confirm('Clear all unsaved changes?')) { clearDraft(); window.location.reload(); } }}
            className="p-4 bg-white rounded-2xl border border-slate-100 text-slate-400 hover:text-red-500 transition-all shadow-sm group"
            title="Reset Draft"
          >
            <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>

          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm mr-4">
             <span className={`w-3 h-3 rounded-full ${published ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
             <select
               value={published ? 'true' : 'false'}
               onChange={(e) => setPublished(e.target.value === 'true')}
               className="bg-transparent text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer pr-4"
             >
               <option value="false">Save as Draft</option>
               <option value="true">Publish Live</option>
             </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/20 disabled:opacity-50 min-w-[240px] justify-center"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-[10px] uppercase tracking-tighter">{savingStep || 'Saving...'}</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>{id ? 'Update Changes' : 'Publish Article'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Editor */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-8">
             <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Article Title</label>
                <input
                  type="text"
                  placeholder="Enter a high-impact heading..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-3xl font-black text-slate-900 placeholder:text-slate-100 outline-none border-none focus:ring-0 p-0"
                  required
                />
             </div>

             <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <FileText className="w-3 h-3" /> Content Body
                </label>
                <div className="prose prose-slate max-w-none">
                  <Quill
                    ref={quillRef}
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    modules={quillModules}
                    placeholder="Start writing your medical engineering insights..."
                    className="min-h-[400px] border-none"
                    scrollingContainer="body"
                  />
                </div>
             </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-6">
             <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-brand-600" />
                <h3 className="text-xl font-bold text-slate-900 tracking-tight uppercase">Short Excerpt</h3>
             </div>
             <textarea
               placeholder="Write a catchy 2-3 sentence summary for the listing cards..."
               value={excerpt}
               onChange={(e) => setExcerpt(e.target.value)}
               className="w-full h-32 p-6 rounded-2xl bg-slate-50 border-none outline-none focus:ring-4 focus:ring-brand-600/10 transition-all font-medium text-slate-600"
             />
          </div>
        </div>

        {/* Sidebar / Settings */}
        <div className="lg:col-span-4 space-y-8">
           {/* Cover Image */}
           <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                 <h3 className="text-lg font-bold text-slate-900 tracking-tight uppercase">Cover Image</h3>
                 {coverImage && (
                    <button type="button" onClick={() => setCoverImage('')} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                       <Trash2 className="w-4 h-4" />
                    </button>
                 )}
              </div>

              <div
                onClick={() => fileInputRef.current?.click()}
                className={`relative aspect-video rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center cursor-pointer hover:border-brand-400 transition-all overflow-hidden group ${coverImage ? 'border-none' : ''}`}
              >
                {coverImage ? (
                  <>
                    <Image src={coverImage} alt="Cover" fill className="object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-white text-xs font-bold uppercase tracking-widest">Change Image</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-2">
                     {uploading ? <Loader2 className="w-8 h-8 animate-spin text-brand-600 mx-auto" /> : <ImageIcon className="w-8 h-8 text-slate-200 mx-auto" />}
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Click to upload banner</p>
                  </div>
                )}
              </div>
              <input type="file" ref={fileInputRef} onChange={handleHeroImageSelect} className="hidden" accept="image/*" />
           </div>

           {/* SEO Settings */}
           <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white space-y-8">
              <div className="flex items-center gap-3">
                 <Globe className="w-5 h-5 text-brand-500" />
                 <h3 className="text-lg font-bold tracking-tight uppercase">SEO & Metadata</h3>
              </div>

              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 transition-all text-sm font-medium"
                    >
                      <option className="bg-slate-900" value="Modular OT">Modular OT</option>
                      <option className="bg-slate-900" value="MGPS">MGPS</option>
                      <option className="bg-slate-900" value="Nurse Call">Nurse Call</option>
                      <option className="bg-slate-900" value="Hospital Furniture">Hospital Furniture</option>
                      <option className="bg-slate-900" value="Healthcare">Healthcare</option>
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Meta Title</label>
                    <input
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 transition-all text-sm"
                      placeholder="Google search title..."
                    />
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Meta Description</label>
                    <textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      className="w-full h-24 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 transition-all text-sm resize-none"
                      placeholder="Brief description for search engines..."
                    />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </form>
  );
}
