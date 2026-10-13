'use client';

import React from 'react';
import { Award, ShieldCheck, Wrench, Compass, Box, Flame } from 'lucide-react';

interface TurnkeyWorkflowPanelProps {
  onClose: () => void;
  onRequestProposal: () => void;
}

export const TurnkeyWorkflowPanel: React.FC<TurnkeyWorkflowPanelProps> = ({
  onClose,
  onRequestProposal,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Architectural Planning & Engineering Design',
      icon: <Compass className="w-5 h-5 text-brand-400" />,
      desc: 'CAD 3D layout design, room zoning (clean, sterile, aseptic), HVAC heat-load calculation, and laminar flow airflow vector modeling compliant with NABH and HTM 03-01 guidelines.',
    },
    {
      num: '02',
      title: 'Precision Factory Fabrication',
      icon: <Box className="w-5 h-5 text-brand-300" />,
      desc: 'In-house manufacturing of antimicrobial HPL/stainless steel wall panels, hermetically sealed sliding doors, and terminal HEPA filter plenums with seamless quality control.',
    },
    {
      num: '03',
      title: 'Medical Gas Pipeline System (MGPS) Integration',
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      desc: 'Degreased medical-grade copper pipeline distribution, automatic manifold setup, Area Valve Service Units (AVSU), and digital gas alarm panels meeting HTM 02-01 standards.',
    },
    {
      num: '04',
      title: 'On-Site Installation & Cleanroom Erection',
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      desc: 'Laser-leveled floor coving, seamless antibacterial silicone joints, ceiling pendant suspension anchors, surgical scrub sink installations, and surgeon control panel mounting.',
    },
    {
      num: '05',
      title: 'Commissioning, Testing & Validation (NABH / ISO)',
      icon: <Award className="w-5 h-5 text-teal-400" />,
      desc: 'PAO/DOP HEPA filter leak testing, airborne particle counting (ISO Class 5), room positive differential pressure verification (+15 to +20 Pa), and air velocity mapping.',
    },
    {
      num: '06',
      title: 'Annual Maintenance Contracts (AMC) & 24/7 Support',
      icon: <ShieldCheck className="w-5 h-5 text-brand-400" />,
      desc: 'Scheduled preventive maintenance, filter replacement cycles, gas purity audits, spare parts supply, and technical engineering standby support across India.',
    },
  ];

  return (
    <div className="absolute inset-0 z-30 overflow-y-auto bg-slate-950/95 backdrop-blur-xl p-6 sm:p-10 text-slate-100 animate-in fade-in duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold text-brand-400 tracking-wider uppercase mb-1">
              MedGenz India Pvt. Ltd. · Turnkey Execution
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Hospital Turnkey Infrastructure Engineering
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              End-to-end design, manufacturing, erection, and NABH validation for Modular Operation Theatres, Medical Gas Pipeline Systems, and IVF Laboratories.
            </p>
          </div>
          <button
            onClick={onClose}
            className="py-1.5 px-3 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            Back to 3D Scene
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/60">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-400">Phase {step.num}</span>
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-100 mb-2">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-900/20 border border-brand-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Planning a new hospital project or upgrading existing OT suites?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Speak with our healthcare infrastructure engineering team for layout CAD drawings, bill of quantities (BOQ), and turnkey quotes.
            </p>
          </div>
          <button
            onClick={onRequestProposal}
            className="w-full sm:w-auto py-2.5 px-6 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-brand-600/30 whitespace-nowrap shrink-0"
          >
            Request Turnkey Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
