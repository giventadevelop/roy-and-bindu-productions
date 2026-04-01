import type { Metadata } from 'next';
import Link from 'next/link';
import CircleHome6Header from '@/components/circle-home-6/CircleHome6Header';
import CircleHome6AboutSection from '@/components/circle-home-6/CircleHome6AboutSection';
import GiventaCreditLines from '@/components/GiventaCreditLines';

export const metadata: Metadata = {
  title: 'About — R&B Productions',
  description:
    'R&B Productions — digital entertainment with soulful stories from Kerala to the world. Brisbane-based Malayalam film funding and production.',
};

/** Standalone About page — same copy and cards as the About section on the home page. */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#161616] text-white">
      <CircleHome6Header />
      <main>
        <CircleHome6AboutSection compact={false} />
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
