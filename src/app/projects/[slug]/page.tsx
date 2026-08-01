"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowLeft,
  MapPin,
  Settings,
  Activity,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import ECGCTA from '@/components/sections/ECGCTA';

interface ProjectData {
  title: string;
  subtitle: string;
  location: string;
  service: string;
  heroImage: string;
  brief: string;
  challenge: string;
  solution: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

const projectData: Record<string, ProjectData> = {
  'modular-ot-delhi-hospital': {
    title: "Class 100 Modular OT Excellence",
    subtitle: "Turnkey Surgical Infrastructure",
    location: "New Delhi, India",
    service: "Modular OT",
    heroImage: "/images/service assets/mot-page-n-eq-assets/ot-3.webp",
    brief: "A landmark project for a premier multi-specialty hospital in Delhi NCR requiring the construction of two ultra-sterile, Class 100 Modular Operation Theatres from a bare shell.",
    challenge: "The facility required absolute sterility for transplant surgeries, with a strictly defined timeline of 45 days. The existing building structure had low ceiling heights, complicating the installation of massive AHU ducting and LAF plenums.",
    solution: "MedGenz engineered a customized low-profile HVAC ducting network and utilized high-density SS-304 wall panels with antibacterial silicone sealing. We integrated a centralized Surgeon Control Panel to automate the environment monitoring.",
    highlights: [
      "ISO Class 5 / Class 100 Certified Air Quality",
      "Hermetically Sealed Automatic Sliding Doors",
      "Seamless Anti-Static Conductive Flooring",
      "Integrated 4K Surgical Camera Infrastructure"
    ],
    specs: [
      { label: "OT Dimensions", value: "24' x 24' x 10'" },
      { label: "Air Changes", value: "30+ per hour" },
      { label: "Panel Type", value: "SS-304 with PUF Insulation" },
      { label: "Validation", value: "DOP & Particle Count Certified" }
    ]
  },
  'mgps-up-healthcare-network': {
    title: "State-Wide MGPS Infrastructure",
    subtitle: "500-Bed Life Support Network",
    location: "Uttar Pradesh, India",
    service: "MGPS",
    heroImage: "/images/service-images/mgps-product.webp",
    brief: "A massive state-government contract involving the design and execution of a comprehensive Medical Gas Pipeline System for a newly constructed 500-bed regional hospital.",
    challenge: "Managing safe distribution of Oxygen and Medical Air across four separate wings and 12 floors without pressure drops at terminal points. The system required 100% fail-safe redundancy for the manifold room.",
    solution: "We deployed a Fully Automatic Oxygen Control Panel with pneumatic switchover technology. The entire 8,000-meter pipeline was executed using BS EN 13348 medical-grade copper with continuous Nitrogen purging during brazing.",
    highlights: [
      "8,000+ Meters of Medical Grade Copper Piping",
      "Fully Automatic Duplex Manifold System",
      "Digital Area Valve Service Units (AVSU) with Alarms",
      "Custom ICU Bed Head Panels for 50+ Critical Beds"
    ],
    specs: [
      { label: "Pipe Standard", value: "BS EN 13348 / ASTM B819" },
      { label: "Testing Pressure", value: "1.5x Operating (Held for 24h)" },
      { label: "Alarm Connectivity", value: "Integrated BMS/HIS Modbus" },
      { label: "Safety Factor", value: "100% Backup Manifold Redundancy" }
    ]
  },
  'ivf-lab-punjab-clinic': {
    title: "High-Purity IVF Cleanroom Setup",
    subtitle: "Precision Embryology Environment",
    location: "Punjab, India",
    service: "IVF Lab",
    heroImage: "/images/about-us/about-us-assets/ivf-about.webp",
    brief: "Designed and commissioned a state-of-the-art IVF laboratory cleanroom, focusing on absolute air purity and zero Volatile Organic Compound (VOC) contamination.",
    challenge: "Embryos are extremely sensitive to microscopic toxins. Standard construction materials outgas VOCs, which can lead to cycle failure. The lab required constant temperature stability within ±0.5°C.",
    solution: "MedGenz utilized VOC-free medical-grade paints and specialized epoxy flooring. We installed a dedicated Treated Fresh Air (TFA) unit with advanced filtration banks to achieve ISO 5 sterile conditions.",
    highlights: [
      "ISO 5 Cleanroom Standard Compliance",
      "Zero VOC Material Construction",
      "Precision Temperature & Humidity Control",
      "Anti-Bacterial UVGI Coil Sterilization"
    ],
    specs: [
      { label: "Filtration", value: "H14 Terminal HEPA (99.997%)" },
      { label: "Cleanroom Grade", value: "Class 10,000 / ISO 7" },
      { label: "VOC Level", value: "< 500 µg/m³ (Strictly Monitored)" },
      { label: "Control System", value: "Digital Environmental Data Logger" }
    ]
  }
};

export default function ProjectDeepDive({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const data = projectData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-20 font-inter bg-white">
      {/* 1. PROJECT HERO */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="absolute inset-0 z-0"
        >
          <Image src={data.heroImage} alt={data.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950/60" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-brand-400 font-bold uppercase tracking-widest text-[10px] mb-12 hover:gap-4 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
                <span className="bg-brand-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest">
                    {data.service}
                </span>
                <span className="flex items-center gap-1.5 text-slate-300 text-[10px] font-bold tracking-widest">
                    <MapPin className="w-3 h-3 text-brand-500" /> {data.location}
                </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
              {data.title}
            </h1>
            <p className="text-brand-500 text-xl md:text-2xl font-bold tracking-widest">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Content */}
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Project <span className="text-brand-600">Brief</span></h2>
                </div>
                <p className="text-slate-500 text-xl leading-relaxed font-light">
                    {data.brief}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2">
                        <Zap className="w-5 h-5 text-brand-600" /> The Challenge
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light">
                        {data.challenge}
                    </p>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-green-600" /> Our Solution
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light">
                        {data.solution}
                    </p>
                 </div>
              </div>

              <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 space-y-10">
                 <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Technical <span className="text-brand-600">Highlights</span></h3>
                 <div className="grid md:grid-cols-2 gap-8">
                    {data.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-slate-700 font-bold uppercase tracking-tight text-sm leading-tight">{h}</span>
                        </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Right Sidebar - Specs */}
            <aside className="lg:col-span-4 space-y-10">
                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 rounded-full blur-[80px] opacity-20 -mr-10 -mt-10" />
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-8 relative z-10 border-b border-white/10 pb-4">Engineering Specs</h3>
                    <div className="space-y-6 relative z-10">
                        {data.specs.map((spec, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-[10px] font-black text-brand-500 uppercase tracking-widest">{spec.label}</div>
                                <div className="text-lg font-bold text-slate-100">{spec.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-brand-50 p-10 rounded-[2.5rem] border border-brand-100 space-y-8">
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Need a Similar Setup?</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                        We provide End to End turnkey solutions tailored to your facility's specific clinical demands.
                    </p>
                    <Link href="/contact" className="block w-full bg-slate-900 text-white text-center py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-600 transition-all shadow-xl shadow-slate-900/20">
                        Discuss Your Project
                    </Link>
                </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[150px] opacity-10 -mr-20 -mt-20 group-hover:opacity-20 transition-opacity" />
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-brand-400 border border-white/10 text-[10px] font-bold uppercase tracking-widest mb-8">Ready to Start?</span>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
              Have a Project <br /><span className="text-brand-500">In Mind?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Whether it's a new facility or upgrading existing infrastructure, MedGenz has the expertise to deliver on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-brand-600 text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/30 transform hover:-translate-y-1"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}

function FileText({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    )
}
