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

      {/* Persistent Content Overlay - Added padding-top to avoid header overlap */}
      <div className="absolute inset-0 flex items-center pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            {/* Top Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/20 text-brand-300 border border-brand-400/30 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-sm shadow-xl">
              India's Trusted Infrastructure Partner
            </span>

            {/* Small Heading */}
            <h2 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80 px-4">
              Premier Modular Operation Theatre Manufacturers in India
            </h2>

            {/* Large Dynamic Heading */}
            <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-white tracking-tight uppercase">
              Modular Operation Theatre <br />
              <div className="h-[1.2em] overflow-hidden relative inline-block w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="text-brand-500 block absolute inset-0 text-center drop-shadow-2xl"
                  >
                    {slides[index].word}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-sm md:text-base lg:text-lg mb-10 max-w-3xl font-light leading-relaxed px-4">
              We design, manufacture, and install world-class, clean-room compliant operation theatres and MGPS systems, ensuring absolute precision and patient safety.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-brand-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest shadow-xl shadow-brand-600/40 hover:bg-brand-500 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all px-8 py-3 md:px-10 md:py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest backdrop-blur-md flex items-center justify-center">
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
