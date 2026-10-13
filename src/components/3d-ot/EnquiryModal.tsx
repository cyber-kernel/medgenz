'use client';

import React, { useState } from 'react';
import { ProductItem } from '@/types/theatre';
import { X, Send, CheckCircle2, Hospital, Mail, Phone, User, Loader2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: ProductItem | null;
  layoutId: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  layoutId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalName: '',
    designation: 'Doctor / Surgeon',
    projectType: 'Modular OT Project',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const combinedMessage = [
        `Hospital/Clinic: ${formData.hospitalName}`,
        `3D OT Layout Preset: ${layoutId}`,
        selectedProduct ? `Configured Item: ${selectedProduct.name}` : null,
        `Project Scope: ${formData.projectType}`,
        formData.notes ? `User Requirements: ${formData.notes}` : null,
      ]
        .filter(Boolean)
        .join('\n');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.projectType,
          designation: formData.designation,
          message: combinedMessage,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit request. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 text-slate-100">
        <div className="flex items-start justify-between pb-3 mb-4 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-brand-400 uppercase">
              MedGenz India Pvt. Ltd.
            </span>
            <h3 className="text-lg font-bold text-white leading-tight">
              {selectedProduct
                ? `Request Quote: ${selectedProduct.name}`
                : 'Healthcare Infrastructure Consultation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Consultation Request Received</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || 'Doctor / Planner'}</strong>. Our hospital engineering team at MedGenz India will review your room configuration and contact you within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="py-2 px-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
              >
                Return to 3D Viewer
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            {selectedProduct && (
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Configured Item:</span>
                <span className="text-brand-400 font-semibold">{selectedProduct.name}</span>
              </div>
            )}

            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1">Your Full Name *</label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-slate-200 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Hospital / Clinic Name *</label>
                <div className="relative">
                  <Hospital className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="City Multi-Specialty Hospital"
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-slate-200 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="doctor@hospital.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-slate-200 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Contact Phone *</label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-2 text-slate-200 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1">Designation</label>
                <select
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-brand-500"
                >
                  <option value="Doctor / Surgeon">Doctor / Surgeon</option>
                  <option value="Principal Architect">Principal Architect</option>
                  <option value="Project Contractor">Project Contractor</option>
                  <option value="Medical College Admin">Medical College Admin</option>
                  <option value="Organisational Staff">Organisational Staff</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Project Scope</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-brand-500"
                >
                  <option value="Modular OT Project">Modular OT Turnkey Project</option>
                  <option value="MGPS Installation">Medical Gas Pipeline System (MGPS)</option>
                  <option value="Hospital Furniture">ICU Beds & Hospital Furniture</option>
                  <option value="IVF Lab Setup">IVF Cleanroom & Embryology Lab</option>
                  <option value="General Inquiry">General Technical Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Requirements / Notes</label>
              <textarea
                rows={3}
                placeholder="Number of OTs, room dimensions, or specific equipment requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-brand-500 resize-none"
              />
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
              <span>Attached: <strong>3D OT Layout ({layoutId})</strong></span>
              <span className="text-emerald-400 font-medium">Free Technical BOQ</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-brand-600/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Technical Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
