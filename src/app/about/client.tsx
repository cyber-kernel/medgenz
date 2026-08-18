"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Building2,
  Heart,
  ChevronRight,
  ShieldCheck,
  Target,
  Compass,
  FileText,
  Zap
} from "lucide-react";
import ECGCTA from '@/components/sections/ECGCTA';
import Certifications from '@/components/sections/Certifications';

const stats = [
  { label: "Projects Done", value: 150, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Client Base", value: 150, suffix: "+" },
  { label: "Staff Members", value: 100, suffix: "+" },
];

const whyChoose = [
  {
    title: "Unmatched Quality",
    desc: "Rigorous testing and compliance with ISO and CE standards for absolute surgical safety.",
    icon: ShieldCheck,
  },
  {
    title: "Turnkey Supply",
    desc: "Direct control over production means faster delivery and precision-customized solutions.",
    icon: Building2,
  },
  {
    title: "Pan-India Reach",
    desc: "Successfully delivering projects across Delhi, UP, Punjab, Rajasthan, and beyond.",
    icon: Globe,
  },
  {
    title: "Lifetime Support",
    desc: "We provide reliable maintenance and post-sales technical support globally for every setup.",
    icon: Heart,
  }
];

const featuredProjects = [
  {
    title: "Modular Operation Theatre",
    desc: "Complete turnkey installation including laminar airflow and surgical pendants for a state-of-the-art multi-specialty hospital.",
    image: "/images/service assets/mot-page-n-eq-assets/ot-3.webp",
    link: "/services/modular-operation-theatre"
  },
  {
    title: "Medical Gas Pipeline System",
    desc: "End-to-end design, supply, and installation of a centralized MGPS network ensuring continuous oxygen supply across 200+ beds.",
    image: "/images/about-us/about-us-assets/mgps2-about.webp",
    link: "/services/medical-gas-pipeline-system"
  },
  {
    title: "Advanced IVF Laboratory",
    desc: "Precision-engineered sterile setup designed specifically for clinical embryology and successful in-vitro fertilization procedures.",
    image: "/images/about-us/about-us-assets/ivf-about.webp",
    link: "/services/ivf-lab-setups"
  }
];

const slides = [
  { src: "/images/hero-mot-images/mot-hero2.webp", alt: "Modular Operation Theatre" },
  { src: "/images/about-us/about-us-assets/mgps2-about.webp", alt: "Medical Gas Pipeline System" },
  { src: "/images/about-us/about-us-assets/ot-light-&-pendant-about.webp", alt: "Surgical Light & Pendant" },
  { src: "/images/about-us/about-us-assets/ivf-about.webp", alt: "IVF Laboratory" },
  { src: "/images/about-us/about-us-assets/hospital-ward-about.webp", alt: "Hospital Ward Furniture" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

export default function AboutClient() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden font-inter">
      {/* 1. HERO SECTION */}
      <section className="relative pt-64 pb-20 md:pt-[280px] md:pb-32 bg-slate-950 overflow-hidden uppercase tracking-tighter">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }} // BRIGHTER BACKGROUND (Increased from 0.4)
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/about-us/about-us-home/about-us.webp"
            alt="About MedGenz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-600/20 text-brand-400 border border-brand-500/30 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
          >
            Our Heritage & Commitment
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]"
          >
            Engineering <span className="text-brand-500">Healthcare</span> <br /> Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light normal-case tracking-normal"
          >
            Delivering international-grade Modular Operation Theatres and Medical Gas Pipeline Systems from New Delhi to the world.
          </motion.p>
        </div>

      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-3 block">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter uppercase">
                Setting the Standard in <br />
                <span className="text-brand-600">Medical Engineering</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed font-light">
              <p>
                <strong>MedGenz</strong> is a premier organization headquartered in New Delhi. We specialize in the complete lifecycle <strong>Manufacturing, Supplying, Exporting, and Installing</strong> of critical healthcare infrastructure.
              </p>
              <p>
                Our core expertise lies in designing seamless <strong>Modular Operation Theatres (MOT)</strong>, highly reliable <strong>Medical Gas Pipeline Systems (MGPS)</strong>, advanced Surgical Pendants, state-of-the-art IVF Laboratories, Hospital Furniture and all OT Equipments.
              </p>
              <p>
                By providing a turnkey solution, we guarantee that every hospital project meets the highest international safety and hygiene protocols.
              </p>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-600 transition-all group shadow-xl">
              Partner With Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].alt}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                  {/* Slide Label */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-white font-bold uppercase tracking-widest text-xs"
                    >
                      {slides[currentSlide].alt}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="absolute -bottom-10 -left-10 bg-brand-600 text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl z-20"
            >
              <Award className="w-10 h-10 md:w-12 md:h-12 mb-4 text-brand-100" />
              <div className="text-3xl md:text-4xl font-black tracking-tighter uppercase">12+ Years</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-100">Industry Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. COUNTER SECTION */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-600/20 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-500 mb-2 tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 uppercase text-[9px] md:text-xs tracking-[0.2em] font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 md:py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-12 md:p-16 rounded-[3rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity -mr-20 -mt-20" />
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">
              To engineer and deliver the safest, most reliable, and highly advanced healthcare infrastructure solutions. We are dedicated to empowering medical professionals by creating sterile, precision-driven environments where patient care can thrive without compromise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-12 md:p-16 rounded-[3rem] bg-slate-900 text-white shadow-2xl hover:shadow-brand-600/20 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity -ml-20 -mb-20" />
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-400 mb-8">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tighter uppercase">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg font-light">
              To be universally recognized as the foremost global leader in Medical Engineering. We envision a future where MedGenz's innovative operation theatres and life-saving gas pipeline systems are the gold standard in every major hospital worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. WHY CHOOSE MEDGENZ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase"
            >
              Why Choose <span className="text-brand-600">MedGenz?</span>
            </motion.h2>
            <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tighter uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS - Using Central Component */}
      <Certifications />

      {/* 7. FEATURED PRODUCTS (Formerly Featured Projects) */}
      <section className="py-24 md:py-32 px-6 bg-white uppercase tracking-tighter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Featured <span className="text-brand-600">Systems</span></h2>
            <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full mb-8" />
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light normal-case tracking-normal">A glimpse into our high-fidelity healthcare infrastructure installations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProjects.map((project, i) => (
              <Link href={project.link} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tighter uppercase group-hover:text-brand-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light mb-8 flex-grow normal-case tracking-normal">
                      {project.desc}
                    </p>
                    <div className="pt-6 border-t border-slate-100 mt-auto">
                      <div className="inline-flex items-center gap-2 text-brand-600 font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                        Explore System <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
