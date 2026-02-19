'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tourPackages } from '@/lib/tours-data';

const GOLD = '#C9973A';
const featuredTours = tourPackages.slice(0, 7);

export default function FeaturedTours() {
  return (
    <section className="py-24 bg-[#080e15] w-full px-4 md:px-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, background: 'radial-gradient(circle, rgba(201,151,58,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Header - matches Footer/Testimonials style */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
                Curated Experiences
              </span>
              <div style={{ height: 1, width: 40, background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Only Vizaid&nbsp;
              <span style={{ fontStyle: 'italic', color: GOLD }}>experiences</span>
            </h2>
            <p className="text-white/50 mt-3 max-w-xl">Curated trips, small groups — real people, real stories.</p>
          </div>
          <Link href="/services/tours">
            <button className="border border-white/20 hover:border-[#C9973A] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm">
              Explore experiences
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <Link href={`/services/tours/${tour.id}`}>
                <div className={`relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] bg-[#0f1923] group transition-all duration-300 hover:border-[rgba(201,151,58,0.3)] shadow-[0_8px_40px_rgba(0,0,0,0.35)] ${i === 0 ? 'h-[620px]' : 'h-72'}`}>
                  <div className="relative w-full h-full">
                    {tour.image ? (
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    ) : (
                      <div className="bg-[#0f1923] h-full w-full" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-8 flex flex-col justify-end">
                    <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }} className="mb-2">{tour.category}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-3xl md:text-4xl font-bold text-white mb-2">{tour.title}</h3>
                    <p className="text-white/80 mb-4">{tour.duration} • {tour.destination}</p>
                    <div className="flex items-center gap-3">
                      <span style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)', color: '#fff' }} className="px-4 py-2 rounded-lg font-semibold">View trip</span>
                      <span className="text-sm text-white/70">Small group • Expert guides</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

