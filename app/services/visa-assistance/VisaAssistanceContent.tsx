'use client';

import Image from 'next/image';
import VisaForm from '@/components/forms/VisaForm';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

const supportedCountries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'Italy', 'Spain', 'Netherlands', 'Switzerland', 'Dubai (UAE)',
  'Saudi Arabia', 'South Africa', 'Kenya', 'Tanzania', 'Rwanda',
];

const visaProcess = [
  { step: 1, title: 'Consultation', description: 'We discuss your travel plans and visa requirements.' },
  { step: 2, title: 'Documentation', description: 'We help you gather and prepare all required documents.' },
  { step: 3, title: 'Application', description: 'We submit your visa application on your behalf.' },
  { step: 4, title: 'Follow-up', description: 'We track your application and keep you updated.' },
];

const requiredDocuments = [
  'Valid passport (minimum 6 months validity)',
  'Completed visa application form',
  'Passport-sized photographs',
  'Proof of accommodation',
  'Travel itinerary',
  'Bank statements',
  'Employment letter',
  'Travel insurance',
];

export default function VisaAssistanceContent() {
  return (
    <div className="bg-[#080e15] min-h-screen">
      {/* Hero */}
      <div className="relative h-96 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1920&h=600&fit=crop" alt="Passport and Visa" fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="inline-flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Expert Guidance</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-6xl font-bold mb-4">Visa Assistance Services</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Expert guidance through visa application processes</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Form */}
          <div>
            <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40 }}>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl font-bold text-white mb-6">Request Visa Assistance</h2>
              <VisaForm />
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40 }}>
              <h2 className="text-2xl font-bold text-white mb-6">Our Visa Process</h2>
              <div className="space-y-6">
                {visaProcess.map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg" style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }}>
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{process.title}</h3>
                      <p className="text-white/60">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40 }}>
            <h2 className="text-2xl font-bold text-white mb-6">Supported Countries</h2>
            <div className="grid grid-cols-2 gap-3">
              {supportedCountries.map((country) => (
                <div key={country} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 12 }} className="flex items-center gap-2">
                  <span style={{ color: GOLD }}>🛂</span>
                  <span className="text-white/75 text-sm">{country}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40 }}>
            <h2 className="text-2xl font-bold text-white mb-6">Required Documents</h2>
            <ul className="space-y-3 mb-6">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span style={{ color: GOLD }} className="font-bold">✓</span>
                  <span className="text-white/70">{doc}</span>
                </li>
              ))}
            </ul>
            <div style={{ background: 'rgba(93,5,49,0.15)', border: '1px solid rgba(93,5,49,0.3)', borderRadius: 12, padding: 16 }}>
              <p className="text-sm text-white/80">
                <strong>Note:</strong> Document requirements may vary by destination and visa type. Our team will provide you with a complete checklist based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
