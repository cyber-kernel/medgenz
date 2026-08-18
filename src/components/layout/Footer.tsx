'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Youtube, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/medgenz/', color: 'bg-[#0077b5]' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@medgenzindiapvtltd?si=gipkOPLrCWGe4L37', color: 'bg-[#FF0000]' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/medgenz_india_pvt_ltd/', color: 'bg-[#E1306C]' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  const pathname = usePathname();

  // HIDE FOOTER IN ADMIN PANEL COMPLETELY
  if (pathname?.includes('/admin')) {
    return null;
  }

  return (
    <footer className="bg-[#1c1e21] pt-16 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-white p-2 rounded shadow-sm">
              <Image
                src="/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp"
                alt="MedGenz Footer Logo"
                width={360}
                height={160}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-gray-400 max-w-sm mb-6 leading-relaxed text-[13px] md:text-base">
            MedGenz is a leading provider of comprehensive medical engineering and healthcare infrastructure solutions like Modular Operation Theatres, Medical Gas Pipeline System, Hospital Furniture and Equipments across the nation.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${social.color} text-white border border-transparent md:bg-transparent md:text-gray-400 md:border-gray-700 md:hover:${social.color} md:hover:text-white md:hover:border-transparent`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-[13px] md:text-sm text-gray-400">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-brand-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Info</h4>
          <ul className="space-y-5 text-[13px] md:text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-gray-200 font-semibold mb-1">Corporate Office:</span>
                <span className="leading-relaxed">
                  Plot No. 87 F/F kh No. 31/25, near DPS, Dwarka Sector-3, Matiala, New Delhi, 110059
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1.5">
                <a href="mailto:info@medgenz.com" className="hover:text-brand-400 transition-colors">info@medgenz.com</a>
                <a href="mailto:sales@medgenz.com" className="hover:text-brand-400 transition-colors">sales@medgenz.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1.5">
                <a href="tel:+919716412630" className="hover:text-brand-400 transition-colors">+91 97164 12630</a>
                <a href="tel:+918383939473" className="hover:text-brand-400 transition-colors">+91 83839 39473</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
        <p>© {new Date().getFullYear()} MedGenz India Private Limited. All rights reserved.</p>
        <p>Designed with Excellence for SEO.</p>
      </div>
    </footer>
  );
}
