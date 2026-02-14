"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bitcoin,
  Briefcase,
  Building2,
  ChevronRight,
  ClipboardCheck,
  Coins,
  DollarSign,
  Globe,
  Layers,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import HeroSection from "./HeroSection";

const whyCards = [
  {
    title: "Institutional Depth",
    desc: "Aggregate liquidity engine keeps execution quality stable across volatile sessions.",
    icon: Building2,
  },
  {
    title: "Speed You Can Measure",
    desc: "Low-latency order routing built for scalpers, swing desks, and high-frequency workflows.",
    icon: Activity,
  },
  {
    title: "Transparent Pricing",
    desc: "Transparent pricing and clear fee structures so every strategy remains predictable.",
    icon: BarChart3,
  },
  {
    title: "Risk Controls First",
    desc: "Layered protection with balance safeguards and configurable trade controls.",
    icon: ShieldCheck,
  },
  {
    title: "Global Market Access",
    desc: "Forex, indices, metals, and digital markets from one high-availability stack.",
    icon: Globe,
  },
  {
    title: "Dedicated Support Desk",
    desc: "Responsive onboarding and account service tailored for active traders.",
    icon: BadgeCheck,
  },
] as const;

const platformItems = [
  {
    title: "Web Trading",
    desc: "Fast browser-based execution with institutional charting and one-click depth views.",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile Application",
    desc: "Track positions and react instantly with a fully synchronized mobile stack.",
    icon: Sparkles,
  },
  {
    title: "Broker Panel",
    desc: "Manage funding, reporting, and access controls with clear operational visibility.",
    icon: Briefcase,
  },
  {
    title: "Trading Workspace",
    desc: "A focused environment for strategy building, monitoring, and team collaboration.",
    icon: Layers,
  },
] as const;

const navigatorItems = [
  {
    title: "Market Insight Stream",
    desc: "Live structure signals and session context to sharpen entries and exits.",
    points: ["Cross-asset heat view", "Session momentum map", "Depth-aware bias feed"],
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Automation Suite",
    desc: "Convert repeatable rules into controlled workflows without losing oversight.",
    points: ["Smart alert routing", "Pre-trade validation", "Task-level execution logs"],
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Risk Intelligence Layer",
    desc: "Monitor exposure continuously with clearer limits and rapid intervention tools.",
    points: ["Portfolio stress lens", "Drawdown warning grid", "Central risk controls"],
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
] as const;

const startSteps = ["Register", "Fund", "Trade", "Verify", "Withdraw"] as const;

const marketCategories = [
  { name: "Forex", detail: "45+ major and cross pairs" },
  { name: "Indexes", detail: "Global benchmark coverage" },
  { name: "Metals", detail: "Gold, silver and specialty metals" },
  { name: "Crypto", detail: "High-interest digital pairs" },
] as const;

const pricingRows = [
  { market: "Forex Majors", pricing: "Competitive pricing", execution: "Low latency" },
  { market: "Gold (XAU/USD)", pricing: "Depth-aware pricing", execution: "Depth-aware routing" },
  { market: "US Indices", pricing: "Benchmark pricing", execution: "Session-optimized" },
  { market: "Core Crypto", pricing: "Market pricing", execution: "24/7 market access" },
] as const;

const symbolCards = [
  {
    symbol: "BTCUSDT",
    market: "Crypto",
    pricing: "Competitive",
    isBullish: true,
    status: "Active",
    icon: Bitcoin,
    spark: [28, 35, 32, 46, 41, 58, 53, 68],
  },
  {
    symbol: "XAUUSD",
    market: "Metals",
    pricing: "Stable",
    isBullish: true,
    status: "Active",
    icon: Coins,
    spark: [22, 28, 31, 30, 39, 36, 42, 47],
  },
  {
    symbol: "EURUSD",
    market: "Forex",
    pricing: "Efficient",
    isBullish: false,
    status: "Steady",
    icon: Globe,
    spark: [48, 43, 45, 39, 37, 34, 33, 31],
  },
  {
    symbol: "US30",
    market: "Indexes",
    pricing: "Benchmark",
    isBullish: true,
    status: "Active",
    icon: BarChart3,
    spark: [33, 38, 35, 42, 44, 46, 49, 56],
  },
  {
    symbol: "ETHUSDT",
    market: "Crypto",
    pricing: "Balanced",
    isBullish: true,
    status: "Active",
    icon: Activity,
    spark: [27, 29, 34, 36, 43, 45, 48, 53],
  },
  {
    symbol: "GBPJPY",
    market: "Forex",
    pricing: "Responsive",
    isBullish: false,
    status: "Steady",
    icon: DollarSign,
    spark: [57, 55, 52, 48, 46, 44, 41, 39],
  },
] as const;

const reviewCards = [
  {
    name: "Aarav S.",
    role: "Crypto Swing Trader",
    symbol: "BTCUSDT",
    highlight: "Execution stayed stable during high-volatility moves.",
    text: "Orders filled cleanly even near fast spikes, and slippage stayed under control throughout the London and NY overlap.",
    rating: 5,
    sentiment: "Low slippage",
  },
  {
    name: "Fatima K.",
    role: "Commodities Desk",
    symbol: "XAUUSD",
    highlight: "Pricing discipline is consistent across key sessions.",
    text: "Gold entries remain predictable during breakout windows, which makes risk planning much easier for intraday setups.",
    rating: 5,
    sentiment: "Competitive pricing",
  },
  {
    name: "Daniel R.",
    role: "Forex Intraday Trader",
    symbol: "EURUSD",
    highlight: "Platform response is quick and reliable.",
    text: "The interface reacts instantly while adjusting stops and targets, so execution feels controlled even under pressure.",
    rating: 4,
    sentiment: "Fast routing",
  },
  {
    name: "Sana M.",
    role: "Multi-Asset Trader",
    symbol: "US30",
    highlight: "Risk controls and visibility are genuinely useful.",
    text: "Position monitoring is clear, and I can spot exposure changes quickly without jumping across multiple tools.",
    rating: 5,
    sentiment: "Strong controls",
  },
  {
    name: "Leo P.",
    role: "Momentum Trader",
    symbol: "ETHUSDT",
    highlight: "Speed and transparency both feel institutional.",
    text: "Depth and execution quality stay dependable, which helps me scale size without compromising consistency.",
    rating: 5,
    sentiment: "Clear pricing",
  },
] as const;

const navigatorTitleStagger = {
  rest: { opacity: 1, y: 0, transition: { staggerChildren: 0 } },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.018, delayChildren: 0.04, staggerDirection: 1 },
  },
} as const;

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

