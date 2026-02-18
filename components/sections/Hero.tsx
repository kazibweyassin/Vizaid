'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="relative h-[520px] md:h-[620px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop"
          alt="Savannah hero background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Left content */}
          <div className="max-w-2xl text-left">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight"
            >
              Go Where the Joy Takes You
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-gray-100 mb-6"
            >
              Real, rare, and remarkable adventures. Small groups, immersive experiences, expert local guides.
            </motion.p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/services/tours">
                <Button variant="primary" size="lg">VIEW OUR DESTINATIONS</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">ABOUT US</Button>
              </Link>
            </div>
          </div>

          {/* Right visual (map-like panel) */}
          <div className="hidden lg:block w-[420px] h-48 relative rounded overflow-hidden bg-white/5 border border-white/10">
            <div className="absolute inset-0 p-4 flex flex-col justify-center">
              <div className="text-right text-white/90 font-semibold mb-2">Our Destinations</div>
              <div className="flex gap-2 justify-end">
                <div className="w-12 h-12 rounded bg-yellow-400/80" />
                <div className="w-12 h-12 rounded bg-amber-300/80" />
                <div className="w-12 h-12 rounded bg-orange-400/80" />
              </div>
            </div>
            <svg viewBox="0 0 300 300" className="absolute right-3 bottom-0 w-40 h-40 opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="300" height="300" rx="8" fill="white" fillOpacity="0.02" />
              <g transform="translate(18,12) scale(0.85)" stroke="white" strokeOpacity="0.9" strokeWidth="1">
                <path d="M140 10 C120 20 110 40 100 60 C90 80 75 95 75 115 C75 135 95 150 115 155 C135 160 150 150 170 150 C190 150 210 160 220 175 C230 190 235 210 230 230 C225 250 210 260 190 260 C170 260 150 250 130 245 C110 240 95 230 85 215 C75 200 70 180 72 160 C74 140 88 125 100 110 C112 95 130 80 140 60 C150 40 150 20 140 10 Z" fill="white" fillOpacity="0.08" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

                                