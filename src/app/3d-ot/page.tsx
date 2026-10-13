import React from 'react';
import { Metadata } from 'next';
import ClientWrapper from './ClientWrapper';

export const metadata: Metadata = {
  title: 'Interactive 3D Modular Operation Theatre Studio | MedGenz',
  description: 'Explore MedGenz 3D Operation Theatre (OT) 3D Studio. Interactive 3D layout planner, surgical equipment catalog, laminar airflow visualization, and medical gas pipeline infrastructure inspection.',
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
};

export default function ThreeDOTPage() {
  return (
    <div className="w-full h-screen bg-slate-950 overflow-hidden">
      <ClientWrapper />
    </div>
  );
}
