"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(result.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('An unexpected error occurred. Please try again.');
    }
  };

  const contactInfo = [
    {
      title: "Call Us",
      details: ["+91 97164 12630", "+91 83839 39473"],
      icon: Phone,
      href: "tel:+919716412630"
    },
    {
      title: "Email Us",
      details: ["info@medgenz.com", "sales@medgenz.com"],
      icon: Mail,
      href: "mailto:info@medgenz.com"
    },
    {
      title: "Visit Our Office",
      details: ["Plot No. 87 F/F kh No. 31/25,", "Dwarka Sector-3, Matiala, New Delhi"],
      icon: MapPin,
      href: "https://maps.google.com"
    },
    {
      title: "Working Hours",
      details: ["Mon - Sat: 9:30 AM - 6:30 PM", "Sunday: Closed"],
      icon: Clock
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "MedGenz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 87 F/F kh No. 31/25, sector-3, matiala",
        "addressLocality": "New Delhi",
        "postalCode": "110059",
        "addressCountry": "India"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9716412630",
          "contactType": "Sales"
        },
        {
          "@type": "ContactPoint",
          "email": "info@medgenz.com",
          "contactType": "Information"
        }
      ]
    }
  };

  return (
    <div className="pt-20 font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter leading-tight">Get In <span className="text-brand-500">Touch</span></h1>
          <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto font-light">
            Ready to start your next healthcare project? Our experts are here to help you build the best medical infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Contact Details */}
          <div className="md:col-span-1 space-y-10">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 shadow-sm border border-brand-100">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-widest text-sm">{item.title}</h3>
                  {item.details.map((detail, d_i) => (
                    <p key={d_i} className="text-slate-500 font-light leading-relaxed">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <div className="p-8 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter relative z-10">Send Us a <span className="text-brand-600">Message</span></h2>

              {status === 'success' ? (
                <div className="py-20 text-center space-y-6 relative z-10 animate-in fade-in zoom-in duration-500">
                   <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-200">
                      <CheckCircle2 className="w-12 h-12" />
                   </div>
                   <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Inquiry Sent Successfully!</h3>
                   <p className="text-slate-500 text-lg font-light max-w-md mx-auto">
                      Thank you for contacting MedGenz. Our engineering team will review your requirements and get back to you shortly.
                   </p>
                   <button
                     onClick={() => setStatus('idle')}
                     className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-600 transition-all shadow-xl"
                   >
                     Send Another Message
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. John Doe"
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-100 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@hospital.com"
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-100 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-100 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-100 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10 outline-none transition-all bg-white font-medium appearance-none cursor-pointer"
                      >
                        <option>General Inquiry</option>
                        <option>Modular OT Project</option>
                        <option>MGPS Installation</option>
                        <option>Hospital Furniture</option>
                        <option>IVF Lab Setup</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Your Requirements</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-100 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/10 outline-none transition-all resize-none font-medium"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-bold uppercase tracking-widest">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    disabled={status === 'loading'}
                    className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-lg uppercase tracking-widest hover:bg-brand-600 transition-all transform hover:-translate-y-1 shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-4 disabled:opacity-50 disabled:transform-none"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" /> Processing...
                      </>
                    ) : (
                      'Send Inquiry Now'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-slate-100 relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-xs gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
             <MapPin className="w-8 h-8 text-brand-500" />
          </div>
          [Interactive Google Map Integration]
        </div>
      </section>
    </div>
  );
}
