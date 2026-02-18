'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import SearchBar from '@/components/forms/SearchBar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleSearch = (payloadOrEvent?: any) => {
    // accept either SearchParams (from SearchBar) or a form event
    if (payloadOrEvent && typeof payloadOrEvent.preventDefault === 'function') {
      payloadOrEvent.preventDefault();
    }

    const params = new URLSearchParams();
    const source = payloadOrEvent && !payloadOrEvent.preventDefault ? payloadOrEvent : {};

    if (source.q && source.q.trim()) params.set('q', source.q.trim());
    if (source.start) params.set('start', source.start);
    if (source.end) params.set('end', source.end);

    const query = params.toString();
    router.push(`/search${query ? `?${query}` : ''}`);
  };

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop',
      title: 'Go Where the Joy Takes You',
      subtitle: 'Real, rare, and remarkable adventures. Small groups, immersive experiences, expert local guides.',
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop',
      title: 'Discover Uganda',
      subtitle: 'Community-led experiences and unforgettable wildlife encounters.',
    },
    {
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop',
      title: 'Unforgettable Wildlife',
      subtitle: 'Expert local guides bringing you closer to nature.',
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlideIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const prevSlide = () => setSlideIndex((i) => (i - 1 + slides.length) % slides.length);
  const nextSlide = () => setSlideIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative text-white overflow-hidden">

      {/* Hero Image & Content (carousel) */}
      <div className="relative h-[650px] md:h-[750px] w-full">
        {slides.map((s, i) => (
          <motion.div
            key={s.src}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: i === slideIndex ? 1 : 0, x: i === slideIndex ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 ${i === slideIndex ? 'z-0' : 'pointer-events-none'}`}
            aria-hidden={i === slideIndex ? 'false' : 'true'}
          >
            <Image src={s.src} alt={s.title} fill className="object-cover" priority={i === 0} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
          </motion.div>
        ))}

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 text-center">
          <motion.h2
            key={`title-${slideIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
            aria-live="polite"
          >
            {slides[slideIndex].title}
          </motion.h2>
          <motion.p
            key={`sub-${slideIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-2xl mb-6 max-w-3xl"
          >
            {slides[slideIndex].subtitle}
          </motion.p>

          <div className="w-full max-w-2xl mb-6">
            <SearchBar onSearch={handleSearch} className="bg-white/90 rounded-xl shadow-2xl p-6" />
          </div>

          <div className="flex gap-3 items-center">
            <button onClick={prevSlide} aria-label="Previous slide" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              ‹
            </button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setSlideIndex(idx)}
                  className={`w-3 h-3 rounded-full ${idx === slideIndex ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} aria-label="Next slide" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              ›
            </button>
          </div>

          <div className="mt-6">
            <Link href="/services/tours">
              <Button variant="primary" size="lg" className="shadow-lg">
                Explore Experiences
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

                                