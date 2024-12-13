import Image from 'next/image';
import React from 'react';

export const GlobalPinMap = () => {
  return (
    <div className="h-[8.6356rem] sm:h-[26.75rem] w-full sm:w-[72.5rem] mx-auto bg-[url('/images/pin-map.png')] bg-cover bg-no-repeat bg-center relative">
      <div className=" bottom-[115.27px] sm:bottom-[20.4375rem] left-1/2 -translate-x-1/2 absolute animate-float ">
        {/* có thể sử dụng witch-animation */}
        <Image
          src={'/images/witch.png'}
          alt={'witch'}
          width={533}
          height={437}
          className="min-w-[18.75rem] sm:min-w-[33.3125rem] h-[15.1875rem] sm:h-[27.3125rem]"
        />
      </div>
    </div>
  );
};
