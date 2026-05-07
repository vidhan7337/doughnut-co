"use client";

import { useState } from "react";
import { img } from "@/utils/img";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  priceLabel?: string;
  description?: string;
  image: string;
  badge?: string;
  sizes?: Record<string, number>;
}

const categoryGradients: Record<string, string> = {
  donuts:      "from-orange-400 to-red-500",
  specialty:   "from-purple-400 to-pink-500",
  bagels:      "from-yellow-400 to-amber-500",
  breakfast:   "from-yellow-300 to-orange-400",
  sandwiches:  "from-emerald-400 to-green-600",
  coffee:      "from-amber-700 to-yellow-900",
  extras:      "from-gray-600 to-gray-800",
};

const categoryEmoji: Record<string, string> = {
  donuts:      "🍩",
  specialty:   "⭐",
  bagels:      "🥯",
  breakfast:   "🍳",
  sandwiches:  "🥪",
  coffee:      "☕",
  extras:      "➕",
};

const badgeColors: Record<string, string> = {
  "Popular":      "bg-brand text-white",
  "Best Value":   "bg-green-600 text-white",
  "Chef's Pick":  "bg-amber-500 text-white",
  "Fan Favorite": "bg-brand text-white",
  "Premium":      "bg-gray-900 text-white",
  "Custom Order": "bg-purple-600 text-white",
};

export default function MenuCard({
  item,
  category,
}: {
  item: MenuItem;
  category: string;
}) {
  const [imgError, setImgError] = useState(false);
  const gradient = categoryGradients[category] ?? "from-gray-300 to-gray-400";
  const emoji = categoryEmoji[category] ?? "🍽️";
  const badgeClass = item.badge ? (badgeColors[item.badge] ?? "bg-brand text-white") : "";
  const displayPrice = item.priceLabel ?? `$${item.price.toFixed(2)}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 shadow-sm">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        {item.image && !imgError ? (
          <img
            src={img(item.image)}
            alt={item.name}
            className="w-full h-full object-cover img-zoom"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-6xl drop-shadow-sm">{emoji}</span>
          </div>
        )}

        {item.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full badge-pop ${badgeClass} font-[family-name:var(--font-inter)]`}>
            {item.badge}
          </span>
        )}

        {/* Price hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-bold text-xl font-[family-name:var(--font-oswald)]">
            {displayPrice}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-[15px] leading-snug font-[family-name:var(--font-inter)] flex-1 text-gray-900">
            {item.name}
          </h3>
          <span className="text-gold font-bold text-sm whitespace-nowrap font-[family-name:var(--font-oswald)] tracking-wide">
            {displayPrice}
          </span>
        </div>

        {item.description && (
          <p className="text-xs leading-relaxed line-clamp-2 font-[family-name:var(--font-inter)] text-gray-400">
            {item.description}
          </p>
        )}

        {item.sizes && (
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {Object.entries(item.sizes).map(([size, price]) => (
              <span
                key={size}
                className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] bg-gray-50 border border-gray-200 text-gray-600"
              >
                <span className="font-semibold">{size}</span> ${(price as number).toFixed(2)}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
