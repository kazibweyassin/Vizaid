'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Nakato',
    location: 'Kampala, Uganda',
    rating: 5,
    trip: 'Dubai Honeymoon',
    comment:
      'Vizaid Travel made our honeymoon to Dubai absolutely perfect. The visa process was smooth, the flights seamless — every detail handled with genuine care.',
  },
  {
    id: '2',
    name: 'John Mukasa',
    location: 'Entebbe, Uganda',
    rating: 5,
    trip: 'London Business',
    comment:
      'Excellent service for my business trip to London. They found unbeatable flight deals and handled every detail professionally. Will use again.',
  },
  {
    id: '3',
    name: 'Mary Achieng',
    location: 'Jinja, Uganda',
    rating: 5,
    trip: 'Gorilla Trekking',
    comment:
      'The gorilla trekking tour was life-changing. The team orchestrated every moment flawlessly — permits, guides, accommodation, all perfect.',
  },
  {
    id: '4',
    name: 'David Ochieng',
    location: 'Kampala, Uganda',
    rating: 5,
    trip: 'US Visa',
    comment:
      'Got my US visa approved thanks to their expert guidance. They walked me through every document and prepared me thoroughly. Stress-free process.',
  },
  {
    id: '5',
    name: 'Grace Namukasa',
    location: 'Masaka, Uganda',
    rating: 5,
    trip: 'Turkey Holiday',
    comment:
      'Istanbul was a dream. Vizaid sorted our group booking without a hitch — hotel, transport, tours. Ten people, zero problems.',
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.375 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.634 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

// Soft pastel avatar colors
const avatarPalette = [
  { bg: '#D4E4F7', text: '#1A3A5C' },
  { bg: '#D4F0E8', text: '#1A4A38' },
  { bg: '#F7E4D4', text: '#5C2E1A' },
  { bg: '#EDD4F7', text: '#3A1A5C' },
  { bg: '#F7F0D4', text: '#4A3A1A' },
];

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  trip: string;
  comment: string;
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const palette = avatarPalette[index % avatarPalette.length];

  return (
    <div
      className="flex-none select-none"
      style={{ width: 380 }}
    >
      {/* Card */}
      <div
        style={{
          background: '#0f1923',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20,
          padding: '32px 28px 28px',
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = 'translateY(-4px)';
          el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = '0 8px 40px rgba(0,0,0,0.35)';
        }}
      >
        {/* Decorative quote mark */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 20,
            fontSize: 96,
            lineHeight: 1,
            fontFamily: 'Georgia, serif',
            color: 'rgba(212,175,110,0.12)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          &ldquo;
        </div>

        {/* Trip badge */}
        <div style={{ marginBottom: 20 }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(212,175,110,0.12)',
              border: '1px solid rgba(212,175,110,0.3)',
              color: '#d4af6e',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: 100,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {t.trip}
          </span>
        </div>

        {/* Comment */}
        <p
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: 15.5,
            lineHeight: 1.7,
            marginBottom: 28,
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontStyle: 'italic',
            whiteSpace: 'normal',
            minHeight: 88,
          }}
        >
          {t.comment}
        </p>

        {/* Stars */}
        <div style={{ display: 'flex', gap: 2, marginBottom: 20, color: '#d4af6e' }}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.07)',
            marginBottom: 20,
          }}
        />

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: palette.bg,
              color: palette.text,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "'DM Sans', sans-serif",
              flexShrink: 0,
            }}
          >
            {initials(t.name)}
          </div>
          <div>
            <div
              style={{
                color: '#fff',
                fontWeight: 600,
                fontSize: 14,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
                marginTop: 1,
              }}
            >
              {t.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;
    let last = performance.now();
    const speed = 38;

    const step = (time: number) => {
      const delta = time - last;
      last = time;

      if (!pausedRef.current) {
        const halfWidth = track.scrollWidth / 2;
        scrollRef.current += (speed * delta) / 1000;
        if (scrollRef.current >= halfWidth) scrollRef.current -= halfWidth;
        track.style.transform = `translateX(-${scrollRef.current}px)`;
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const items = [...testimonials, ...testimonials];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
      `}</style>

      <section
        style={{
          background: '#080e15',
          padding: '100px 0 110px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Ambient glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(212,175,110,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        {/* Ambient glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -80,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(100,160,240,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', paddingLeft: 24, paddingRight: 24, marginBottom: 64 }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 20,
            }}
          >
            <div style={{ height: 1, width: 40, background: '#d4af6e' }} />
            <span
              style={{
                color: '#d4af6e',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Traveller Stories
            </span>
            <div style={{ height: 1, width: 40, background: '#d4af6e' }} />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(38px, 6vw, 68px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            Journeys that&nbsp;
            <span style={{ fontStyle: 'italic', color: '#d4af6e' }}>moved</span>
            <br />
            our&nbsp;customers
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: 16,
              fontFamily: "'DM Sans', sans-serif",
              maxWidth: 440,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Real voices from real travellers across Uganda who trusted us with
            their most important moments.
          </p>
        </motion.div>

        {/* Marquee */}
        <div
          style={{ overflow: 'hidden', cursor: 'default' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left fade */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 120,
                background: 'linear-gradient(to right, #080e15, transparent)',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: 120,
                background: 'linear-gradient(to left, #080e15, transparent)',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />

            <div
              ref={trackRef}
              style={{
                display: 'flex',
                gap: 20,
                padding: '8px 24px 12px',
                willChange: 'transform',
              }}
            >
              {items.map((t, i) => (
                <TestimonialCard key={`${t.id}-${i}`} t={t} index={i % testimonials.length} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(32px, 6vw, 80px)',
            marginTop: 72,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          {[
            { value: '2,400+', label: 'Happy Travellers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Visa Success Rate' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 700,
                  color: '#d4af6e',
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: 12,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}