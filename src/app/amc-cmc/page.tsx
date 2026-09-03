import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Activity, CheckCircle2, Star, Plus } from 'lucide-react';
import AMCCMCCalculator from '@/components/sections/AMCCMCCalculator';
import ClientMarquee from '@/components/sections/ClientMarquee';
import ECGCTA from '@/components/sections/ECGCTA';
import Certifications from '@/components/sections/Certifications';

const faqs = [
  {
    q: "What is the primary difference between AMC and CMC?",
    a: "AMC (Annual Maintenance Contract) covers labor and service visits but excludes the cost of spare parts. CMC (Comprehensive Maintenance Contract) covers everything—labor, service, and all spare parts required to keep the machine operational, excluding only one-time use consumables."
  },
  {
    q: "How many Preventive Maintenance (PM) visits are provided?",
    a: "We provide 4 mandatory PM visits per year (quarterly) across both AMC and CMC plans. These visits include deep cleaning, calibration checks, and software diagnostic reports."
  },
  {
    q: "Do you provide reports for NABH accreditation?",
    a: "Yes. Every service visit or breakdown call results in a formal service report. For CMC clients, we also provide quarterly calibration certificates which are essential for NABH and ISO audits."
  },
  {
    q: "What is your emergency response time?",
    a: "For hospitals within Delhi NCR, our response time is under 4-6 hours. For other locations across India, we guarantee an engineer on-site within 24 hours of a breakdown report."
  }
];

export const metadata = {
  title: "Medical Equipment AMC & CMC Services | MedGenz",
  description: "Secure your hospital assets with MedGenz high-fidelity maintenance contracts. Use our interactive calculator to estimate AMC and CMC costs for ICU, OT, and Imaging equipment.",
};

export default function AMCCMCPage() {
  return (
    <div className="pt-20 md:pt-28 font-inter">
      {/* 1. HERO SECTION */}
      <section className="relative py-12 md:py-20 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/service-images/curtain-track.webp" // Reusing a medical context image
            alt="Biomedical Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-16 md:pt-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/20 text-brand-400 border border-brand-500/30 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">Asset Security</span>
          <h1 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">AMC / CMC <span className="text-brand-500">Service Portal</span></h1>
          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed normal-case tracking-normal font-light">
            Professional biomedical maintenance solutions to ensure zero-downtime for your critical medical equipment. Certified by NABH and ISO standards.
          </p>
        </div>
      </section>
      {/* 3. CALCULATOR SECTION */}
      <section className="py-12 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] mb-1 block">Interactive Tool</span>
          <h2 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter">Estimate Your <span className="text-brand-600">Contract Cost</span></h2>
          <div className="w-12 h-1 bg-brand-600 mx-auto rounded-full mt-3" />
        </div>
        <AMCCMCCalculator />
      </section>

      
      {/* 2. EDUCATION SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter text-center md:text-left">Maintenance <span className="text-brand-600">Simplified</span></h2>
            <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base text-center md:text-left">
              Medical equipment requires more than just repairs; it needs a continuous lifecycle management strategy. Our contracts are designed to shift the burden of maintenance from doctors to engineers.
            </p>

            <div className="grid grid-cols-1 gap-6 pt-6">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">What is AMC?</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  An <strong>Annual Maintenance Contract</strong> covers the labor charges for service and preventive maintenance. If a part breaks, it is billed separately. Ideal for new equipment still under component warranty.
                </p>
              </div>

              <div className="bg-brand-600 p-8 rounded-[2rem] text-white shadow-xl shadow-brand-600/20 space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">What is CMC?</h3>
                <p className="text-sm text-brand-50 leading-relaxed font-light">
                  A <strong>Comprehensive Maintenance Contract</strong> is the "Ultimate" protection. It covers labor, service, and the full cost of all spare parts. It provides a fixed annual budget with zero financial surprises.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pt-12 md:pt-0">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-600/5 rounded-full blur-[80px]" />
            <div className="relative bg-slate-50 rounded-[3rem] p-10 border border-slate-100 space-y-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest text-center">MedGenz Advantage</h3>
              <div className="space-y-6">
                {[
                  { t: "NABL Calibration", d: "Standard on all critical devices." },
                  { t: "24/7 Helpline", d: "Direct access to biomedical experts." },
                  { t: "OEM Spare Parts", d: "Zero compromise on component quality." },
                  { t: "Software Updates", d: "Keeping your devices technologically current." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 uppercase text-xs tracking-wider">{item.t}</p>
                      <p className="text-sm text-slate-500 font-light">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 4. RATING SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          <div className="text-center md:text-left space-y-1">
            <div className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">4.9<span className="text-brand-600">/5</span></div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">Customer Satisfaction Rating</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}
            </div>
            <p className="text-slate-500 max-w-sm text-center md:text-left leading-relaxed font-light">
              "MedGenz has maintained our entire ICU wing for 5 years. Their CMC plan is the most reliable in the North India region."
            </p>
            <p className="text-xs font-bold text-slate-900 uppercase tracking-widest">— Fortis Associate Hospital, Delhi</p>
          </div>
        </div>
      </section>

      <ClientMarquee />

      <Certifications />

      {/* 5. FAQ SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">Contract <span className="text-brand-600">FAQs</span></h2>
            <div className="w-16 h-1 bg-brand-600 mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden" open={i === 0}>
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-slate-900 cursor-pointer hover:bg-slate-100 transition-all uppercase tracking-tight text-sm md:text-lg">
                  <span className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-600 text-xs shadow-sm group-open:bg-brand-600 group-open:text-white transition-all">{i + 1}</span>
                    {faq.q}
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-8 text-slate-500 text-sm md:text-base leading-relaxed font-light border-t border-slate-200/50 pt-6">
                  {faq.a}
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
