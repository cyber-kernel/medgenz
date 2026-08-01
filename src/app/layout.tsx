import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "MedGenz | Premier Medical Equipment & MGPS Manufacturers",
  description: "Premier ISO certified manufacturer of Modular Operation Theatres (MOT), Medical Gas Pipeline Systems (MGPS), and turnkey hospital infrastructure in India.",
  icons: {
    icon: "/images/brand-logo-mg/favicon-png-mg/mg-favicon1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          poppins.variable,
          "font-inter bg-white text-slate-900 antialiased"
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
