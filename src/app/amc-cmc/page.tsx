import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import AMCCMCCalculator from '@/components/sections/AMCCMCCalculator';
import ReviewSlider from '@/components/sections/ReviewSlider';
import ECGCTA from '@/components/sections/ECGCTA';
import SiteFAQ from '@/components/SiteFAQ';

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

const reviews = [
  { name: 'Dr. Ananya Mehta', role: 'Medical Director', hospital: 'Bengaluru', rating: 5, quote: 'The quarterly service reports have made our NABH documentation much easier to manage.' },
  { name: 'Dr. Rajiv Menon', role: 'Chief Administrator', hospital: 'Kochi', rating: 5, quote: 'Their response process is structured and dependable, especially for critical-care equipment.' },
  { name: 'Dr. Neha Sharma', role: 'Hospital Director', hospital: 'New Delhi', rating: 4, quote: 'The AMC team gives our biomedical staff clear updates after every preventive visit.' },
  { name: 'Dr. Arjun Patel', role: 'Operations Head', hospital: 'Ahmedabad', rating: 5, quote: 'We have seen fewer unexpected interruptions since moving our ICU equipment to their maintenance plan.' },
  { name: 'Dr. Kavita Rao', role: 'Chief Medical Officer', hospital: 'Hyderabad', rating: 5, quote: 'The engineers are professional, punctual, and careful around live clinical areas.' },
  { name: 'Dr. Sandeep Iyer', role: 'Biomedical Services Lead', hospital: 'Chennai', rating: 4, quote: 'The service documentation is practical and useful during internal equipment audits.' },
  { name: 'Dr. Priya Kapoor', role: 'Hospital Administrator', hospital: 'Jaipur', rating: 5, quote: 'CMC gave us predictable maintenance budgeting without compromising on spare-part quality.' },
  { name: 'Dr. Vikram Singh', role: 'Medical Superintendent', hospital: 'Lucknow', rating: 5, quote: 'Their preventive maintenance schedule is followed consistently across our wards.' },
  { name: 'Dr. Meera Nair', role: 'Director of Clinical Services', hospital: 'Thiruvananthapuram', rating: 4, quote: 'The support desk keeps our team informed from the first call through closure.' },
  { name: 'Dr. Rohit Bansal', role: 'Facility Director', hospital: 'Gurugram', rating: 5, quote: 'The team understands hospital operations and works around patient-care priorities.' },
  { name: 'Dr. Shalini Deshpande', role: 'Quality Head', hospital: 'Pune', rating: 5, quote: 'Calibration records and visit summaries are delivered in a format our quality team can use.' },
  { name: 'Dr. Aditya Verma', role: 'Chief Operating Officer', hospital: 'Indore', rating: 4, quote: 'A responsive maintenance partner with clear communication and sensible contract options.' },
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
      {/* 3. CALCULATOR AND CONTRACT INFORMATION */}
      <section className="py-5 md:py-7 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center mb-4 md:mb-5">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] mb-1 block">Interactive Tool</span>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter">Estimate Your <span className="text-brand-600">Contract Cost</span></h2>
          <div className="w-12 h-1 bg-brand-600 mx-auto rounded-full mt-2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] gap-4 lg:gap-6 items-start text-left">
          <div className="min-w-0 rounded-[2rem] bg-white/50">
            <AMCCMCCalculator />
          </div>
          <div className="space-y-2 pt-1 lg:pt-2">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter text-center md:text-left">Maintenance <span className="text-brand-600">Simplified</span></h2>
            <p className="text-slate-600 leading-snug font-light text-[11px] md:text-xs text-center md:text-left">
              Medical equipment requires more than just repairs; it needs a continuous lifecycle management strategy. Our contracts are designed to shift the burden of maintenance from doctors to engineers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
              <div className="bg-white p-3 md:p-4 rounded-2xl border border-slate-100 space-y-1.5 shadow-sm">
                <h3 className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-tight">What is AMC?</h3>
                <p className="text-[11px] text-slate-500 leading-snug font-light">
                  An <strong>Annual Maintenance Contract</strong> covers the labor charges for service and preventive maintenance. If a part breaks, it is billed separately. Ideal for new equipment still under component warranty.
                </p>
              </div>

              <div className="bg-brand-600 p-3 md:p-4 rounded-2xl text-white shadow-xl shadow-brand-600/20 space-y-1.5">
                <h3 className="text-sm md:text-base font-bold uppercase tracking-tight text-white">What is CMC?</h3>
                <p className="text-[11px] text-brand-50 leading-snug font-light">
                  A <strong>Comprehensive Maintenance Contract</strong> is the "Ultimate" protection. It covers labor, service, and the full cost of all spare parts. It provides a fixed annual budget with zero financial surprises.
                </p>
              </div>
            </div>

            <div className="relative pt-0.5">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-600/5 rounded-full blur-[80px]" />
              <div className="relative bg-white rounded-2xl p-3 md:p-4 border border-slate-100 space-y-2 shadow-sm">
                <h3 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-widest text-center whitespace-nowrap">MedGenz Advantage</h3>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {[
                    { t: "NABL Calibration", d: "Standard on all critical devices." },
                    { t: "24/7 Helpline", d: "Direct access to biomedical experts." },
                    { t: "OEM Spare Parts", d: "Zero compromise on component quality." },
                    { t: "Software Updates", d: "Keeping your devices technologically current." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <div>
                        <p className="font-bold text-slate-900 uppercase text-[9px] tracking-wider">{item.t}</p>
                        <p className="text-[10px] text-slate-500 font-light leading-tight">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 4. RATING SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-brand-600 font-black uppercase tracking-[0.25em] text-[10px] md:text-xs mb-3">Hospital Partner Feedback</p>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">Trusted by <span className="text-brand-600">Clinical Teams</span></h2>
            <div className="w-16 h-1 bg-brand-600 mx-auto rounded-full mt-4" />
          </div>
          <ReviewSlider reviews={reviews} />
        </div>
      </section>

      <SiteFAQ title="Contract FAQs" faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))} />

      <ECGCTA />
    </div>
  );
}
