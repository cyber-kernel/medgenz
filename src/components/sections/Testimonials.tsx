'use client';

import React from 'react';
import { Star } from 'lucide-react';
import AutoScrollTrack from './AutoScrollTrack';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <AutoScrollTrack className="pb-8 scrollbar-hide" contentClassName="gap-4 md:gap-6" speed={0.3}>
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div key={`${testimonial.name}-${index}`} className="w-[82vw] sm:w-[360px] md:w-[450px] shrink-0 bg-white rounded-3xl p-5 md:p-8 shadow-lg border border-slate-100 relative group">
          <div className="flex text-yellow-400 mb-4 md:mb-6">
            {[...Array(5)].map((_, starIndex) => (
              <Star key={starIndex} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            ))}
          </div>
          <p className="text-slate-600 text-sm md:text-base italic leading-relaxed mb-6 md:mb-8 font-light">&quot;{testimonial.text}&quot;</p>
          <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-slate-50">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-600 text-base md:text-lg">{testimonial.name[0]}</div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs md:text-sm">{testimonial.name}</h4>
              <p className="text-slate-500 text-[10px] md:text-xs font-medium">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </AutoScrollTrack>
  );
}
