'use client';

import Image from 'next/image';
import AirTicketingForm from '@/components/forms/AirTicketingForm';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

const popularDestinations = [
  'Dubai, UAE', 'London, UK', 'New York, USA', 'Nairobi, Kenya',
  'Cairo, Egypt', 'Istanbul, Turkey', 'Paris, France', 'Amsterdam, Netherlands',
];

const benefits = [
  { title: 'Best Prices', description: 'We negotiate the best rates with airlines to give you competitive prices.', icon: '💰' },
  { title: '24/7 Support', description: 'Our team is available round the clock to assist with your travel needs.', icon: '🕐' },
  { title: 'Flexible Bookings', description: 'Change or cancel your bookings with ease through our flexible policies.', icon: '🔄' },
  { title: 'Expert Advice', description: 'Get personalized recommendations from our travel experts.', icon: '💡' },
];

export default function AirTicketingContent() {
  return (
    <div className="bg-[#080e15] min-h-screen">
      {/* Hero */}
      <div className="relative h-96 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop" alt="Airplane" fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="inline-flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Flight Services</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-6xl font-bold mb-4">Air Ticketing Services</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Book flights worldwide with competitive prices</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Benefits - dark cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 28 }}
              className="hover:border-[rgba(201,151,58,0.3)] transition-colors"
            >
              <div className="text-2xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/55 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40 }}>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl font-bold text-white mb-6">Request Flight Quote</h2>
              <AirTicketingForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 32 }}>
              <h2 className="text-xl font-bold text-white mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-2 gap-3">
                {popularDestinations.map((d) => (
                  <div key={d} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 12 }} className="flex items-center gap-2">
                    <span style={{ color: GOLD }}>✈️</span>
                    <span className="text-white/75 text-sm">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 32 }}>
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {['Partnership with major international airlines', 'Competitive pricing and special deals', 'Expert travel consultants', 'Easy booking and payment process', '24/7 customer support'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: GOLD }} className="font-bold">✓</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
