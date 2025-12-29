import Hero from '@/components/sections/Hero';
import PopularDestinations from '@/components/sections/PopularDestinations';
import Services from '@/components/sections/Services';
import FeaturedTours from '@/components/sections/FeaturedTours';
import WhatSetsUsApart from '@/components/sections/WhatSetsUsApart';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <Services />
      <FeaturedTours />
      <WhatSetsUsApart />
      <Testimonials />
    </>
  );
}
