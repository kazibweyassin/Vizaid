'use client';

import Image from 'next/image';
import AirTicketingForm from '@/components/forms/AirTicketingForm';
import { motion } from 'framer-motion';

const popularDestinations = [
  'Dubai, UAE', 'London, UK', 'New York, USA', 'Nairobi, Kenya',
  'Cairo, Egypt', 'Istanbul, Turkey', 'Paris, France', 'Amsterdam, Netherlands',
];

const benefits = [
  {
    title: 'Best Prices',
    description: 'We negotiate the best rates with airlines to give you competitive prices.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    description: 'Our team is available round the clock to assist with your travel needs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Bookings',
    description: 'Change or cancel your bookings with ease through our flexible policies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Expert Advice',
    description: 'Get personalized recommendations from our travel experts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function AirTicketingContent() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop"
          alt="Airplane"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Air Ticketing Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">Book flights worldwide with competitive prices</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-red-600 mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Flight Quote</h2>
              <AirTicketingForm />
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-2 gap-4">
                {popularDestinations.map((destination) => (
                  <div
                    key={destination}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-red-50 hover:border-red-200 border border-transparent transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✈️</span>
                      <span className="text-gray-700 font-medium text-sm">{destination}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Partnership with major international airlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Competitive pricing and special deals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Expert travel consultants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Easy booking and payment process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

