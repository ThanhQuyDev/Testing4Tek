import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useTypeSafeTranslation } from '@/hooks/useTypeTranslation';

import { PartnerSwipper } from './PartnerSwipper';

export const OurPartner = () => {
  const { t } = useTypeSafeTranslation(['common']);
  return (
    <VStack className="py-10 sm:py-[7.5rem] bg-background-grayLight gap-[5rem]" id="partner" align={'center'}>
      <p className="font-serif text-[2.5rem] sm:text-[3.75rem] font-[900] leading-[3.125rem] sm:leading-[5rem] tracking-[.0375rem] sm:tracking-[.225rem]">
        {t('ourPartners')}
      </p>
      <PartnerSwipper />
    </VStack>
  );
};
