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
];

export default function Certifications() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">Our Certifications &amp; <span className="text-brand-600">Compliance</span></h2>
                <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4"></div>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto text-center">MedGenz is <span className="font-bold text-brand-600">certified and trusted</span> by leading regulatory bodies for healthcare safety.</p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-8">
                {certs.map((cert) => (
                    <div
                        key={cert.name}
                        onClick={() => setModalImg(cert.image)}
                        className="bg-white rounded-xl md:rounded-3xl p-3 md:p-8 shadow-sm border border-gray-200 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
                    >
                        <div className="w-full h-24 md:h-56 mb-3 md:mb-6 flex items-center justify-center p-1 md:p-2 relative">
                            <Image
                                src={cert.image}
                                alt={cert.name}
                                fill
                                className="object-contain drop-shadow-sm"
                            />
                        </div>
                        <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{cert.name}</h3>
                        <p className="text-[10px] md:text-sm text-gray-500 hidden md:block">{cert.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Modal */}
        {modalImg && (
            <div
                className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 md:p-10 transition-opacity"
                onClick={() => setModalImg(null)}
            >
                <div className="relative bg-white rounded-2xl max-w-4xl w-full p-2 md:p-4" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => setModalImg(null)}
                        className="absolute -top-10 right-0 md:top-4 md:-right-12 text-white hover:text-gray-300 transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full h-[80vh]">
                        <Image
                            src={modalImg}
                            alt="Certificate Full View"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                </div>
            </div>
        )}
    </section>
  );
}
