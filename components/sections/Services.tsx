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

export default function Services() {
  return (
    <section className="py-20 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Ways to Travel</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white border border-gray-200 rounded-2xl p-10 shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-8">{service.icon}</div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
              <ul className="mb-8 text-gray-600 text-base">
                {service.features.map((feature) => (
                  <li key={feature} className="mb-2">{feature}</li>
                ))}
              </ul>
              <Link href={service.href}>
                <button className="bg-[#5D0531] text-white font-bold px-7 py-3 rounded-lg shadow-lg hover:bg-[#7a1c4b] transition-colors text-lg">
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



