import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Doughnut Co | Donuts · Bagels · Coffee",
  description:
    "Fresh baked donuts, bagels, and coffee in Woodridge, IL. Visit us at 2019 87th St.",
  keywords: ["donuts", "bagels", "coffee", "Woodridge IL", "Doughnut Co"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
