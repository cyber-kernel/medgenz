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

const architecture = [
  {
    category: "ICU Beds",
    badge: "Intensive Care Units",
    items: [
      { name: "ICU Bed (Electric)", slug: "icu-beds" },
      { name: "ICU Bed with Weighing System", slug: "icu-beds" },
      { name: "ICU Bed with Ventilator Support", slug: "icu-beds" }
    ],
    slug: "icu-beds"
  },
  {
    category: "Fowler & Ward Beds",
    badge: "General Patient Wards",
    items: [
      { name: "Semi Fowler Bed", slug: "fowler-ward-beds" },
      { name: "Full Fowler Bed", slug: "fowler-ward-beds" },
      { name: "General Ward Bed", slug: "fowler-ward-beds" }
    ],
    slug: "fowler-ward-beds"
  },
  {
    category: "Electric Beds",
    badge: "Motorized Adjustments",
    items: [
      { name: "Semi-Electric Bed", slug: "electric-bed" },
      { name: "Fully Electric Bed", slug: "electric-bed" }
    ],
    slug: "electric-bed"
  },
  {
    category: "Specialty Beds",
    badge: "Bariatric to Pediatric",
    items: [
      { name: "Bariatric Bed", slug: "speciality-beds" },
      { name: "Pediatric Bed", slug: "speciality-beds" },
      { name: "Orthopedic Bed", slug: "speciality-beds" },
      { name: "Geriatric Bed", slug: "speciality-beds" }
    ],
    slug: "speciality-beds"
  },
  {
    category: "Support & Therapy",
    badge: "Pressure Relief Systems",
    items: [
      { name: "Air Mattress Bed", slug: "support-therapy-beds" },
      { name: "Pressure Relief Bed", slug: "support-therapy-beds" }
    ],
    slug: "support-therapy-beds"
  },
  {
    category: "Transport & Emergency",
    badge: "Mobility & Transit",
    items: [
      { name: "Stretcher Bed", slug: "transport-emergency-beds" },
      { name: "Trolley Bed", slug: "transport-emergency-beds" }
    ],
    slug: "transport-emergency-beds"
  },
  {
    category: "Lockers & Overbed Tables",
    badge: "Bedside Convenience",
    items: [
      { name: "Bedside Locker", slug: "lockers-overbedtables" },
      { name: "Overbed Table", slug: "lockers-overbedtables" }
    ],
    slug: "lockers-overbedtables"
  },
  {
    category: "Crash Carts & Trolleys",
    badge: "Emergency Mobility",
    items: [
      { name: "Crash Cart", slug: "crash-cart-trollies" },
      { name: "Medication Trolley", slug: "crash-cart-trollies" },
      { name: "Dressing & Instrument Trolley", slug: "crash-cart-trollies" }
    ],
    slug: "crash-cart-trollies"
  },
  {
    category: "IV Stands & Accessories",
    badge: "Stainless Steel Supports",
    items: [
      { name: "Standard Mobile IV Stand", slug: "iv-stand-accessories" },
      { name: "Heavy-Duty ICU Infusion Stand", slug: "iv-stand-accessories" }
    ],
    slug: "iv-stand-accessories"
  }
];

const faqs = [
  {
    q: "What types of hospital beds and medical furniture do you manufacture?",
    a: "We manufacture a comprehensive range of hospital furniture, including 5-function motorized ICU beds, semi-fowler and full-fowler ward beds, emergency crash carts, examination tables, overbed tables, and bedside lockers."
  },
  {
    q: "How does your medical furniture maintain strict infection control?",
    a: "All our medical furniture features a premium CRCA steel framework with an anti-microbial epoxy powder-coated finish. This ensures maximum rust resistance and allows for easy sanitization using harsh hospital-grade chemical disinfectants without degrading the surface."
  },
  {
    q: "What is the safe working load of your motorized ICU beds?",
    a: "Our heavy-duty motorized ICU beds are engineered with robotic-welded steel frames and high-torque linear actuators, safely supporting a maximum working load of up to 250 KG. We also offer specialized bariatric beds for higher weight capacities."
  },
  {
    q: "Are your hospital beds and furniture NABH and CE compliant?",
    a: "Yes. All MedGenz hospital beds and furniture are strictly manufactured to meet CE standards, ISO 9001:2015, and NABH guidelines, ensuring absolute patient safety, structural stability, and electrical compliance for medical facilities."
  },
  {
    q: "Do you provide pan-India installation and after-sales support?",
    a: "Yes, we provide complete turnkey execution. Our logistics and engineering teams handle the delivery and installation of all hospital furniture across India. We also provide comprehensive lifetime maintenance, replacement parts, and AMC support."
  }
];

