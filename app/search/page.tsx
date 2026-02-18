'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { searchTours } from '@/lib/search-utils';
import { TourPackage } from '@/types';
import { motion } from 'framer-motion';

function SearchResults() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type') as 'domestic' | 'international' | undefined;
    const category = searchParams.get('category') || undefined;

    const filters = {
      query: query || undefined,
      type,
      category,
    };

    const searchResults = searchTours(filters);
    setResults(searchResults);
    setLoading(false);
  }, [searchParams]);

  const query = searchParams.get('q') || '';

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderBottomColor: '#5D0531'}}></div>
          <p className="text-gray-600">Searching tours...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {query ? `Search Results for "${query}"` : 'Search Tours'}
          </h1>
          <p className="text-gray-600">
            {results.length > 0
              ? `Found ${results.length} tour${results.length !== 1 ? 's' : ''}`
              : 'No tours found matching your search criteria'}
          </p>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/tours/${tour.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                          {tour.type === 'domestic' ? '🇺🇬 Domestic' : '🌍 International'}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="text-sm font-semibold mb-2" style={{color: '#5D0531'}}>{tour.category}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{tour.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{tour.description}</p>
                      
                      <div className="mt-auto">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-500">{tour.duration}</span>
                          <span className="text-lg font-bold text-gray-900">{tour.price}</span>
                        </div>
                        <div className="font-medium text-sm flex items-center gap-2" style={{color: '#5D0531'}}>
                          View details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No tours found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or browse all tours
            </p>
            <Link href="/services/tours">
              <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-90" style={{backgroundColor: '#5D0531'}}>
                Browse All Tours
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderBottomColor: '#5D0531'}}></div>
            <p className="text-gray-600">Loading search...</p>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}

