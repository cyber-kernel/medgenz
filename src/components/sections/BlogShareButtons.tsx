'use client';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

interface BlogShareButtonsProps {
  url: string;
  title: string;
}

export default function BlogShareButtons({ url, title }: BlogShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const shareLinks = [
    {
      label: 'Share on Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    },
    {
      label: 'Share on LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}`,
      className: 'hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]',
    },
    {
      label: 'Visit MedGenz on Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/medgenz_india_pvt_ltd/',
      className: 'hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]',
    },
    {
      label: 'Visit MedGenz on YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@MedGenzIndiaPvtLtd',
      className: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
    },
  ];

  return (
    <div className="flex gap-3">
      {shareLinks.map(({ label, icon: Icon, href, className }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`w-12 h-12 rounded-2xl bg-slate-50 border border-transparent flex items-center justify-center text-slate-400 transition-all shadow-sm hover:shadow-lg ${className}`}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
