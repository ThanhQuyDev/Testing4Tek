import 'swiper/css';

import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Icons } from '@/assets/icons';

const PARTNERS_IMAGE = [
  {
    image: '/images/partners/partner-1.png',
  },
  {
    image: '/images/partners/partner-2.png',
  },
  {
    image: '/images/partners/partner-3.png',
  },
  {
    image: '/images/partners/partner-4.png',
  },
  {
    image: '/images/partners/partner-5.png',
  },
  {
    image: '/images/partners/partner-6.png',
  },
  {
    image: '/images/partners/partner-7.png',
  },
];
export const PartnerSwipper = () => {
  return (
    <div className="relative w-full sm:w-[91.25rem]">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 12,
            centeredSlides: true,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {PARTNERS_IMAGE.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.image}
              alt="partner"
              width={260}
              height={100}
              className="max-w-[11.75rem] max-h-[4.5rem] sm:max-w-[260px] sm:max-h-[100px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev absolute left-4 sm:-left-10  top-1/2 z-10 w-[2.0831rem] aspect-square shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-md -translate-y-1/2  flex items-center justify-center">
        <Icons.arrowLeftSquare className="w-[2.0831rem] h-[2.0831rem]  " />
      </button>

      <button className="swiper-button-prev absolute sm:-right-10 right-4 top-1/2 z-10 w-[2.0831rem] aspect-square shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-md -translate-y-1/2  flex items-center justify-center">
        <Icons.arrowRightSquare className="w-[2.0831rem] h-[2.0831rem]" />
      </button>
    </div>
  );
};
