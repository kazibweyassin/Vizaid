'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  { title: 'Local experts', desc: 'Carefully selected guides and hosts', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z' },
  { title: 'Small groups', desc: 'Meaningful, immersive experiences', icon: 'M12 4v4l3 3' },
  { title: 'Responsible travel', desc: 'Sustainable & community led', icon: 'M4 6h16' },
  { title: 'Bespoke itineraries', desc: 'Tailored to your interests', icon: 'M3 12h18' },
];

export default function WhatSetsUsApart() {
  return (
    <section className="py-24 bg-[#f5f5f0] w-full px-4 md:px-8">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">What sets us apart</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">We design travel that’s personal, purposeful and unforgettable — with local experts, small groups and an emphasis on responsible tourism.</p>
            <Link href="/about">
              <button className="bg-[#5D0531] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#7a1c4b] transition-colors font-semibold">Read about our purpose</button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-6 shadow-md h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5D0531] text-white flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d={f.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{f.title}</h4>
                    <p className="text-gray-600 mt-2">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
