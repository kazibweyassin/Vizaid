'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function AboutContent() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-96 md:h-[500px] text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex items-center px-6">
          <div className="w-full max-w-3xl text-left pl-6 md:pl-12 lg:pl-24">
            <p className="text-sm font-semibold mb-2 opacity-90">About Vizaid Travel</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Crafting Unforgettable Journeys</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Expert travel services tailored to your dreams, making every adventure seamless and memorable
            </p>
          </div>
        </div>
      </div>

      {/* Main About Section - Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Images */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="relative h-full">
              {/* Main image */}
              <div className="absolute top-0 left-0 w-72 h-64 rounded-2xl overflow-hidden shadow-lg z-10">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop"
                  alt="Travel experience 1"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* Overlapping image */}
              <div className="absolute bottom-0 right-0 w-64 h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop"
                  alt="Travel experience 2"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Legacy of Trust</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Vizaid Travel, we believe that travel is more than just movement from one place to another. 
              It's about creating lasting memories, building connections, and discovering the extraordinary 
              in every corner of the world.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in Uganda with a passion for excellence, we've spent years perfecting the art of travel 
              curation. Whether you're seeking an adrenaline-pumping safari, a serene beach escape, or a 
              cultural immersion, our team of dedicated travel experts ensures every detail is perfect.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over <strong>5 years of experience</strong> and thousands of satisfied travelers, we've established 
              ourselves as Uganda's most reliable travel partner. As members of <strong>TUGATA</strong> (Uganda Association 
              of Travel Agents), we maintain the highest standards of professionalism and service.
            </p>
            <Link href="/services/tours">
              <Button size="lg">Explore Our Tours</Button>
            </Link>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-gray-200">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide world-class travel services that transform ordinary trips into extraordinary adventures. 
              We're committed to making travel accessible, hassle-free, and unforgettable for everyone.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 italic">
                "Your journey is our passion. Every ticket booked, every visa processed, every tour guided—
                we do it with excellence and care."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the leading travel agency in East Africa, recognized globally for our expertise, 
              innovation, and unwavering commitment to customer satisfaction. We envision a world where 
              travel is seamless, affordable, and accessible to everyone.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 italic">
                "Enabling dreamers to become travelers, and travelers to become explorers."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Vizaid?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-white text-2xl" style={{backgroundColor: '#5D0531'}}>
                <span className="sr-only">Expert Knowledge</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Knowledge</h3>
              <p className="text-gray-600">
                Extensive experience across Africa's most iconic destinations and visa requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-white text-2xl" style={{backgroundColor: '#5D0531'}}>
                <span className="sr-only">Premium Service</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Service</h3>
              <p className="text-gray-600">
                Personalized attention and dedicated support from booking to return
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-white text-2xl" style={{backgroundColor: '#5D0531'}}>
                <span className="sr-only">Trust & Safety</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Safety</h3>
              <p className="text-gray-600">
                Licensed operator with TUGATA membership and years of proven reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-white text-2xl" style={{backgroundColor: '#5D0531'}}>
                <span className="sr-only">Best Value</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Value</h3>
              <p className="text-gray-600">
                Competitive pricing without compromising quality or experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Our Services</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          From visa assistance to guided safari adventures, we offer comprehensive travel solutions tailored 
          to your unique needs and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Air Ticketing</h3>
            <p className="text-gray-600 mb-6">
              Competitive flight deals to destinations worldwide. Our booking experts find you the best prices 
              and convenient schedules.
            </p>
            <Link href="/services/air-ticketing" className="inline-block">
              <span className="font-semibold" style={{color: '#5D0531'}}>Learn More →</span>
            </Link>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Visa Assistance</h3>
            <p className="text-gray-600 mb-6">
              Hassle-free visa processing with expert guidance. We handle the complexity so you can focus on 
              your journey.
            </p>
            <Link href="/services/visa-assistance" className="inline-block">
              <span className="font-semibold" style={{color: '#5D0531'}}>Learn More →</span>
            </Link>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Curated Tours</h3>
            <p className="text-gray-600 mb-6">
              Unforgettable experiences from wildlife safaris to cultural adventures. Every tour is crafted 
              with care.
            </p>
            <Link href="/services/tours" className="inline-block">
              <span className="font-semibold" style={{color: '#5D0531'}}>Explore Tours →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="py-20 text-white"
        style={{background: 'linear-gradient(to right, #5D0531, rgba(93, 5, 49, 0.8))'}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <p className="text-xl opacity-90">Years in Business</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-xl opacity-90">Happy Travelers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-xl opacity-90">Destinations Covered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-xl opacity-90">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl" style={{backgroundColor: 'rgba(93, 5, 49, 0.1)'}}></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Travel Consultants</h3>
            <p className="text-gray-600">
              Expert consultants with deep knowledge of destinations, creating personalized itineraries for 
              your perfect adventure.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl" style={{backgroundColor: 'rgba(93, 5, 49, 0.1)'}}></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Visa Specialists</h3>
            <p className="text-gray-600">
              Dedicated professionals who understand visa complexities and stay updated with every country's 
              requirements.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl" style={{backgroundColor: 'rgba(93, 5, 49, 0.1)'}}></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Local Guides</h3>
            <p className="text-gray-600">
              Passionate guides with insider knowledge, cultural insight, and genuine love for the destinations 
              they showcase.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative py-24 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl opacity-90 mb-10">
            Let's create an unforgettable travel experience together. Contact our team today to start planning 
            your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="w-full sm:w-auto" size="lg">
                Get In Touch
              </Button>
            </Link>
            <Link href="/services/tours">
              <Button variant="outline" className="w-full sm:w-auto" size="lg">
                Explore Tours
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through honesty, transparency, and reliability in every interaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Striving for perfection in every detail, from customer service to adventure experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Committed to responsible tourism that preserves destinations for future travelers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our services to meet the evolving needs of modern travelers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
             