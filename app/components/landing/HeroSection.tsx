"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Bitcoin, Coins, DollarSign, Handshake, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";

const heroCards = [
  {
    label: "Forex",
    href: "/markets/forex",
    icon: DollarSign,
  },
  {
    label: "Indexes",
    href: "/markets/indexes",
    icon: BarChart3,
  },
  {
    label: "Metals",
    href: "/markets/metal",
    icon: Coins,
  },
  {
    label: "Crypto",
    href: "/markets/crypto",
    icon: Bitcoin,
  },
  {
    label: "Accounts",
    href: "/accounts",
    icon: UserPlus,
  },
  {
    label: "Partners",
    href: "/partners",
    icon: Handshake,
  },
] as const;

const highlights = [
  { label: "Active Markets", value: "200+" },
  { label: "Execution Stack", value: "Low-Latency" },
  { label: "Market Access", value: "24/5 + Crypto" },
  { label: "Platform Uptime", value: "99.95%" },
] as const;

const MotionLink = motion(Link);

const heroBackgrounds = [
  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=2400&q=80", // YI_9SivVt_s
  "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=2400&q=80", // gMsnXqILjp4
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80", // rMILC1PIwM0
] as const;

const heroTypingLines = [
  "With Institutional Precision",
  "With Disciplined Execution",
  "With Transparent Pricing",
] as const;
const longestTypingLine = heroTypingLines.reduce((longest, line) =>
  line.length > longest.length ? line : longest,
heroTypingLines[0]);

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [bgIndex, setBgIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [typedLine, setTypedLine] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const displayedLine = prefersReducedMotion ? heroTypingLines[0] : typedLine;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const activeLine = heroTypingLines[lineIndex];
    let delay = isDeleting ? 78 : 145;

    if (!isDeleting && typedLine === activeLine) delay = 2000;
    if (isDeleting && typedLine.length === 0) delay = 520;

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedLine === activeLine) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedLine.length === 0) {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % heroTypingLines.length);
        return;
      }

      const nextLength = isDeleting ? typedLine.length - 1 : typedLine.length + 1;
      setTypedLine(activeLine.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, lineIndex, prefersReducedMotion, typedLine]);

  return (
    <section className="relative overflow-hidden border-b border-[var(--card-border)] bg-[var(--background)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {heroBackgrounds.map((src, idx) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: idx === bgIndex ? 1 : 0 }}
            animate={{ opacity: idx === bgIndex ? 1 : 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <Image src={src} alt="" fill priority sizes="100vw" className="object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,#0b1623_78%,transparent)_0%,color-mix(in_srgb,#0b1623_58%,transparent)_52%,color-mix(in_srgb,#0b1623_36%,transparent)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,40,70,0.35),transparent_36%),radial-gradient(circle_at_80%_30%,rgba(6,20,46,0.28),transparent_34%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[48%] bg-[color-mix(in_srgb,var(--card-bg)_55%,transparent)] backdrop-blur-[2px] lg:block" style={{ clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />
        <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--highlight)_22%,transparent)] blur-3xl" />
        <div className="absolute -right-20 top-24 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--secondary)_18%,transparent)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-10">
        <div className="inline-flex rounded-xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_82%,transparent)] px-4 py-2 text-xs font-medium text-[var(--text-muted)] backdrop-blur">
          Global multi-asset access with transparent pricing and execution discipline
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="glass rounded-3xl p-5 shadow-[0_24px_48px_-34px_var(--shadow-color)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              ALS Trades Platform
            </p>
            <h1 className="mt-4 text-[28px] font-black leading-tight text-[var(--foreground)] sm:text-5xl">
              Trade Global Markets
              <br />
              <span className="relative inline-flex min-h-[2.2em] w-full items-start text-[var(--secondary)] sm:min-h-[1.3em]">
                <span aria-hidden="true" className="invisible">
                  {longestTypingLine}
                </span>
                <span className="absolute inset-0 inline-flex items-baseline">
                  {displayedLine || "\u00A0"}
                  <motion.span
                    aria-hidden="true"
                    className="ml-1 text-[var(--primary)]"
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [1, 0] }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </span>
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] text-[var(--text-muted)] sm:text-base">
              Build and execute your forex, crypto, index, and metals strategies in one professional
              trading environment designed for speed, control, and consistency.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://user.alstrades.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-6 py-3 text-sm font-semibold text-[var(--card-bg)] sm:w-auto"
              >
                Open Live Account
              </Link>
              <Link
                href="/markets/forex"
                className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--card-border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)] sm:w-auto"
              >
                Explore Markets
              </Link>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid gap-3 rounded-3xl border border-[color-mix(in_srgb,var(--card-border)_70%,transparent)] bg-[color-mix(in_srgb,var(--card-bg)_68%,transparent)] p-3 shadow-[0_24px_48px_-34px_var(--shadow-color)] backdrop-blur sm:grid-cols-2 sm:p-5 lg:grid-cols-2"
          >
            {heroCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <MotionLink
                  key={card.href}
                  href={card.href}
                  className="group relative overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--card-border)_70%,transparent)] bg-[color-mix(in_srgb,var(--card-bg)_78%,transparent)] p-3 shadow-[0_18px_30px_-26px_var(--shadow-color)] sm:p-4"
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: idx * 0.04, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.01, rotate: -0.15 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--card-bg)_88%,transparent)_0%,transparent_72%)]" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_10%_10%,rgba(30,99,181,0.18),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(45,140,255,0.16),transparent_42%)]" />

                  <div className="relative flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--primary)_18%,var(--card-bg))] text-[var(--primary)] shadow-[0_10px_18px_-14px_var(--glow)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_20px_-12px_var(--glow)] sm:h-10 sm:w-10">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                        {card.label}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] group-hover:text-[var(--secondary)] transition-colors duration-300">
                        Explore
                      </p>
                    </div>
                  </div>
                </MotionLink>
              );
            })}
          </motion.aside>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 sm:py-4"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{item.label}</p>
              <p className="mt-2 text-base font-bold text-[var(--foreground)] sm:text-lg">{item.value}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
