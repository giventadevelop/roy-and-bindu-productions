import type { Metadata } from 'next';
import Link from 'next/link';
import CircleHome6Header from '@/components/circle-home-6/CircleHome6Header';
import CircleHome6AboutSection from '@/components/circle-home-6/CircleHome6AboutSection';
import { filmTw } from '@/components/circle-home-6/filmDesignTokens';
import { filmNunito, filmPlayfair } from '@/components/circle-home-6/filmFonts';
import GiventaCreditLines from '@/components/GiventaCreditLines';

export const metadata: Metadata = {
  title: 'About — R&B Productions',
  description:
    'R&B Productions — digital entertainment with soulful stories from Kerala to the world. Brisbane-based Malayalam film funding and production.',
};

/** Standalone About page — same copy and cards as the About section on the home page. */
export default function AboutPage() {
  return (
    <div
      className={`min-h-screen bg-[#161616] text-white ${filmNunito.className} ${filmNunito.variable} ${filmPlayfair.variable}`}
    >
      <CircleHome6Header />
      <main>
        <CircleHome6AboutSection compact={false} />
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
