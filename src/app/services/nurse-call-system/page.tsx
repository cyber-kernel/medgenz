"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle,
  ShieldCheck,
  ChevronRight,
  Zap,
  Activity,
  Layout,
  Settings,
  Monitor,
  AlertTriangle,
  ArrowRight,
  Star,
  Wind
} from "lucide-react";
import ECGCTA from '@/components/sections/ECGCTA';
import ClientMarquee from '@/components/sections/ClientMarquee';
import Certifications from '@/components/sections/Certifications';

// Note: metadata must be in a separate file or handled differently in a Client Component if using the metadata API.
// For now, I'll keep it within the component scope or move it to a layout if needed by the framework.

const architecture = [
  {
    category: "Patient & Bedside Hardware",
    badge: "In-Room Station",
    items: [
      { name: "Bedside Call Units", slug: "bedside-hardware" },
      { name: "Patient Handsets", slug: "bedside-hardware" },
      { name: "Wireless Remotes", slug: "bedside-hardware" }
    ]
  },
  {
    category: "Emergency & Visual Indicators",
    badge: "Alerting Network",
    items: [
      { name: "Bathroom Pull Cords", slug: "emergency-indicators" },
      { name: "Over-Door Dome Lights", slug: "emergency-indicators" },
      { name: "Code Blue Alerts", slug: "emergency-indicators" }
    ]
  },
  {
    category: "Central Control & Displays",
    badge: "Monitoring Hub",
    items: [
      { name: "Master Console Module", slug: "central-control-displays" },
      { name: "Ward TV Monitor Units", slug: "central-control-displays" },
      { name: "HMIS / IP Connectivity", slug: "central-control-displays" }
    ]
  }
];

const faqs = [
  {
    q: "What is a Hospital Nurse Call System (NCS)?",
    a: "A Nurse Call System is a critical communication network that allows patients in wards or ICUs to instantly alert healthcare staff. It comprises bedside buttons, washroom pull cords, over-door lights, and a central master console at the nursing station."
  },
  {
    q: "Do you provide both wired and IP-based wireless Nurse Call Systems?",
    a: "Yes. MedGenz manufactures and installs traditional wired systems for standard wards, as well as highly advanced IP-based and wireless systems that integrate directly with Hospital Information Systems (HIS) and staff pagers/smartphones."
  },
  {
    q: "What happens if a patient calls from the washroom?",
    a: "Our systems include waterproof emergency pull cords installed in every patient washroom. When pulled, it triggers an immediate, high-priority emergency alert at the central console and flashes a distinct color on the over-door indicator."
  },
  {
    q: "Does the system record call response times?",
    a: "Absolutely. Our advanced IP Nurse Call Systems feature central tracking software that logs the exact time a call was placed and the time a nurse responded, providing crucial data for hospital administration and NABH audits."
  },
  {
    q: "Does MedGenz provide AMC and maintenance for Nurse Call Systems?",
    a: "Yes, our commitment to hospital safety doesn't end at installation. MedGenz provides comprehensive Annual Maintenance Contracts (AMC) and lifetime support. Our expert engineers conduct routine preventive maintenance and system calibrations to ensure continuous optimal performance."
  }
];

export default function NurseCallSystemHub() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/images/service-images/ncs-bedside.webp", alt: "Patient Bedside Call Unit" },
    { src: "/images/service-images/ncs-console.webp", alt: "Nurse Station Master Console" },
    { src: "/images/service-images/ncs-overdoor.webp", alt: "Over Door Indicator Lights" }
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
            <ol className="service-breadcrumb flex w-full min-w-0 items-center gap-x-1.5 md:gap-x-2 whitespace-nowrap text-[8px] sm:text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-normal md:tracking-wider">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li><Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li className="text-brand-600 font-bold">Nurse Call System</li>
            </ol>
          </nav>

          <div className="w-full lg:max-w-6xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              Smart Patient Communication
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
              Hospital Nurse Call <span className="text-brand-600">System (NCS)</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-xl mb-6 md:mb-8 leading-relaxed normal-case tracking-normal font-light">
              Empower your patients and streamline nursing workflows. We manufacture and install intuitive, reliable Nurse Call Systems that guarantee instant alerts, rapid medical response, and complete NABH compliance for your facility.
            </p>

            <div className="mb-8 border-l-4 border-brand-600 bg-brand-50 rounded-r-xl p-4 md:p-5 shadow-sm">
                <h3 className="text-[11px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">System Execution Blueprint</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-6 text-sm md:text-base text-gray-800 font-medium normal-case tracking-normal">
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Instant Alert Routing
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> IP & Wireless Options
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Waterproof Washroom Cords
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Central Monitoring Console
                    </div>
                </div>
            </div>

            {/* STAR RATING BOX */}
            <div className="flex items-center gap-3 mb-8">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">4.7/5 based on 32 reviews</span>
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
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tighter">The Lifeline of <span className="text-brand-600">Patient Care</span></h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg font-light">
              A Nurse Call System (NCS) is the primary communication bridge between patients and healthcare professionals. In moments of distress, a reliable connection is non-negotiable.
            </p>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg font-light">
              Whether you need a traditional wired system for a general ward or a fully integrated <strong>IP-based wireless network</strong> with two-way audio support for an ICU, MedGenz provides seamless, aesthetic, and highly responsive communication solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">&lt; 1 Sec</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Instant Alert Time</div>
              </div>
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">100%</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Call Log Tracking</div>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Complete <span className="text-brand-600">NCS Integration</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg font-light">Explore our core Nurse Call System components designed for seamless patient-to-nurse communication.</p>
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
                    <Link key={ii} href={`/services/nurse-call-system/${item.slug}`} className="group flex items-center justify-between p-2 md:p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100 font-bold text-xs md:text-sm">
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

      {/* TECH SPECS */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-gray-50 border-b border-gray-200 font-inter">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-2 border-brand-600 pb-2 md:pb-3 inline-block uppercase tracking-tighter">NCS Technical Specifications</h2>
          <div className="overflow-x-auto rounded-xl bg-white border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold w-1/3 border-r border-gray-200 text-[10px] uppercase tracking-widest">System Architecture</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Wired (CAT6/Copper) / IP-Based / Fully Wireless Options</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Operating Voltage</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Safe Low-Voltage (12V / 24V DC / PoE)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Master Console Display</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">High-Resolution LCD / Interactive Touchscreen Interface</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Washroom Components</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">100% Waterproof, Ceiling-Mounted Emergency Pull Cords</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Alert Mechanisms</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Audio-Visual, Over-Door LED Domes, Auto-Escalation Logging</td>
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
            <p className="text-gray-500 text-sm md:text-base">Technical details regarding our Turnkey Nurse Call Systems.</p>
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
