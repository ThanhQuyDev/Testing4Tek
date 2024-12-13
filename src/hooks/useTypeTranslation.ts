import { useTranslation } from 'next-i18next';

import { type Paths } from '@/types/common.type';
import { type nsType } from '@/types/i18next';

import type common from '../../public/locales/en/common.json';

export type CommonKeys = Paths<typeof common>;
export type Keys = CommonKeys;

export const useTypeSafeTranslation = (ns: Array<nsType> = ['common']) => {
  const { t, ...rest } = useTranslation(ns);

  return {
    t: (s: Keys, p?: any): string => `${t(s, p) ?? s}`,
    ...rest,
  };
};
