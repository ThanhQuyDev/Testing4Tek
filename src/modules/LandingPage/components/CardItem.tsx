import React from 'react';

import { cn } from '@/lib/utils';

interface Props {
  card: {
    name: string;
    cardImage: string;
  };
  className?: string;
}
export const CardItem = ({ card, className }: Props) => {
  return (
    <div
      className={cn(
        'relative bg-cover bg-center bg-no-repeat w-[10.25rem] sm:w-[25.625rem] h-[16.75rem] sm:h-[35rem] rounded-[.625rem] sm:rounded-lg shadow-lg overflow-hidden',
        className
      )}
      style={{ backgroundImage: `url(${card.cardImage})` }}
    >
      <div className="absolute bottom-0 w-full flex flex-col gap-[.1875rem] sm:gap-[.9744rem] pl-2  sm:pl-8 sm:pr-8 pb-[.6875rem] sm:pb-[2.5256rem] text-white">
        <h3 className="text-2xl sm:text-[3rem] font-bold leading-[1.875rem] sm:leading-[3.75rem]">{card.name}</h3>
        <h3 className="text-xs tracking-[.0563rem] sm:tracking-normal sm:text-sm leading-[.9375rem] sm:leading-[1.225rem] pr-[1.125rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </h3>
      </div>
    </div>
  );
};
