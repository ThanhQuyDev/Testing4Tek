/* eslint-disable no-nested-ternary */
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

export const inputVariants = cva(
  cn(
    'border-input border placeholder:font-normal placeholder:text-[#545454] bg-transparent ring-offset-background peer',
    'focus-visible:ring-transparent focus-visible:border-none flex w-full file:border-0 file:bg-transparent',
    'focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50'
  ),
  {
    variants: {
      variant: {
        default: 'bg-background',
        filled: 'bg-background',
      },
      size: {
        sm: 'h-11 px-3 py-2 text-sm rounded-sm file:text-sm file:font-medium',
        default: 'h-14 px-3 text-sm rounded-sm file:text-sm file:font-medium',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  errorClassName?: string;
  suffix?: any;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', fullWidth, size, type, suffix, id, ...props }, ref) => {
    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        <input
          id={id}
          className={cn(inputVariants({ variant, size, className }), suffix && 'pr-10')}
          ref={ref}
          {...props}
        />
        {suffix && <div className="absolute cursor-pointer right-[14px] top-1/2 -translate-y-1/2">{suffix}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
