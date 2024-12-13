import React, { memo } from 'react';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/ThemeProvider';
import type { FCC } from '@/types';

interface Props {}

const Provider: FCC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
        {children}
      </ThemeProvider>
      <Toaster />
    </>
  );
};

export default memo(Provider);
