'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const navLinkBase =
  'rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-white/5 hover:text-[#fd6500]';
const navLinkActive = 'font-extrabold text-[#ff7a1a]';
const navLinkInactive = 'text-white';

export default function CircleHome6Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const homeActive = pathname === '/';
  const aboutActive = pathname === '/about';
  const filmsActive = pathname === '/films';

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1e1e1e]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-0 sm:gap-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-w-0 shrink flex-col items-start py-0 pl-0 pr-2 sm:pr-3"
          aria-label="R&amp;B Productions — Home"
          onClick={close}
        >
          <span className="relative block h-20 w-[clamp(160px,50vw,340px)] sm:h-24 sm:w-[clamp(260px,50vw,420px)] lg:h-28 lg:max-w-[480px] lg:w-[min(480px,42vw)]">
            <Image
              src="/images/logo/roy_and_bindu_prod_logo_transparent.png"
              alt="R&amp;B Productions"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 480px"
              priority
            />
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-x-6 text-sm font-medium text-white/80 md:flex"
          aria-label="Main navigation"
        >
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
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-[#fd6500] hover:text-[#fd6500] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fd6500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e1e] md:hidden"
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
        className={`border-t border-white/10 bg-[#1a1a1a] shadow-[0_12px_24px_rgba(0,0,0,0.35)] md:hidden ${open ? 'block' : 'hidden'}`}
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
