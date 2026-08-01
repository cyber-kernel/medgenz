import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function ECGCTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto bg-[#1c1e21] rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-brand-900/20 border border-gray-800 group">

            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-20 -ml-20 -mb-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-30"></div>

            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-30 pointer-events-none">
                <svg viewBox="0 0 1000 100" className="w-full h-auto drop-shadow-[0_0_8px_rgba(230,161,0,0.8)]" preserveAspectRatio="none">
                    <path fill="none" stroke="#E6A100" strokeWidth="2" className="animate-[draw-ecg_6s_linear_infinite]"
                          d="M0,50 L200,50 L220,20 L240,80 L260,50 L750,50 L770,10 L790,90 L810,50 L1000,50"
                          vectorEffect="non-scaling-stroke">
                    </path>
                </svg>
            </div>

            <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                    Start Your Project
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                    Ready to Upgrade Your <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Hospital Infrastructure?</span>
                </h2>

                <p className="text-gray-400 font-medium mb-10 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Partner with MedGenz for reliable, international-grade Operation Theatres, ICU setups, and precise Medical Gas Pipeline Systems.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
                    <a href="tel:+919716412630" className="bg-brand-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(230,161,0,0.2)] hover:bg-brand-500 hover:shadow-[0_0_30px_rgba(230,161,0,0.4)] transition-all duration-300 text-sm md:text-base inline-flex items-center justify-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto">
                        <Phone className="w-4 h-4 md:w-5 md:h-5" />
                        Call Expert
                    </a>

                    <a href="https://wa.me/918383939473" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(37,211,102,0.15)] hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all duration-300 text-sm md:text-base inline-flex items-center justify-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto">
                        <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                        WhatsApp
                    </a>

                    <Link href="/contact" className="border border-gray-600 bg-gray-800/50 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold hover:bg-gray-700 hover:border-gray-400 transition-all duration-300 text-sm md:text-base inline-flex items-center justify-center gap-2 transform hover:-translate-y-1 backdrop-blur-sm w-full sm:w-auto">
                        <Calendar className="w-4 h-4 text-brand-400" />
                        Schedule Meeting
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
