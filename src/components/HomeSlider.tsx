'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const slides = [
  { id: 1, image: '/images/hero-mot-images/mot-hero1.webp', word: "Manufacturers." },
  { id: 2, image: '/images/hero-mot-images/mot-hero2.webp', word: "Suppliers." },
  { id: 3, image: '/images/hero-mot-images/mot-hero3.webp', word: "Dealers." },
  { id: 4, image: '/images/hero-mot-images/mot-hero4.webp', word: "Engineers." },
];

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  // Synchronized Loop: Background and Word change together
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Changed every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      {/* Background Images */}
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
        </motion.div>
      </AnimatePresence>

      {/* Persistent Content Overlay - Increased top padding to avoid header overlap */}
      <div className="absolute inset-0 flex items-center pt-32 md:pt-40 lg:pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            {/* Top Badge - Reduced margin */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/20 text-brand-300 border border-brand-400/30 text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-sm shadow-xl">
              India's Trusted Infrastructure Partner
            </span>

            {/* Small Heading - Reduced margin */}
            <h2 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-80 px-4">
              Premier Modular Operation Theatre Manufacturers in India
            </h2>

            {/* Large Dynamic Heading - Adjusted size for better fit */}
            <h1 className="text-[1.5rem] sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.0] mb-3 text-white tracking-tight uppercase">
              Modular Operation Theatre <br />
              <div className="h-[1.1em] overflow-hidden relative inline-block w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="text-brand-500 block absolute inset-0 text-center drop-shadow-2xl"
                  >
                    {slides[index].word}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            {/* Description - Reduced margin */}
            <p className="text-slate-200 text-[10px] md:text-sm lg:text-base mb-6 max-w-xl font-light leading-relaxed px-4">
              We design, manufacture, and install world-class, clean-room compliant operation theatres and MGPS systems, ensuring absolute precision and patient safety.
            </p>

            {/* Buttons - Tighter layout */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link href="/services" className="bg-brand-600 text-white px-5 py-2 md:px-7 md:py-3 rounded-xl font-black text-[9px] md:text-xs uppercase tracking-widest shadow-xl shadow-brand-600/40 hover:bg-brand-500 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                View Our Services <ArrowRight className="w-3 h-3" />
              </Link>
              <Link href="/contact" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all px-5 py-2 md:px-7 md:py-3 rounded-xl font-black text-[9px] md:text-xs uppercase tracking-widest backdrop-blur-md flex items-center justify-center">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Indicators (Mini) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === i ? "w-8 bg-brand-600" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
