"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle,
  ShieldCheck,
  ChevronRight,
  FileText,
  Zap,
  Activity,
  Layout,
  Settings,
  Monitor,
  AlertTriangle,
  ArrowRight,
  Star,
  ExternalLink,
  Wind,
  Scissors
} from "lucide-react";
import ECGCTA from '@/components/sections/ECGCTA';
import ClientMarquee from '@/components/sections/ClientMarquee';
import Certifications from '@/components/sections/Certifications';

const architecture = [
  {
    category: "Core Partition Hardware",
    badge: "Engineered for Strength",
    items: [
      { name: "Heavy-Duty Aluminum Tracks", slug: "aluminum-tracks" },
      { name: "Silent Glider Hooks", slug: "silent-gliders" },
      { name: "Roof Suspension Systems", slug: "roof-suspensions" }
    ]
  },
  {
    category: "Customized Privacy Solutions",
    badge: "Bespoke Layouts",
    items: [
      { name: "Custom Bends & Layouts", slug: "custom-layouts" },
      { name: "Anti-Microbial Privacy Curtains", slug: "curtains" },
      { name: "Telescopic IV Tracks", slug: "iv-tracks" }
    ]
  }
];

const faqs = [
  {
    q: "What materials are used in your hospital cubicle curtain tracks?",
    a: "Our hospital curtain tracks are manufactured from heavy-duty extruded aluminum alloy. They feature a specialized 50-micron anti-microbial powder coating to actively repel bacteria and maintain strict hygiene standards in critical care areas."
  },
  {
    q: "Do the curtain tracks operate silently?",
    a: "Yes, the system utilizes specialized silent glider hooks made of virgin nylon and delrin materials. Unlike cheap metal rings, our runners move effortlessly within the aluminum channel, ensuring that resting patients are never disturbed by loud grating noises."
  },
  {
    q: "Can you customize the track layout for our hospital beds?",
    a: "Absolutely. We use specialized bending machinery at our manufacturing facility to custom curve the extruded aluminum tracks into perfect L-shapes, U-shapes, or continuous O-shapes. This provides a layout tailored exactly to your ward's architectural floor plan."
  },
  {
    q: "Are the hospital privacy curtains fire-retardant?",
    a: "Yes, we provide premium, chemically treated fire-retardant privacy curtains. Furthermore, the curtains feature an open-mesh top design that complies with international fire safety codes, ensuring ceiling sprinklers can easily penetrate the fabric in case of an emergency."
  },
  {
    q: "How is the curtain track system mounted in hospitals with false ceilings?",
    a: "For facilities with high or false ceilings, we use specialized rigid aluminum suspension drops (bridge supports) that firmly anchor the track directly to the true ceiling slab above, ensuring maximum stability and safety."
  }
];

