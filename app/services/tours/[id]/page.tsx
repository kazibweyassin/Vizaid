import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { tourPackages } from '@/lib/tours-data';
import Card from '@/components/ui/Card';
import TourForm from '@/components/forms/TourForm';
import Button from '@/components/ui/Button';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return tourPackages.map((tour) => ({
    id: tour.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tour = tourPackages.find((t) => t.id === id);
  
  if (!tour) {
    return {
      title: 'Tour Not Found | Vizaid Travel',
    };
  }

  return {
    title: `${tour.title} | Vizaid Travel`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tour = tourPackages.find((t) => t.id === id);

  if (!tour) {
    notFound();
  }

  // Get related tours
  const relatedTours = tourPackages
    .filter((t) => t.category === tour.category && t.id !== tour.id)
    .slice(0, 3);

  const difficultyLevels = {
    Easy: { color: '#10b981', icon: '●' },
    Moderate: { color: '#f59e0b', icon: '●●' },
    Challenging: { color: '#ef4444', icon: '●●●' },
  };

  const difficulty = tour.difficulty || 'Moderate';
  const difficultyInfo = difficultyLevels[difficulty as keyof typeof difficultyLevels];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Breadcrumb */}
      <div className="text-white py-12" style={{background: 'linear-gradient(to right, #5D0531, rgba(93, 5, 49, 0.8))'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold mb-3 opacity-90">
            <Link href="/services/tours" className="hover:opacity-70">Tours</Link> / {tour.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{tour.title}</h1>
          <div className="flex flex-wrap gap-6 text-base opacity-90">
            <div>📍 {tour.destination}</div>
            <div>⏱️ {tour.duration}</div>
            {tour.rating && <div>⭐ {tour.rating} ({tour.reviewCount} reviews)</div>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Image Gallery */}
            <Card className="p-0 overflow-hidden">
              <div className="relative h-96 md:h-[500px] bg-gray-200 w-full">
                {tour.image ? (
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover w-full h-full"
                    priority
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">🌍</span>
                  </div>
                )}
              </div>
              {tour.galleryImages && tour.galleryImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2 p-4 bg-gray-50">
                  {tour.galleryImages.slice(1, 5).map((img, idx) => (
                    <div key={idx} className="relative h-24 bg-gray-200 rounded overflow-hidden cursor-pointer hover:opacity-75">
                      <Image
                        src={img}
                        alt={`${tour.title} ${idx + 2}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <div className="text-3xl font-bold mb-2" style={{color: '#5D0531'}}>
                  {tour.duration.split('/')[0].trim()}
                </div>
                <div className="text-sm text-gray-600">Duration</div>
              </Card>
              {tour.difficulty && (
                <Card className="text-center">
                  <div className="text-2xl font-bold mb-2 flex justify-center gap-1">
                    {difficultyInfo.icon.split('').map((_, i) => (
                      <span key={i} style={{color: difficultyInfo.color}}>●</span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{difficulty}</div>
                </Card>
              )}
              {tour.groupSize && (
                <Card className="text-center">
                  <div className="text-xl font-bold mb-2">👥</div>
                  <div className="text-sm text-gray-600 line-clamp-2">{tour.groupSize.split('(')[0].trim()}</div>
                </Card>
              )}
              {tour.maxAltitude && (
                <Card className="text-center">
                  <div className="text-lg font-bold mb-2">⛰️</div>
                  <div className="text-sm text-gray-600">{tour.maxAltitude.split('(')[0].trim()}</div>
                </Card>
              )}
            </div>

            {/* Overview */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{tour.description}</p>
            </Card>

            {/* Highlights */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start p-3 rounded border border-gray-100 hover:border-green-300 transition">
                    <span className="mr-3 mt-1 text-lg" style={{color: '#707E64'}}>✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Why Choose This Tour */}
            {tour.whyChooseThis && tour.whyChooseThis.length > 0 && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Tour?</h2>
                <div className="space-y-4">
                  {tour.whyChooseThis.map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center h-8 w-8 rounded-lg" style={{backgroundColor: '#707E64'}}> 
                          <span className="text-white">{idx + 1}</span>
                        </div>
                      </div>
                      <div className="text-gray-700">{reason}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Detailed Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 pl-6" style={{borderColor: '#5D0531'}}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-white" style={{backgroundColor: '#5D0531'}}>
                          Day {day.day}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                          {day.meals && <p className="text-sm text-gray-600">🍴 {day.meals}</p>}
                          {day.accommodation && <p className="text-sm text-gray-600">🏨 {day.accommodation}</p>}
                        </div>
                      </div>
                      <ul className="space-y-2 ml-2">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="mr-3 mt-0.5" style={{color: '#707E64'}}>▸</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Physical Requirements */}
            {tour.physicalRequirements && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Physical Requirements & Fitness Level</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">{tour.physicalRequirements}</p>
                </div>
              </Card>
            )}

            {/* Best Time to Visit */}
            {tour.bestTimeToVisit && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Time to Visit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">🌤️ Recommended Season</h3>
                    <p className="text-gray-700">{tour.bestTimeToVisit}</p>
                  </div>
                  {tour.seasonalInfo && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-2">📅 Seasonal Details</h3>
                      <p className="text-gray-700">{tour.seasonalInfo}</p>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Pricing Tiers */}
            {tour.pricingTiers && tour.pricingTiers.length > 0 && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tour.pricingTiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className="border-2 rounded-lg p-6 transition hover:shadow-lg"
                      style={{borderColor: idx === 1 ? '#5D0531' : '#e5e7eb'}}
                    >
                      {idx === 1 && (
                        <div className="mb-3">
                          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 min-h-12">{tier.description}</p>
                      <div className="mb-4">
                        <span className="text-3xl font-bold" style={{color: '#5D0531'}}>
                          ${tier.pricePerPerson}
                        </span>
                        <span className="text-gray-600 text-sm"> /person</span>
                      </div>
                      {tier.features && (
                        <ul className="space-y-2 mb-6">
                          {tier.features.map((feature, fidx) => (
                            <li key={fidx} className="text-sm text-gray-700 flex items-start">
                              <span className="mr-2" style={{color: '#707E64'}}>✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Cost Breakdown */}
            {tour.costBreakdown && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold" style={{color: '#707E64'}}>✓</span>
                      <h3 className="text-lg font-semibold text-gray-900">What's Included</h3>
                    </div>
                    <ul className="space-y-3">
                      {tour.costBreakdown.included.map((item, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <span className="text-green-600 mr-2 mt-1 font-bold">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold" style={{color: '#5D0531'}}>✗</span>
                      <h3 className="text-lg font-semibold text-gray-900">What's Not Included</h3>
                    </div>
                    <ul className="space-y-3">
                      {tour.costBreakdown.excluded.map((item, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <span className="mr-2 mt-1" style={{color: '#5D0531'}}>−</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )}

            {/* Related Tours */}
            {relatedTours.length > 0 && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Tours You Might Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedTours.map((relatedTour) => (
                    <Link key={relatedTour.id} href={`/services/tours/${relatedTour.id}`}>
                      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer h-full">
                        <div className="relative h-40 bg-gray-200">
                          {relatedTour.image && (
                            <Image
                              src={relatedTour.image}
                              alt={relatedTour.title}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{relatedTour.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{relatedTour.destination}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold" style={{color: '#5D0531'}}>{relatedTour.duration}</span>
                            <span className="font-bold">{relatedTour.price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            {/* Inquiry Form */}
            <div id="inquiry-form">
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Book?</h2>
                <p className="text-gray-600 mb-6">Send us your details and we'll get back to you with a customized quote</p>
                <TourForm tourType={tour.type} />
              </Card>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Main Booking Card */}
              <Card className="border-2" style={{borderColor: '#5D0531'}}>
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">From</div>
                  <div className="text-4xl font-bold mb-1" style={{color: '#5D0531'}}>
                    ${tour.pricingTiers?.[0]?.pricePerPerson || tour.price.replace(/[^\d]/g, '')}
                  </div>
                  <div className="text-sm text-gray-600">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-semibold text-gray-600 uppercase mb-1">Duration</div>
                    <div className="font-semibold text-gray-900">{tour.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 uppercase mb-1">Destination</div>
                    <div className="font-semibold text-gray-900">{tour.destination}</div>
                  </div>
                  {tour.difficulty && (
                    <div>
                      <div className="text-xs font-semibold text-gray-600 uppercase mb-1">Difficulty</div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{tour.difficulty}</span>
                        <span className="flex gap-0.5">
                          {[...Array(tour.difficulty === 'Easy' ? 1 : tour.difficulty === 'Moderate' ? 2 : 3)].map((_, i) => (
                            <span key={i} style={{color: difficultyInfo.color}}>●</span>
                          ))}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="#inquiry-form" className="block mb-3">
                  <Button className="w-full" size="lg">
                    Request Quote
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full">
                    Chat With Specialist
                  </Button>
                </Link>
              </Card>

              {/* Info Cards */}
              <Card>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span style={{color: '#707E64'}}>📋</span> What We Offer
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm">
                    <span className="mr-2 mt-1" style={{color: '#707E64'}}>✓</span>
                    <span className="text-gray-700">Flexible dates</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="mr-2 mt-1" style={{color: '#707E64'}}>✓</span>
                    <span className="text-gray-700">Expert guides</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="mr-2 mt-1" style={{color: '#707E64'}}>✓</span>
                    <span className="text-gray-700">Small groups</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="mr-2 mt-1" style={{color: '#707E64'}}>✓</span>
                    <span className="text-gray-700">24/7 support</span>
                  </li>
                </ul>
              </Card>

              {tour.rating && tour.reviewCount && (
                <Card>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>⭐</span> Guest Reviews
                  </h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1" style={{color: '#5D0531'}}>{tour.rating}</div>
                    <div className="text-sm text-gray-600">Based on {tour.reviewCount} reviews</div>
                    <div className="flex justify-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(tour.rating || 0) ? '⭐' : '☆'}>✓</span>
                      ))}
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

