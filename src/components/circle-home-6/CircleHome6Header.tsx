'use client';

import Image from 'next/image';

import { RB_LOGO_WHITE_TAGLINE_PNG } from './rbHeroMedia';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { filmTw } from './filmDesignTokens';

/** Inactive: accent red (#E11D48); active (current route): white. */
const navLinkBase =
  'rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-white/[0.06]';
const navLinkInactive = 'text-[#E11D48] hover:text-white/90';
const navLinkActive = 'font-semibold !text-white hover:!text-white';

export default function CircleHome6Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const homeActive = pathname === '/';
  const aboutActive = pathname === '/about';
  const filmsActive = pathname === '/films';

  /** No header logo on About / Films — logo appears in page content instead. */
  const hideHeaderLogo = pathname === '/about' || pathname === '/films';

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <header className={`sticky top-0 z-50 border-b ${filmTw.borderSubtle} bg-[#1e1e1e]/95 backdrop-blur`}>
      <div
        className={`mx-auto flex max-w-7xl items-center gap-3 px-4 py-0 sm:gap-4 lg:px-8 ${hideHeaderLogo ? 'justify-end' : 'justify-between'}`}
      >
        {!hideHeaderLogo && (
          <Link
            href="/"
            className="inline-flex min-w-0 shrink flex-col items-start py-0 pl-0 pr-2 sm:pr-3"
            aria-label="R&amp;B Productions — Home"
            onClick={close}
          >
            <span className="relative block h-24 w-[clamp(180px,52vw,380px)] sm:h-28 sm:w-[clamp(280px,52vw,460px)] lg:h-32 lg:max-w-[560px] lg:w-[min(560px,46vw)]">
              <Image
                src={RB_LOGO_WHITE_TAGLINE_PNG}
                alt="R&amp;B Productions"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 560px"
                priority
              />
            </span>
          </Link>
        )}

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-x-6 text-sm font-medium md:flex" aria-label="Main navigation">
          <Link href="/" className={`${navLinkBase} ${homeActive ? navLinkActive : navLinkInactive}`}>
            Home
          </Link>
          <Link href="/about" className={`${navLinkBase} ${aboutActive ? navLinkActive : navLinkInactive}`}>
            About
          </Link>
          <Link href="/films" className={`${navLinkBase} ${filmsActive ? navLinkActive : navLinkInactive}`}>
            Films
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-[#E11D48] hover:text-[#E11D48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e1e] md:hidden"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="circle-home-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel (below bar; hamburger toggles) */}
      <div
        id="circle-home-mobile-menu"
        className={`border-t ${filmTw.borderSubtle} bg-[#161616] shadow-[0_12px_24px_rgba(0,0,0,0.35)] md:hidden ${open ? 'block' : 'hidden'}`}
        role="dialog"
        aria-modal="false"
        aria-label="Mobile navigation"
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 pb-5" aria-label="Mobile main navigation">
          <Link href="/" className={`${navLinkBase} ${homeActive ? navLinkActive : navLinkInactive}`} onClick={close}>
            Home
          </Link>
          <Link
            href="/about"
            className={`${navLinkBase} ${aboutActive ? navLinkActive : navLinkInactive}`}
            onClick={close}
          >
            About
          </Link>
          <Link
            href="/films"
            className={`${navLinkBase} ${filmsActive ? navLinkActive : navLinkInactive}`}
            onClick={close}
          >
            Films
          </Link>
        </nav>
      </div>
    </header>
  );
}
