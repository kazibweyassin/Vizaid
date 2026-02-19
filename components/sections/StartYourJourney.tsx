'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function StartYourJourney() {
  return (
    <section className="py-20 bg-[var(--background)] w-full px-4 md:px-8">
      <div className="w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-72 md:h-[420px] w-full">
            <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" alt="Start your journey Unsplash" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">Start your journey with us</h2>
              <p className="mt-4 text-lg md:text-xl max-w-2xl">Tell us where you want to go and we'll design a trip that's just for you.</p>
              <div className="mt-8">
                <Link href="/contact">
                  <button className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-lg font-semibold shadow hover:opacity-95 transition-opacity">Start your journey</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
