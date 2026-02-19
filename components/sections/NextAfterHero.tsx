'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

const cards = [
  { title: 'Bespoke journeys', subtitle: 'Tailor-made itineraries', image: 'https://images.unsplash.com/photo-1612409578638-b890d0fa9364?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', href: '/services/tours' },
  { title: 'Private & exclusive', subtitle: 'Small groups, curated experiences', image: 'https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', href: '/services/tours' },
  { title: 'Wildlife & culture', subtitle: 'Authentic local encounters', image: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=1068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', href: '/services/tours' },
];

export default function NextAfterHero() {
  return (
    <section className="py-20 bg-[#080e15] w-full px-4 md:px-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(93,5,49,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Link key={c.title} href={c.href} className="group block rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] bg-[#0f1923] hover:border-[rgba(201,151,58,0.3)] transition-all duration-300 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative h-64 md:h-80"
              >
                <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl md:text-3xl font-bold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-white/70">{c.subtitle}</p>
                  <div className="mt-4">
                    <span style={{ background: 'rgba(201,151,58,0.2)', border: '1px solid rgba(201,151,58,0.4)', color: GOLD }} className="inline-block px-4 py-2 rounded-full text-sm font-semibold">
                      Explore →
                    </span>
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
