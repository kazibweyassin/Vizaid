'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Nakato',
    location: 'Kampala, Uganda',
    rating: 5,
    comment: 'Vizaid Travel made our honeymoon to Dubai absolutely perfect! The visa process was smooth and the flight booking was hassle-free. Highly recommended!',
    service: 'tour',
  },
  {
    id: '2',
    name: 'John Mukasa',
    location: 'Entebbe, Uganda',
    rating: 5,
    comment: 'Excellent service for my business trip to London. They found the best flight deals and handled everything professionally. Will definitely use them again.',
    service: 'air-ticketing',
  },
  {
    id: '3',
    name: 'Mary Achieng',
    location: 'Jinja, Uganda',
    rating: 5,
    comment: 'The gorilla trekking tour was incredible! The team organized everything perfectly. Our guide was knowledgeable and the experience was unforgettable.',
    service: 'tour',
  },
  {
    id: '4',
    name: 'David Ochieng',
    location: 'Kampala, Uganda',
    rating: 5,
    comment: 'Got my US visa approved with their assistance. They guided me through every step and made sure all documents were correct. Thank you Vizaid!',
    service: 'visa',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied travelers.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-between h-full"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.564-.955L10 0l2.947 5.955 6.564.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-xl italic">"{testimonial.comment}"</p>
              <div>
                <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                {testimonial.location && (
                  <div className="text-base text-gray-500">{testimonial.location}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



