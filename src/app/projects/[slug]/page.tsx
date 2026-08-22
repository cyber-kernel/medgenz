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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
  });

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.metaTitle || project.title} | MedGenz Projects`,
    description: project.metaDescription || project.brief,
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
  const highlights = (project.highlights as string[]) || [];
  const specs = (project.specs as {label: string, value: string}[]) || [];

  return (
    <div className="pt-20 font-inter bg-white">
      {/* 1. PROJECT HERO */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        {project.heroImage && (
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src={project.heroImage} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950/60" />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-brand-400 font-bold uppercase tracking-widest text-[10px] mb-12 hover:gap-4 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
                {project.service && (
                  <span className="bg-brand-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest">
                      {project.service}
                  </span>
                )}
                {project.location && (
                  <span className="flex items-center gap-1.5 text-slate-300 text-[10px] font-bold tracking-widest">
                      <MapPin className="w-3 h-3 text-brand-500" /> {project.location}
                  </span>
                )}
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-brand-500 text-xl md:text-2xl font-bold tracking-widest">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Content */}
            <div className="lg:col-span-8 space-y-16">
              {project.brief && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                          <FileText className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Project <span className="text-brand-600">Brief</span></h2>
                  </div>
                  <div
                    className="prose prose-slate max-w-none text-slate-500 text-xl leading-relaxed font-light"
                    dangerouslySetInnerHTML={{ __html: project.brief }}
                  />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-12">
                 {project.challenge && (
                   <div className="space-y-6">
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2">
                          <Zap className="w-5 h-5 text-brand-600" /> The Challenge
                      </h3>
                      <div
                        className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-light"
                        dangerouslySetInnerHTML={{ __html: project.challenge }}
                      />
                   </div>
                 )}
                 {project.solution && (
                   <div className="space-y-6">
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-green-600" /> Our Solution
                      </h3>
                      <div
                        className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-light"
                        dangerouslySetInnerHTML={{ __html: project.solution }}
                      />
                   </div>
                 )}
              </div>

              {highlights.length > 0 && (
                <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 space-y-10">
                   <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Technical <span className="text-brand-600">Highlights</span></h3>
                   <div className="grid md:grid-cols-2 gap-8">
                      {highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-4">
                              <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                                  <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-slate-700 font-bold uppercase tracking-tight text-sm leading-tight">{h}</span>
                          </div>
                      ))}
                   </div>
                </div>
              )}
            </div>

            {/* Right Sidebar - Specs */}
            <aside className="lg:col-span-4 space-y-10">
                {specs.length > 0 && (
                  <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 rounded-full blur-[80px] opacity-20 -mr-10 -mt-10" />
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-8 relative z-10 border-b border-white/10 pb-4">Engineering Specs</h3>
                      <div className="space-y-6 relative z-10">
                          {specs.map((spec, i) => (
                              <div key={i} className="space-y-1">
                                  <div className="text-[10px] font-black text-brand-500 uppercase tracking-widest">{spec.label}</div>
                                  <div className="text-lg font-bold text-slate-100">{spec.value}</div>
                              </div>
                          ))}
                      </div>
                  </div>
                )}

                <div className="bg-brand-50 p-10 rounded-[2.5rem] border border-brand-100 space-y-8">
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Need a Similar Setup?</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                        We provide End to End turnkey solutions tailored to your facility's specific clinical demands.
                    </p>
                    <Link href="/contact" className="block w-full bg-slate-900 text-white text-center py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-600 transition-all shadow-xl shadow-brand-600/20">
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
