"use client";

import { useEffect, useState } from "react";

interface Category {
  id: string;
  label: string;
  icon: string;
}

export default function CategoryNav({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [categories]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-3">
          {categories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer font-[family-name:var(--font-inter)] ${
                  isActive
                    ? "bg-brand text-white shadow-md shadow-brand/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                <span className="text-base leading-none">{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
