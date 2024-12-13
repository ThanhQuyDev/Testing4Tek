import Image from 'next/image';
import React from 'react';

import { Icons } from '@/assets/icons';
import { Input } from '@/components/ui/input';
import { VStack } from '@/components/ui/Utilities';
import { useTypeSafeTranslation } from '@/hooks/useTypeTranslation';

import { CountDown } from './CountDown';

const Banner = () => {
  const { t } = useTypeSafeTranslation(['common']);
  return (
    <div className='bg-[url("/images/background-banner-mobile.png")] sm:bg-[url("/images/background-banner.png")] bg-cover bg-no-repeat bg-center h-[51.5rem] sm:h-[63.625rem] relative'>
      <div className="absolute left-0 bottom-0 hidden sm:block">
        <Image
          src={'/images/fairy.webp'}
          alt="fairy"
          width={938}
          height={938}
          className="max-w-[58.625rem] max-h-[58.625rem]"
        />
      </div>
      <div className="absolute w-full px-4 left-0 bottom-0 block sm:hidden">
        <Image
          src={'/images/fairy-mobile.webp'}
          alt="fairy-mobile"
          width={342}
          height={258}
          className="max-w-[21.375rem] max-h-[16.125rem]"
        />
      </div>
      <div className="absolute container right-1/2 translate-x-1/2 top-[8.5rem] sm:top-[18.375rem] w-full flex flex-col justify-center">
        <p className="capitalize text-[2.5rem] text-center sm:text-[5rem] font-[900] text-white leading-[3.125rem] sm:leading-[7.5rem] font-serif tracking-[.0375rem]">
          {t('we’reGettingReady')}
        </p>
        <CountDown />
        <VStack className="max-w-[35rem] mx-auto mt-10 sm:mt-[6.0687rem] gap-4 sm:gap-8">
          <p className="text-xs sm:text-[1.125rem] tracking-[.0563rem] leading-[.9375rem] sm:leading-[1.4175rem] text-white text-center ">
            {t('weWillBackToSomethingAmazing')}
          </p>
          <Input
            placeholder={t('pleaseEnterYourEmail')}
            className="text-sm leading-[1.225rem] rounded-md "
            suffix={<Icons.arrowRight width={24} height={24} />}
          />
        </VStack>
      </div>
    </div>
  );
};

export default Banner;
