"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-[#E0D8CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="55" r="30" fill="#F5E6D3" />
            <circle cx="30" cy="40" r="15" fill="#F5E6D3" />
            <circle cx="70" cy="40" r="15" fill="#F5E6D3" />
            <circle cx="50" cy="35" r="18" fill="#F5E6D3" />
            <circle cx="42" cy="52" r="3" fill="#1A1208" />
            <circle cx="58" cy="52" r="3" fill="#1A1208" />
            <ellipse cx="50" cy="60" rx="4" ry="3" fill="#FFB5B5" />
            <path d="M46 65 Q50 70 54 65" stroke="#1A1208" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <span className="text-lg font-bold text-dark">
            Bible Scholar <span className="text-primary">Kids</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary border border-primary"
                    : "text-dark hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/support"
          className="bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-orange-700 transition-colors"
        >
          Download Free
        </Link>
      </div>
    </header>
  );
}
