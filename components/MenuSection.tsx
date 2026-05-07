import MenuCard from "./MenuCard";
import BagelFlavorGrid from "./BagelFlavorGrid";

interface Category {
  id: string;
  label: string;
  icon: string;
}

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

interface BagelFlavorItem {
  id: string;
  name: string;
  image: string;
}

export default function MenuSection({
  category,
  items,
  index = 0,
  bagelFlavorItems,
  creamCheeseFlavors,
}: {
  category: Category;
  items: MenuItem[];
  index?: number;
  bagelFlavorItems?: BagelFlavorItem[];
  creamCheeseFlavors?: BagelFlavorItem[];
}) {
  if (!items?.length) return null;

  const bg      = index % 2 === 0 ? "bg-white" : "bg-gray-50";
  const isBagels = category.id === "bagels";
  const isCoffee = category.id === "coffee";

  return (
    <section id={category.id} className={`${bg} scroll-mt-[68px]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

        {/* Section header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-7 sm:mb-10">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="text-3xl sm:text-4xl flex-shrink-0">{category.icon}</span>
            <h2 className="font-[family-name:var(--font-oswald)] font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-gray-900 truncate">
              {category.label}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm whitespace-nowrap font-[family-name:var(--font-inter)] text-gray-400">
            {items.length} item{items.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} category={category.id} />
          ))}
        </div>

        {/* Bagel flavor photo grid */}
        {isBagels && bagelFlavorItems && (
          <BagelFlavorGrid
            bagelFlavors={bagelFlavorItems}
            creamCheeseFlavors={creamCheeseFlavors ?? []}
          />
        )}

        {/* Coffee add-on note */}
        {isCoffee && (
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {["Switch Alt. Milk +$0.50", "Add Syrup +$0.50"].map((note) => (
              <span
                key={note}
                className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-full font-[family-name:var(--font-inter)]"
              >
                {note}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
