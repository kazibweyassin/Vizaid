import Hero from '@/components/sections/Hero';
import NextAfterHero from '@/components/sections/NextAfterHero';
import Services from '@/components/sections/Services';
import FeaturedTours from '@/components/sections/FeaturedTours';
import PopularDestinations from '@/components/sections/PopularDestinations';
import StartYourJourney from '@/components/sections/StartYourJourney';
import WhatSetsUsApart from '@/components/sections/WhatSetsUsApart';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <NextAfterHero />
      <Services />
      <FeaturedTours />
      <PopularDestinations />
      <StartYourJourney />
      <WhatSetsUsApart />
      <Testimonials />
    </>
  );
}
