"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarDays,
  Check,
  Clock3,
  Headphones,
  Landmark,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Shield,
  Smartphone,
  Wallet,
  Zap,
} from "lucide-react";
import { useCreateInquiry } from "../../../hooks/useCreateInquiry";
import HeroImageSlider from "../../hero/HeroImageSlider";
import TypewriterAccent from "../../hero/TypewriterAccent";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

const PAGE_IMAGES = {
  tradingAccount: "https://images.unsplash.com/photo-1635236190542-d43e4d4b9e4b?auto=format&fit=crop&w=2400&q=80",
  tradingPlatform: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2400&q=80",
  tradingConditions: "https://images.unsplash.com/photo-1707761918029-1295034aa31e?auto=format&fit=crop&w=2400&q=80",
  tradingMarketTime: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=2400&q=80",
  tradingPayments: "https://images.unsplash.com/photo-1591033594798-33227a05780d?auto=format&fit=crop&w=2400&q=80",
  about: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=2400&q=80",
  whyChooseUs: "https://images.unsplash.com/photo-1489686995744-f47e995ffe61?auto=format&fit=crop&w=2400&q=80",
  reviews: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=2400&q=80",
  regulation: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=2400&q=80",
  contact: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80",
} as const;

const PAGE_HERO_SLIDES = {
  tradingAccount: [
    PAGE_IMAGES.tradingAccount,
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2400&q=80",
  ],
  tradingPlatform: [
    PAGE_IMAGES.tradingPlatform,
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80",
  ],
  tradingConditions: [
    PAGE_IMAGES.tradingConditions,
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=2400&q=80",
  ],
  tradingMarketTime: [
    PAGE_IMAGES.tradingMarketTime,
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80",
  ],
  tradingPayments: [
    PAGE_IMAGES.tradingPayments,
    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2400&q=80",
  ],
  about: [
    PAGE_IMAGES.about,
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=2400&q=80",
  ],
  whyChooseUs: [
    PAGE_IMAGES.whyChooseUs,
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=2400&q=80",
  ],
  reviews: [
    PAGE_IMAGES.reviews,
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80",
  ],
  regulation: [
    PAGE_IMAGES.regulation,
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=2400&q=80",
  ],
  contact: [
    PAGE_IMAGES.contact,
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
  ],
} as const;

const DEFAULT_ACCENT_LINES = ["Precision-led execution", "Risk-aware workflows", "Institutional-grade delivery"];

function HeroBackdrop({
  src,
  sources,
  alt = "",
  priority = false,
}: {
  src?: string;
  sources?: readonly string[];
  alt?: string;
  priority?: boolean;
}) {
  const slides = (sources?.length ? sources : src ? [src] : []).filter(Boolean);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <HeroImageSlider images={slides} alt={alt} priority={priority} imageClassName="object-cover opacity-18" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--background)_92%,transparent)_0%,color-mix(in_srgb,var(--background)_72%,transparent)_55%,color-mix(in_srgb,var(--background)_30%,transparent)_100%)]" />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  accentLines = DEFAULT_ACCENT_LINES,
}: {
  eyebrow: string;
  title: string;
  description: string;
  accentLines?: string[];
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">{title}</h2>
      <TypewriterAccent lines={accentLines} className="mt-3 text-sm font-semibold" />
      <p className="mt-4 text-[var(--text-muted)]">{description}</p>
    </div>
  );
}

