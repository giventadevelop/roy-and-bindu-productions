import { Nunito_Sans, Playfair_Display } from 'next/font/google';

/** Shared film-site typography (MASTER.md: Nunito Sans body, Playfair Display headings). */
export const filmNunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-film-nunito',
});

export const filmPlayfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-film-playfair',
});
