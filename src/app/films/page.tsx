import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CircleHome6Header from '@/components/circle-home-6/CircleHome6Header';
import { filmTw } from '@/components/circle-home-6/filmDesignTokens';
import { RB_LOGO_WHITE_TAGLINE_PNG } from '@/components/circle-home-6/rbHeroMedia';
import { filmNunito, filmPlayfair } from '@/components/circle-home-6/filmFonts';
import GiventaCreditLines from '@/components/GiventaCreditLines';
import { FILMS_GALLERY_IMAGES } from '@/data/filmsGalleryImages';
import FilmsGalleryGrid from './FilmsGalleryGrid';

export const metadata: Metadata = {
  title: 'Films — R&B Productions',
  description:
    'Film gallery — production stills and moments. R&B Productions, Brisbane-based Malayalam film funding and production.',
};

export default function FilmsPage() {
  return (
    <div
      className={`min-h-screen bg-[#161616] text-white ${filmNunito.className} ${filmNunito.variable} ${filmPlayfair.variable}`}
    >
      <CircleHome6Header />
      <main className="pb-16 pt-3 sm:pt-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-6 leading-none">
            <Image
              src={RB_LOGO_WHITE_TAGLINE_PNG}
              alt="R&amp;B Productions logo"
              width={1600}
              height={560}
              className="mx-auto block h-auto w-full max-w-6xl object-contain"
              sizes="(max-width: 768px) 100vw, 72rem"
              priority
            />
          </div>
          <header className="mb-10 text-center">
            <p className={`text-xs font-semibold uppercase tracking-[0.35em] ${filmTw.accent}`}>R&amp;B Productions</p>
            <h1
              className={`${filmPlayfair.className} mt-2 text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-[2.25rem]`}
            >
              Films
            </h1>
            <p className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base ${filmTw.muted}`}>
              A gallery of production stills — inspired by the layout of classic studio film pages.
            </p>
          </header>

          <FilmsGalleryGrid items={FILMS_GALLERY_IMAGES} />
        </div>
      </main>
      <footer className={`${filmTw.footer} py-10`}>
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <Link
            href="/"
            className={`inline-flex items-center justify-center rounded-lg border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06] ${filmTw.accentHover}`}
          >
            ← Back to home
          </Link>
          <p className={`mt-6 text-sm ${filmTw.muted}`}>
            Copyright © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-[#e2e8f0]">R&amp;B Productions</span> — All Rights Reserved
          </p>
          <div className={`mx-auto mt-6 max-w-7xl border-t ${filmTw.borderSubtle} px-4 pt-6 text-center text-xs leading-relaxed ${filmTw.muted} lg:px-8`}>
            <GiventaCreditLines variant="rbDark" />
          </div>
        </div>
      </footer>
    </div>
  );
}
