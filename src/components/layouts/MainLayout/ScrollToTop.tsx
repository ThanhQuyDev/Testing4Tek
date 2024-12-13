'use client';

import { useEffect, useState } from 'react';

import { Icons } from '@/assets/icons';

const ScrollToTop = () => {
  const [up, setUp] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setUp(true);
    } else {
      setUp(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 sm:bottom-[4.2919rem] right-10 sm:right-20 z-50 w-[4.1669rem] flex justify-center items-center aspect-square bg-white   shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)]
                              rounded-full transition-all duration-300 ease-in-out"
          aria-label="Scroll to top"
        >
          <Icons.chevronDownCircle
            className={`h-[1.0475rem] w-[1.7825rem] text-black duration-300 ${up && 'rotate-180'}`}
          />
        </button>
      }
    </>
  );
};

export default ScrollToTop;
