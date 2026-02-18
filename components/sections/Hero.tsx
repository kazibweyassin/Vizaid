'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import SearchBar from '@/components/forms/SearchBar';

export default function Hero() {
  const router = useRouter();

  const handleSearch = (params: { q?: string; start?: string; end?: string }) => {
    const qs = new URLSearchParams(params as Record<string, string>);
    const query = qs.toString();
    router.push(`/search${query ? `?${query}` : ''}`);
  };

  return (
    <section className="relative text-white overflow-hidden">
      <div className="relative h-[680px] md:h-[760px] w-full">
        {/* background uses your screenshot to match the design */}
        <Image
          src="/sc/hero.PNG"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        {/* dark overlay to improve contrast */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

        {/* centered content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              Go Where the Joy Takes You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Real, rare, and remarkable adventures — curated itineraries, local experts, unforgettable moments.
            </motion.p>

            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <Link href="/services/tours">
                <Button variant="primary" size="lg">View our destinations</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Start your journey</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* centered search card (matches screenshot placement) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-full max-w-3xl px-4 md:px-0">
          <div className="bg-white/95 rounded-xl shadow-2xl p-4 md:p-5">
            <SearchBar
              compact
              onSearch={handleSearch}
            />
          </div>
        </div>

        {/* subtle down arrow hint */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          Scroll to explore ↓
        </div>
      </div>
    </section>
  );
}

                                