'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const certs = [
  {
    name: "Udhyam",
    desc: "Government of India recognized MSME Enterprise",
    image: "/images/certificates/udhyam.webp"
  },
  {
    name: "CE Certified",
    desc: "European Conformity Standards for Medical Devices",
    image: "/images/certificates/ce-certified.webp"
  },
  {
    name: "ISO 9001",
    desc: "Quality Management System Certified",
    image: "/images/certificates/iso-9001.webp"
  },
  {
    name: "Import Export",
    desc: "Registered DGFT Import-Export License",
    image: "/images/certificates/import_export.webp"
  },
];

export default function Certifications() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="py-10 md:py-16 px-4 md:px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-black mb-3 text-gray-900 text-center uppercase tracking-tighter">Our Certifications &amp; <span className="text-brand-600">Compliance</span></h2>
                <div className="w-12 md:w-16 h-1 bg-brand-600 mx-auto rounded-full mb-3"></div>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto text-center font-light">MedGenz is <span className="font-bold text-brand-600">certified and trusted</span> by leading regulatory bodies for healthcare safety.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {certs.map((cert) => (
                    <div
                        key={cert.name}
                        onClick={() => setModalImg(cert.image)}
                        className="bg-slate-50 rounded-[1rem] md:rounded-[1.5rem] p-3 md:p-5 shadow-sm border border-slate-200 flex flex-col items-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div className="w-full h-20 md:h-40 mb-3 md:mb-5 flex items-center justify-center p-2 relative bg-white rounded-lg md:rounded-xl border border-slate-100 shadow-inner">
                            <Image
                                src={cert.image}
                                alt={cert.name}
                                fill
                                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-sm md:text-lg font-black text-slate-900 mb-0.5 uppercase tracking-tighter">{cert.name}</h3>
                        <p className="text-[8px] md:text-[10px] text-slate-500 font-medium leading-tight">{cert.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Modal */}
        {modalImg && (
            <div
                className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                onClick={() => setModalImg(null)}
            >
                <div className="relative bg-white rounded-3xl max-w-4xl w-full p-2 md:p-4 shadow-2xl animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => setModalImg(null)}
                        className="absolute -top-12 right-0 md:top-6 md:-right-16 text-white hover:text-brand-500 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full h-[80vh]">
                        <Image
                            src={modalImg}
                            alt="Certificate Full View"
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        )}
    </section>
  );
}
