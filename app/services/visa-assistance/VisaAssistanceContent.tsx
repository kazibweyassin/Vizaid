'use client';

import Image from 'next/image';
import VisaForm from '@/components/forms/VisaForm';
import { motion } from 'framer-motion';

const supportedCountries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'Italy', 'Spain', 'Netherlands', 'Switzerland', 'Dubai (UAE)',
  'Saudi Arabia', 'South Africa', 'Kenya', 'Tanzania', 'Rwanda',
];

const visaProcess = [
  {
    step: 1,
    title: 'Consultation',
    description: 'We discuss your travel plans and visa requirements.',
  },
  {
    step: 2,
    title: 'Documentation',
    description: 'We help you gather and prepare all required documents.',
  },
  {
    step: 3,
    title: 'Application',
    description: 'We submit your visa application on your behalf.',
  },
  {
    step: 4,
    title: 'Follow-up',
    description: 'We track your application and keep you updated.',
  },
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1920&h=600&fit=crop"
          alt="Passport and Visa"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Visa Assistance Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">Expert guidance through visa application processes</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Visa Assistance</h2>
              <VisaForm />
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Visa Process</h2>
              <div className="space-y-6">
                {visaProcess.map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {process.step}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supported Countries & Required Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Supported Countries</h2>
            <div className="grid grid-cols-2 gap-3">
              {supportedCountries.map((country) => (
                <div
                  key={country}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-red-50 hover:border-red-200 border border-transparent transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">🛂</span>
                    <span className="text-gray-700 text-sm">{country}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
            <ul className="space-y-3">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-900">
                <strong>Note:</strong> Document requirements may vary by destination and visa type.
                Our team will provide you with a complete checklist based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

