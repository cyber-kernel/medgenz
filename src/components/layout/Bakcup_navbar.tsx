'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blogs', href: '/blogs' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // HIDE HEADER IN ADMIN PANEL COMPLETELY
  if (pathname?.includes('/admin')) {
    return null;
  }

  // On Home page hero, we want transparent. On other pages or when scrolled, white.
  const isHome = pathname === '/';
  const shouldBeSolid = !isHome || isScrolled;

  return (
    <>
      {/* Top Header Bar - Always Visible */}
      <div
        className={cn(
          "fixed top-0 w-full z-[100] bg-slate-950 text-white text-[9px] md:text-[11px] py-2 border-b border-white/5 shadow-2xl transition-all duration-500"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0 font-black uppercase tracking-[0.15em]">
          {/* Sales Side */}
          <div className="flex gap-4 md:gap-10">
            <span className="text-brand-500 hidden sm:inline">Sales:</span>
            <a href="tel:+919716412630" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
              <Phone className="w-3 h-3 text-brand-500" />
              +91 9716412630
            </a>
            <a href="mailto:sales@medgenz.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
              <Mail className="w-3 h-3 text-brand-500" />
              sales@medgenz.com
            </a>
          </div>

          {/* Support Side */}
          <div className="flex gap-4 md:gap-10 border-t border-white/10 pt-1 md:pt-0 md:border-none w-full md:w-auto justify-center">
            <span className="text-brand-500 hidden sm:inline">Support:</span>
            <a href="tel:+918130118081" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
              <Phone className="w-3 h-3 text-brand-500" />
              +91 8130118081
            </a>
            <a href="mailto:support@medgenz.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
              <Mail className="w-3 h-3 text-brand-500" />
              support@medgenz.com
            </a>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          'fixed w-full z-[90] transition-all duration-500',
          isScrolled
            ? 'top-[60px] md:top-[34px] py-1'
            : 'top-[60px] md:top-[34px] py-2',
          shouldBeSolid
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-100'
            : 'bg-transparent border-b border-white/10'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center group py-1 shrink-0">
            <div className="relative h-24 md:h-28 lg:h-32 w-64 md:w-72 lg:w-80 overflow-visible">
              <Image
                src="/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp"
                alt="MedGenz Logo"
                fill
                className="object-contain object-left drop-shadow-md scale-[1.15] origin-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'transition-all duration-300 relative group py-2 whitespace-nowrap',
                  shouldBeSolid ? 'text-slate-900' : 'text-white',
                  pathname === link.href ? 'text-brand-600' : ''
                )}
              >
                {link.name}

                <span
                  className={cn(
                    'absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full',
                    pathname === link.href ? 'w-full' : ''
                  )}
                />
              </Link>
            ))}

            <Link
              href="/contact"
              className={cn(
                'px-7 py-2 rounded-xl transition-all duration-500 transform hover:-translate-y-0.5 whitespace-nowrap',
                shouldBeSolid
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-slate-900'
                  : 'bg-white text-slate-900 hover:bg-brand-600 hover:text-white'
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu
              className={cn(
                'w-6 h-6',
                shouldBeSolid ? 'text-slate-900' : 'text-white'
              )}
            />
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-10 text-3xl font-black transition-all duration-500 uppercase tracking-widest',
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <button
          className="absolute top-8 right-8 text-slate-900 hover:text-brand-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-10 h-10" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              'hover:text-brand-600 transition-all transform hover:scale-110',
              pathname === link.href ? 'text-brand-600 underline underline-offset-8' : 'text-slate-900'
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-brand-600 text-white px-12 py-5 rounded-[2rem] hover:bg-slate-900 transition-all shadow-2xl shadow-brand-600/40"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}
