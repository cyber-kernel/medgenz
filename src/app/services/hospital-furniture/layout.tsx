import type { Metadata } from "next";
import { withSeoMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = withSeoMetadata({
  title: "Hospital Furniture & ICU Beds | MedGenz",
  description: "Explore hospital furniture, ICU beds, ward beds, examination tables, and patient-care equipment from MedGenz.",
  keywords: ["Hospital Furniture", "ICU Beds", "Medical Equipment"],
}, "/services/hospital-furniture");

export default function HospitalFurnitureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
