import type { Metadata } from "next";
import { withSeoMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = withSeoMetadata({
  title: "Hospital Nurse Call Systems | MedGenz",
  description: "Explore nurse call systems that connect patients and care teams through bedside stations, handsets, and alerts.",
  keywords: ["Nurse Call System", "Patient Call", "Hospital Communication"],
}, "/services/nurse-call-system");

export default function NurseCallLayout({ children }: { children: React.ReactNode }) {
  return children;
}
