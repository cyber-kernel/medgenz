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
import { isContentEmpty, normalizeRichText } from '@/lib/content-utils';

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
    <div className="pt-24 md:pt-32 font-inter bg-white overflow-x-hidden">
      {/* 1. PROJECT HERO */}
      <section className="relative py-16 md:py-24 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        {project.heroImage && (
          <div className="absolute inset-0 z-0 opacity-70">
            <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/20" />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-brand-400 font-bold uppercase tracking-widest text-[10px] mb-8 md:mb-12 hover:gap-4 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                {project.service && (
                  <span className="bg-brand-600 text-white text-[9px] md:text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest shadow-lg shadow-brand-600/20 uppercase">
                      {project.service}
                  </span>
                )}
                {project.location && (
                  <span className="flex items-center gap-1.5 text-slate-300 text-[9px] md:text-[10px] font-bold tracking-widest bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 uppercase">
                      <MapPin className="w-3 h-3 text-brand-500" /> {project.location}
                  </span>
                )}
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter leading-[1.1] uppercase px-2">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-brand-500 text-sm md:text-lg font-bold tracking-widest bg-brand-500/10 px-4 py-1.5 rounded-xl inline-block uppercase">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 2. PROJECT CONTENT */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="article-content-shell px-6">
          <div className="space-y-16 md:space-y-24">

            {/* Brief Section */}
            {hasBrief && (
              <div className="space-y-8 md:space-y-12 animate-on-scroll is-visible">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-600 shrink-0 shadow-sm border border-brand-100">
                        <FileText className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">Project <span className="text-brand-600">Brief</span></h2>
                    <div className="w-12 h-1.5 bg-brand-600 rounded-full" />
                </div>
                <div
                  className="prose prose-content prose-slate prose-base md:prose-lg lg:prose-xl leading-relaxed font-light text-slate-600 prose-img:rounded-2xl md:prose-img:rounded-3xl prose-img:shadow-2xl prose-strong:text-slate-900 prose-strong:font-black prose-headings:uppercase prose-headings:tracking-tighter text-left"
                  dangerouslySetInnerHTML={{ __html: normalizeRichText(project.brief) }}
                />
              </div>
            )}

            {/* Challenge & Solution Section */}
            {(hasChallenge || hasSolution) && (
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                 {hasChallenge && (
                   <div className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3 justify-center md:justify-start">
                          <Zap className="w-6 h-6 text-brand-600" /> The Challenge
                      </h3>
                      <div
                        className="prose prose-content prose-slate text-slate-600 leading-relaxed font-light text-base md:text-lg"
                        dangerouslySetInnerHTML={{ __html: normalizeRichText(project.challenge) }}
                      />
                   </div>
                 )}
                 {hasSolution && (
                   <div className="space-y-6 bg-green-50/30 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3 justify-center md:justify-start">
                          <ShieldCheck className="w-6 h-6 text-green-600" /> Our Solution
                      </h3>
                      <div
                        className="prose prose-content prose-slate text-slate-600 leading-relaxed font-light text-base md:text-lg"
                        dangerouslySetInnerHTML={{ __html: normalizeRichText(project.solution) }}
                      />
                   </div>
                 )}
              </div>
            )}

            {/* Highlights Section */}
            {highlights.length > 0 && (
              <div className="bg-slate-950 p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-white/5 space-y-10 md:space-y-12 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600 rounded-full blur-[120px] opacity-10 -mr-20 -mt-20 group-hover:opacity-20 transition-opacity" />
                 <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter relative z-10 text-center">Technical <span className="text-brand-500">Highlights</span></h3>
                 <div className="grid sm:grid-cols-2 gap-6 md:gap-8 relative z-10">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-all">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-brand-600/20">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <span className="text-slate-300 font-bold uppercase tracking-tight text-xs md:text-sm leading-snug">{h}</span>
                        </div>
                    ))}
                 </div>
              </div>
            )}

            {/* Specs Section - Moved here from sidebar */}
            {specs.length > 0 && (
              <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] text-slate-900 border border-slate-100 shadow-sm relative overflow-hidden group">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-10 border-b-2 border-brand-600/20 pb-6 text-center">Engineering Specs</h3>
                  <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                      {specs.map((spec, i) => (
                          <div key={i} className="space-y-2 group/item text-center sm:text-left">
                              <div className="text-xs font-black text-brand-600 uppercase tracking-widest group-hover/item:text-brand-700 transition-colors">{spec.label}</div>
                              <div className="text-xl font-bold text-slate-900">{spec.value}</div>
                          </div>
                      ))}
                  </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
