import Link from 'next/link';

const GOLD = '#C9973A';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080e15] flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(93,5,49,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="text-center px-4 relative z-10">
        <div className="inline-flex items-center gap-2 mb-6">
          <div style={{ height: 1, width: 40, background: GOLD }} />
          <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Page Not Found
          </span>
          <div style={{ height: 1, width: 40, background: GOLD }} />
        </div>
        <h1
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-8xl md:text-9xl font-bold text-white mb-4"
        >
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          This page wandered off&nbsp;
          <span style={{ fontStyle: 'italic', color: GOLD }}>the beaten path</span>
        </h2>
        <p className="text-white/55 max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on your journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button
              style={{ background: 'linear-gradient(135deg, #5D0531, #8B0045)' }}
              className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Back to Home
            </button>
          </Link>
          <Link href="/services/tours">
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
              Explore Tours
            </button>
          </Link>
        </div>
        <Link href="/contact" className="inline-block mt-8 text-white/60 hover:text-white transition-colors text-sm">
          Need help? Contact us →
        </Link>
      </div>
    </div>
  );
}
