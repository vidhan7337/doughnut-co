import menuData from "@/data/menu.json";

export default function Footer() {
  const { bagelFlavorItems, creamCheeseFlavors } = menuData;

  return (
    <footer className="bg-[#0e0e0e] text-white">
      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand — text only */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="font-[family-name:var(--font-oswald)] font-bold text-4xl tracking-tight leading-none">
                DOUGHNUT
              </h3>
              <h3 className="font-[family-name:var(--font-oswald)] font-bold text-4xl tracking-tight text-brand leading-none">
                CO
              </h3>
            </div>
            <p className="text-white/35 text-xs font-[family-name:var(--font-inter)] mb-1">
              Doughnuts · Bagels · Coffee
            </p>
            <p className="text-white/25 text-xs font-[family-name:var(--font-inter)] leading-relaxed">
              Baked fresh every morning.
            </p>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-base uppercase tracking-wider text-white/60 mb-4">
              Visit Us
            </h4>
            <ul className="space-y-3 font-[family-name:var(--font-inter)]">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  2019 87th St<br />
                  Woodridge, IL 60517<br />
                  <span className="text-white/25 text-xs">Just West of Woodward on South side of 87th</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                630-312-8812
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                773-943-2817
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a
                  href="https://www.facebook.com/DoughnutCoWoodridge?mibextid=wwXIfr&rdid=2J9VRxMOXS5t2m9w&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18TsfJRVvZ%2F%3Fmibextid%3DwwXIfr%26ref%3D1#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  Doughnut Co Woodridge
                </a>
              </li>
            </ul>
          </div>

          {/* Bagel flavors */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-base uppercase tracking-wider text-white/60 mb-4">
              🥯 Bagel Flavors
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {bagelFlavorItems.map((f) => (
                <span key={f.id} className="text-xs bg-amber-500/8 border border-amber-500/15 text-amber-200/50 px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)]">
                  {f.name}
                </span>
              ))}
            </div>
          </div>

          {/* Cream cheese flavors */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-base uppercase tracking-wider text-white/60 mb-4">
              🧀 Cream Cheese
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {creamCheeseFlavors.map((f) => (
                <span key={f.id} className="text-xs bg-rose-500/8 border border-rose-500/15 text-rose-200/50 px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)]">
                  {f.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs font-[family-name:var(--font-inter)]">
            © {new Date().getFullYear()} Doughnut Co. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-[family-name:var(--font-inter)]">
            Donuts · Bagels · Coffee · Woodridge, IL
          </p>
        </div>
      </div>
    </footer>
  );
}
