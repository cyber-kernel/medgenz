import type { Metadata } from "next";
import { withSeoMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = withSeoMetadata({
  title: "Hospital Curtain Track Systems | MedGenz",
  description: "Explore hospital privacy curtain track systems, fittings, and configurations for patient wards and clinical spaces.",
  keywords: ["Hospital Curtain Track", "Privacy Curtains", "IV Tracks"],
}, "/services/curtain-track-system");

export default function CurtainTrackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
