'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { tourPackages } from '@/lib/tours-data';
import QuickViewModal from '@/components/ui/QuickViewModal';
import type { TourPackage } from '@/types';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickViewTour, setQuickViewTour] = useState<TourPackage | null>(null);

  const navLinks = [
    { href: '/services/tours', label: 'Destinations' },
    { href: '/services/tours', label: 'Ways to Travel' },
    { href: '/services/tours', label: 'Deals' },
    { href: '/about', label: 'About' },
  ];

  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav className={cn(isHome ? 'absolute inset-x-0 top-0 z-50' : 'bg-white sticky top-0 z-50 shadow-sm', 'transition-colors')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Vizaid Logo" 
                width={40} 
                height={40} 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold" style={{ color: isHome ? '#fff' : '#5D0531' }}>Vizaid</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Domestic dropdown */}
            <div className="relative group">
              <button className={cn(isHome ? 'text-white' : 'text-gray-800', 'transition-colors font-medium text-sm hover:opacity-70 inline-flex items-center gap-2')}>
                Domestic
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              <div className="absolute left-0 mt-3 w-80 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-95 group-hover:scale-100 transition-all">
                <div className="p-3">
                  <div className="grid grid-cols-1 gap-2">
                    {tourPackages.filter(t => t.type === 'domestic').slice(0,8).map((t) => (
                      <button
                        key={t.id}
                        onClick={() => { setQuickViewTour(t as TourPackage); setIsOpen(false); }}
                        className="w-full text-left flex items-center gap-3 p-2 rounded hover:bg-gray-50"
                        aria-haspopup="dialog"
                        aria-label={`Quick view ${t.title}`}
                      >
                        {t.image ? (
                          <Image src={t.image} alt={t.title} width={64} height={44} className="rounded object-cover" />
                        ) : (
                          <div className="w-16 h-10 bg-gray-100 rounded" />
                        )}
                        <div className="text-sm">
                          <div className="font-semibold text-gray-800">{t.title}</div>
                          <div className="text-xs text-gray-500">{t.duration} • {t.destination}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t">
                    <Link href="/services/tours?type=domestic" className="text-sm font-medium text-rose-700">View all domestic packages →</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* International dropdown */}
            <div className="relative group">
              <button className={cn(isHome ? 'text-white' : 'text-gray-800', 'transition-colors font-medium text-sm hover:opacity-70 inline-flex items-center gap-2')}>
                International
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              <div className="absolute left-0 mt-3 w-80 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-95 group-hover:scale-100 transition-all">
                <div className="p-3">
                  <div className="grid grid-cols-1 gap-2">
                    {tourPackages.filter(t => t.type === 'international').slice(0,8).map((t) => (
                      <button
                        key={t.id}
                        onClick={() => { setQuickViewTour(t as TourPackage); setIsOpen(false); }}
                        className="w-full text-left flex items-center gap-3 p-2 rounded hover:bg-gray-50"
                        aria-haspopup="dialog"
                        aria-label={`Quick view ${t.title}`}
                      >
                        {t.image ? (
                          <Image src={t.image} alt={t.title} width={64} height={44} className="rounded object-cover" />
                        ) : (
                          <div className="w-16 h-10 bg-gray-100 rounded" />
                        )}
                        <div className="text-sm">
                          <div className="font-semibold text-gray-800">{t.title}</div>
                          <div className="text-xs text-gray-500">{t.duration} • {t.destination}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t">
                    <Link href="/services/tours?type=international" className="text-sm font-medium text-rose-700">View all international packages →</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Existing nav links (kept) */}
            {navLinks.map((link, index) => (
              <Link
                key={`${link.href}-${link.label}-${index}`}
                href={link.href}
                className={cn(isHome ? 'text-white' : 'text-gray-800', 'transition-colors font-medium text-sm hover:opacity-70')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Utility Icons + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/contact" className={cn(isHome ? 'text-white border-white/30 bg-white/5' : 'bg-[#5D0531] text-white', 'px-4 py-2 rounded-lg font-medium border transition-colors')}>Start your journey</Link>

            <button className={cn(isHome ? 'text-white' : 'text-gray-800', 'transition-colors hover:opacity-70')} aria-label="Favorites">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className={cn(isHome ? 'text-white' : 'text-gray-800', 'transition-colors hover:opacity-70')} aria-label="Account">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <Link href="/contact" className={cn(isHome ? 'text-white' : 'text-gray-800', 'transition-colors hover:opacity-70')} aria-label="Contact">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn('md:hidden p-2', isHome ? 'text-white' : 'text-gray-700')}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-2">
            <Link href="/contact" className="block py-3 px-3 bg-[#5D0531] text-white rounded-lg text-center font-semibold" onClick={() => setIsOpen(false)}>Start your journey</Link>

            {navLinks.map((link, index) => (
              <Link
                key={`${link.href}-${link.label}-${index}`}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile: Domestic list */}
            <div className="pt-3 border-t">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Domestic Packages</div>
              {tourPackages.filter(t => t.type === 'domestic').slice(0,6).map((t) => (
                <Link key={t.id} href={`/services/tours/${t.id}`} className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                  {t.title}
                </Link>
              ))}
              <Link href="/services/tours?type=domestic" className="block py-2 text-rose-700 font-medium" onClick={() => setIsOpen(false)}>See all domestic →</Link>
            </div>

            {/* Mobile: International list */}
            <div className="pt-3 border-t">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">International Packages</div>
              {tourPackages.filter(t => t.type === 'international').slice(0,6).map((t) => (
                <Link key={t.id} href={`/services/tours/${t.id}`} className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                  {t.title}
                </Link>
              ))}
              <Link href="/services/tours?type=international" className="block py-2 text-rose-700 font-medium" onClick={() => setIsOpen(false)}>See all international →</Link>
            </div>
          </div>
        </div>
      )} 

      {/* Quick view modal */}
      {quickViewTour && (
        <QuickViewModal tour={quickViewTour} onClose={() => setQuickViewTour(null)} />
      )}
    </nav>
  );
}
