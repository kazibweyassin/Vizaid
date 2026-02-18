'use client';

import { motion } from 'framer-motion';

const testimonials = [
  { id: '1', name: 'Sarah Nakato', location: 'Kampala, Uganda', rating: 5, comment: 'Vizaid Travel made our honeymoon to Dubai absolutely perfect! The visa process was smooth and the flight booking was hassle-free.' },
  { id: '2', name: 'John Mukasa', location: 'Entebbe, Uganda', rating: 5, comment: 'Excellent service for my business trip to London. They found the best flight deals and handled everything professionally.' },
  { id: '3', name: 'Mary Achieng', location: 'Jinja, Uganda', rating: 5, comment: 'The gorilla trekking tour was incredible! The team organized everything perfectly.' },
  { id: '4', name: 'David Ochieng', location: 'Kampala, Uganda', rating: 5, comment: 'Got my US visa approved with their assistance. They guided me through every step.' },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">What our customers say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real stories from people who travelled with us.</p>
        </motion.div>

        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-6 w-max">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="w-[360px] bg-white shadow-xl rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">{t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.location}</div>
                  </div>
                </div>
                <div className="text-gray-700 italic mb-4">"{t.comment}"</div>
                <div className="flex text-yellow-400">
                  {Array.from({length: t.rating}).map((_,i)=> (
                    <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.375 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.634 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z"/></svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



