import type { Metadata } from "next";
import { withSeoMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = withSeoMetadata({
  title: "Medical Gas Pipeline Systems | MedGenz",
  description: "Explore medical gas pipeline design, installation, testing, and equipment for healthcare facilities across India.",
  keywords: ["Medical Gas Pipeline", "MGPS", "Hospital Gas Systems"],
}, "/services/medical-gas-pipeline-system");

export default function MedicalGasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
