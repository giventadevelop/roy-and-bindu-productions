import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CircleHome6Header from '@/components/circle-home-6/CircleHome6Header';
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
    <div className="min-h-screen bg-[#161616] text-white">
      <CircleHome6Header />
      <main className="pb-16 pt-3 sm:pt-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-6 leading-none">
            <Image
              src="/images/Roy_and_Bindhu_hero_movie_section/LOGO-with-white-tagline-1.png"
              alt="R&amp;B Productions logo"
              width={1200}
              height={400}
              className="mx-auto block h-auto w-full max-w-3xl object-contain"
              sizes="(max-width: 768px) 100vw, 52rem"
              priority
            />
          </div>
          <header className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#fd6500]">R&amp;B Productions</p>
            <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">Films</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#ababab] sm:text-base">
              A gallery of production stills — inspired by the layout of classic studio film pages.
            </p>
          </header>

          <FilmsGalleryGrid items={FILMS_GALLERY_IMAGES} />
        </div>
      </main>
      <footer className="border-t border-white/10 bg-[#141414] py-10">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white/90 transition hover:border-[#fd6500] hover:text-[#fd6500]"
          >
            ← Back to home
          </Link>
          <p className="mt-6 text-sm text-[#ababab]">
            Copyright © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-[#c4c4c4]">R&amp;B Productions</span> — All Rights Reserved
          </p>
          <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs leading-relaxed text-[#ababab] lg:px-8">
            <GiventaCreditLines variant="rbDark" />
          </div>
        </div>
      </footer>
    </div>
  );
}
