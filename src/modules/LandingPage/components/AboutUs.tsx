import React from 'react';

import { VStack } from '@/components/ui/Utilities';

import { ContentAboutUs } from './ContentAboutUs';
import { GlobalPinMap } from './GlobalPinMap';

export const AboutUs = () => {
  return (
    <VStack className="h-[87.75rem] sm:h-[90.75rem]" id="about-us" justify={'between'}>
      <ContentAboutUs />
      <GlobalPinMap />
    </VStack>
  );
};