export default function HospitalFurnitureHub() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp", alt: "Orthopedic Bed" },
    { src: "/images/key-application-images/maternity-labour-ward.webp", alt: "Maternity Labour Ward" },
    { src: "/images/hospital-furniture-images/crash-cart-trollies-images/crashcart-trolly.webp", alt: "Emergency Crash Cart Trolley" },
    { src: "/images/hospital-furniture-images/transport-emergency-images/stretcher-trolly.webp", alt: "Transport Stretcher Trolley" }
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
              <li className="text-brand-600 font-bold">Hospital Furniture</li>
            </ol>
          </nav>

          <div className="w-full lg:max-w-6xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              Premium Patient Care
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
              Hospital Furniture & <span className="text-brand-600">Patient Beds</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-xl mb-6 md:mb-8 leading-relaxed normal-case tracking-normal font-light">
              Ergonomic, durable, and highly sanitizable medical furniture designed for maximum patient comfort and critical care efficiency across all hospital wards.
            </p>

            <div className="mb-8 border-l-4 border-brand-600 bg-brand-50 rounded-r-xl p-4 md:p-5 shadow-sm">
                <h3 className="text-[11px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">System At a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-6 text-sm md:text-base text-gray-800 font-medium normal-case tracking-normal">
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Epoxy Coated CRCA Steel
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> 5-Function Motorization
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Anti-Microbial Surfaces
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> NABH Compliant Design
                    </div>
                </div>
            </div>

            {/* STAR RATING BOX */}
            <div className="flex items-center gap-3 mb-8">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">4/5 based on 64 reviews</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center gap-2 transition-transform hover:-translate-y-1">
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
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tighter">Built for <span className="text-brand-600">Healing & Comfort</span></h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg font-light">
              Patient recovery starts with the right environment. Our hospital furniture is meticulously engineered to provide absolute comfort for patients while ensuring ease of access, mobility, and operability for medical staff.
            </p>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg font-light">
              From advanced <strong>5-Function Motorized ICU Beds</strong> to robust ward furniture, crash carts, and bedside lockers, MedGenz manufactures premium-grade, epoxy powder-coated steel solutions built for longevity and infection control.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">Ergonomic</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Patient Centric Design</div>
              </div>
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">Anti-Microbial</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Epoxy Coated Finish</div>
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
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Product Portfolio</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Hospital <span className="text-brand-600">Furniture Range</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg font-light">We manufacture and supply a comprehensive range of highly durable beds and furniture designed for every wing of your hospital facility.</p>
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
                    <Link key={ii} href={`/services/hospital-furniture/${item.slug}`} className="group flex items-center justify-between p-2 md:p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100 font-bold text-xs md:text-sm">
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
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-2 border-brand-600 pb-2 md:pb-3 inline-block uppercase tracking-tighter">Furniture Technical Specifications</h2>
          <div className="overflow-x-auto rounded-xl bg-white border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold w-1/3 border-r border-gray-200 text-[10px] uppercase tracking-widest">Material Construction</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Premium CRCA (Cold Rolled Close Annealed) tubular steel framework</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Surface Finish</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Anti-microbial epoxy powder coated (50-70 microns) for rust resistance</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Side Rails & Panels</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">High-quality injection-molded polymer / ABS (detachable & washable)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Mobility / Casters</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Heavy-duty, non-marking polyurethane wheels with diagonal locking brakes</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Motorization (ICU Beds)</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">CE certified silent linear actuators with emergency battery backup system</td>
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
            <p className="text-gray-500 text-sm md:text-base">Technical details regarding our Hospital Furniture and Beds.</p>
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
