"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bitcoin,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Coins,
  DollarSign,
  Globe2,
  Home,
  Landmark,
  LineChart,
  Menu,
  MonitorSmartphone,
  Moon,
  PhoneCall,
  ShieldCheck,
  Star,
  Sun,
  Wallet2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Trading Markets",
    children: [
      { label: "Forex", href: "/markets/forex" },
      { label: "Indexes", href: "/markets/indexes" },
      { label: "Metal", href: "/markets/metal" },
      { label: "Crypto", href: "/markets/crypto" },
    ],
  },
  {
    label: "Trading",
    children: [
      { label: "Trading Account", href: "/trading/account" },
      { label: "Platform", href: "/trading/platform" },
      { label: "Trading Condition", href: "/trading/condition" },
      { label: "Market Time", href: "/trading/market-time" },
      { label: "Deposit & Withdrawal", href: "/trading/deposit-withdrawal" },
      { label: "Economic Calendar", href: "/economic-calendar" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Reviews", href: "/reviews" },
      { label: "Regulation", href: "/regulation" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const NAV_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home,
  "Trading Markets": Globe2,
  Trading: LineChart,
  Company: Building2,
  Contact: PhoneCall,
};

const CHILD_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Forex: DollarSign,
  Indexes: BarChart3,
  Metal: Coins,
  Crypto: Bitcoin,
  "Trading Account": Wallet2,
  Platform: MonitorSmartphone,
  "Trading Condition": ClipboardCheck,
  "Market Time": Clock3,
  "Deposit & Withdrawal": Wallet2,
  "Economic Calendar": Clock3,
  About: Landmark,
  "Why Choose Us": Star,
  Reviews: Star,
  Regulation: ShieldCheck,
};

const ACTION_LINKS = [
  { label: "Log in", href: "https://user.alstrades.com/login" },
  { label: "Open Account", href: "https://user.alstrades.com/signup" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const [desktopOpenGroup, setDesktopOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = storedTheme ? storedTheme === "dark" : prefersDark;
    const root = document.documentElement;
    root.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  const isChildActive = (children: NavChild[]) => children.some((child) => pathname === child.href);

  const desktopBaseClass = "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--card-border)] bg-[var(--card-bg)]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-4 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2" onClick={() => setMenuOpen(false)}>
          <Image
            src="/icon.png"
            alt="ALS Trades"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-lg object-cover"
            priority
          />
          <span className="truncate text-base font-bold text-[var(--foreground)] sm:text-lg max-[420px]:hidden">
            ALS Trades
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            if (!item.children) {
              const isActive = pathname === item.href;
              const Icon = NAV_ICONS[item.label] ?? Home;
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={[
                    desktopBaseClass,
                    isActive
                      ? "bg-[var(--hover-bg)] text-[var(--primary)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  <Icon size={16} className="text-current opacity-80" />
                  {item.label}
                </Link>
              );
            }

            const activeGroup = isChildActive(item.children);

            const isDesktopOpen = desktopOpenGroup === item.label;

            return (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setDesktopOpenGroup(item.label)}
                onMouseLeave={() => setDesktopOpenGroup(null)}
              >
                <button
                  type="button"
                  className={[
                    desktopBaseClass,
                    "inline-flex items-center gap-1.5",
                    activeGroup
                      ? "bg-[var(--hover-bg)] text-[var(--primary)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {(() => {
                    const IconComp = NAV_ICONS[item.label] ?? Globe2;
                    return <IconComp size={16} className="text-current opacity-80" />;
                  })()}
                  {item.label}
                  <ChevronDown size={15} className={isDesktopOpen ? "rotate-180 transition-transform duration-200" : "transition-transform duration-200"} />
                </button>

                <div
                  className={[
                    "absolute left-0 top-full z-50 pt-2 transition-all duration-200",
                    isDesktopOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 translate-y-1",
                  ].join(" ")}
                >
                  <div className="w-64 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-2 shadow-[0_18px_36px_-24px_var(--shadow-color)]">
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;
                      const ChildIcon = CHILD_ICONS[child.label];
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDesktopOpenGroup(null)}
                          className={[
                            "block rounded-lg px-3 py-2.5 text-sm transition-colors duration-200",
                            isActive
                              ? "bg-[var(--hover-bg)] text-[var(--primary)]"
                              : "text-[var(--text-muted)] hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)]",
                          ].join(" ")}
                        >
                          <span className="inline-flex items-center gap-2">
                            {ChildIcon ? <ChildIcon size={14} className="text-[var(--primary)] opacity-80" /> : null}
                            {child.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] hover:bg-[var(--hover-bg)]"
          >
            <Sun size={16} className="theme-icon-sun" />
            <Moon size={16} className="theme-icon-moon" />
          </button>

          <Link
            href={ACTION_LINKS[0].href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg border border-[var(--card-border)] px-2 py-2 text-[11px] font-medium text-[var(--foreground)] hover:bg-[var(--hover-bg)] sm:px-3 sm:text-sm"
          >
            {ACTION_LINKS[0].label}
          </Link>

          <Link
            href={ACTION_LINKS[1].href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-2 py-2 text-[11px] font-semibold text-[var(--card-bg)] shadow-[0_10px_24px_-12px_var(--glow)] hover:opacity-90 sm:px-3 sm:text-sm"
          >
            {ACTION_LINKS[1].label}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] hover:bg-[var(--hover-bg)] md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={[
          "overflow-hidden border-t border-[var(--card-border)] bg-[var(--card-bg)] px-3 transition-all duration-300 md:hidden",
          menuOpen ? "max-h-[70vh] py-3" : "max-h-0 py-0",
        ].join(" ")}
      >
        <nav className="space-y-2">
          {NAV_ITEMS.map((item) => {
            if (!item.children) {
              const isActive = pathname === item.href;
              const Icon = NAV_ICONS[item.label] ?? Home;
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "border-[var(--primary)] bg-[var(--hover-bg)] text-[var(--primary)]"
                      : "border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-muted)] hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  <Icon size={16} className="text-current opacity-80" />
                  {item.label}
                </Link>
              );
            }

            const expanded = mobileOpenGroup === item.label;
            const activeGroup = isChildActive(item.children);

            return (
              <div key={item.label} className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)]">
                <button
                  type="button"
                  onClick={() => setMobileOpenGroup((prev) => (prev === item.label ? null : item.label))}
                  className={[
                    "flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200",
                    activeGroup
                      ? "bg-[var(--hover-bg)] text-[var(--primary)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  <span className="inline-flex items-center gap-2">
                    {(() => {
                      const IconComp = NAV_ICONS[item.label] ?? Globe2;
                      return <IconComp size={16} className="text-current opacity-80" />;
                    })()}
                    {item.label}
                  </span>
                  <ChevronDown size={16} className={expanded ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                <div
                  className={[
                    "overflow-hidden px-2 transition-all duration-300",
                    expanded ? "max-h-72 pb-2" : "max-h-0 pb-0",
                  ].join(" ")}
                >
                  <div className="space-y-1 border-t border-[var(--card-border)] pt-2">
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;
                      const ChildIcon = CHILD_ICONS[child.label];
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileOpenGroup(null);
                          }}
                          className={[
                            "block rounded-md px-3 py-2 text-sm transition-colors duration-200",
                            isActive
                              ? "bg-[var(--hover-bg)] text-[var(--primary)]"
                              : "text-[var(--text-muted)] hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)]",
                          ].join(" ")}
                        >
                          <span className="inline-flex items-center gap-2">
                            {ChildIcon ? <ChildIcon size={14} className="text-[var(--primary)] opacity-80" /> : null}
                            {child.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


