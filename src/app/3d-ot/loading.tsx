import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-full h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white font-sans z-50">
      <div className="relative w-56 h-24 mb-6 animate-pulse">
        <Image
          src="/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp"
          alt="MedGenz Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* ECG Waveform Pulse Line Animation */}
      <div className="w-64 h-12 relative overflow-hidden mb-4 flex items-center justify-center">
        <svg className="w-full h-full text-brand-500" viewBox="0 0 300 60" fill="none">
          <path
            d="M0,30 L60,30 L70,10 L80,50 L90,15 L100,40 L110,30 L300,30"
            stroke="#FFB80A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="flex items-center gap-3 text-brand-400 font-mono text-sm tracking-widest uppercase">
        <span className="w-3 h-3 rounded-full bg-brand-500 animate-ping" />
        <span>Loading 3D OT Studio Environment...</span>
      </div>

      <div className="w-48 h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
        <div className="w-full h-full bg-brand-500 origin-left animate-[marquee_1.5s_infinite_linear]" />
      </div>
    </div>
  );
}
