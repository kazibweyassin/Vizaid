'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function WhatSetsUsApart() {
  return (
    <section className="py-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 text-center lg:text-left tracking-tight">
              What Sets Us Apart
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#5D0531] mb-8">
              We're all about sharing the joy of travel
            </h3>
            <ul className="mb-10 text-lg text-gray-700 leading-relaxed space-y-6">
              <li>Real, rare, and remarkable adventures led by passionate local experts.</li>
              <li>Small group trips for authentic connections and immersive experiences.</li>
              <li>Giving back: supporting communities and responsible tourism.</li>
              <li>Proud TUGATA member, committed to sustainability.</li>
            </ul>
            <Link href="/about">
              <Button variant="primary" size="xl" className="shadow-lg">
                Read about our purpose
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[550px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=900&fit=crop"
              alt="Travel community"
              fill
              className="object-cover rounded-2xl"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
