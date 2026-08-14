'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero-mot-images/mot-hero1.webp',
    badge: "India's Trusted Infrastructure Partner",
    title: "Modular Operation Theatre Manufacturers.",
    desc: "We design, manufacture, and install world-class, clean-room compliant operation theatres and MGPS systems."
  },
  {
    id: 2,
    image: '/images/hero-mot-images/mot-hero2.webp',
    badge: "Precision Engineering Excellence",
    title: "Advanced Medical Gas Pipeline Systems.",
    desc: "Complete end-to-end design, routing, and testing of highly reliable life-support gas networks."
  },
  {
    id: 3,
    image: '/images/hero-mot-images/mot-hero3.webp',
    badge: "Turnkey Healthcare Solutions",
    title: "High-Quality Hospital Furniture.",
    desc: "Durable, patient-centric furniture designed for optimal comfort and clinical hygiene standards."
  },
  {
    id: 4,
    image: '/images/hero-mot-images/mot-hero4.webp',
    badge: "Safety & Compliance First",
    title: "NABH Compliant Infrastructure.",
    desc: "Ensuring absolute sterility and infection control with our specialized clean-room panels."
  },
];

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt="MedGenz Healthcare Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-6 w-full text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-4xl"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-400/30 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                  {slides[index].badge}
                </span>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
                  {slides[index].title}
                </h1>

                <p className="text-slate-200 text-sm md:text-lg mb-10 max-w-2xl font-light leading-relaxed">
                  {slides[index].desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/services" className="bg-brand-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-brand-600/40 hover:bg-brand-500 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                    Our Services <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest backdrop-blur-md flex items-center justify-center">
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              index === i ? "w-12 bg-brand-600" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
