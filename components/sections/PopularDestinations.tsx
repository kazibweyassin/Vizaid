'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'Uganda',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    href: '/services/tours/domestic',
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
    href: '/services/tours/international',
  },
  {
    name: 'Kenya',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
    href: '/services/tours/international',
  },
  {
    name: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    href: '/services/tours/international',
  },
  {
    name: 'Rwanda',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    href: '/services/tours/domestic',
  },
  {
    name: 'South Africa',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop',
    href: '/services/tours/international',
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Popular Destinations</h2>
          <Link href="/services/tours">
            <button className="border border-gray-300 hover:border-gray-900 text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors">
              Search all destinations
            </button>
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <Link href={destination.href}>
                <div className="relative w-64 h-80 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-8 py-3 rounded-full shadow-sm">
                      <span className="text-gray-900 font-semibold text-base">{destination.name}</span>
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
