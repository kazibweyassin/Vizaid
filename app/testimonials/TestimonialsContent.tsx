'use client';

import Link from 'next/link';
import { Testimonial } from '@/types';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Nakato',
    location: 'Kampala, Uganda',
    rating: 5,
    comment: 'Vizaid Travel made our honeymoon to Dubai absolutely perfect! The visa process was smooth and the flight booking was hassle-free. The team was professional and responsive throughout. Highly recommended!',
    service: 'tour',
  },
  {
    id: '2',
    name: 'John Mukasa',
    location: 'Entebbe, Uganda',
    rating: 5,
    comment: 'Excellent service for my business trip to London. They found the best flight deals and handled everything professionally. The visa assistance was particularly helpful. Will definitely use them again.',
    service: 'air-ticketing',
  },
  {
    id: '3',
    name: 'Mary Achieng',
    location: 'Jinja, Uganda',
    rating: 5,
    comment: 'The gorilla trekking tour was incredible! The team organized everything perfectly. Our guide was knowledgeable and the experience was unforgettable. The accommodation was excellent too.',
    service: 'tour',
  },
  {
    id: '4',
    name: 'David Ochieng',
    location: 'Kampala, Uganda',
    rating: 5,
    comment: 'Got my US visa approved with their assistance. They guided me through every step and made sure all documents were correct. The follow-up was excellent. Thank you Vizaid!',
    service: 'visa',
  },
  {
    id: '5',
    name: 'Grace Namukasa',
    location: 'Mbarara, Uganda',
    rating: 5,
    comment: 'Booked a family trip to Kenya through Vizaid. Everything was well organized from flights to accommodation. The kids loved the safari! Great service and value for money.',
    service: 'tour',
  },
  {
    id: '6',
    name: 'Peter Okello',
    location: 'Gulu, Uganda',
    rating: 5,
    comment: 'I needed urgent visa processing for a business trip. Vizaid Travel came through and got my visa approved in record time. Their expertise and efficiency are unmatched.',
    service: 'visa',
  },
];

const serviceLabels = {
  'air-ticketing': 'Air Ticketing',
  'visa': 'Visa Assistance',
  'tour': 'Tour Package',
};

const avatarPalette = [
  { bg: '#D4E4F7', text: '#1A3A5C' },
  { bg: '#D4F0E8', text: '#1A4A38' },
  { bg: '#F7E4D4', text: '#5C2E1A' },
  { bg: '#EDD4F7', text: '#3A1A5C' },
  { bg: '#F7F0D4', text: '#4A3A1A' },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

export default function TestimonialsContent() {
  return (
    <div className="bg-[#080e15] min-h-screen py-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: -120, left: -120, width: 500, height: 500, background: 'radial-gradient(circle, rgba(212,175,110,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Footer/Testimonials style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div style={{ height: 1, width: 40, background: GOLD }} />
            <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Customer Stories
            </span>
            <div style={{ height: 1, width: 40, background: GOLD }} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            What our customers&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>say</span>
          </h1>
          <p className="text-xl text-white/50 max-w-3xl mx-auto">
            Don&apos;t just take our word for it — hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonials Grid - dark cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div
                style={{
                  background: '#0f1923',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20,
                  padding: '32px 28px',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                className="h-full hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1" style={{ color: GOLD }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.375 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.634 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                  <span style={{ background: 'rgba(201,151,58,0.12)', border: '1px solid rgba(201,151,58,0.3)', color: GOLD }} className="px-3 py-1 rounded-full text-xs font-semibold">
                    {serviceLabels[testimonial.service]}
                  </span>
                </div>
                <p className="text-white/80 mb-6 italic text-base leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/7">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: avatarPalette[index % avatarPalette.length].bg,
                      color: avatarPalette[index % avatarPalette.length].text,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {initials(testimonial.name)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    {testimonial.location && (
                      <div className="text-sm text-white/45">{testimonial.location}</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - matches Footer style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: '#0f1923',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: '48px 40px',
            marginTop: 64,
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to experience our&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>service?</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Join our satisfied customers and let us help you with your travel needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }} className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </Link>
            <Link href="/services/air-ticketing">
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Book Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
