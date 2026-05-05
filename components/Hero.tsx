export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#111]">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      {/* Red glow blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-brand opacity-[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-brand opacity-[0.07] blur-[110px] pointer-events-none" />

      {/* Decorative floating donuts — hidden on mobile */}
      <div className="hidden sm:block absolute top-10 right-16 text-[100px] opacity-[0.06] select-none pointer-events-none rotate-12">🍩</div>
      <div className="hidden sm:block absolute bottom-20 left-10 text-[80px] opacity-[0.06] select-none pointer-events-none -rotate-12">🍩</div>

      {/* Main content */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto w-full">

        {/* Est. label */}
        <p className="text-brand text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-4 sm:mb-6 font-[family-name:var(--font-inter)]">
          Est. in Woodridge, IL
        </p>

        {/* Text logo — clamp scales from 2.5rem on tiny screens */}
        <h1 className="font-[family-name:var(--font-oswald)] font-bold leading-none mb-5 sm:mb-6">
          <span className="block text-[clamp(2.5rem,14vw,9.5rem)] tracking-tight text-white">
            DOUGHNUT
          </span>
          <span className="block text-[clamp(2.5rem,14vw,9.5rem)] tracking-tight text-brand -mt-1 sm:-mt-3">
            CO
          </span>
        </h1>

        {/* Divider with tagline */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="h-px w-10 sm:w-16 bg-white/20" />
          <p className="text-white/55 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-[family-name:var(--font-inter)] uppercase">
            Doughnuts &nbsp;·&nbsp; Bagels &nbsp;·&nbsp; Coffee
          </p>
          <div className="h-px w-10 sm:w-16 bg-white/20" />
        </div>

        <p className="text-white/35 text-sm font-[family-name:var(--font-inter)] max-w-xs mx-auto mb-8 sm:mb-10">
          Baked fresh every morning. Come find your new favorite.
        </p>

        {/* CTA */}
        <a
          href="#donuts"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-[family-name:var(--font-oswald)] font-semibold text-lg tracking-wider uppercase rounded-full hover:bg-brand-dark transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-brand/25"
        >
          View Full Menu
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        {/* Store info pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-2">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white/55 text-xs sm:text-sm font-[family-name:var(--font-inter)]">
              2019 87th St, Woodridge, IL
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-2">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-white/55 text-xs sm:text-sm font-[family-name:var(--font-inter)]">
              630-312-8812
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-white text-[10px] tracking-widest uppercase font-[family-name:var(--font-inter)]">Scroll</span>
        <svg className="w-4 h-4 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
