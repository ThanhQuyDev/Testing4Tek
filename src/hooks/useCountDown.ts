'use client';

import { useEffect, useState } from 'react';
import useCountDown from 'react-countdown-hook';

const calculateTime = (time: number) => ({
  days: Math.floor(time / (1000 * 60 * 60 * 24)),
  hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
  seconds: Math.floor((time % (1000 * 60)) / 1000),
});

export const useCountDownTimer = (endTime: string) => {
  const [initialTimeLeft, setInitialTimeLeft] = useState(0);
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTimeLeft, 1000);
  useEffect(() => {
    const now = Date.now();
    const endTimestamp = new Date(endTime).getTime();
    const initTime = Math.max(endTimestamp - now, 0);
    setInitialTimeLeft(initTime);
    if (initTime) {
      start(initTime);
    }
    return () => reset();
  }, [reset, start, endTime]);

  return {
    timeLeft,
    time: calculateTime(timeLeft),
    start,
    pause,
    resume,
    reset,
  };
};
