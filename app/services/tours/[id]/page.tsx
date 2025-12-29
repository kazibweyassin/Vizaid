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

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold mb-2 text-red-100">
              {tour.type === 'domestic' ? 'Uganda Tours' : 'International Tours'} • {tour.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <p className="text-xl text-red-100 mb-6">{tour.description}</p>
            <div className="flex flex-wrap gap-4 text-lg">
              <div>
                <span className="text-red-100">📍</span> {tour.destination}
              </div>
              <div>
                <span className="text-red-100">⏱️</span> {tour.duration}
              </div>
              <div>
                <span className="text-red-100">💰</span> {tour.price}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <Card className="p-0 overflow-hidden">
              <div className="relative h-96 bg-gray-200">
                {tour.image ? (
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">🌍</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Highlights */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1 font-bold">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-red-600 pl-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                          {day.day}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{day.title}</h3>
                      </div>
                      <ul className="space-y-2 ml-14">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="text-red-600 mr-2 mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
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
                    <h3 className="text-lg font-semibold text-green-700 mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {tour.costBreakdown.included.map((item, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-700 mb-3">What's Not Included</h3>
                    <ul className="space-y-2">
                      {tour.costBreakdown.excluded.map((item, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <span className="text-red-600 mr-2 mt-1">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-red-600 mb-2">{tour.price}</div>
                <div className="text-sm text-gray-500">per person</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{tour.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Destination:</span>
                  <span className="font-semibold">{tour.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-semibold capitalize">{tour.type}</span>
                </div>
              </div>
              <Link href="#inquiry-form" className="block mb-4">
                <Button className="w-full" size="lg">
                  Request Quote
                </Button>
              </Link>
              <Link href="/contact" className="block">
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </Card>

            {/* Quick Info */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Why Book With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Best price guarantee</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Expert local guides</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-red-600 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Flexible booking options</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Inquiry Form */}
        <div id="inquiry-form" className="mt-12">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote for {tour.title}</h2>
            <TourForm tourType={tour.type} />
          </Card>
        </div>
      </div>
    </div>
  );
}

