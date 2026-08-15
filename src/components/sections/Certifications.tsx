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
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 text-center uppercase tracking-tighter">Our Certifications &amp; <span className="text-brand-600">Compliance</span></h2>
                <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4"></div>
                <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto text-center font-light">MedGenz is <span className="font-bold text-brand-600">certified and trusted</span> by leading regulatory bodies for healthcare safety.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {certs.map((cert) => (
                    <div
                        key={cert.name}
                        onClick={() => setModalImg(cert.image)}
                        className="bg-slate-50 rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-200 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className="w-full h-32 md:h-64 mb-6 md:mb-8 flex items-center justify-center p-2 relative bg-white rounded-2xl border border-slate-100 shadow-inner">
                            <Image
                                src={cert.image}
                                alt={cert.name}
                                fill
                                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-sm md:text-2xl font-black text-slate-900 mb-1 md:mb-2 uppercase tracking-tighter">{cert.name}</h3>
                        <p className="text-[10px] md:text-sm text-slate-500 font-medium">{cert.desc}</p>
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
