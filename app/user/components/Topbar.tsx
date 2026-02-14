"use client";

import { Search, User, Sun, Moon } from "lucide-react";

const Topbar = () => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.theme = isDark ? "dark" : "light";
    } catch {
      // Ignore storage access errors (restricted environments).
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="ml-12 flex items-center gap-3 lg:ml-0">
          <h1 className="text-xl font-bold tracking-wide">
            Trading <span className="text-[var(--primary)]">User</span>
          </h1>
        </div>

        <div className="flex flex-shrink-0 items-center gap-4">
          <div className="relative w-40 sm:w-52 md:w-60">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--primary)] opacity-70" />
            <input
              type="text"
              placeholder="Search markets, users, logs..."
              className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] py-2 pl-9 pr-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--input-border)] bg-[var(--input-bg)] shadow-sm transition-transform hover:scale-105"
          >
            <Moon size={18} className="theme-icon-moon" />
            <Sun size={18} className="theme-icon-sun" />
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-black shadow-[0_0_12px_var(--glow)] transition-transform hover:scale-105">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
