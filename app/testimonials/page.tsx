import { Metadata } from 'next';
import Link from 'next/link';
import { Testimonial } from '@/types';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Customer Testimonials | Vizaid Travel',
  description: 'Read what our customers say about their experiences with Vizaid Travel.',
};

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
  {
    id: '7',
    name: 'Ruth Atim',
    location: 'Kampala, Uganda',
    rating: 5,
    comment: 'The Queen Elizabeth Safari tour exceeded all expectations! The wildlife viewing was amazing and the guide was fantastic. Vizaid Travel made our vacation truly memorable.',
    service: 'tour',
  },
  {
    id: '8',
    name: 'Michael Ssebunya',
    location: 'Masaka, Uganda',
    rating: 5,
    comment: 'Professional service from start to finish. They helped me book flights to Dubai and provided excellent customer support. The prices were competitive too. Highly satisfied!',
    service: 'air-ticketing',
  },
];

const serviceLabels = {
  'air-ticketing': 'Air Ticketing',
  'visa': 'Visa Assistance',
  'tour': 'Tour Package',
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.564-.955L10 0l2.947 5.955 6.564.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                    {serviceLabels[testimonial.service]}
                  </span>
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                  {testimonial.location && (
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-red-600 text-white rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-red-100 mb-6 text-lg">
            Join our satisfied customers and let us help you with your travel needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/services/air-ticketing"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
