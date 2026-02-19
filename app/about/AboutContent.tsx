'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const GOLD = '#C9973A';

export default function AboutContent() {
  return (
    <div className="bg-[#080e15] min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-96 md:h-[500px] text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex items-center px-6">
          <div className="w-full max-w-3xl text-left pl-6 md:pl-12 lg:pl-24">
            <div className="inline-flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>About Vizaid Travel</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-6xl font-bold mb-4">
              Crafting Unforgettable&nbsp;
              <span style={{ fontStyle: 'italic', color: GOLD }}>Journeys</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Expert travel services tailored to your dreams, making every adventure seamless and memorable
            </p>
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div style={{ position: 'absolute', top: 0, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(93,5,49,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 relative">
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute top-0 left-0 w-72 h-64 rounded-2xl overflow-hidden border border-white/10 z-10">
              <Image src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop" alt="Travel" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-56 rounded-2xl overflow-hidden border border-white/10">
              <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop" alt="Travel" fill className="object-cover" unoptimized />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Our Story</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl font-bold text-white mb-6">A Legacy of Trust</h2>
            <p className="text-lg text-white/65 mb-4 leading-relaxed">
              At Vizaid Travel, we believe that travel is more than just movement. It&apos;s about creating lasting memories, building connections, and discovering the extraordinary in every corner of the world.
            </p>
            <p className="text-lg text-white/65 mb-6 leading-relaxed">
              Founded in Uganda with a passion for excellence, we&apos;ve spent years perfecting the art of travel curation. Whether you&apos;re seeking an adrenaline-pumping safari, a serene beach escape, or a cultural immersion, our team ensures every detail is perfect.
            </p>
            <p className="text-lg text-white/65 mb-8 leading-relaxed">
              With over <strong className="text-white">5 years of experience</strong> and thousands of satisfied travelers, we&apos;ve established ourselves as Uganda&apos;s most reliable travel partner. As members of <strong className="text-white">TUGATA</strong>, we maintain the highest standards of professionalism and service.
            </p>
            <Link href="/services/tours">
              <Button size="lg">Explore Our Tours</Button>
            </Link>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-white/10">
          <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40 }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-white/65 leading-relaxed mb-6">
              To provide world-class travel services that transform ordinary trips into extraordinary adventures. We&apos;re committed to making travel accessible, hassle-free, and unforgettable for everyone.
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/60 italic" style={{ fontFamily: "'Georgia', serif" }}>
                &ldquo;Your journey is our passion. Every ticket booked, every visa processed, every tour guided—we do it with excellence and care.&rdquo;
              </p>
            </div>
          </div>
          <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40 }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-2xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-white/65 leading-relaxed mb-6">
              To be the leading travel agency in East Africa, recognized globally for our expertise, innovation, and unwavering commitment to customer satisfaction.
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/60 italic" style={{ fontFamily: "'Georgia', serif" }}>
                &ldquo;Enabling dreamers to become travelers, and travelers to become explorers.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>The Vizaid Advantage</span>
              <div style={{ height: 1, width: 40, background: GOLD }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl font-bold text-white">Why Choose Vizaid?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expert Knowledge', desc: "Extensive experience across Africa's most iconic destinations and visa requirements", icon: '💼' },
              { title: 'Premium Service', desc: 'Personalized attention and dedicated support from booking to return', icon: '⭐' },
              { title: 'Trust & Safety', desc: 'Licensed operator with TUGATA membership and years of proven reliability', icon: '🛡️' },
              { title: 'Best Value', desc: 'Competitive pricing without compromising quality or experience', icon: '💰' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 32, textAlign: 'center' }}
                className="hover:border-[rgba(201,151,58,0.3)] transition-colors"
              >
                <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl" style={{ background: 'rgba(93,5,49,0.2)' }}>{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="py-20 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white/55 max-w-3xl mx-auto">
              From visa assistance to guided safari adventures, we offer comprehensive travel solutions tailored to your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Air Ticketing', desc: 'Competitive flight deals to destinations worldwide.', href: '/services/air-ticketing' },
              { title: 'Visa Assistance', desc: 'Hassle-free visa processing with expert guidance.', href: '/services/visa-assistance' },
              { title: 'Curated Tours', desc: 'Unforgettable experiences from wildlife safaris to cultural adventures.', href: '/services/tours' },
            ].map((s) => (
              <Link key={s.title} href={s.href}>
                <div style={{ background: '#0f1923', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 32 }} className="hover:border-[rgba(201,151,58,0.3)] transition-colors h-full">
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-white/55 mb-6">{s.desc}</p>
                  <span style={{ color: GOLD }} className="font-semibold">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 relative overflow-hidden">
          <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #5D0531 30%, #C9973A 60%, transparent)' }} />
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '5+', label: 'Years in Business' },
                { value: '10K+', label: 'Happy Travelers' },
                { value: '50+', label: 'Destinations' },
                { value: '100%', label: 'Satisfaction Rate' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", color: GOLD }} className="text-5xl font-bold mb-2">{s.value}</div>
                  <p className="text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="relative py-24 text-white rounded-2xl overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your&nbsp;
              <span style={{ fontStyle: 'italic', color: GOLD }}>Journey?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let&apos;s create an unforgettable travel experience together. Contact our team today to start planning your next adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="w-full sm:w-auto" size="lg">Get In Touch</Button>
              </Link>
              <Link href="/services/tours">
                <Button variant="outline" className="w-full sm:w-auto" size="lg">Explore Tours</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
