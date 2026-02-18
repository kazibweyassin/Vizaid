'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TourPackage } from '@/types';

type Props = {
  tour: TourPackage | null;
  onClose: () => void;
};

export default function QuickViewModal({ tour, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (tour) {
      document.addEventListener('keydown', onKey);
      // focus the close button for accessibility
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [tour, onClose]);

  if (!tour) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view ${tour.title}`}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="bg-white w-full max-w-3xl mx-4 rounded-lg overflow-hidden shadow-2xl">
        <div className="relative h-48 md:h-56 bg-gray-100">
          {tour.image && (
            <Image src={tour.image} alt={tour.title} fill className="object-cover" unoptimized />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30" />
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/80 rounded-full w-9 h-9 flex items-center justify-center hover:bg-white"
            aria-label="Close quick view"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{tour.title}</h3>
              <div className="text-sm text-gray-600 mb-3">{tour.destination} • {tour.duration}</div>
              <div className="text-sm text-gray-700 mb-4 line-clamp-3">{tour.description}</div>

              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-900 mb-2">Highlights</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  {tour.highlights.slice(0, 6).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-700">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tour.itinerary && tour.itinerary.length > 0 && (
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Sample itinerary</div>
                  <div className="text-sm text-gray-700">
                    Day {tour.itinerary[0].day}: {tour.itinerary[0].title}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mt-4">
                <div className="text-2xl font-bold" style={{color: '#5D0531'}}>{tour.price}</div>
                <Link href={`/services/tours/${tour.id}`} className="text-sm text-rose-700 font-medium underline">View full details</Link>
                <button
                  onClick={() => {
                    // open inquiry form on tours page
                    window.location.href = `/services/tours/${tour.id}#inquiry-form`;
                  }}
                  className="ml-auto bg-rose-700 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Enquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
