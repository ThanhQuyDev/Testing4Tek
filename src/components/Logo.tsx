import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

interface Props extends Omit<ImageProps, 'alt' | 'src'> {
  className?: string;
}

const Logo = (props: Props) => {
  return (
    <Image
      width={108.82}
      height={64}
      {...props}
      priority
      alt="logo"
      src="/images/logo.svg"
      className={cn('sm:w-[108.82px] sm:h-[64px] w-[4.25rem] h-10', props.className)}
    />
  );
};

export default Logo;
