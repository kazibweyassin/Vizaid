import Hero from '@/components/sections/Hero';
import NextAfterHero from '@/components/sections/NextAfterHero';
import FeaturedTours from '@/components/sections/FeaturedTours';
import StartYourJourney from '@/components/sections/StartYourJourney';
import WhatSetsUsApart from '@/components/sections/WhatSetsUsApart';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <NextAfterHero />
      <FeaturedTours />
      <StartYourJourney />
      <WhatSetsUsApart />
      <Testimonials />
    </>
  );
}
