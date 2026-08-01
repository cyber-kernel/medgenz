import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  preload: true,
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: "MedGenz | Premier Medical Equipment & MGPS Manufacturers in India",
  description: "ISO 9001 & CE certified manufacturer of Modular Operation Theatres (MOT), Medical Gas Pipeline Systems (MGPS), Hospital Furniture, and complete turnkey hospital infrastructure. 150+ projects, 12+ years experience.",
  keywords: [
    "Modular Operation Theatre",
    "MGPS",
    "Medical Gas Pipeline System",
    "Hospital Furniture",
    "Hospital Equipment",
    "ICU Beds",
    "Medical Gas System India",
    "Healthcare Infrastructure",
    "Hospital Construction",
  ],
  authors: [{ name: "MedGenz" }],
  creator: "MedGenz",
  publisher: "MedGenz",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: "/images/brand-logo-mg/favicon-png-mg/mg-favicon1.png",
    apple: "/images/brand-logo-mg/favicon-png-mg/mg-favicon1.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.medgenz.com",
    siteName: "MedGenz",
    title: "MedGenz | Premier Medical Equipment & MGPS Manufacturers",
    description:
      "ISO certified manufacturer of Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure in India.",
    images: [
      {
        url: "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/medgenz-logo1.webp",
        width: 1200,
        height: 630,
        alt: "MedGenz Logo",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedGenz | Premier Medical Equipment & MGPS Manufacturers",
    description:
      "ISO certified manufacturer of Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure in India.",
    creator: "@medgenz",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.medgenz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data - Organization & Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