export default function CurtainTrackHub() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/images/hospital-curtain-track-system/heavy-duty-aluminum-tracks.webp", alt: "Hospital Curtain Track System Installed" },
    { src: "/images/hospital-curtain-track-system/anti-microbial-privacy-curtains.webp", alt: "Anti-Microbial Hospital Curtains" },
    { src: "/images/hospital-curtain-track-system/silent-glider-hooks.webp", alt: "Silent Glider Hooks" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="pt-20 font-inter">
      {/* CLEAN PRODUCT HEADER */}
      <section className="pt-28 pb-8 md:pt-40 md:pb-16 bg-white border-b border-gray-100 uppercase tracking-tighter">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav aria-label="breadcrumb" className="mb-4 md:mb-6">
            <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li><Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li className="text-brand-600 font-bold">Curtain Track System</li>
            </ol>
          </nav>

          <div className="w-full lg:max-w-6xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              Ultimate Patient Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
              Hospital Cubicle Curtain <span className="text-brand-600">Track System</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-xl mb-6 md:mb-8 leading-relaxed normal-case tracking-normal font-light">
              Engineered for smooth gliding and absolute durability. Our anti-microbial aluminum partition tracks ensure strict infection control and total patient privacy in ICUs, emergency rooms, and multi-bed general wards.
            </p>

            <div className="mb-8 border-l-4 border-brand-600 bg-brand-50 rounded-r-xl p-4 md:p-5 shadow-sm">
                <h3 className="text-[11px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">System Execution Blueprint</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-6 text-sm md:text-base text-gray-800 font-medium normal-case tracking-normal">
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Heavy-Duty Aluminum
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Silent Glider Hooks
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Anti-Microbial Coated
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Fire-Retardant Fabric
                    </div>
                </div>
            </div>

            {/* STAR RATING BOX */}
            <div className="flex items-center gap-3 mb-8">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">4.5/5 based on 20 reviews</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center gap-2">
                Get a Free Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION WITH SLIDER */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tighter">Premium Patient <span className="text-brand-600">Privacy Systems</span></h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg font-light">
              In multi-bed wards and ICUs, patient privacy and infection control are paramount. A high-quality cubicle curtain track system creates immediate, flexible partitions that are easy for medical staff to operate.
            </p>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg font-light">
              At MedGenz, our tracks are manufactured from <strong>heavy-duty extruded aluminum</strong> and powder-coated with <strong>anti-microbial properties</strong> to prevent hospital-acquired infections (HAIs). Engineered with virgin nylon runners, they guarantee a silent, jam-free glide every time.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">Silent</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Frictionless Glide</div>
              </div>
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">100%</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Anti-Microbial Coated</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2 mb-4 md:mb-0">
            <div className="absolute inset-0 bg-brand-100 rounded-3xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10"></div>
            <div className="relative rounded-3xl shadow-xl overflow-hidden w-full aspect-[4/3] border border-gray-200 bg-white">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">System Architecture</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Cubicle Track <span className="text-brand-600">Components</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg font-light">We manufacture and integrate all necessary hardware to build a sturdy, reliable, and aesthetically pleasing ward partition system.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
            {architecture.map((cat, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-200 shadow-sm hover:border-brand-200 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200">
                  <h3 className="text-base md:text-xl font-bold text-gray-900 leading-tight uppercase tracking-tighter">{cat.category}</h3>
                  <span className="text-[8px] md:text-[10px] text-green-600 font-bold uppercase tracking-widest border border-green-200 bg-green-50 px-2 py-0.5 rounded-full">{cat.badge}</span>
                </div>
                <div className="space-y-1 flex-grow">
                  {cat.items.map((item, ii) => (
                    <Link key={ii} href={`/services/curtain-track-system/${item.slug}`} className="group flex items-center justify-between p-2 md:p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100 font-bold text-xs md:text-sm">
                      <span className="text-gray-700 group-hover:text-brand-700">{item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 group-hover:text-brand-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCE VAULT */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b-2 border-gray-200 pb-4 gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tighter">Technical <span className="text-brand-600">Resource Vault</span></h2>
            <span className="w-max self-start text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Architect Portal</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Link href="#" className="group bg-white rounded-lg md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col text-center md:text-left">
              <div className="h-16 md:h-40 bg-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:bg-brand-50 transition-colors relative">
                <FileText className="w-8 h-8 md:w-16 md:h-16 text-brand-300 group-hover:text-brand-500 transition-colors" />
              </div>
              <div className="p-2 md:p-5 flex flex-col flex-grow items-center md:items-start">
                <h4 className="font-bold text-gray-900 group-hover:text-brand-700 text-[10px] md:text-base leading-tight mb-1">Curtain Track Layout</h4>
                <p className="hidden md:block text-xs text-gray-500 mb-4 flex-grow font-light">DWG Format • For Hospital Architects</p>
                <div className="text-[9px] md:text-xs font-bold text-brand-600 flex items-center gap-1 md:gap-2 mt-auto">Open Document <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /></div>
              </div>
            </Link>
            <Link href="#" className="group bg-white rounded-lg md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col text-center md:text-left">
              <div className="h-16 md:h-40 bg-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:bg-brand-50 transition-colors relative">
                <FileText className="w-8 h-8 md:w-16 md:h-16 text-red-300 group-hover:text-red-500 transition-colors" />
              </div>
              <div className="p-2 md:p-5 flex flex-col flex-grow items-center md:items-start">
                <h4 className="font-bold text-gray-900 group-hover:text-brand-700 text-[10px] md:text-base leading-tight mb-1">Track Specs & Dimensions</h4>
                <p className="hidden md:block text-xs text-gray-500 mb-4 flex-grow font-light">PDF Document • Technical Data</p>
                <div className="text-[9px] md:text-xs font-bold text-brand-600 flex items-center gap-1 md:gap-2 mt-auto">Open Document <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /></div>
              </div>
            </Link>
            <Link href="#" className="group bg-white rounded-lg md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col text-center md:text-left">
              <div className="h-16 md:h-40 bg-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:bg-brand-50 transition-colors relative">
                <FileText className="w-8 h-8 md:w-16 md:h-16 text-gray-400 group-hover:text-brand-500 transition-colors" />
              </div>
              <div className="p-2 md:p-5 flex flex-col flex-grow items-center md:items-start">
                <h4 className="font-bold text-gray-900 group-hover:text-brand-700 text-[10px] md:text-base leading-tight mb-1">Fabric Fire-Safety Cert</h4>
                <p className="hidden md:block text-xs text-gray-500 mb-4 flex-grow font-light">Technical Datasheet • Retardant Specs</p>
                <div className="text-[9px] md:text-xs font-bold text-brand-600 flex items-center gap-1 md:gap-2 mt-auto">Open Document <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-gray-50 border-b border-gray-200 font-inter">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-2 border-brand-600 pb-2 md:pb-3 inline-block uppercase tracking-tighter">CTS Technical Specifications</h2>
          <div className="overflow-x-auto rounded-xl bg-white border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold w-1/3 border-r border-gray-200 text-[10px] uppercase tracking-widest">Track Extrusion</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">High-Grade Aluminum Alloy (Min 1.5mm wall thickness)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Surface Coating</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">50-Micron Epoxy Powder Coat (Anti-Microbial White/Custom)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Glider / Runner</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Virgin Nylon/Delrin Body with Stainless Steel Hooks</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Curtain Fabric</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Fire-Retardant, Anti-Bacterial Polyester (Washable)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Mounting Configuration</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Flush Ceiling Mount or Aluminum Bridge Suspension Drops</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Certifications />
      <ClientMarquee />

      {/* FAQ */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200 font-inter">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-tighter">Frequently Asked <span className="text-brand-600">Questions</span></h2>
            <p className="text-gray-500 text-sm md:text-base">Technical details regarding our Cubicle Curtain Track hardware.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-lg md:rounded-xl border border-gray-200 shadow-sm overflow-hidden" open={i === 0}>
                <summary className="flex items-center justify-between p-3 md:p-5 font-bold text-gray-900 cursor-pointer hover:bg-white transition-colors">
                  <span className="text-xs sm:text-sm md:text-lg flex items-start gap-2 md:gap-3">
                    <span className="text-brand-600 shrink-0">{i + 1}.</span>
                    {faq.q}
                  </span>
                </summary>
                <div className="px-3 md:px-5 pb-3 md:pb-5 pt-1 text-gray-600 text-xs md:text-base leading-relaxed border-t border-gray-100 mt-2 font-light">
                  <p className="mt-1 md:mt-2">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
