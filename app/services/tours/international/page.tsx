'use client';

import TourForm from '@/components/forms/TourForm';
import Link from 'next/link';
import Image from 'next/image';
import { tourPackages } from '@/lib/tours-data';
import { motion } from 'framer-motion';

const internationalTours = tourPackages.filter((tour) => tour.type === 'international');

export default function InternationalToursPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-12">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            International Tours
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore destinations around the world with our carefully curated international tour packages.
            From city breaks to adventure tours, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Tour Quote</h2>
              <TourForm tourType="international" />
            </div>
          </div>

          {/* Featured Tours */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured International Tours</h2>
            <div className="space-y-6">
              {internationalTours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/services/tours/${tour.id}`}>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer" style={{borderColor: '#5D0531'}}>
                      <div className="flex gap-4 p-4">
                        <div className="flex-shrink-0">
                          <div className="relative w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                            {tour.image ? (
                              <Image
                                src={tour.image}
                                alt={tour.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                unoptimized
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-3xl">🌍</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="text-xs font-semibold mb-1" style={{color: '#C9973A'}}>{tour.category}</div>
                          <h3 className="text-lg font-bold text-white mb-1 group-hover:opacity-70 transition-colors">
                            {tour.title}
                          </h3>
                          <div className="text-sm text-gray-400 mb-3">{tour.duration}</div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {tour.highlights.slice(0, 2).map((highlight) => (
                              <span
                                key={highlight}
                                className="px-2 py-1 rounded-full text-xs font-medium" style={{backgroundColor: 'rgba(201, 151, 58, 0.1)', color: '#C9973A'}}>
                                {highlight}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-white">{tour.price}</div>
                            <div className="font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform" style={{color: '#C9973A'}}>
                              View Details
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
