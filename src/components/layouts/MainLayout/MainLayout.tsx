import type { ReactNode } from 'react';
import React from 'react';

import type { FCC } from '@/types';

import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  return (
    <div className="overflow-clip bg-black">
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
