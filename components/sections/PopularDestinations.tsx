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
    <section className="py-20 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Popular Destinations</h2>
          <Link href="/services/tours">
            <button className="border border-gray-300 hover:border-gray-900 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-colors shadow-md">
              Search all destinations
            </button>
          </Link>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
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
                <div className="relative w-80 h-[420px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg tracking-tight">{destination.name}</h3>
                    <button className="bg-white text-gray-900 font-bold px-5 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-lg">
                      Explore
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
