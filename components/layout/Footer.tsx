import Link from 'next/link';
import Image from 'next/image';

const BRAND = '#5D0531';
const GOLD = '#C9973A';

const columns = [
  {
    heading: 'Booking',
    links: [
      { href: '/contact', label: 'My Booking' },
      { href: '/testimonials', label: 'Submit Feedback' },
      { href: '/contact', label: 'Travel Alerts' },
      { href: '/services/air-ticketing', label: 'Flexible Bookings' },
      { href: '/contact', label: 'Booking Conditions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Careers' },
      { href: '/contact', label: 'Privacy Policy' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { href: '/contact', label: 'Get in Touch' },
      { href: '/contact', label: 'Live Chat' },
      { href: '/contact', label: 'FAQ' },
      { href: '/testimonials', label: 'Reviews' },
    ],
  },
  {
    heading: 'Purpose',
    links: [
      { href: '/about', label: 'Our Mission' },
      { href: '/about', label: 'Community Support' },
      { href: '/about', label: 'Sustainability' },
    ],
  },
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .vizaid-footer * { font-family: 'DM Sans', system-ui, sans-serif; box-sizing: border-box; }
        .footer-link { color: rgba(255,255,255,0.45); font-size: 14px; text-decoration: none; transition: color 0.15s; display: block; padding: 4px 0; }
        .footer-link:hover { color: rgba(255,255,255,0.9); }
        .social-btn { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); transition: background 0.15s, color 0.15s; text-decoration: none; }
        .social-btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
        .subscribe-input { flex: 1; min-width: 0; padding: 12px 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.06); color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s; font-family: 'DM Sans', sans-serif; }
        .subscribe-input::placeholder { color: rgba(255,255,255,0.3); }
        .subscribe-input:focus { border-color: rgba(201,151,58,0.5); }
        .subscribe-btn { padding: 12px 22px; border-radius: 10px; background: linear-gradient(135deg, ${BRAND}, #8B0045); color: #fff; font-weight: 700; font-size: 14px; border: none; cursor: pointer; white-space: nowrap; transition: opacity 0.15s; font-family: 'DM Sans', sans-serif; }
        .subscribe-btn:hover { opacity: 0.85; }
      `}</style>

      <footer
        className="vizaid-footer"
        style={{ background: '#080e15', color: '#fff', position: 'relative', overflow: 'hidden' }}
      >
        {/* Subtle top gradient border */}
        <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${BRAND} 30%, ${GOLD} 60%, transparent)` }} />

        {/* Background ambient glow */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 500, height: 300, background: `radial-gradient(ellipse at bottom right, rgba(93,5,49,0.12), transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 24px 0' }}>

          {/* ── Top: brand + newsletter ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 48,
              paddingBottom: 64,
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Brand side */}
            <div>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 20, textDecoration: 'none' }}>
                <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.05)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/logo.png" alt="Vizaid Travel" width={44} height={44} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 20, color: '#fff', lineHeight: 1.1 }}>Vizaid Travel</div>
                  <div style={{ fontSize: 11.5, color: GOLD, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>Licensed · TUGATA Member</div>
                </div>
              </Link>

              <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280, marginBottom: 28 }}>
                Uganda's trusted travel partner for visas, tours, and unforgettable journeys — crafted with care since day one.
              </p>

              {/* Trust badges */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {['🛡️ TUGATA Certified', '✈️ IATA Affiliate', '⭐ 4.9 Rated'].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      display: 'inline-block',
                      padding: '5px 11px',
                      borderRadius: 100,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.55)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter side */}
            <div style={{ maxWidth: 440 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 12,
                }}
              >
                <div style={{ width: 24, height: 1, background: GOLD }} />
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD }}>
                  Newsletter
                </span>
              </div>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 8 }}>
                Travel deals &amp; inspiration,<br />
                <span style={{ fontStyle: 'italic', color: GOLD }}>straight to your inbox.</span>
              </p>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.38)', marginBottom: 20, lineHeight: 1.6 }}>
                Join 8,000+ subscribers getting exclusive offers and new tour drops every month.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                <input className="subscribe-input" type="email" placeholder="Your email address" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.22)', marginTop: 10 }}>No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* ── Middle: link columns ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 40,
              padding: '56px 0 56px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {columns.map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    marginBottom: 16,
                  }}
                >
                  {col.heading}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 16 }}>
                Contact
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '📍', text: 'Kampala, Uganda' },
                  { icon: '📞', text: '+256 700 000 000' },
                  { icon: '✉️', text: 'hello@vizaidtravel.com' },
                ].map((item) => (
                  <div key={item.text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                    <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              padding: '24px 0 32px',
            }}
          >
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', margin: 0 }}>
              © {year} Vizaid Travel Ltd. All rights reserved.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="social-btn">
                  <svg style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>

            {/* Region selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>Region:</span>
              <select
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: 12,
                  padding: '5px 10px',
                  fontFamily: 'DM Sans, sans-serif',
                  cursor: 'pointer',
                }}
              >
                <option>🌍 Global</option>
                <option>🇺🇬 Uganda</option>
                <option>🌏 East Africa</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}