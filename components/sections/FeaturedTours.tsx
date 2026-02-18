'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tourPackages } from '@/lib/tours-data';

const featuredTours = tourPackages.slice(0, 6);

// Mock overlay text for each tour (you can customize these)
const overlayTexts = [
  'Spill the chai with Shrishti',
  'Springtime in the Maasai Mara',
  'Sail Naxos with Nikos',
  'Sweet treats, Hanoi streets',
  'Tortuguero adventure',
  'Mountain peaks experience',
];

export default function FeaturedTours() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <div className="flex gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b-2 pb-4 -mb-4" style={{borderColor: '#5D0531'}}>
              Only Vizaid experiences
            </h2>
            <button className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm hidden md:block">
              New trips
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm hidden md:block">
              Popular trips
            </button>
          </div>
          <Link href="/services/tours">
            <button className="border border-gray-300 hover:border-gray-900 text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors text-sm">
              Explore experiences
            </button>
          </Link>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          {featuredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <Link href={`/services/tours/${tour.id}`}>
                <div className="relative w-96 bg-white rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-shadow">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
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
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                    <h3 className="text-2xl font-extrabold text-white mb-3 drop-shadow-lg tracking-tight">{tour.title}</h3>
                    <p className="text-white text-lg mb-3">{overlayTexts[index]}</p>
                    <button className="bg-white text-gray-900 font-bold px-5 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-lg">
                      View Details
                    </button>
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

