'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  { id: 1, image: '/images/hero-mot-images/mot-hero1.webp' },
  { id: 2, image: '/images/hero-mot-images/mot-hero2.webp' },
  { id: 3, image: '/images/hero-mot-images/mot-hero3.webp' },
  { id: 4, image: '/images/hero-mot-images/mot-hero4.webp' },
];

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
