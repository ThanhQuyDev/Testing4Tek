import { type CommonKeys } from '@/hooks/useTypeTranslation';

export const env = {
  isProduction: process.env.NODE_ENV === 'production',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
};

export const HEADER_LINK: { labelKey: CommonKeys; href: string }[] = [
  {
    labelKey: 'aboutUs',
    href: '#about-us',
  },
  {
    labelKey: 'games',
    href: '#games',
  },
  {
    labelKey: 'partner',
    href: '#partner',
  },
  {
    labelKey: 'contactUs',
    href: '#',
  },
];

export const isServer = typeof window === 'undefined';
