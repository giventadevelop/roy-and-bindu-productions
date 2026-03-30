import { Nunito_Sans, Playfair_Display } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-circle-nunito',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-circle-playfair',
});

/**
 * Shared About copy for R&B Productions — used on home (#about) and /about.
 */
export default function CircleHome6AboutSection() {
  return (
    <section
      id="about"
      className={`scroll-mt-24 border-t border-white/5 bg-gradient-to-b from-[#1a1a1a] to-[#161616] py-16 md:py-20 ${nunito.className} ${nunito.variable} ${playfair.variable}`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className={`${playfair.className} mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-[2.75rem]`}>
          About R&amp;B Productions
        </h2>
        <p className="max-w-3xl text-xl font-semibold leading-snug text-[#fd6500] sm:text-2xl md:text-[1.65rem]">
          Digital entertainment with soulful stories — from Kerala to the world.
        </p>
        <p className="mt-8 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl md:leading-relaxed">
          <span className="font-semibold text-white/90">&ldquo;An initiative by Roy and Bindu&rdquo;</span> is a solid and professional choice, as it
          clearly highlights the personal involvement of the owners. For a film production company in the Malayalam industry, where family-run or
          partnership-based houses are common, this tagline adds a touch of authenticity.
        </p>
        <div className="mt-10 max-w-4xl space-y-6 text-base leading-relaxed text-white/85 sm:text-lg md:text-xl md:leading-relaxed">
          <p>
            <strong className="text-white">R&amp;B Productions</strong> is a digital entertainment company owned by{' '}
            <strong className="text-white">Roy and Bindu</strong>. Roy and Bindu are based in{' '}
            <strong className="text-white">Brisbane, Australia</strong>. The company is headquartered in{' '}
            <strong className="text-white">Brisbane</strong>, <strong className="text-white">funding and producing Malayalam films</strong> while
            building promotions, digital content, and distribution that reach audiences globally.
          </p>
          <p>
            We partner with acclaimed Malayalam talent: directors <strong className="text-white">Dileesh Pothan</strong> and{' '}
            <strong className="text-white">Nadirshah</strong>, actor <strong className="text-white">Fahadh Faasil</strong>, and scenarist{' '}
            <strong className="text-white">Syam Pushkaran</strong>. Our work spans{' '}
            <strong className="text-white">movie production</strong>, <strong className="text-white">movie promotions</strong>,{' '}
            <strong className="text-white">digital content creation</strong>, and <strong className="text-white">distribution</strong>.
          </p>
          <p className="text-white/80">
            We create soulful content that explores local flavours and serves it to audiences all around the globe — combining cinematic craft with a
            modern digital footprint.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#232323]/80 p-7 sm:p-8">
            <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-[#fd6500] sm:text-lg">Where we are</h3>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Brisbane, Australia — home base for Roy, Bindu, and R&amp;B Productions.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#232323]/80 p-7 sm:p-8">
            <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-[#fd6500] sm:text-lg">Focus</h3>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Malayalam cinema — funding and producing films — plus digital storytelling and promotions.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#232323]/80 p-7 sm:p-8 sm:col-span-2 lg:col-span-1">
            <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-[#fd6500] sm:text-lg">Partners</h3>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Dileesh Pothan · Nadirshah · Fahadh Faasil · Syam Pushkaran
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
