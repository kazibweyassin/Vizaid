'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function WhatSetsUsApart() {
  return (
    <section className="py-20 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              What sets us apart
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              We're all about sharing the joy of travel
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              For over 5 years, we've led travelers around Uganda and the world to share in the real, rare and remarkable. 
              We're beyond grateful for what travel gives us – and we're all for giving back through supporting local communities 
              worldwide. We're proud to be a licensed travel agent and member of TUGATA, committed to sustainable and responsible tourism.
            </p>
            <Link href="/about">
              <Button variant="primary" size="lg" className="bg-red-600 hover:bg-red-700">
                Read about our purpose
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
              alt="Travel community"
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
