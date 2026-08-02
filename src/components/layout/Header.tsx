'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-500 py-6',
          shouldBeSolid
            ? 'bg-white/95 backdrop-blur-xl shadow-xl py-3 border-b border-slate-100'
            : 'bg-transparent border-b border-white/10'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 md:h-16 w-40 md:w-56 transition-all duration-500">
                <Image
                    src="/images/brand-logo-mg/medgenz-logo/medgenz-logo1.webp"
                    alt="MedGenz Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'transition-all duration-300 relative group py-2',
                  shouldBeSolid ? 'text-slate-900' : 'text-white',
                  pathname === link.href ? 'text-brand-600' : ''
                )}
              >
                {link.name}
                <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full",
                    pathname === link.href ? "w-full" : ""
                )} />
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                'px-8 py-2 rounded-xl transition-all duration-500 transform hover:-translate-y-0.5',
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
            <Menu className={cn('w-6 h-6', shouldBeSolid ? 'text-slate-900' : 'text-white')} />
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
