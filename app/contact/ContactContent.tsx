'use client';

import ContactForm from '@/components/forms/ContactForm';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    details: ['0200 908388', '0705765705'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    details: ['info@vizaidtravel.com', 'bookings@vizaidtravel.com'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Location',
    details: ['Namaganda Plaza, Room T24', 'Luwum Street, Kampala, Uganda', 'Mon - Fri: 9:00 AM - 6:00 PM'],
  },
];

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'WhatsApp', href: 'https://wa.me/256705765705' },
];

export default function ContactContent() {
  return (
    <div className="bg-[#080e15] min-h-screen py-20 relative overflow-hidden">
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(93,5,49,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div style={{ height: 1, width: 40, background: GOLD }} />
            <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Get in Touch</span>
            <div style={{ height: 1, width: 40, background: GOLD }} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact&nbsp;
            <span style={{ fontStyle: 'italic', color: GOLD }}>Us</span>
          </h1>
          <p className="text-xl text-white/50 max-w-3xl mx-auto">
            Have questions? We&apos;re here to help! Get in touch with our team for any inquiries about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              style={{
                background: '#0f1923',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                padding: 40,
                boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
              }}
            >
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div
                  style={{
                    background: '#0f1923',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 20,
                    padding: 28,
                    boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                    transition: 'border-color 0.3s ease',
                  }}
                  className="hover:border-[rgba(201,151,58,0.3)]"
                >
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 text-[#C9973A]">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/60">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                background: '#0f1923',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                padding: 28,
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '12px 16px',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: 12,
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    className="hover:bg-white/10 hover:text-white"
                  >
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                background: 'rgba(93,5,49,0.15)',
                border: '1px solid rgba(93,5,49,0.3)',
                borderRadius: 20,
                padding: 28,
              }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Need Immediate Assistance?</h3>
              <p className="text-white/70 mb-4">
                Our customer support team is available 24/7 to help you with urgent travel needs.
              </p>
              <a
                href="tel:+256200908388"
                style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }}
                className="inline-block text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
