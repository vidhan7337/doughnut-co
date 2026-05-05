"use client";

import { useState } from "react";
import { img } from "@/utils/img";

interface BagelFlavorItem {
  id: string;
  name: string;
  image: string;
}

function BagelCard({ item }: { item: BagelFlavorItem }) {
  const [err, setErr] = useState(false);
  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-amber-100 shadow-sm card-hover cursor-default">
      <div className="relative h-32 overflow-hidden bg-amber-50">
        {!err ? (
          <img
            src={img(item.image)}
            alt={item.name}
            className="w-full h-full object-cover img-zoom"
            onError={() => setErr(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-amber-400">
            <span className="text-5xl">🥯</span>
          </div>
        )}
      </div>
      <div className="px-3 py-2.5 text-center">
        <p className="text-gray-800 text-xs font-semibold leading-tight font-[family-name:var(--font-inter)]">
          {item.name}
        </p>
      </div>
    </div>
  );
}

export default function BagelFlavorGrid({
  bagelFlavors,
  creamCheeseFlavors,
}: {
  bagelFlavors: BagelFlavorItem[];
  creamCheeseFlavors: string[];
}) {
  return (
    <>
      {/* Bagel flavors with photos */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-5">
          <h3 className="font-[family-name:var(--font-oswald)] font-semibold text-xl uppercase tracking-wide text-gray-800">
            🥯 Choose Your Bagel
          </h3>
          <div className="flex-1 h-px bg-amber-200" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {bagelFlavors.map((item) => (
            <BagelCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Cream cheese flavors */}
      {creamCheeseFlavors.length > 0 && (
        <div className="mt-8 rounded-2xl bg-white border border-rose-100 p-6 shadow-sm">
          <h3 className="font-[family-name:var(--font-oswald)] font-semibold text-lg uppercase tracking-wide text-gray-800 mb-4">
            🧀 Cream Cheese Flavors
          </h3>
          <div className="flex flex-wrap gap-2">
            {creamCheeseFlavors.map((f) => (
              <span
                key={f}
                className="text-sm bg-rose-50 border border-rose-200 text-rose-700 px-3 py-1.5 rounded-full font-[family-name:var(--font-inter)]"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