export function TradingAccountPageView() {
  const plans = [
    { name: "Core", pricing: "Standard pricing", lev: "Up to 1:200", tag: "Balanced Entry" },
    { name: "Prime", pricing: "Active pricing", lev: "Up to 1:300", tag: "High Activity" },
    { name: "Elite", pricing: "Institutional pricing", lev: "Tailored", tag: "Institutional Flow" },
  ];

  return (
    <main className="bg-[var(--background)]">
      <section className="relative isolate overflow-hidden">
        <HeroBackdrop sources={PAGE_HERO_SLIDES.tradingAccount} alt="Account setup and planning" priority />
        <div className="aurora absolute -left-24 -top-20 h-[360px] w-[360px] rounded-full bg-[color-mix(in_srgb,var(--primary)_25%,transparent)] blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">Trading Account</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-[var(--foreground)] sm:text-5xl">
              Capital-ready account structures for disciplined execution.
            </h1>
            <TypewriterAccent
              lines={["Risk-aligned tiers", "Fast activation", "Transparent cost view"]}
              className="mt-3 text-sm font-semibold"
            />
            <p className="mt-4 max-w-2xl text-lg text-[var(--text-muted)]">
              Choose an account architecture aligned with your strategy depth, trade frequency, and risk posture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="https://user.alstrades.com/signup" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-5 py-3 text-sm font-semibold text-[var(--card-bg)]">
                Open Account
              </Link>
              <Link href="/trading/condition" className="rounded-xl border border-[var(--card-border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)]">
                View Conditions
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Execution Confidence Meter</p>
            <div className="mt-5 space-y-4">
              {[
                { label: "Activation Speed", value: "94%" },
                { label: "Funding Readiness", value: "97%" },
                { label: "Support Availability", value: "99%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">
                    <span>{item.label}</span>
                    <span className="font-semibold text-[var(--foreground)]">{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--hover-bg)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-2 rounded-full bg-[linear-gradient(90deg,var(--secondary),var(--primary))]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className={[
                "rounded-3xl border p-6",
                idx === 1
                  ? "border-[var(--primary)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary)_18%,var(--card-bg)),var(--card-bg))]"
                  : "border-[var(--card-border)] bg-[var(--card-bg)]",
              ].join(" ")}
            >
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{plan.tag}</p>
              <h3 className="mt-2 text-2xl font-bold text-[var(--foreground)]">{plan.name}</h3>
              <div className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                <p>Pricing: <span className="font-semibold text-[var(--foreground)]">{plan.pricing}</span></p>
                <p>Leverage: <span className="font-semibold text-[var(--foreground)]">{plan.lev}</span></p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6">
        <motion.div {...fadeIn} className="rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Activation Rail</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">Go live in five controlled steps</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["Account Registration", "Identity Verification", "Risk Profile Mapping", "Secure Funding", "Live Deployment"].map((step, idx) => (
              <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.06 }} viewport={{ once: true }} className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Step {idx + 1}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export function TradingPlatformPageView() {
  const tools = [
    { icon: Smartphone, title: "Mobile Continuity", text: "Synchronized layouts across iOS and Android." },
    { icon: BarChart3, title: "Deep Analytics", text: "Multi-timeframe charts and strategy overlays." },
    { icon: Zap, title: "Execution Engine", text: "Low-latency routing for high-intent decisions." },
    { icon: Shield, title: "Risk Console", text: "Realtime margin, exposure, and alert governance." },
  ];

  return (
    <main className="bg-[var(--background)]">
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative isolate overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[linear-gradient(130deg,#0f2a2e,#0b1d20)] p-8 text-white sm:p-12">
          <div className="absolute inset-0 -z-10">
            <HeroImageSlider images={PAGE_HERO_SLIDES.tradingPlatform} alt="" priority imageClassName="object-cover opacity-25" />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute -right-14 -top-14 h-56 w-56 rounded-full bg-[rgba(0,168,132,0.28)] blur-3xl" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8fffe4]">Platform</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">A multi-device execution cockpit designed for professional rhythm.</h1>
          <TypewriterAccent
            lines={["Latency-tuned execution", "Multi-device continuity", "Risk-aware tooling"]}
            className="mt-3 text-sm font-semibold text-white"
            caretClassName="ml-1 text-white"
          />
          <p className="mt-5 max-w-3xl text-sm text-[#cde5e8] sm:text-base">One secure environment for charting, order routing, watchlists, and risk control.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://user.alstrades.com/login" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0f2a2e]">Launch Platform</Link>
            <Link href="https://user.alstrades.com/signup" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white">Open Account</Link>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6">
        <div className="space-y-4">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.article
                key={tool.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={[
                  "grid items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 md:grid-cols-[auto_1fr_auto]",
                  idx % 2 === 0 ? "md:text-left" : "md:text-right",
                ].join(" ")}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--hover-bg)] text-[var(--primary)]"><Icon size={18} /></div>
                <div className={idx % 2 === 0 ? "" : "md:order-3"}>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">{tool.title}</h3>
                  <p className="mt-2 text-[var(--text-muted)]">{tool.text}</p>
                </div>
                <div className={["h-1.5 rounded-full bg-[var(--hover-bg)] md:w-28", idx % 2 === 0 ? "md:order-3" : "md:order-2"].join(" ")}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="h-1.5 rounded-full bg-[linear-gradient(90deg,var(--secondary),var(--primary))]" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6">
        <motion.div {...fadeIn} className="grid gap-4 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 md:grid-cols-3">
          {[
            ["Uptime", "99.95%"],
            ["Avg Response", "<55ms"],
            ["Order Types", "9 Advanced"],
          ].map((item, idx) => (
            <motion.div key={item[0]} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.06 }} viewport={{ once: true }} className="rounded-2xl bg-[var(--hover-bg)] p-5 text-center">
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">{item[0]}</p>
              <p className="mt-2 text-3xl font-black text-[var(--foreground)]">{item[1]}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export function TradingConditionPageView() {
  return (
    <main className="bg-[var(--background)]">
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative isolate overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 sm:p-10">
          <HeroBackdrop sources={PAGE_HERO_SLIDES.tradingConditions} alt="Risk and control tools" />
          <SectionHeader
            eyebrow="Trading Conditions"
            title="Transparent parameters that preserve strategy discipline"
            description="Understand pricing behavior, leverage profile, and execution model before your order reaches market."
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pricing Start", "From 0.0"],
              ["Execution Model", "STP/ECN"],
              ["Cost Model", "Pre-trade visible"],
              ["Leverage", "Adaptive profile"],
            ].map((m) => (
              <div key={m[0]} className="rounded-xl border border-[var(--card-border)] p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">{m[0]}</p>
                <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{m[1]}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6">
        <motion.div {...fadeIn} className="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]">
          <div className="grid grid-cols-4 gap-2 border-b border-[var(--card-border)] bg-[var(--hover-bg)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <span>Instrument</span>
            <span>Pricing</span>
            <span>Cost Model</span>
            <span>Execution</span>
          </div>
          {[
            ["EUR/USD", "From 0.0", "By tier", "Fast STP/ECN"],
            ["XAU/USD", "Competitive", "Transparent", "Depth-aware"],
            ["US30", "Tight benchmark", "Included/explicit", "Low latency"],
          ].map((row, idx) => (
            <motion.div key={row[0]} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.35, delay: idx * 0.08 }} viewport={{ once: true }} className="grid grid-cols-4 gap-2 border-b border-[var(--card-border)] px-4 py-4 text-sm last:border-b-0">
              <span className="font-semibold text-[var(--foreground)]">{row[0]}</span>
              <span className="text-[var(--text-muted)]">{row[1]}</span>
              <span className="text-[var(--text-muted)]">{row[2]}</span>
              <span className="text-[var(--text-muted)]">{row[3]}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6">
        <motion.div {...fadeIn} className="rounded-2xl border border-[var(--card-border)] bg-[linear-gradient(120deg,color-mix(in_srgb,var(--secondary)_15%,var(--card-bg)),color-mix(in_srgb,var(--primary)_12%,var(--card-bg)))] p-7">
          <h3 className="text-2xl font-bold text-[var(--foreground)]">Condition governance you can audit</h3>
          <p className="mt-3 max-w-3xl text-[var(--text-muted)]">All major cost and execution controls are visible before and after trading.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="https://user.alstrades.com/signup" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-5 py-3 text-sm font-semibold text-[var(--card-bg)]">Open Account</Link>
            <Link href="/contact" className="rounded-xl border border-[var(--card-border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)]">Contact Desk</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export function TradingMarketTimePageView() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 py-14 sm:px-6">
        <HeroBackdrop sources={PAGE_HERO_SLIDES.tradingMarketTime} alt="Market news and session timing" priority />
        <motion.div {...fadeIn} className="mb-8">
          <SectionHeader
            eyebrow="Market Time"
            title="Session intelligence for disciplined timing"
            description="Plan entries and exits around liquidity windows and overlap momentum."
          />
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Asia Session", time: "00:00-09:00 UTC", focus: "JPY, AUD, NZD" },
            { name: "London Session", time: "08:00-17:00 UTC", focus: "EUR, GBP" },
            { name: "New York Session", time: "13:00-22:00 UTC", focus: "USD, Gold, Indices" },
          ].map((s) => (
            <motion.article key={s.name} {...fadeIn} className="relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
              <div className="absolute right-3 top-3 rounded-full bg-[var(--hover-bg)] p-2 text-[var(--primary)]"><Clock3 size={14} /></div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">{s.name}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{s.time}</p>
              <p className="mt-4 text-sm font-medium text-[var(--foreground)]">Active Focus: {s.focus}</p>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6">
        <motion.div {...fadeIn} className="rounded-2xl border border-[var(--card-border)] bg-[linear-gradient(130deg,color-mix(in_srgb,var(--primary)_13%,var(--card-bg)),color-mix(in_srgb,var(--secondary)_13%,var(--card-bg)))] p-6">
          <h3 className="text-2xl font-bold text-[var(--foreground)]">Timing Checklist</h3>
          <div className="mt-5 space-y-3">
            {["Mark session start/end", "Overlay high-impact events", "Set valid entry window", "Define max cost threshold"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-sm">
                <Check size={16} className="text-[var(--primary)]" />
                <span className="text-[var(--foreground)]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export function TradingDepositWithdrawalPageView() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 py-14 sm:px-6">
        <HeroBackdrop sources={PAGE_HERO_SLIDES.tradingPayments} alt="Funding and withdrawal workflow" priority />
        <motion.div {...fadeIn} className="mb-8">
          <SectionHeader
            eyebrow="Deposit & Withdrawal"
            title="Secure capital movement with transparent processing"
            description="Funding workflows are built with verification discipline, status visibility, and dependable settlement operations."
          />
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }} className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
            <h3 className="text-xl font-bold text-[var(--foreground)]">Funding Methods</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["Bank Wire", "Card Transfer", "Regional Rails", "Internal Transfer"].map((m) => (
                <div key={m} className="rounded-xl bg-[var(--hover-bg)] p-4"><p className="text-sm font-semibold text-[var(--foreground)]">{m}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }} className="rounded-2xl border border-[var(--card-border)] bg-[linear-gradient(150deg,color-mix(in_srgb,var(--primary)_16%,var(--card-bg)),color-mix(in_srgb,var(--secondary)_14%,var(--card-bg)))] p-6">
            <h3 className="text-xl font-bold text-[var(--foreground)]">Withdrawal Governance</h3>
            <div className="mt-4 space-y-3">
              {["Beneficiary verification", "Ownership compliance checks", "Request-status tracking", "Finance desk monitoring"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-sm">
                  <Wallet size={15} className="text-[var(--primary)]" />
                  <span className="text-[var(--foreground)]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6">
        <motion.div {...fadeIn} className="rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Processing Timeline</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["Submit", "Verify", "Approve", "Process", "Settle"].map((step, idx) => (
              <motion.div key={step} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.06 }} viewport={{ once: true }} className="rounded-xl border border-[var(--card-border)] bg-[var(--background)] p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Stage {idx + 1}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export function AboutPageView() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative isolate mx-auto grid w-full max-w-7xl gap-8 overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_72%,transparent)] px-4 py-14 shadow-[0_24px_48px_-34px_var(--shadow-color)] sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <HeroBackdrop sources={PAGE_HERO_SLIDES.about} alt="Team collaboration meeting" priority />
        <motion.div {...fadeIn} className="glass relative rounded-3xl p-6 shadow-[0_22px_40px_-30px_var(--shadow-color)]">
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">Company Snapshot</p>
          <div className="mt-4 space-y-3 text-sm">
            <p className="text-[var(--text-muted)]">Model: <span className="font-semibold text-[var(--foreground)]">Execution-led brokerage</span></p>
            <p className="text-[var(--text-muted)]">Focus: <span className="font-semibold text-[var(--foreground)]">Trust, reliability, transparency</span></p>
            <p className="text-[var(--text-muted)]">Core Promise: <span className="font-semibold text-[var(--foreground)]">Operational confidence</span></p>
          </div>
        </motion.div>
        <motion.div {...fadeIn} className="glass relative rounded-3xl p-6 shadow-[0_22px_40px_-30px_var(--shadow-color)] sm:p-8">
          <SectionHeader
            eyebrow="About ALS Trades"
            title="A broker built for disciplined traders and long-term confidence"
            description="ALS Trades combines performance infrastructure with governance-focused operations to support stable execution outcomes."
          />
        </motion.div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6">
        <motion.div {...fadeIn} className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Landmark, title: "Integrity", text: "Transparent policies and clear communication standards." },
            { icon: Shield, title: "Reliability", text: "Resilient systems for stable market participation." },
            { icon: BadgeCheck, title: "Partnership", text: "Service model aligned with client growth and retention." },
          ].map((v) => {
            const Icon = v.icon;
            return (
              <article key={v.title} className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--hover-bg)] text-[var(--primary)]"><Icon size={18} /></div>
                <h3 className="mt-4 text-xl font-bold text-[var(--foreground)]">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{v.text}</p>
              </article>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}

export function WhyChooseUsPageView() {
  const bento = [
    { title: "Execution Speed", text: "Low-latency routing for active decisions.", span: "md:col-span-2" },
    { title: "Transparent Pricing", text: "Cost logic visible before order dispatch.", span: "" },
    { title: "Risk Controls", text: "Protection layers for margin and exposure.", span: "" },
    { title: "Support Quality", text: "Specialist desks with rapid escalation.", span: "md:col-span-2" },
  ];

  return (
    <main className="bg-[var(--background)]">
      <section className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 py-14 sm:px-6">
        <HeroBackdrop sources={PAGE_HERO_SLIDES.whyChooseUs} alt="Premium city lifestyle" priority />
        <motion.div {...fadeIn} className="mb-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Practical advantages that build durable trust"
            description="We focus on measurable delivery: execution reliability, operational clarity, and accountability."
          />
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          {bento.map((item) => (
            <motion.article key={item.title} {...fadeIn} className={`${item.span} rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6`}>
              <h3 className="text-xl font-bold text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-2 text-[var(--text-muted)]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ReviewsPageView() {
  const reviews = [
    { name: "Aman Verma", role: "Intraday Trader", quote: "Execution stays consistent during fast overlap sessions." },
    { name: "Sara Khan", role: "Portfolio Manager", quote: "Funding operations are clear and support is professional." },
    { name: "Dev Patel", role: "Systematic Trader", quote: "Alerts, execution, and reporting work as one ecosystem." },
  ];

  return (
    <main className="bg-[var(--background)]">
      <section className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 py-14 sm:px-6">
        <HeroBackdrop sources={PAGE_HERO_SLIDES.reviews} alt="People sitting together" priority />
        <motion.div {...fadeIn} className="mb-8">
          <SectionHeader
            eyebrow="Client Reviews"
            title="What traders value most about ALS Trades"
            description="Client feedback centers on execution reliability and service accountability."
          />
        </motion.div>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {reviews.map((item) => (
            <motion.article key={item.name} {...fadeIn} className="mb-4 break-inside-avoid rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
              <p className="text-sm leading-relaxed text-[var(--foreground)]">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">{item.name}</p>
              <p className="text-xs text-[var(--text-muted)]">{item.role}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function RegulationPageView() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 py-14 sm:px-6">
        <HeroBackdrop sources={PAGE_HERO_SLIDES.regulation} alt="Security and compliance" priority />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8">
          <SectionHeader
            eyebrow="Regulation"
            title="Compliance discipline designed to protect client trust"
            description="Client fund integrity, governance, and oversight are embedded across core workflows."
          />
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...fadeIn} className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
            <h3 className="text-2xl font-bold text-[var(--foreground)]">Governance Lifecycle</h3>
            <div className="mt-5 space-y-3">
              {["Policy Definition", "Control Deployment", "Ongoing Monitoring", "Periodic Review", "Incident Escalation"].map((step, idx) => (
                <div key={step} className="flex items-center gap-3 rounded-xl border border-[var(--card-border)] px-4 py-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--hover-bg)] text-xs font-semibold text-[var(--primary)]">{idx + 1}</span>
                  <span className="text-sm font-medium text-[var(--foreground)]">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Shield, title: "Client Fund Segregation" },
              { icon: Building2, title: "Policy-driven Operations" },
              { icon: CalendarDays, title: "Periodic Controls Review" },
              { icon: BadgeCheck, title: "Audit-ready Documentation" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} initial={{ opacity: 0, rotate: -1, y: 18 }} whileInView={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.06 }} viewport={{ once: true }} className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
                  <Icon size={18} className="text-[var(--primary)]" />
                  <h3 className="mt-3 text-base font-bold text-[var(--foreground)]">{item.title}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export function ContactPageView() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const createInquiryMutation = useCreateInquiry();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const payload = {
      name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      title: topic.trim(),
      description: message.trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.title || !payload.description) {
      setFormError("Please fill all required fields.");
      return;
    }

    try {
      await createInquiryMutation.mutateAsync(payload);
      setFullName("");
      setEmail("");
      setPhone("");
      setTopic("General Inquiry");
      setMessage("");
    } catch {
      // Error message is handled from mutation state below.
    }
  };

  return (
    <main className="relative overflow-hidden bg-[var(--background)]">
      <div className="pointer-events-none absolute inset-0">
        <HeroImageSlider images={PAGE_HERO_SLIDES.contact} alt="" priority imageClassName="object-cover opacity-16" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--background)_92%,transparent)_0%,color-mix(in_srgb,var(--background)_76%,transparent)_50%,color-mix(in_srgb,var(--background)_32%,transparent)_100%)]" />
        <div className="aurora absolute -left-24 -top-16 h-[360px] w-[360px] rounded-full bg-[color-mix(in_srgb,var(--highlight)_30%,transparent)] blur-3xl" />
        <div className="aurora absolute -right-24 top-40 h-[360px] w-[360px] rounded-full bg-[color-mix(in_srgb,var(--secondary)_26%,transparent)] blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <motion.div {...fadeIn} className="mb-9 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">Contact ALS Trades</p>
          <h1 className="mt-3 text-4xl font-black text-[var(--foreground)] sm:text-5xl">Talk to a real specialist, not a generic support queue.</h1>
          <TypewriterAccent
            lines={["Direct desk routing", "Response clarity", "Specialist support"]}
            className="mt-3 text-sm font-semibold"
          />
          <p className="mt-4 text-[var(--text-muted)]">
            Send your request and our team routes it directly to the relevant desk for faster and clearer resolution.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Mail, title: "Email", value: "support@ALS Trades.com" },
            { icon: Phone, title: "Phone", value: "+1 (312) 555-0148" },
            { icon: MapPin, title: "Office", value: "Chicago, Illinois, USA" },
            { icon: Headphones, title: "Support Hours", value: "24/5 Active Desk" },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-[0_14px_28px_-24px_var(--shadow-color)]"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--hover-bg)] text-[var(--primary)]">
                  <Icon size={16} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{card.value}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_90%,transparent)] p-6 shadow-[0_24px_40px_-30px_var(--shadow-color)] sm:p-8"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-bold text-[var(--foreground)]">Send us your query</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Please share your details and requirement. We usually respond within one business day.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[var(--foreground)]">
                Full Name
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                  placeholder="Enter your name"
                />
              </label>
              <label className="grid gap-2 text-sm text-[var(--foreground)]">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm text-[var(--foreground)]">
                Phone
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                  placeholder="+1"
                />
              </label>
              <label className="grid gap-2 text-sm text-[var(--foreground)]">
                Topic
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                >
                  <option>General Inquiry</option>
                  <option>Account Opening</option>
                  <option>Platform Support</option>
                  <option>Deposit & Withdrawal</option>
                  <option>Compliance Query</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-[var(--foreground)] sm:col-span-2">
                Message
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 outline-none focus:border-[var(--primary)]"
                  placeholder="Describe your requirement in detail"
                />
              </label>
            </div>

            {formError ? <p className="mt-4 text-sm text-red-500">{formError}</p> : null}
            {createInquiryMutation.isSuccess ? (
              <p className="mt-4 text-sm text-[var(--success)]">Inquiry submitted successfully.</p>
            ) : null}
            {createInquiryMutation.isError ? (
              <p className="mt-4 text-sm text-red-500">
                {createInquiryMutation.error instanceof Error ? createInquiryMutation.error.message : "Failed to submit inquiry."}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={createInquiryMutation.isPending}
              className="mt-6 rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-6 py-3 text-sm font-semibold text-[var(--card-bg)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {createInquiryMutation.isPending ? "Submitting..." : "Submit Request"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
              <h4 className="text-lg font-bold text-[var(--foreground)]">How We Respond</h4>
              <div className="mt-4 space-y-3">
                {[
                  "Your request is triaged to the correct desk within minutes.",
                  "Priority and account-impacting queries are escalated faster.",
                  "You receive clear next steps instead of generic replies.",
                  "Complex cases get direct specialist follow-up.",
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-2 rounded-xl bg-[var(--hover-bg)] px-3 py-2 text-sm text-[var(--foreground)]">
                    <MessageSquareText size={14} className="mt-0.5 shrink-0 text-[var(--primary)]" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-[var(--card-border)] bg-[linear-gradient(130deg,color-mix(in_srgb,var(--secondary)_16%,var(--card-bg)),color-mix(in_srgb,var(--primary)_14%,var(--card-bg)))] p-5">
              <h4 className="text-lg font-bold text-[var(--foreground)]">Expected Reply Window</h4>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Standard queries: same business day. Account-critical or trading-critical issues: priority response path.
              </p>
            </article>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
