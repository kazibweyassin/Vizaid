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

const GOLD = '#C9973A';

export default function PopularDestinations() {
  return (
    <section className="py-24 bg-[#080e15] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Explore</span>
              <div style={{ height: 1, width: 40, background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Popular&nbsp;
              <span style={{ fontStyle: 'italic', color: GOLD }}>Destinations</span>
            </h2>
          </div>
          <Link href="/services/tours">
            <button className="border border-white/20 hover:border-[#C9973A] text-white px-6 py-3 rounded-lg font-medium transition-colors">
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
                <div className="relative w-80 h-[420px] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] shadow-[0_8px_40px_rgba(0,0,0,0.35)] group cursor-pointer hover:border-[rgba(201,151,58,0.3)] transition-all duration-300">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{destination.name}</h3>
                    <span style={{ background: 'rgba(201,151,58,0.2)', border: '1px solid rgba(201,151,58,0.4)', color: GOLD }} className="inline-block px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Explore →
                    </span>
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
