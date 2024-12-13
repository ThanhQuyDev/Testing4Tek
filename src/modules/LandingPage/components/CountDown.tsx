import React from 'react';

import { HStack, VStack } from '@/components/ui/Utilities';
import { useCountDownTimer } from '@/hooks/useCountDown';
import { useTypeSafeTranslation } from '@/hooks/useTypeTranslation';

export const CountDown = () => {
  const { time } = useCountDownTimer('1/12/2025');
  const { t } = useTypeSafeTranslation(['common']);

  return (
    <HStack
      className="px:[1.625rem] sm:px-[2.4438rem] w-full sm:w-fit py-6 sm:py-[1.625rem] gap-1 sm:gap-[3.2588rem] mx-auto rounded-[1.3125rem] bg-white text-black mt-[1.3125rem] "
      align={'center'}
      pos={'center'}
    >
      <VStack spacing={0} align={'center'} className="gap-[3px] sm:gap-0">
        <p className="text-[2.25rem] sm:text-[3.75rem] font-[900] leading-[2.8125rem] sm:leading-[4rem] sm:tracking-[.3rem] min-w-[3.375rem] sm:min-w-[4.9694rem] aspect-[54/46] sm:aspect-square text-center font-serif">
          {time?.days}
        </p>
        <p className="capitalize text-xs  sm:text-[.9775rem] leading-[.9144rem] sm:leading-[1.1919rem] font-[700]">
          {t('days')}
        </p>
      </VStack>
      <p className="text-[2.5rem]  sm:text-[4.0731rem] leading-[3.0475rem] sm:leading-[4.9656rem] font-serif">:</p>
      <VStack spacing={0} align={'center'} className="gap-[3px] sm:gap-0">
        <p className="text-[2.25rem] sm:text-[3.75rem] font-[900] leading-[2.8125rem] sm:leading-[4rem] sm:tracking-[.3rem] min-w-[3.375rem] sm:min-w-[4.9694rem] aspect-[54/46] sm:aspect-square  text-center font-serif">
          {time?.hours}
        </p>
        <p className="capitalize text-xs  sm:text-[.9775rem] leading-[.9144rem] sm:leading-[1.1919rem] font-[700]">
          {t('hour')}
        </p>
      </VStack>
      <p className="text-[2.5rem]  sm:text-[4.0731rem] leading-[3.0475rem] sm:leading-[4.9656rem] font-serif">:</p>
      <VStack spacing={0} align={'center'} className="gap-[3px] sm:gap-0">
        <p className="text-[2.25rem] sm:text-[3.75rem] font-[900] leading-[2.8125rem] sm:leading-[4rem] sm:tracking-[.3rem] min-w-[3.375rem] sm:min-w-[4.9694rem] aspect-[54/46] sm:aspect-square text-center font-serif">
          {time?.minutes}
        </p>
        <p className="capitalize text-xs  sm:text-[.9775rem] leading-[.9144rem] sm:leading-[1.1919rem] font-[700]">
          {t('minutes')}
        </p>
      </VStack>
      <p className="text-[2.5rem]  sm:text-[4.0731rem] leading-[3.0475rem] sm:leading-[4.9656rem] font-serif">:</p>
      <VStack spacing={0} align={'center'} className="gap-[3px] sm:gap-0">
        <p className="text-[2.25rem] sm:text-[3.75rem] font-[900] leading-[2.8125rem] sm:leading-[4rem] sm:tracking-[.3rem] min-w-[3.375rem] sm:min-w-[4.9694rem] aspect-[54/46] sm:aspect-square text-center font-serif">
          {time?.seconds}
        </p>
        <p className="capitalize text-xs  sm:text-[.9775rem] leading-[.9144rem] sm:leading-[1.1919rem] font-[700]">
          {t('second')}
        </p>
      </VStack>
    </HStack>
  );
};
