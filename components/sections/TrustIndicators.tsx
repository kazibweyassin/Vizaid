'use client';

import { motion } from 'framer-motion';

const indicators = [
  { number: '5+', label: 'Years of Experience' },
  { number: '5000+', label: 'Happy Customers' },
  { number: '50+', label: 'Destinations' },
  { number: '24/7', label: 'Customer Support' },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="text-4xl md:text-5xl font-bold mb-2">{indicator.number}</div>
              <div className="text-blue-100">{indicator.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



