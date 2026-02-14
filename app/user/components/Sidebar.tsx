"use client";

import React, { useEffect, useRef, useState } from "react";
import { LayoutDashboard, Package, ShoppingCart, BarChart2, CreditCard, Menu, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  children?: { href: string; label: string }[];
}

const navItems: NavItem[] = [
  { href: "/user", label: "Dashboard", icon: <LayoutDashboard size={16} /> },
  { href: "/user/instruments", label: "Instruments", icon: <BarChart2 size={16} /> },
  { href: "/user/live-trades", label: "Live Trades", icon: <ShoppingCart size={16} /> },
  { href: "/user/positions", label: "Positions", icon: <Package size={16} /> },
  { href: "/user/analytics", label: "Analytics", icon: <BarChart2 size={16} /> },
  { href: "/user/reports", label: "Reports", icon: <BarChart2 size={16} /> },
  {
    href: "/user/payment",
    label: "Payments & Funds",
    icon: <CreditCard size={16} />,
    children: [
      { href: "/user/deposits", label: "Deposits" },
      { href: "/user/transactions", label: "Transactions" },
      { href: "/user/payouts", label: "Payouts" },
    ],
  },
  { href: "/user/brokage", label: "Brokerage", icon: <CreditCard size={16} /> },
  { href: "/user/settings", label: "Settings", icon: <LayoutDashboard size={16} /> },
];

function SidebarContent({
  pathname,
  openDropdown,
  setOpenDropdown,
  linkClass,
  onLogout,
}: {
  pathname: string;
  openDropdown: string | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  linkClass: (href: string) => string;
  onLogout: () => void;
}) {
  return (
    <nav className="flex h-[90vh] flex-col overflow-y-auto px-4 py-6">
      <h3 className="mb-3 text-xs font-semibold text-[var(--foreground)] opacity-80">User Dashboard</h3>

      <div className="flex flex-col gap-1">
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label} className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => (prev === item.label ? null : item.label))}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition
                  ${
                    openDropdown === item.label
                      ? "bg-[var(--primary)] text-black shadow-[0_0_10px_var(--glow)]"
                      : "text-[var(--foreground)] opacity-75 hover:bg-[var(--card-border)] hover:opacity-100"
                  }`}
              >
                <span className="flex items-center gap-3">
                  {item.icon} {item.label}
                </span>
                <span className="text-xs">{openDropdown === item.label ? "▲" : "▼"}</span>
              </button>

              {openDropdown === item.label ? (
                <div className="flex flex-col gap-1 py-1 pl-10">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`rounded-md px-3 py-1 text-sm transition
                        ${
                          pathname.startsWith(child.href)
                            ? "bg-[var(--card-border)] font-semibold text-[var(--primary)]"
                            : "text-[var(--foreground)] opacity-70 hover:opacity-100"
                        }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.icon} <span>{item.label}</span>
            </Link>
          ),
        )}
      </div>

      <div className="mt-auto">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-500 transition hover:bg-red-500/10"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </nav>
  );
}

const UserSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname() ?? "/";
  const router = useRouter();

  const initialDropdown =
    navItems.find((item) => item.children?.some((child) => pathname.startsWith(child.href)))?.label ?? null;
  const [openDropdown, setOpenDropdown] = useState<string | null>(initialDropdown);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const normalizePath = (p: string) => p.replace(/\/+$/, "") || "/";
  const isActive = (href: string) => {
    const current = normalizePath(pathname);
    const target = normalizePath(href);
    return current === target || current.startsWith(target + "/");
  };

  const linkClass = (href: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition
     ${
       isActive(href)
         ? "bg-[var(--primary)] text-black shadow-[0_0_10px_var(--glow)]"
         : "text-[var(--foreground)] opacity-75 hover:opacity-100 hover:bg-[var(--card-border)]"
     }`;

  const handleLogout = () => router.push("/");

  return (
    <>
      <div className="fixed left-4 top-4 z-50 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] p-2 shadow"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      <aside className="fixed hidden min-h-screen w-64 flex-col border-r border-[var(--card-border)] bg-[var(--card-bg)] lg:flex">
        <SidebarContent
          pathname={pathname}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          linkClass={linkClass}
          onLogout={handleLogout}
        />
      </aside>

      <AnimatePresence>
        {open ? (
          <>
            <motion.aside
              ref={sidebarRef}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[var(--card-border)] bg-[var(--card-bg)] shadow-xl"
            >
              <SidebarContent
                pathname={pathname}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                linkClass={linkClass}
                onLogout={handleLogout}
              />
            </motion.aside>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={() => setOpen(false)}
            />
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default UserSidebar;
