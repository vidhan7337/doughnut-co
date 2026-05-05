import menuData from "@/data/menu.json";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import DonutSection from "@/components/DonutSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

type MenuItems = typeof menuData.items;

export default function Home() {
  const {
    categories,
    items,
    donutPricing,
    donutGroups,
    bagelFlavorItems,
    creamCheeseFlavors,
  } = menuData;

  const regularCategories = categories.filter((c) => c.id !== "donuts");

  return (
    <main>
      <Hero />
      <CategoryNav categories={categories} />

      {/* Donuts: dark section with pricing + full flavor photo grid */}
      <DonutSection pricing={donutPricing} groups={donutGroups} />

      {/* All other categories */}
      {regularCategories.map((cat, i) => (
        <MenuSection
          key={cat.id}
          category={cat}
          index={i}
          items={(items as MenuItems)[cat.id as keyof MenuItems]}
          bagelFlavorItems={cat.id === "bagels" ? bagelFlavorItems : undefined}
          creamCheeseFlavors={cat.id === "bagels" ? creamCheeseFlavors : undefined}
        />
      ))}

      <Footer />
    </main>
  );
}
