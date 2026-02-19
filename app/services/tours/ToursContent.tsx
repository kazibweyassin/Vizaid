'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import Link from 'next/link';
import { motion } from 'framer-motion';

const heroSlides = [
  {
    // image commented out for video test — revert if needed
    // image: 'https://images.unsplash.com/photo-1612409578638-b890d0fa9364?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Discover breathtaking international destinations',
  },
  {
    // image commented out for video test — revert if needed
    // image: 'https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Experience the wild beauty of Uganda',
  },
  {
    // image commented out for video test — revert if needed
    // image: 'https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=1068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Adventure awaits in every journey',
  },
  {
    // image commented out for video test — revert if needed
    // image: 'https://images.unsplash.com/photo-1527288012656-13ea8f91bd63?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Travel with friends, make memories for life',
  },
  {
    // image commented out for video test — revert if needed
    // image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Explore new cultures and experiences',
  },
  {
    // image commented out for video test — revert if needed
    // image: 'https://images.unsplash.com/photo-1581596326248-f55ac7852760?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Your next adventure starts here',
  },
];

const tourCategories = [
  {
    title: 'International Tours',
    description: 'Explore destinations around the world with our carefully curated international tour packages.',
    href: '/services/tours/international',
    image: 'https://images.unsplash.com/photo-1612409578638-b890d0fa9364?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Dubai Campus Vibe (for university students)', 'European Adventures', 'African Safaris', 'Asian Destinations'],
  },
  {
    title: 'Domestic Tours',
    description: 'Discover the beauty of Uganda with our domestic tour packages including gorilla trekking and wildlife safaris.',
    href: '/services/tours/domestic',
    image: 'https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Gorilla Trekking', 'Wildlife Safaris', 'Cultural Tours', 'Adventure Activities'],
  },
];


export default function ToursContent() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 10000); // slower: advance every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* Hero Section (video background for testing) */}
      <div className="relative h-96 overflow-hidden">
        {/* video background from public/dubaicity.mp4 */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/dubaicity.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        {/* rotating text (cross-fade) */}
        <AnimatePresence mode="wait">
          <m.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative h-full flex items-center z-10"
          >
            <div className="text-left text-white pl-6 md:pl-24 pr-4 py-8 w-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{heroSlides[current].text}</h1>
              <p className="mt-2 text-lg md:text-xl text-gray-200 max-w-2xl">Real, rare, and remarkable adventures — curated itineraries, local experts, unforgettable moments.</p>
            </div>
          </m.div>
        </AnimatePresence>

        {/* Slider controls (optional) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'} border border-white transition-all`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-8">
        {/* Tour Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tourCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col" style={{borderColor: '#5D0531'}}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature) => (
                      <div key={feature} className="text-sm text-gray-700 flex items-center">
                        <span className="mr-3 font-bold" style={{color: '#5D0531'}}>✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-4">
                    <Link href={category.href}>
                      <div className="font-medium inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{color: '#5D0531'}}>
                        Explore {category.title}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    <Link href="/contact">
                      <button className="bg-[#5D0531] text-white px-4 py-2 rounded-lg font-semibold shadow hover:opacity-95 transition-opacity">Book Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student Offers Section */}
        <div className="bg-[#f0f7ff] rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D0531] mb-8 text-center">
            Special Offers for University Students
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-left md:pr-6">
              <p className="text-lg text-gray-700 mb-6">
                Enjoy exclusive discounts and experiences tailored for students. Our Dubai Campus Vibe tour is designed for vibrant campus life, city exploration, and youth-focused activities.
              </p>
              <Link href="/services/tours/international" className="inline-block">
                <button className="bg-[#5D0531] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-95 transition-opacity">View Student Tours</button>
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
                <Image src="/CampusVibe.PNG" alt="Campus Vibe flyer" width={900} height={1200} className="object-cover w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#fff7f0] rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D0531] mb-8 text-center">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <Image src="https://images.unsplash.com/photo-1581596326248-f55ac7852760?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Student testimonial" width={80} height={80} className="rounded-full mx-auto" />
              </div>
              <p className="text-gray-700 italic mb-2">“The Dubai Campus Vibe tour was unforgettable! I made new friends and explored the city like a local.”</p>
              <div className="font-bold text-[#5D0531]">Aisha, University Student</div>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image src="https://images.unsplash.com/photo-1527288012656-13ea8f91bd63?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Traveler testimonial" width={80} height={80} className="rounded-full mx-auto" />
              </div>
              <p className="text-gray-700 italic mb-2">“Vizaid’s guides made our safari adventure safe and exciting. Highly recommended!”</p>
              <div className="font-bold text-[#5D0531]">James, Adventure Seeker</div>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Family testimonial" width={80} height={80} className="rounded-full mx-auto" />
              </div>
              <p className="text-gray-700 italic mb-2">“Our family trip to Uganda was perfectly organized. Memories for a lifetime!”</p>
              <div className="font-bold text-[#5D0531]">Grace, Parent</div>
            </div>
          </div>
        </div>

        {/* Why Choose Our Tours */}
        <div className="bg-[#f5f5f0] rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Tours?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(93, 5, 49, 0.1)'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#5D0531'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Customized Packages</h3>
              <p className="text-gray-600 text-sm">
                Tailored tours to match your preferences and budget
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(93, 5, 49, 0.1)'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#5D0531'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Expert Guides</h3>
              <p className="text-gray-600 text-sm">
                Knowledgeable local guides for authentic experiences
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(93, 5, 49, 0.1)'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#5D0531'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Memorable Experiences</h3>
              <p className="text-gray-600 text-sm">
                Carefully curated itineraries for unforgettable memories
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

