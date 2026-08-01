import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamic import to keep client component separate
const AboutClient = dynamic(() => import("./client"), {
  loading: () => <div className="min-h-screen" />,
});

export const metadata: Metadata = {
  title: "About MedGenz | 12+ Years of Excellence in Hospital Infrastructure",
  description: "Discover MedGenz's journey as India's premier manufacturer of Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure. ISO 9001 & CE certified.",
  keywords: [
    "About MedGenz",
    "Hospital manufacturer India",
    "MOT supplier",
    "MGPS manufacturer",
    "Medical equipment company",
  ],
  alternates: {
    canonical: "https://www.medgenz.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://www.medgenz.com/about",
    title: "About MedGenz | 12+ Years of Excellence in Hospital Infrastructure",
    description:
      "Discover MedGenz's journey as India's premier manufacturer of Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.",
    images: [
      {
        url: "https://www.medgenz.com/images/about-us/about-us-home/about-us.webp",
        width: 1200,
        height: 630,
        alt: "MedGenz About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MedGenz | 12+ Years of Excellence",
    description:
      "India's premier manufacturer of Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
