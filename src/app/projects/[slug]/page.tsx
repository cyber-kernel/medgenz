import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  CheckCircle,
  ArrowLeft,
  MapPin,
  Zap,
  ShieldCheck,
  FileText
} from "lucide-react";
import ECGCTA from '@/components/sections/ECGCTA';
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';
import { isContentEmpty } from '@/lib/content-utils';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
  });

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.metaTitle || project.title} | MedGenz Projects`,
    description: project.metaDescription || project.brief?.replace(/<[^>]*>/g, '').slice(0, 160),
  };
}

export default async function ProjectDeepDive({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
  });

  if (!project || !project.published) {
    notFound();
  }

  // Cast JSON fields
  const highlights = (project.highlights as string[])?.filter(h => h && h.trim() !== '') || [];
  const specs = (project.specs as {label: string, value: string}[])?.filter(s => s.label && s.label.trim() !== '') || [];

  const hasBrief = !isContentEmpty(project.brief);
  const hasChallenge = !isContentEmpty(project.challenge);
  const hasSolution = !isContentEmpty(project.solution);

  return (
    <div className="pt-20 font-inter bg-white overflow-x-hidden">
      {/* 1. PROJECT HERO */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        {project.heroImage && (
          <div className="absolute inset-0 z-0 opacity-70">
            <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/20" />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-brand-400 font-bold uppercase tracking-widest text-[10px] mb-12 hover:gap-4 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 flex-wrap">
                {project.service && (
                  <span className="bg-brand-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest shadow-lg shadow-brand-600/20">
                      {project.service}
                  </span>
                )}
                {project.location && (
                  <span className="flex items-center gap-1.5 text-slate-300 text-[10px] font-bold tracking-widest bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                      <MapPin className="w-3 h-3 text-brand-500" /> {project.location}
                  </span>
                )}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-brand-500 text-xl md:text-2xl font-bold tracking-widest bg-brand-500/10 px-4 py-2 rounded-xl inline-block">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left Content */}
            <div className="lg:col-span-8 space-y-12 md:space-y-20 min-w-0 overflow-hidden">
              {hasBrief && (
                <div className="space-y-8 animate-on-scroll is-visible">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0 shadow-sm border border-brand-100">
                          <FileText className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter">Project <span className="text-brand-600">Brief</span></h2>
                  </div>
                  <div
                    className="prose prose-slate max-w-none prose-xl leading-relaxed font-light text-slate-600 prose-img:rounded-3xl prose-img:shadow-2xl prose-strong:text-slate-900 prose-strong:font-black prose-headings:uppercase prose-headings:tracking-tighter break-words"
                    dangerouslySetInnerHTML={{ __html: project.brief! }}
                  />
                </div>
              )}

              {(hasChallenge || hasSolution) && (
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                   {hasChallenge && (
                     <div className="space-y-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
                            <Zap className="w-5 h-5 text-brand-600" /> The Challenge
                        </h3>
                        <div
                          className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-light text-sm md:text-base break-words"
                          dangerouslySetInnerHTML={{ __html: project.challenge! }}
                        />
                     </div>
                   )}
                   {hasSolution && (
                     <div className="space-y-6 bg-green-50/30 p-8 rounded-[2rem] border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-green-600" /> Our Solution
                        </h3>
                        <div
                          className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-light text-sm md:text-base break-words"
                          dangerouslySetInnerHTML={{ __html: project.solution! }}
                        />
                     </div>
                   )}
                </div>
              )}

              {highlights.length > 0 && (
                <div className="bg-slate-950 p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 space-y-10 shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[100px] opacity-10 -mr-20 -mt-20 group-hover:opacity-20 transition-opacity" />
                   <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter relative z-10">Technical <span className="text-brand-500">Highlights</span></h3>
                   <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                      {highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-all">
                              <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-brand-600/20">
                                  <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-slate-300 font-bold uppercase tracking-tight text-xs leading-snug">{h}</span>
                          </div>
                      ))}
                   </div>
                </div>
              )}
            </div>

            {/* Right Sidebar - Specs */}
            <aside className="lg:col-span-4 space-y-8">
                {specs.length > 0 && (
                  <div className="bg-slate-50 p-10 rounded-[2.5rem] text-slate-900 border border-slate-100 shadow-sm relative overflow-hidden group">
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-8 border-b-2 border-brand-600/20 pb-4">Engineering Specs</h3>
                      <div className="space-y-6">
                          {specs.map((spec, i) => (
                              <div key={i} className="space-y-1 group/item">
                                  <div className="text-[10px] font-black text-brand-600 uppercase tracking-widest group-hover/item:text-brand-700 transition-colors">{spec.label}</div>
                                  <div className="text-lg font-bold text-slate-900">{spec.value}</div>
                              </div>
                          ))}
                      </div>
                  </div>
                )}

                <div className="bg-brand-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-brand-600/20 space-y-8 transform transition-transform hover:-translate-y-1">
                    <h3 className="text-xl font-black uppercase tracking-tighter">Need a Similar Setup?</h3>
                    <p className="text-brand-50 leading-relaxed font-light text-sm">
                        Partner with MedGenz for international-grade Operation Theatres and high-purity clinical zones.
                    </p>
                    <Link href="/contact" className="block w-full bg-slate-900 text-white text-center py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-slate-900/40">
                        Discuss Your Project
                    </Link>
                </div>
            </aside>
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
