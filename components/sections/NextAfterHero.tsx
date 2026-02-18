'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  { title: 'Bespoke journeys', subtitle: 'Tailor-made itineraries', image: '/sc/next.PNG', href: '/services/tours' },
  { title: 'Private & exclusive', subtitle: 'Small groups, curated experiences', image: '/sc/next2.PNG', href: '/services/tours' },
  { title: 'Wildlife & culture', subtitle: 'Authentic local encounters', image: '/sc/next3.PNG', href: '/services/tours' },
];

export default function NextAfterHero() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Link key={c.title} href={c.href} className="group block rounded-2xl overflow-hidden shadow-lg">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative h-64 md:h-80 bg-gray-100"
              >
                <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-200">{c.subtitle}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-white/10 px-3 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Explore</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
