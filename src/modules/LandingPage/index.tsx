import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import type { NextPageWithLayout } from '@/types';

import { AboutUs } from './components/AboutUs';
import Banner from './components/Banner';
import { OurGames } from './components/OurGames';
import { OurPartner } from './components/OurPartner';

const LandingPage: NextPageWithLayout = () => {
  return (
    <VStack className="bg-white gap-[3rem] sm:gap-[8rem]">
      <Banner />
      <AboutUs />
      <OurGames />
      <OurPartner />
    </VStack>
  );
};

export default LandingPage;
