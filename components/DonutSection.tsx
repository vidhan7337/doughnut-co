"use client";

import { useState } from "react";
import { img } from "@/utils/img";

interface DonutItem {
  id: string;
  name: string;
  image: string;
}

interface DonutGroup {
  name: string;
  icon: string;
  color: string;
  items: DonutItem[];
}

interface DonutPricing {
  single: number;
  halfDozen: number;
  dozen: number;
  note: string;
}

const colorMap: Record<string, { header: string; dot: string }> = {
  pink:    { header: "text-pink-400",    dot: "bg-pink-400" },
  purple:  { header: "text-purple-400",  dot: "bg-purple-400" },
  amber:   { header: "text-amber-400",   dot: "bg-amber-400" },
  sky:     { header: "text-sky-400",     dot: "bg-sky-400" },
  yellow:  { header: "text-yellow-400",  dot: "bg-yellow-400" },
  emerald: { header: "text-emerald-400", dot: "bg-emerald-400" },
  rose:    { header: "text-rose-400",    dot: "bg-rose-400" },
};

function DonutCard({ item }: { item: DonutItem }) {
  const [err, setErr] = useState(false);
  return (
    <div className="group flex flex-col bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/8 hover:border-white/20 card-hover cursor-default">
      <div className="relative h-36 overflow-hidden bg-[#252525]">
        {!err ? (
          <img
            src={img(item.image)}
            alt={item.name}
            className="w-full h-full object-cover img-zoom"
            onError={() => setErr(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500">
            <span className="text-5xl">🍩</span>
          </div>
        )}
        {/* Price badge */}
        <span className="absolute bottom-2 right-2 bg-black/70 text-amber-400 text-xs font-bold px-2 py-0.5 rounded-full font-[family-name:var(--font-oswald)]">
          $2.49
        </span>
      </div>
      <div className="px-3 py-2.5">
        <p className="text-white/80 text-xs font-semibold leading-tight line-clamp-2 font-[family-name:var(--font-inter)]">
          {item.name}
        </p>
      </div>
    </div>
  );
}

export default function DonutSection({
  pricing,
  groups,
}: {
  pricing: DonutPricing;
  groups: DonutGroup[];
}) {
  const totalFlavors = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="donuts" className="bg-[#111] scroll-mt-[68px]">
      {/* Pricing header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10 text-center">
        <p className="text-brand text-xs font-semibold tracking-[0.3em] uppercase mb-3 font-[family-name:var(--font-inter)]">
          🍩 Fresh Baked Daily
        </p>
        <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase mb-2">
          Donuts
        </h2>
        <p className="text-white/35 text-sm font-[family-name:var(--font-inter)] mb-6 sm:mb-10">
          {totalFlavors}+ flavors — all baked fresh every morning
        </p>

        {/* Pricing tiers */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
          {[
            { label: "Single",      price: pricing.single,    sub: "per donut"  },
            { label: "Half Dozen",  price: pricing.halfDozen, sub: "6 donuts"   },
            { label: "Dozen",       price: pricing.dozen,     sub: "12 donuts", highlight: true },
          ].map((tier) => (
            <div
              key={tier.label}
              className={`relative flex flex-col items-center px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border min-w-[100px] ${
                tier.highlight
                  ? "bg-brand border-brand shadow-lg shadow-brand/30"
                  : "bg-white/5 border-white/12 hover:border-white/25 transition-colors"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold px-3 py-0.5 rounded-full tracking-wider font-[family-name:var(--font-inter)] uppercase">
                  Best Value
                </span>
              )}
              <span className="text-white/50 text-xs font-semibold tracking-widest uppercase font-[family-name:var(--font-inter)] mb-1">
                {tier.label}
              </span>
              <span className="text-white font-[family-name:var(--font-oswald)] font-bold text-3xl sm:text-4xl leading-none">
                ${tier.price.toFixed(2)}
              </span>
              <span className="text-white/35 text-xs mt-1 font-[family-name:var(--font-inter)]">
                {tier.sub}
              </span>
            </div>
          ))}
        </div>
        <p className="text-white/25 text-xs font-[family-name:var(--font-inter)] italic">* {pricing.note}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Flavor groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 sm:space-y-12">
        {groups.map((group) => {
          const style = colorMap[group.color] ?? { header: "text-white", dot: "bg-white" };
          return (
            <div key={group.name}>
              {/* Group label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className={`font-[family-name:var(--font-oswald)] font-semibold text-xl uppercase tracking-wide ${style.header}`}>
                  {group.name}
                </h3>
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-white/25 text-xs font-[family-name:var(--font-inter)]">
                  {group.items.length} flavors
                </span>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {group.items.map((item) => (
                  <DonutCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