export default function LandingPage() {
  const prefersReducedMotion = useReducedMotion();
  const [activeNavigator, setActiveNavigator] = useState(0);
  const active = navigatorItems[activeNavigator];
  const marqueeCards = [...symbolCards, ...symbolCards];
  const reverseCards = [...symbolCards].reverse();
  const reverseMarqueeCards = [...reverseCards, ...reverseCards];
  const reviewMarqueeCards = [...reviewCards, ...reviewCards];

  return (
    <main className="bg-[var(--background)]">
      <HeroSection />

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {marketCategories.map((item) => (
            <article key={item.name} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{item.name}</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--card-bg)_86%,white),color-mix(in_srgb,var(--hover-bg)_70%,var(--card-bg)))] p-4 shadow-[0_28px_56px_-38px_var(--shadow-color)] sm:p-7"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">Trending Symbols</p>
              <h2 className="mt-3 text-[22px] font-bold leading-snug text-[var(--foreground)] sm:text-4xl">
                Live-style market tape for major instruments
              </h2>
            </div>
            <Link
              href="/markets/forex"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-xs font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)] sm:text-sm"
            >
              View Markets <ChevronRight size={16} />
            </Link>
          </div>

          <div className="relative mt-7 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,var(--card-bg),transparent)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,var(--card-bg),transparent)]" />

            <motion.div
              className="flex w-max gap-3 pb-3"
              animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={prefersReducedMotion ? undefined : { duration: 34, ease: "linear", repeat: Infinity }}
            >
              {marqueeCards.map((item, idx) => {
                const Icon = item.icon;
                const barColor = item.isBullish
                  ? "bg-[color-mix(in_srgb,var(--success)_65%,var(--card-bg))]"
                  : "bg-[color-mix(in_srgb,#ef4444_65%,var(--card-bg))]";

                return (
                  <article
                    key={`${item.symbol}-top-${idx}`}
                    className="group w-[220px] shrink-0 rounded-2xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_88%,white)] p-3 shadow-[0_18px_36px_-28px_var(--shadow-color)] sm:w-[240px] sm:p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{item.market}</p>
                        <h3 className="mt-1 text-base font-bold text-[var(--foreground)] sm:text-lg">{item.symbol}</h3>
                      </div>
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--hover-bg)] text-[var(--primary)] sm:h-9 sm:w-9">
                        <Icon size={16} />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-full border border-[var(--card-border)] bg-[var(--hover-bg)] px-2.5 py-1 text-[var(--foreground)]">
                        Pricing {item.pricing}
                      </span>
                      <span className="rounded-full border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--primary)_10%,var(--card-bg))] px-2.5 py-1 text-[var(--primary)]">
                        {item.status}
                      </span>
                    </div>

                    <div className="mt-3 flex h-8 items-end gap-1.5">
                      {item.spark.map((height, barIdx) => (
                        <span
                          key={`${item.symbol}-top-bar-${barIdx}-${idx}`}
                          className={`w-1.5 rounded-full ${barColor}`}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
                      Live pricing snapshot
                    </div>
                  </article>
                );
              })}
            </motion.div>

            <motion.div
              className="flex w-max gap-3"
              animate={prefersReducedMotion ? undefined : { x: ["-50%", "0%"] }}
              transition={prefersReducedMotion ? undefined : { duration: 38, ease: "linear", repeat: Infinity }}
            >
              {reverseMarqueeCards.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <article
                    key={`${item.symbol}-bottom-${idx}`}
                    className="w-[200px] shrink-0 rounded-2xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_92%,white)] px-4 py-3 sm:w-[220px]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--hover-bg)] text-[var(--primary)]">
                          <Icon size={15} />
                        </div>
                        <span className="text-[13px] font-semibold text-[var(--foreground)] sm:text-sm">{item.symbol}</span>
                      </div>
                      <span className="text-xs font-semibold text-[var(--primary)]">{item.status}</span>
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16">
        <motion.div
          {...reveal}
          className="grid gap-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[0_24px_48px_-32px_var(--shadow-color)] sm:p-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">Pricing and Execution</p>
            <h2 className="mt-3 text-[22px] font-bold leading-tight text-[var(--foreground)] sm:text-4xl">
              Market-ready conditions built for strategy consistency.
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] text-[var(--text-muted)] sm:text-base">
              ALS Trades combines tight pricing logic, transparent cost visibility, and reliable order handling so
              active traders can execute with confidence across sessions.
            </p>
            <Link
              href="https://user.alstrades.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-5 py-3 text-sm font-semibold text-[var(--card-bg)] sm:w-auto"
            >
              Open Account <ChevronRight size={16} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl border border-[var(--card-border)]">
            <div className="grid grid-cols-3 bg-[var(--hover-bg)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
              <span>Market</span>
              <span>Pricing</span>
              <span>Execution</span>
            </div>
            {pricingRows.map((row) => (
              <div key={row.market} className="grid grid-cols-3 border-t border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-[13px] sm:text-sm">
                <span className="font-semibold text-[var(--foreground)]">{row.market}</span>
                <span className="text-[var(--text-muted)]">{row.pricing}</span>
                <span className="text-[var(--text-muted)]">{row.execution}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
        <motion.div {...reveal} className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">Why ALS Trades</p>
          <h2 className="mt-3 text-[22px] font-bold leading-snug text-[var(--foreground)] sm:text-4xl">
            Why serious traders choose ALS Trades
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] text-[var(--text-muted)] sm:text-base">
            A high-performance ecosystem where pricing transparency, deep liquidity, and execution confidence work together.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -7, scale: 1.01 }}
                className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[0_18px_35px_-28px_var(--shadow-color)] sm:p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--hover-bg)] text-[var(--primary)] group-hover:shadow-[0_12px_20px_-14px_var(--glow)] sm:h-11 sm:w-11">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)] sm:text-sm">{card.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center">
        <motion.div>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, y: 0, color: ["var(--primary)", "var(--secondary)", "var(--primary)"] }
            }
            transition={prefersReducedMotion ? undefined : { duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm"
          >
            Trust Framework
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.08, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="mt-3 text-[22px] font-bold text-[var(--foreground)] sm:text-4xl"
          >
            Built on trust, confidence, and regulatory discipline.
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="mt-4 text-[15px] text-[var(--text-muted)] sm:text-base"
          >
            From client fund segregation to robust compliance operations, every layer is built to protect capital integrity while keeping performance front and center.
          </motion.p>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <Link
              href="https://user.alstrades.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)] sm:w-auto"
            >
              Get Started <ChevronRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24, scale: 0.98 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-2 sm:p-3"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZW50fGVufDB8fDB8fHww"
            width={920}
            height={640}
            alt="Trust and compliance framework"
            className="h-auto w-full rounded-2xl"
            priority={false}
          />
        </motion.div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center">
        <motion.div>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, y: 0, color: ["var(--primary)", "var(--accent)", "var(--primary)"] }
            }
            transition={prefersReducedMotion ? undefined : { duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm"
          >
            Platform Confidence
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.08, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="mt-3 text-[22px] font-bold text-[var(--foreground)] sm:text-4xl"
          >
            Trade confidently across every channel you use.
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.18, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="mt-4 text-[15px] text-[var(--text-muted)] sm:text-base"
          >
            A connected experience across web, mobile, and operational layers ensures your execution rhythm never breaks.
          </motion.p>

          <div className="mt-8 space-y-3">
            {platformItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 0.5, delay: 0.24 + idx * 0.08, ease: "easeOut" }
                  }
                  viewport={{ once: true, amount: 0.35 }}
                  whileHover={{ x: 6 }}
                  className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-3 sm:p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--hover-bg)] text-[var(--primary)] sm:h-9 sm:w-9">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[var(--foreground)] sm:text-base">{item.title}</h3>
                      <p className="mt-1 text-[13px] text-[var(--text-muted)] sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.5, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <Link
              href="https://user.alstrades.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-5 py-3 text-sm font-semibold text-[var(--card-bg)] sm:w-auto"
            >
              Open Account <ChevronRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24, scale: 0.98 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-2 sm:p-3"
        >
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80"
            width={920}
            height={640}
            alt="Trade on a modern multi-platform setup"
            className="h-auto w-full rounded-2xl"
          />
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--hover-bg)_78%,var(--card-bg)),color-mix(in_srgb,var(--card-bg)_88%,white))] p-5 shadow-[0_24px_52px_-36px_var(--shadow-color)] sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">Client Reviews</p>
          <h2 className="mt-3 max-w-4xl text-[22px] font-bold text-[var(--foreground)] sm:text-4xl">
            Trusted feedback from active market participants
          </h2>
          <motion.p
            className="mt-3 max-w-3xl text-[13px] font-semibold sm:text-base"
            animate={
              prefersReducedMotion
                ? undefined
                : { color: ["var(--secondary)", "var(--primary)", "var(--accent)", "var(--secondary)"] }
            }
            transition={prefersReducedMotion ? undefined : { duration: 7, repeat: Infinity, ease: "linear" }}
          >
            Verified voices across BTCUSDT, XAUUSD, EURUSD, US30, and ETHUSDT workflows.
          </motion.p>

          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,var(--card-bg),transparent)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,var(--card-bg),transparent)]" />

            <motion.div
              className="flex w-max gap-4"
              animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={prefersReducedMotion ? undefined : { duration: 42, ease: "linear", repeat: Infinity }}
            >
              {reviewMarqueeCards.map((review, idx) => (
                <article
                  key={`${review.name}-${review.symbol}-${idx}`}
                  className="w-[260px] shrink-0 rounded-2xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_92%,white)] p-5 shadow-[0_18px_36px_-28px_var(--shadow-color)] sm:w-[320px]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)] sm:text-base">{review.name}</p>
                      <p className="mt-0.5 text-xs text-[var(--text-muted)]">{review.role}</p>
                    </div>
                    <span className="rounded-lg border border-[var(--card-border)] bg-[var(--hover-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--primary)]">
                      {review.symbol}
                    </span>
                  </div>

                  <p className="mt-4 text-[13px] font-semibold text-[var(--foreground)] sm:text-sm">{review.highlight}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)] sm:text-sm">{review.text}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={`${review.symbol}-star-${starIdx}-${idx}`}
                          size={14}
                          className={
                            starIdx < review.rating
                              ? "fill-[var(--highlight)] text-[var(--highlight)]"
                              : "text-[var(--card-border)]"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[var(--primary)]">{review.sentiment}</span>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
        <motion.div {...reveal} className="mb-8">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, y: 0, color: ["var(--primary)", "var(--accent)", "var(--primary)"] }
            }
            transition={prefersReducedMotion ? undefined : { duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm"
          >
            Navigator Suite
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-3 max-w-4xl text-[22px] font-bold text-[var(--foreground)] sm:text-4xl"
          >
            Advance your edge with ALS Trades Navigator intelligence.
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: 0.18, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-4 max-w-3xl text-[15px] text-[var(--text-muted)] sm:text-base"
          >
            Select a capability set to explore how Navigator supports faster decisions, cleaner automation, and stronger exposure control.
          </motion.p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-3">
            {navigatorItems.map((item, idx) => {
              const isActive = idx === activeNavigator;
              return (
                <motion.button
                  key={item.title}
                  type="button"
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -22 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 0.45, delay: 0.08 + idx * 0.08, ease: "easeOut" }
                  }
                  viewport={{ once: true, amount: 0.4 }}
                  onClick={() => setActiveNavigator(idx)}
                  whileHover={{ x: 5 }}
                  className={[
                    "w-full rounded-2xl border p-4 text-left sm:p-5",
                    isActive
                      ? "border-[var(--primary)] bg-[var(--hover-bg)]"
                      : "border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[color-mix(in_srgb,var(--primary)_45%,var(--card-border))]",
                  ].join(" ")}
                >
                  <motion.h3
                    initial={prefersReducedMotion ? false : "rest"}
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : activeNavigator === idx
                          ? "show"
                          : "rest"
                    }
                    variants={navigatorTitleStagger}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 0.45, delay: 0.04 + idx * 0.04, ease: "easeOut" }
                    }
                    className={[
                      "text-base font-semibold sm:text-lg",
                      isActive
                        ? "bg-[linear-gradient(90deg,var(--primary),var(--secondary))] bg-clip-text text-transparent"
                        : "text-[var(--foreground)]",
                    ].join(" ")}
                  >
                    {item.title.split("").map((ch, cIdx) => (
                      <motion.span
                        key={`${item.title}-ch-${cIdx}`}
                        className="inline-block"
                        animate={
                      prefersReducedMotion
                        ? { opacity: 1, y: 0 }
                        : activeNavigator === idx
                              ? { opacity: [0, 1], y: [10, 0] }
                              : { opacity: 1, y: 0 }
                    }
                        transition={
                          prefersReducedMotion
                            ? undefined
                            : { duration: 0.42, ease: "easeOut", delay: cIdx * 0.032 }
                        }
                      >
                        {ch === " " ? "\u00A0" : ch}
                      </motion.span>
                    ))}
                  </motion.h3>
                  <motion.p
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 0.45, delay: 0.14 + idx * 0.05, ease: "easeOut" }
                    }
                    viewport={{ once: true, amount: 0.6 }}
                    className="mt-2 text-[13px] text-[var(--text-muted)] sm:text-sm"
                  >
                    {item.desc}
                  </motion.p>
                </motion.button>
              );
            })}

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.45, delay: 0.34, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Link
                href="https://user.alstrades.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)] sm:w-auto"
              >
                Get Started <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20, scale: 0.98 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.45, ease: "easeOut" }}
            className="w-full rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-3 sm:p-4 lg:max-w-[640px] lg:justify-self-end"
          >
            <Image
              src={active.image}
              width={920}
              height={640}
              alt={active.title}
              className="h-[220px] w-full rounded-2xl object-cover sm:h-[320px] lg:h-[360px]"
            />
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {active.points.map((point, pointIdx) => (
                <motion.div
                  key={point}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 0.34, delay: 0.08 + pointIdx * 0.07, ease: "easeOut" }
                  }
                  className="rounded-xl bg-[var(--hover-bg)] px-3 py-2 text-xs font-medium text-[var(--foreground)]"
                >
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-16">
        <motion.div
          {...reveal}
          className="rounded-3xl border border-[var(--card-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary)_18%,var(--card-bg)),color-mix(in_srgb,var(--secondary)_12%,var(--card-bg)))] p-5 sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-dark)] sm:text-sm">Launch Sequence</p>
          <h2 className="mt-3 text-[22px] font-bold text-[var(--foreground)] sm:text-4xl">Start fast, trade smart, and scale with confidence.</h2>
          <p className="mt-4 max-w-3xl text-[15px] text-[var(--text-muted)] sm:text-base">
            Move from onboarding to consistent execution in a structured five-step flow designed for clarity and speed.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {startSteps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-3 sm:p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">Step {idx + 1}</span>
                  {idx < 2 ? <ClipboardCheck size={16} className="text-[var(--primary)]" /> : idx < 4 ? <BarChart3 size={16} className="text-[var(--primary)]" /> : <Wallet size={16} className="text-[var(--primary)]" />}
                </div>
                <h3 className="mt-3 text-base font-semibold text-[var(--foreground)] sm:text-lg">{step}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://user.alstrades.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-5 py-3 text-sm font-semibold text-[var(--card-bg)] sm:w-auto"
            >
              Get Started <ChevronRight size={16} />
            </Link>
            <Link
              href="https://user.alstrades.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)] sm:w-auto"
            >
              Log in <ChevronRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
