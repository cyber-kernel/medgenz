"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  Settings,
  ChevronRight,
  Plus,
  Trash2,
  Zap,
  ShieldCheck,
  MapPin,
  RefreshCcw,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Trash
} from "lucide-react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-64 bg-slate-50 animate-pulse rounded-2xl" />
});

interface ProjectEditorProps {
  initialData?: any;
  id?: string;
}

export default function ProjectEditor({ initialData, id }: ProjectEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isDraftLoaded, setIsDraftLoaded] = useState(false);
  const [savingStep, setSavingStep] = useState('');

  // Floating Toolbar State
  const [selectedImage, setSelectedImage] = useState<{ element: HTMLImageElement, section: string } | null>(null);
  const [toolbarPos, setToolbarPos] = useState({ top: 0, left: 0 });

  // Basic Info
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [subtitle, setSubtitle] = useState(initialData?.subtitle || '');
  const [service, setService] = useState(initialData?.service || 'Modular OT');
  const [location, setLocation] = useState(initialData?.location || '');
  const [heroImage, setHeroImage] = useState(initialData?.heroImage || '');
  const [published, setPublished] = useState(initialData?.published || false);

  // Content
  const [brief, setBrief] = useState(initialData?.brief || '');
  const [challenge, setChallenge] = useState(initialData?.challenge || '');
  const [solution, setSolution] = useState(initialData?.solution || '');

  // JSON Fields
  const [highlights, setHighlights] = useState<string[]>(initialData?.highlights || ['', '']);
  const [specs, setSpecs] = useState<{label: string, value: string}[]>(initialData?.specs || [{label: '', value: ''}]);

  // SEO
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || '');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const quillRefs = useRef<Record<string, any>>({});
  const Quill: any = ReactQuill;

  // Persistence: Load Draft
  useEffect(() => {
    const draftKey = `medgenz-project-draft-${id || 'new'}`;
    const savedDraft = localStorage.getItem(draftKey);
    if (savedDraft) {
      try {
        const data = JSON.parse(savedDraft);
        if (!initialData || confirm('Found an unsaved draft. Would you like to restore it?')) {
            setTitle(data.title || '');
            setSlug(data.slug || '');
            setSubtitle(data.subtitle || '');
            setService(data.service || 'Modular OT');
            setLocation(data.location || '');
            setHeroImage(data.heroImage || '');
            setPublished(data.published || false);
            setBrief(data.brief || '');
            setChallenge(data.challenge || '');
            setSolution(data.solution || '');
            setHighlights(data.highlights || ['', '']);
            setSpecs(data.specs || [{label: '', value: ''}]);
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
    const draftKey = `medgenz-project-draft-${id || 'new'}`;
    const timer = setTimeout(() => {
      const data = {
        title, slug, subtitle, service, location, heroImage, published,
        brief, challenge, solution, highlights, specs, metaTitle, metaDescription
      };
      localStorage.setItem(draftKey, JSON.stringify(data));
    }, 1000);
    return () => clearTimeout(timer);
  }, [title, slug, subtitle, service, location, heroImage, published, brief, challenge, solution, highlights, specs, metaTitle, metaDescription, isDraftLoaded, id]);

  // Detect image clicks in editors
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && target.closest('.ql-editor')) {
        const img = target as HTMLImageElement;
        const rect = img.getBoundingClientRect();
        const editorContainer = target.closest('.prose');
        const section = editorContainer?.getAttribute('data-section') || '';

        setSelectedImage({ element: img, section });
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
    const draftKey = `medgenz-project-draft-${id || 'new'}`;
    localStorage.removeItem(draftKey);
  };

  const handleHeroImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setHeroImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const selectLocalImage = (section: string) => {
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
        const quill = quillRefs.current[section]?.getEditor();
        if (quill) {
          const range = quill.getSelection() || { index: quill.getLength() };
          quill.insertEmbed(range.index, 'image', base64);
        }
      };
      reader.readAsDataURL(file);
    };
  };

  const getQuillModules = useMemo(() => (section: string) => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: () => selectLocalImage(section)
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
      let finalHeroImage = heroImage;
      if (heroImage.startsWith('data:image/')) {
        setSavingStep('Uploading banner...');
        finalHeroImage = await uploadImage(heroImage);
      }

      setSavingStep('Uploading content images...');
      const finalBrief = await processContentImages(brief);
      const finalChallenge = await processContentImages(challenge);
      const finalSolution = await processContentImages(solution);

      setSavingStep('Saving to database...');
      const data = {
        title,
        slug,
        subtitle,
        service,
        location,
        heroImage: finalHeroImage,
        brief: finalBrief,
        challenge: finalChallenge,
        solution: finalSolution,
        highlights: highlights.filter(h => h.trim() !== ''),
        specs: specs.filter(s => s.label.trim() !== ''),
        published,
        metaTitle,
        metaDescription
      };

      const url = id ? `/api/projects/${id}` : '/api/projects';
      const method = id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        clearDraft();
        router.push('/admin/projects');
        router.refresh();
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to save project');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during upload or save');
    } finally {
      setLoading(false);
      setSavingStep('');
    }
  };

  const renderRichTextField = (
    section: string,
    value: string,
    onChange: (content: string) => void,
    placeholder: string
  ) => (
    <div className="prose prose-slate max-w-none" data-section={section}>
      <Quill
        ref={(editor: any) => { if (editor) quillRefs.current[section] = editor; }}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={getQuillModules(section)}
        placeholder={placeholder}
        className="min-h-[260px] border-none"
        scrollingContainer="body"
      />
    </div>
  );

  const updateImageStyle = (style: string, value: string) => {
    if (!selectedImage) return;
    const { element, section } = selectedImage;
    const quill = quillRefs.current[section]?.getEditor();
    if (!quill) return;

    // Apply class to the image or its container if needed, but for Quill we can use standard formats
    if (style === 'align') {
      element.className = value === 'left' ? 'ql-image-left' : value === 'right' ? 'ql-image-right' : 'ql-image-center';
    } else if (style === 'width') {
      element.style.width = value;
    }

    // Trigger update
    onChangeHandlers[section](quill.root.innerHTML);
  };

  const removeImage = () => {
    if (!selectedImage) return;
    selectedImage.element.remove();
    onChangeHandlers[selectedImage.section](quillRefs.current[selectedImage.section].getEditor().root.innerHTML);
    setSelectedImage(null);
  };

  const onChangeHandlers: Record<string, (val: string) => void> = {
    brief: setBrief,
    challenge: setChallenge,
    solution: setSolution
  };

  const addHighlight = () => setHighlights([...highlights, '']);
  const removeHighlight = (index: number) => setHighlights(highlights.filter((_, i) => i !== index));
  const updateHighlight = (index: number, val: string) => {
    const newHighlights = [...highlights];
    newHighlights[index] = val;
    setHighlights(newHighlights);
  };

  const addSpec = () => setSpecs([...specs, {label: '', value: ''}]);
  const removeSpec = (index: number) => setSpecs(specs.filter((_, i) => i !== index));
  const updateSpec = (index: number, field: 'label' | 'value', val: string) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = val;
    setSpecs(newSpecs);
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
          <Link href="/admin/projects" className="p-3 bg-white rounded-xl border border-slate-100 text-slate-400 hover:text-slate-900 transition-all shadow-sm">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Link>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
              {id ? 'Edit' : 'Create'} <span className="text-brand-600">Project</span>
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
                <span>{id ? 'Update Project' : 'Publish Case Study'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Editor */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Basic Info */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-8">
             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Project Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Class 100 Modular OT Excellence"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full text-xl font-bold text-slate-900 border-b-2 border-slate-50 focus:border-brand-600 outline-none p-2 transition-all"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Subtitle</label>
                    <input
                        type="text"
                        placeholder="e.g. Turnkey Surgical Infrastructure"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="w-full text-xl font-bold text-slate-900 border-b-2 border-slate-50 focus:border-brand-600 outline-none p-2 transition-all"
                    />
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Location</label>
                    <div className="flex items-center gap-2 border-b-2 border-slate-50 focus-within:border-brand-600 transition-all p-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="e.g. New Delhi, India"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full text-slate-900 outline-none"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Service Category</label>
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full text-slate-900 border-b-2 border-slate-50 focus:border-brand-600 outline-none p-2 transition-all appearance-none cursor-pointer font-bold"
                    >
                        <option>Modular OT</option>
                        <option>MGPS</option>
                        <option>Hospital Furniture</option>
                        <option>IVF Lab</option>
                        <option>Nurse Call</option>
                    </select>
                </div>
             </div>
          </div>

          {/* Section 2: Technical Briefs */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm space-y-10">
             <div className="space-y-4">
                <div className="flex items-center gap-3 border-l-4 border-brand-600 pl-4">
                    <FileText className="w-5 h-5 text-brand-600" />
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">The Project Brief</h3>
                </div>
                {renderRichTextField('brief', brief, setBrief, 'Describe the initial project requirements and context...')}
             </div>

             <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 border-l-4 border-brand-600 pl-4">
                        <Zap className="w-5 h-5 text-brand-600" />
                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">The Challenge</h3>
                    </div>
                    {renderRichTextField('challenge', challenge, setChallenge, 'What were the technical or structural hurdles?')}
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 border-l-4 border-brand-600 pl-4">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">Our Solution</h3>
                    </div>
                    {renderRichTextField('solution', solution, setSolution, 'How did MedGenz engineering solve the problem?')}
                </div>
             </div>
          </div>

          {/* Section 3: Dynamic Highlights & Specs */}
          <div className="grid md:grid-cols-2 gap-12">
             {/* Highlights */}
             <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tighter">Technical Highlights</h3>
                    <button type="button" onClick={addHighlight} className="p-2 bg-brand-50 text-brand-600 rounded-lg hover:bg-brand-600 hover:text-white transition-all">
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
                <div className="space-y-3">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex gap-2">
                            <input
                                type="text"
                                value={h}
                                onChange={(e) => updateHighlight(i, e.target.value)}
                                placeholder="e.g. ISO Class 5 Certified"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 text-sm font-medium border-none outline-none focus:ring-2 focus:ring-brand-600/20"
                            />
                            <button type="button" onClick={() => removeHighlight(i)} className="p-3 text-slate-300 hover:text-red-500 transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
             </div>

             {/* Specs */}
             <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tighter">Engineering Specs</h3>
                    <button type="button" onClick={addSpec} className="p-2 bg-brand-50 text-brand-600 rounded-lg hover:bg-brand-600 hover:text-white transition-all">
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
                <div className="space-y-4">
                    {specs.map((s, i) => (
                        <div key={i} className="flex flex-col gap-2 p-4 bg-slate-50 rounded-2xl relative group">
                            <input
                                type="text"
                                value={s.label}
                                onChange={(e) => updateSpec(i, 'label', e.target.value)}
                                placeholder="Label (e.g. Air Changes)"
                                className="bg-transparent text-[10px] font-black uppercase tracking-widest text-brand-600 outline-none"
                            />
                            <input
                                type="text"
                                value={s.value}
                                onChange={(e) => updateSpec(i, 'value', e.target.value)}
                                placeholder="Value (e.g. 30+ per hour)"
                                className="bg-transparent text-sm font-bold text-slate-900 outline-none"
                            />
                            <button type="button" onClick={() => removeSpec(i)} className="absolute top-2 right-2 p-1 text-slate-200 hover:text-red-500 transition-colors">
                                <Trash2 className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar / Settings */}
        <div className="lg:col-span-4 space-y-8">
           {/* Cover Image */}
           <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                 <h3 className="text-lg font-bold text-slate-900 tracking-tight uppercase">Featured Image</h3>
                 {heroImage && (
                    <button type="button" onClick={() => setHeroImage('')} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                       <Trash2 className="w-4 h-4" />
                    </button>
                 )}
              </div>

              <div
                onClick={() => fileInputRef.current?.click()}
                className={`relative aspect-video rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center cursor-pointer hover:border-brand-400 transition-all overflow-hidden group ${heroImage ? 'border-none' : ''}`}
              >
                {heroImage ? (
                  <>
                    <Image src={heroImage} alt="Project" fill className="object-cover transition-transform group-hover:scale-105" />
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
                 <h3 className="text-lg font-bold tracking-tight uppercase">SEO & Visibility</h3>
              </div>

              <div className="space-y-6">
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
                      placeholder="Brief summary for indexing..."
                    />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </form>
  );
}
