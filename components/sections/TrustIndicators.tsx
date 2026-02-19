'use client';

import { motion } from 'framer-motion';

const indicators = [
  { number: '5+', label: 'Years of Experience' },
  { number: '5000+', label: 'Happy Customers' },
  { number: '50+', label: 'Destinations' },
  { number: '24/7', label: 'Customer Support' },
];

const GOLD = '#C9973A';

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-[#080e15] relative overflow-hidden border-t border-[rgba(255,255,255,0.07)]">
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #5D0531 30%, #C9973A 60%, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", color: GOLD }} className="text-4xl md:text-5xl font-bold mb-2">{indicator.number}</div>
              <div className="text-white/45 text-sm uppercase tracking-wider">{indicator.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



