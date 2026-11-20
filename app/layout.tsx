import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// next/font: zero layout shift font loading with automatic self-hosting
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ShipYard",
  description: "Gear for people who build, run, and explore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              ⚓ ShipYard
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/#Sneakers">Sneakers</Link>
              <Link href="/#Audio">Audio</Link>
              <Link href="/#Wearables">Wearables</Link>
              <Link href="/#Gadgets">Gadgets</Link>
            </div>
            <span className="nav-cart">🛒</span>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <p>Built with Next.js. ShipYard is a demo storefront.</p>
        </footer>
      </body>
    </html>
  );
}
