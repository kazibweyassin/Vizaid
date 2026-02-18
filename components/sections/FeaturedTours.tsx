'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tourPackages } from '@/lib/tours-data';

const featuredTours = tourPackages.slice(0, 7);

export default function FeaturedTours() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Only Vizaid experiences</h2>
            <p className="text-gray-600 mt-2">Curated trips, small groups — real people, real stories.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex rounded-full bg-gray-100 p-1 text-sm">
              <button className="px-4 py-2 rounded-full bg-[#5D0531] text-white font-semibold">New trips</button>
              <button className="px-4 py-2 rounded-full text-gray-600">Popular trips</button>
            </div>
            <Link href="/services/tours">
              <button className="border border-gray-300 hover:border-gray-900 text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors text-sm">
                Explore experiences
              </button>
            </Link>
          </div>
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
                <div className={`relative rounded-2xl overflow-hidden shadow-xl group ${i === 0 ? 'h-[620px]' : 'h-72'}`}>
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
                      <div className="bg-gray-200 h-full w-full" />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{tour.title}</h3>
                    <p className="text-white/90 mb-4">{tour.duration} • {tour.destination}</p>
                    <div className="flex items-center gap-3">
                      <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold">View trip</span>
                      <span className="text-sm text-white/80">Small group • Expert local guides</span>
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

