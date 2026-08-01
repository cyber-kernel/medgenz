"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { signOut } from 'next-auth/react';

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Blogs", href: "/admin/blogs", icon: FileText },
  { name: "Projects", href: "/admin/projects", icon: FolderKanban },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  // If we're on the login page, don't show the sidebar
  if (pathname === '/admin/login') {
    return <div className="relative z-[60] bg-slate-50 min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex relative z-[9999] isolate">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white w-72 flex flex-col fixed inset-y-0 left-0 z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="font-black text-xl tracking-tighter uppercase">
            MedGenz <span className="text-brand-500">Admin</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6 space-y-2 flex-grow">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between p-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all group ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <link.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-brand-500'}`} />
                  {link.name}
                </div>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="w-full flex items-center gap-3 p-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow md:ml-72 transition-all duration-300 flex flex-col min-h-screen">
        <header className="bg-white border-b border-slate-100 p-6 flex items-center justify-between sticky top-0 z-[1000] md:hidden">
            <div className="font-black text-xl tracking-tighter uppercase">
                MedGenz <span className="text-brand-500">Admin</span>
            </div>
            <button onClick={() => setIsSidebarOpen(true)}>
                <Menu className="w-6 h-6 text-slate-900" />
            </button>
        </header>
        <div className="max-w-7xl mx-auto min-h-screen w-full relative">
          {children}
        </div>
      </main>
    </div>
  );
}
