'use client';

import React from 'react';
import Image from 'next/image';

const clientLogos = [
  "hospital-1.webp", "hospital-2.webp", "hospital-3.webp", "hospital-4.webp",
  "hospital-5.webp", "hospital-6.webp", "hospital-7.webp", "hospital-8.webp",
  "hospital-9.webp", "hospital-10.webp", "hospital-11.webp", "hospital-12.webp",
  "hospital-13.webp", "hospital-14.webp", "hospital-15.webp", "hospital-16.webp"
];

export default function ClientMarquee() {
  return (
    <section id="clients" className="py-12 md:py-24 bg-white overflow-hidden border-t border-gray-100 relative">
        <div className="text-center mb-6 md:mb-10 animate-on-scroll is-visible">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Our Valuable <span className="text-brand-600">Clients</span></h2>
            <div className="w-12 md:w-20 h-1 bg-brand-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-3 md:mt-4 text-[11px] md:text-base max-w-xl mx-auto px-4 text-center">Trusted by leading healthcare institutions across India. Drag to explore.</p>
        </div>

        <div className="marquee-container group relative flex overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap py-10">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                    <div key={i} className="w-40 h-24 relative flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                        <Image
                            src={`/images/hospital-logos/${logo}`}
                            alt={`Hospital Client ${i + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
            {/* Gradient fades */}
            <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
    </section>
  );
}
