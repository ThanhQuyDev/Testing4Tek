import type { LucideIcon } from 'lucide-react';
import { Check, ChevronDown, Loader2 } from 'lucide-react';

import arrowRight from '@/assets/svg/arrow_right.svg';
import arrowLeftSquare from '@/assets/svg/arrow-left-square.svg';
import arrowRightSquare from '@/assets/svg/arrow-right-square.svg';
import calendar from '@/assets/svg/calendar.svg';
import chevronDownCircle from '@/assets/svg/chevron-down-circle.svg';
import close from '@/assets/svg/close.svg';
import facebook from '@/assets/svg/facebook.svg';
import linkedin from '@/assets/svg/linkedin.svg';
import location from '@/assets/svg/location.svg';
import menu from '@/assets/svg/menu.svg';
import pen from '@/assets/svg/pen.svg';
import people from '@/assets/svg/people.svg';
import phone from '@/assets/svg/phone.svg';
import twitter from '@/assets/svg/twitter.svg';
import usFlag from '@/assets/svg/us_flag.svg';
import vietNamFlag from '@/assets/svg/vietnam_flag.svg';

export type Icon = LucideIcon;

const IconList = {
  vietNamFlag,
  chevronDownCircle,
  usFlag,
  calendar,
  close,
  menu,
  pen,
  spinner: Loader2,
  people,
  chevronDown: ChevronDown,
  check: Check,
  arrowRight,
  arrowRightSquare,
  arrowLeftSquare,
  facebook,
  linkedin,
  twitter,
  location,
  phone,
};

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
