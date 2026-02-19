'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'air-ticketing',
    title: 'Air Ticketing',
    description: 'Best deals on flights worldwide. We partner with major airlines to offer you competitive prices and flexible booking options.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    href: '/services/air-ticketing',
    features: ['Competitive Prices', '24/7 Support', 'Flexible Bookings'],
  },
  {
    id: 'visa',
    title: 'Visa Assistance',
    description: 'Expert guidance through visa application processes. We handle documentation and ensure smooth visa processing.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: '/services/visa-assistance',
    features: ['Expert Guidance', 'Documentation Help', 'Fast Processing'],
  },
  {
    id: 'tours',
    title: 'Tours & Packages',
    description: 'Discover amazing destinations with our curated tour packages. From gorilla trekking to international adventures.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/services/tours',
    features: ['Customized Packages', 'Expert Guides', 'Memorable Experiences'],
  },
];

const GOLD = '#C9973A';

export default function Services() {
  return (
    <section className="py-24 bg-[#080e15] relative overflow-hidden">
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '50%', left: -150, width: 400, height: 400, background: 'radial-gradient(circle, rgba(93,5,49,0.1) 0%, transparent 70%)', pointerEvents: 'none', transform: 'translateY(-50%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div style={{ height: 1, width: 40, background: GOLD }} />
            <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Our Services</span>
            <div style={{ height: 1, width: 40, background: GOLD }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ways to&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>Travel</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to your needs. Air ticketing, visa assistance, and unforgettable tours.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: '#0f1923',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                padding: '40px 32px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              className="flex flex-col items-center text-center hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-2"
            >
              <div className="mb-6 text-[#C9973A]">{service.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 mb-6 text-base">{service.description}</p>
              <ul className="mb-8 text-white/50 text-sm space-y-2">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href={service.href}>
                <button style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }} className="text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                  Learn More
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



