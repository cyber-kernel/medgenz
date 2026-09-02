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
            ? 'top-[60px] md:top-[34px] py-0'
            : 'top-[60px] md:top-[34px] py-1',

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
          <button
            type="button"
            aria-label="Open menu"
            className={cn(
              'md:hidden',
              'p-2',
              'rounded-lg',
              'backdrop-blur-md',

              shouldBeSolid
                ? 'bg-slate-100'
                : 'bg-white/10'
            )}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu
              className={cn(
                'w-6 h-6',

                shouldUseDarkText
                  ? 'text-slate-900'
                  : 'text-white'
              )}
            />
          </button>
        </div>
      </nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <div
        className={cn(
          'fixed top-[156px] left-4 right-4',
          'bg-white',
          'z-[110]',
          'flex flex-col',
          'items-center',
          'justify-start',
          'gap-2',
          'p-6',
          'rounded-2xl',
          'border border-slate-100',
          'shadow-2xl',
          'max-h-[calc(100vh-172px)]',
          'overflow-y-auto',
          'text-base',
          'font-black',
          'transition-all',
          'duration-500',
          'uppercase',
          'tracking-widest',

          isMobileMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Close menu"
          className="
            absolute
            top-8
            right-8
            text-slate-900
            hover:text-brand-600
            transition-colors
          "
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-10 h-10" />
        </button>

        {/* Mobile Links */}
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              'w-full',
              'py-3',
              'text-center',
              'hover:text-brand-600',
              'transition-all',
              'transform',
              'hover:scale-110',

              pathname === link.href
                ? 'text-brand-600 underline underline-offset-8'
                : 'text-slate-900'
            )}
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Contact */}
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="
            bg-brand-600
            text-white
            w-full
            max-w-xs
            px-6
            py-3
            rounded-xl
            text-center
            hover:bg-slate-900
            transition-all
            shadow-2xl
            shadow-brand-600/40
          "
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}