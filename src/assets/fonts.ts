import { Montserrat as FontSans, Playfair_Display as FontSerif } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['vietnamese'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const fontSerif = FontSerif({
  subsets: ['vietnamese'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
});
