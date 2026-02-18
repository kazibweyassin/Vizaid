'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const tourCategories = [
  {
    title: 'International Tours',
    description: 'Explore destinations around the world with our carefully curated international tour packages.',
    href: '/services/tours/international',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
    features: ['Dubai City Breaks', 'European Adventures', 'African Safaris', 'Asian Destinations'],
  },
  {
    title: 'Domestic Tours',
    description: 'Discover the beauty of Uganda with our domestic tour packages including gorilla trekking and wildlife safaris.',
    href: '/services/tours/domestic',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
    features: ['Gorilla Trekking', 'Wildlife Safaris', 'Cultural Tours', 'Adventure Activities'],
  },
];

export default function ToursContent() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=600&fit=crop"
          alt="Travel Tours"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Tours & Packages</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">Discover amazing destinations around the world</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tour Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tourCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.href}>
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
                    <div className="mt-auto">
                      <div className="font-medium inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{color: '#5D0531'}}>
                        Explore {category.title}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
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

