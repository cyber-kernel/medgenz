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
  { name: 'AMC/CMC', href: '/amc-cmc' },
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Hide header completely inside admin panel
  if (pathname?.includes('/admin')) {
    return null;
  }

  const transparentRoutes = ['/', '/about', '/services', '/projects', '/blogs', '/contact'];
  const shouldBeSolid = !transparentRoutes.includes(pathname ?? '') || isScrolled;
  const shouldUseDarkText = shouldBeSolid;

  return (
    <>
      {/* =========================================================
          TOP CONTACT BAR
      ========================================================= */}
      <div
        className={cn(
          'fixed top-0 left-0 w-full z-[100]',
          'bg-slate-950 text-white',
          'text-[9px] md:text-[11px]',
          'py-2',
          'border-b border-white/5',
          'shadow-2xl'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0 font-black uppercase tracking-[0.15em]">

          {/* Sales */}
          <div className="flex items-center gap-3 md:gap-6">
            <span className="text-brand-500 hidden sm:inline">
              Sales:
            </span>

            <a
              href="tel:+919716412630"
              className="flex items-center gap-2 hover:text-brand-400 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-brand-500" />
              +91 9716412630
            </a>

            <a
              href="mailto:sales@medgenz.com"
              className="flex items-center gap-2 hover:text-brand-400 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-brand-500" />
              sales@medgenz.com
            </a>
          </div>

          {/* Support */}
          <div className="flex items-center gap-3 md:gap-6 border-t border-white/10 pt-1 md:pt-0 md:border-none w-full md:w-auto justify-center">
            <span className="text-brand-500 hidden sm:inline">
              Support:
            </span>

            <a
              href="tel:+918130118081"
              className="flex items-center gap-2 hover:text-brand-400 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-brand-500" />
              +91 8130118081
            </a>

            <a
              href="mailto:support@medgenz.com"
              className="flex items-center gap-2 hover:text-brand-400 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-brand-500" />
              support@medgenz.com
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVIGATION
      ========================================================= */}
      <nav
        className={cn(
          'fixed left-0 w-full z-[90]',
          'transition-all duration-500',

          isScrolled
            ? 'top-[44px] md:top-[31px] py-0'
            : 'top-[44px] md:top-[31px] py-1',

          shouldBeSolid
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-100'
            : 'bg-transparent border-b border-white/10'
        )}
      >
        {/* IMPORTANT:
            This is intentionally MUCH narrower than 1400px.
            This prevents the navigation from looking stretched.
        */}
        <div
          className="
            max-w-[1180px]
            mx-auto
            px-5
            md:px-6
            lg:px-8
            flex
            items-center
            justify-between
          "
        >

          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            href="/"
            className="relative flex items-center shrink-0 group"
          >
            {/* 
              Reduced logo container size
            */}
            <div
              className="
                relative
                h-16
                md:h-20
                lg:h-24
                w-40
                md:w-48
                lg:w-56
                overflow-visible
              "
            >
              <Image
                src="/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp"
                alt="MedGenz Logo"
                fill
                priority
                sizes="(max-width: 768px) 160px, 224px"
                className="
                  object-contain
                  object-left
                  drop-shadow-md
                  scale-[1.20]
                  md:scale-[1.20]
                  lg:scale-[1.20]
                  origin-left
                "
              />
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-4
              lg:gap-6
              text-[11px]
              lg:text-[13px]
              font-bold
              uppercase
              tracking-[0.12em]
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'transition-all duration-300',
                  'relative group',
                  'py-2',
                  'whitespace-nowrap',

                  shouldUseDarkText
                    ? 'text-slate-900'
                    : 'text-white',

                  pathname === link.href
                    ? 'text-brand-600'
                    : ''
                )}
              >
                {link.name}

                <span
                  className={cn(
                    'absolute',
                    'bottom-0',
                    'left-0',
                    'w-0',
                    'h-0.5',
                    'bg-brand-600',
                    'transition-all',
                    'duration-300',
                    'group-hover:w-full',

                    pathname === link.href
                      ? 'w-full'
                      : ''
                  )}
                />
              </Link>
            ))}

            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-6 py-2 rounded-xl whitespace-nowrap transition-all duration-500 transform hover:-translate-y-0.5 bg-brand-600 text-white hover:bg-white hover:text-slate-900 active:bg-white active:text-slate-900"
            >
              Contact
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}
          <div className="relative md:hidden">
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={cn(
                'relative flex size-10 items-center justify-center overflow-hidden',
                'rounded-lg backdrop-blur-md transition-colors',
                shouldBeSolid ? 'bg-slate-100' : 'bg-white/10'
              )}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className="relative flex size-6 items-center justify-center">
                <Menu
                  aria-hidden="true"
                  className={cn(
                    'absolute size-6 transition-all duration-200',
                    isMobileMenuOpen
                      ? 'rotate-90 scale-75 opacity-0'
                      : 'rotate-0 scale-100 opacity-100',
                    shouldUseDarkText ? 'text-slate-900' : 'text-white'
                  )}
                />
                <X
                  aria-hidden="true"
                  className={cn(
                    'absolute size-6 transition-all duration-200',
                    isMobileMenuOpen
                      ? 'rotate-0 scale-100 opacity-100'
                      : '-rotate-90 scale-75 opacity-0',
                    shouldUseDarkText ? 'text-slate-900' : 'text-white'
                  )}
                />
              </span>
            </button>

            <div
              className={cn(
                'absolute right-0 top-full mt-2 w-max min-w-[22vw] max-w-[calc(100vw-1rem)]',
                'overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-2xl',
                'origin-top transition-all duration-300 ease-out',
                'uppercase tracking-widest',
                isMobileMenuOpen
                  ? 'visible scale-y-100 opacity-100'
                  : 'invisible scale-y-0 opacity-0 pointer-events-none'
              )}
            >
              <div className="flex flex-col gap-1 text-[9px] font-black leading-tight">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'whitespace-nowrap rounded-md px-2 py-2 text-center transition-colors',
                      pathname === link.href
                        ? 'bg-brand-50 text-brand-600'
                        : 'text-slate-900 hover:bg-slate-50 hover:text-brand-600'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-1 whitespace-nowrap rounded-md bg-brand-600 px-2 py-2 text-center text-white transition-colors hover:bg-slate-900"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}