'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

export default function StartYourJourney() {
  return (
    <section className="py-24 bg-[#080e15] w-full px-4 md:px-8 relative overflow-hidden">
      {/* Top gradient border - matches Footer */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #5D0531 30%, #C9973A 60%, transparent)' }} />
      <div className="w-full max-w-7xl mx-auto mt-8">
        <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          <div className="relative h-72 md:h-[420px] w-full">
            <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" alt="Start your journey" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <div style={{ height: 1, width: 40, background: GOLD }} />
                  <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Your adventure awaits</span>
                  <div style={{ height: 1, width: 40, background: GOLD }} />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Start your journey&nbsp;
                  <span style={{ fontStyle: 'italic', color: GOLD }}>with us</span>
                </h2>
                <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/80">Tell us where you want to go and we'll design a trip that's just for you.</p>
                <div className="mt-8">
                  <Link href="/contact">
                    <button style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }} className="text-white px-6 md:px-8 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition-opacity">
                      Start your journey
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
