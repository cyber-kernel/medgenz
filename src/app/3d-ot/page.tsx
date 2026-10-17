import React from 'react';
import { Metadata } from 'next';
import ClientWrapper from './ClientWrapper';
import { withSeoMetadata } from '@/lib/seo-metadata';
import PageStructuredData from '@/components/PageStructuredData';

export const metadata: Metadata = withSeoMetadata({
  title: '3D Modular OT Planner | MedGenz',
  description: 'Explore a 3D modular operating theatre planner with surgical equipment, airflow, and medical gas system visualizations.',
  keywords: [
    '3D Operation Theatre',
    '3D OT Configurator',
    'Modular Operation Theatre 3D',
    'MedGenz 3D OT',
    'Hospital Infrastructure 3D',
    'Surgical Equipment 3D',
    'Laminar Airflow 3D',
    'Medical Gas Pipeline 3D',
  ],
}, '/3d-ot');

export default function ThreeDOTPage() {
  return (
    <>
      <PageStructuredData
        name="3D Modular OT Planner"
        description="Explore a 3D modular operating theatre planner with surgical equipment, airflow, and medical gas system visualizations."
        url="https://www.medgenz.com/3d-ot"
      />
      <div className="w-full h-screen bg-slate-950 overflow-hidden">
        <ClientWrapper />
      </div>
    </>
  );
}
