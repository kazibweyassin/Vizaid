'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

const features = [
  { title: 'Local experts', desc: 'Carefully selected guides and hosts', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z' },
  { title: 'Small groups', desc: 'Meaningful, immersive experiences', icon: 'M12 4v4l3 3' },
  { title: 'Responsible travel', desc: 'Sustainable & community led', icon: 'M4 6h16' },
  { title: 'Bespoke itineraries', desc: 'Tailored to your interests', icon: 'M3 12h18' },
];

export default function WhatSetsUsApart() {
  return (
    <section className="py-24 bg-[#080e15] w-full px-4 md:px-8 relative overflow-hidden">
      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(93,5,49,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(201,151,58,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6">
              <div style={{ height: 1, width: 40, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Our Difference</span>
              <div style={{ height: 1, width: 40, background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              What sets us&nbsp;
              <span style={{ fontStyle: 'italic', color: GOLD }}>apart</span>
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl leading-relaxed">We design travel that&apos;s personal, purposeful and unforgettable — with local experts, small groups and an emphasis on responsible tourism.</p>
            <Link href="/about">
              <button style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }} className="text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity font-semibold">
                Read about our purpose
              </button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: '#0f1923',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 20,
                    padding: '28px 24px',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                  className="flex flex-col gap-4 hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }}>
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d={f.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{f.title}</h4>
                    <p className="text-white/55 mt-2">{f.desc}</p>
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
