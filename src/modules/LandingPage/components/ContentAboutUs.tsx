import React from 'react';

import { Icons } from '@/assets/icons';
import { HStack, VStack } from '@/components/ui/Utilities';
import { useTypeSafeTranslation } from '@/hooks/useTypeTranslation';

const COUNT_USER = 600;
const COUNT_GAME = 135;
export const ContentAboutUs = () => {
  const { t } = useTypeSafeTranslation(['common']);
  return (
    <HStack className="gap-10 w-full" pos={'center'}>
      <VStack spacing={0} className="w-[35rem] sm:h-[38.75rem] px-4" align={'start'}>
        <p className="font-serif capitalize text-black font-[900] text-[2.5rem] sm:text-[3.75rem] leading-[3.125rem] sm:leading-[3.75rem] text-left tracking-[.0375rem] sm:tracking-[.225rem]">
          {t('aboutUs')}
        </p>
        <p className="text-sm leading-[1.225rem] text-primary-grayDescription mt-4 sm:mt-10">
          {t('browseOurSelectionOfFreeOnlineGames')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-1 w-full gap-4 sm:gap-0">
          <VStack spacing={4} className="mt-10 sm:mt-[4.9556rem]">
            <p className="text-primary-blue text-[2.75rem] sm:text-[5rem] leading-[3.3525rem] sm:leading-[6.095rem] font-bold">
              {COUNT_USER}
              <span className="text-xl sm:text-[2.5rem] font-bold leading-[1.5237rem] sm:leading-[3.0475rem]">M</span>+
            </p>
            <p className="text-2xl leading-[1.875rem] font-bold capitalize">{t('users')}</p>
          </VStack>
          <VStack className="mt-10" spacing={4}>
            <p className="text-primary-blue text-[2.75rem] sm:text-[5rem] leading-[3.3525rem] sm:leading-[6.095rem] font-bold">
              {COUNT_GAME}+
            </p>
            <p className="text-2xl leading-[1.875rem] font-bold capitalize">{t('games')}</p>
          </VStack>
        </div>
      </VStack>
      <VStack
        className="w-full sm:w-[35rem] px-4  gap-10 bg-background-gray h-[34rem] sm:h-[38.75rem] sm:px-[4.6875rem]"
        justify={'center'}
      >
        <HStack className="sm:gap-6 gap-5 flex-nowrap" align={'start'}>
          <div className="min-w-[2.5rem] sm:min-w-[3.125rem] h-10 sm:h-[3.1575rem] flex justify-center items-center bg-primary-lightBlue rounded-full">
            <Icons.calendar />
          </div>
          <VStack className="gap-3 sm:gap-[.505rem]">
            <p className="text-2xl leading-[1.875rem] font-bold">{t('24Hour')}</p>
            <p className="text-sm leading-[1.225rem] text-primary-grayDescription">{t('24HourAccess')}</p>
          </VStack>
        </HStack>
        <HStack className="sm:gap-6 gap-5 flex-nowrap" align={'start'}>
          <div className="min-w-[2.5rem] sm:min-w-[3.125rem] h-10 sm:h-[3.1575rem] flex justify-center items-center bg-primary-lightBlue rounded-full">
            <Icons.pen />
          </div>
          <VStack className="gap-3 sm:gap-[.505rem]">
            <p className="text-2xl leading-[1.875rem] font-bold">{t('design')}</p>
            <p className="text-sm leading-[1.225rem] text-primary-grayDescription">
              {t('combiningImaginativeUniverses')}
            </p>
          </VStack>
        </HStack>
        <HStack className="sm:gap-6 gap-5 flex-nowrap" align={'start'}>
          <div className="min-w-[2.5rem] sm:min-w-[3.125rem] h-10 sm:h-[3.1575rem] flex justify-center items-center bg-primary-lightBlue rounded-full">
            <Icons.people />
          </div>
          <VStack className="gap-3 sm:gap-[.505rem]">
            <p className="text-2xl leading-[1.875rem] font-bold">{t('team')}</p>
            <p className="text-sm leading-[1.225rem] text-primary-grayDescription">{t('etechIsAnAwardWinning')}</p>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
};
