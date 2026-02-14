"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import HeroImageSlider from "../hero/HeroImageSlider";
import TypewriterAccent from "../hero/TypewriterAccent";

type MarketVariant = "forex" | "crypto" | "indexes" | "metal";

type MarketSymbol = {
  symbol: string;
  name: string;
  note: string;
};

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type EdgeCard = {
  title: string;
  description: string;
};

type JourneyStep = {
  title: string;
  description: string;
};

type MarketShowcaseProps = {
  variant: MarketVariant;
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  whatIsTitle: string;
  whatIsCode: string;
  whatIsDescription: string;
  featureTitle: string;
  features: string[];
  symbolsTitle: string;
  symbols: MarketSymbol[];
  pulseTitle: string;
  pulseSubtitle: string;
  metrics: Metric[];
  edgeTitle: string;
  edgeCards: EdgeCard[];
  journeyTitle: string;
  journeySteps: JourneyStep[];
};

const variantUI: Record<
  MarketVariant,
  {
    heroGrid: string;
    auroraA: string;
    auroraB: string;
    heroPanel: string;
    symbolsPanel: string;
    sectionPanel: string;
    pulsePanel: string;
    edgePanel: string;
    journeyPanel: string;
    metricCard: string;
    edgeCard: string;
    stepCard: string;
  }
> = {
  forex: {
    heroGrid: "lg:grid-cols-[1.1fr_1fr]",
    auroraA: "bg-[color-mix(in_srgb,var(--highlight)_25%,transparent)]",
    auroraB: "bg-[color-mix(in_srgb,var(--secondary)_25%,transparent)]",
    heroPanel: "",
    symbolsPanel: "rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)]",
    sectionPanel: "rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)]",
    pulsePanel: "rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)]",
    edgePanel: "rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)]",
    journeyPanel:
      "rounded-3xl border border-[var(--card-border)] bg-[linear-gradient(130deg,color-mix(in_srgb,var(--secondary)_14%,var(--card-bg)),color-mix(in_srgb,var(--primary)_10%,var(--card-bg)))]",
    metricCard: "rounded-2xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_84%,var(--hover-bg))]",
    edgeCard: "rounded-2xl border border-[var(--card-border)] bg-[var(--hover-bg)]",
    stepCard: "rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]",
  },
  crypto: {
    heroGrid: "lg:grid-cols-[1fr_1.1fr]",
    auroraA: "bg-[color-mix(in_srgb,var(--secondary)_30%,transparent)]",
    auroraB: "bg-[color-mix(in_srgb,var(--accent)_28%,transparent)]",
    heroPanel: "rounded-3xl border border-[color-mix(in_srgb,var(--accent)_35%,var(--card-border))] bg-[color-mix(in_srgb,var(--card-bg)_72%,transparent)] p-5 sm:p-7",
    symbolsPanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--secondary)_35%,var(--card-border))] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--secondary)_8%,var(--card-bg)),var(--card-bg))]",
    sectionPanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--accent)_35%,var(--card-border))] bg-[linear-gradient(160deg,color-mix(in_srgb,var(--accent)_7%,var(--card-bg)),var(--card-bg))]",
    pulsePanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--secondary)_35%,var(--card-border))] bg-[linear-gradient(150deg,color-mix(in_srgb,var(--secondary)_7%,var(--card-bg)),var(--card-bg))]",
    edgePanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--highlight)_35%,var(--card-border))] bg-[linear-gradient(160deg,color-mix(in_srgb,var(--highlight)_8%,var(--card-bg)),var(--card-bg))]",
    journeyPanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--accent)_35%,var(--card-border))] bg-[linear-gradient(130deg,color-mix(in_srgb,var(--secondary)_18%,var(--card-bg)),color-mix(in_srgb,var(--highlight)_12%,var(--card-bg)))]",
    metricCard:
      "rounded-2xl border border-[color-mix(in_srgb,var(--secondary)_28%,var(--card-border))] bg-[color-mix(in_srgb,var(--card-bg)_72%,var(--hover-bg))]",
    edgeCard:
      "rounded-2xl border border-[color-mix(in_srgb,var(--highlight)_30%,var(--card-border))] bg-[color-mix(in_srgb,var(--hover-bg)_65%,var(--card-bg))]",
    stepCard: "rounded-2xl border border-[color-mix(in_srgb,var(--accent)_30%,var(--card-border))] bg-[var(--card-bg)]",
  },
  indexes: {
    heroGrid: "lg:grid-cols-[1.25fr_0.95fr]",
    auroraA: "bg-[color-mix(in_srgb,var(--primary)_18%,transparent)]",
    auroraB: "bg-[color-mix(in_srgb,var(--secondary)_20%,transparent)]",
    heroPanel: "",
    symbolsPanel: "rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]",
    sectionPanel: "rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]",
    pulsePanel: "rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]",
    edgePanel: "rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]",
    journeyPanel:
      "rounded-2xl border border-[var(--card-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary)_10%,var(--card-bg)),color-mix(in_srgb,var(--secondary)_8%,var(--card-bg)))]",
    metricCard: "rounded-xl border border-[var(--card-border)] bg-[var(--hover-bg)]",
    edgeCard: "rounded-xl border border-[var(--card-border)] bg-[var(--hover-bg)]",
    stepCard: "rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]",
  },
  metal: {
    heroGrid: "lg:grid-cols-[1fr_1fr]",
    auroraA: "bg-[color-mix(in_srgb,var(--primary)_24%,transparent)]",
    auroraB: "bg-[color-mix(in_srgb,var(--highlight)_24%,transparent)]",
    heroPanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--primary)_28%,var(--card-border))] bg-[linear-gradient(140deg,color-mix(in_srgb,var(--primary)_9%,var(--card-bg)),var(--card-bg))] p-5 sm:p-7",
    symbolsPanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--primary)_30%,var(--card-border))] bg-[linear-gradient(150deg,color-mix(in_srgb,var(--primary)_8%,var(--card-bg)),var(--card-bg))]",
    sectionPanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--primary)_30%,var(--card-border))] bg-[linear-gradient(165deg,color-mix(in_srgb,var(--highlight)_8%,var(--card-bg)),var(--card-bg))]",
    pulsePanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--primary)_28%,var(--card-border))] bg-[linear-gradient(165deg,color-mix(in_srgb,var(--primary)_8%,var(--card-bg)),var(--card-bg))]",
    edgePanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--primary)_30%,var(--card-border))] bg-[linear-gradient(165deg,color-mix(in_srgb,var(--highlight)_8%,var(--card-bg)),var(--card-bg))]",
    journeyPanel:
      "rounded-[2rem] border border-[color-mix(in_srgb,var(--primary)_30%,var(--card-border))] bg-[linear-gradient(125deg,color-mix(in_srgb,var(--primary)_20%,var(--card-bg)),color-mix(in_srgb,var(--highlight)_15%,var(--card-bg)))]",
    metricCard: "rounded-2xl border border-[color-mix(in_srgb,var(--primary)_26%,var(--card-border))] bg-[color-mix(in_srgb,var(--hover-bg)_60%,var(--card-bg))]",
    edgeCard: "rounded-2xl border border-[color-mix(in_srgb,var(--primary)_26%,var(--card-border))] bg-[color-mix(in_srgb,var(--hover-bg)_72%,var(--card-bg))]",
    stepCard: "rounded-2xl border border-[color-mix(in_srgb,var(--primary)_26%,var(--card-border))] bg-[var(--card-bg)]",
  },
};

const MARKET_SLIDES: Record<MarketVariant, string[]> = {
  forex: [
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80",
  ],
  crypto: [
    "https://images.unsplash.com/photo-1518544887873-2e7e72d20029?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=2400&q=80",
  ],
  indexes: [
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80",
  ],
  metal: [
    "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1549421263-5ec394a12578?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80",
  ],
};

const MARKET_ACCENTS: Record<MarketVariant, string[]> = {
  forex: ["Liquidity-aligned entries", "Session-ready setups", "Precision risk control"],
  crypto: ["24/7 market pulse", "Volatility-aware execution", "Secure custody flow"],
  indexes: ["Macro-driven structure", "Benchmark precision", "Institutional timing"],
  metal: ["Safe-haven depth", "Cost-aware routing", "Stability-first execution"],
};

export default function MarketShowcase(props: MarketShowcaseProps) {
  const {
    variant,
    badge,
    title,
    subtitle,
    intro,
    heroImageSrc,
    heroImageAlt,
    whatIsTitle,
    whatIsCode,
    whatIsDescription,
    featureTitle,
    features,
    symbolsTitle,
    symbols,
    pulseTitle,
    pulseSubtitle,
    metrics,
    edgeTitle,
    edgeCards,
    journeyTitle,
    journeySteps,
  } = props;

  const ui = variantUI[variant];
  const heroSlides = [heroImageSrc, ...MARKET_SLIDES[variant]].filter(Boolean) as string[];
  const uniqueHeroSlides = heroSlides.filter((src, idx) => heroSlides.indexOf(src) === idx);

  return (
    <main className="bg-[var(--background)] pb-14">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <HeroImageSlider
            images={uniqueHeroSlides}
            alt={heroImageAlt ?? ""}
            priority
            imageClassName="object-cover opacity-18"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--background)_92%,transparent)_0%,color-mix(in_srgb,var(--background)_70%,transparent)_52%,color-mix(in_srgb,var(--background)_30%,transparent)_100%)]" />
          <div className={["aurora absolute -left-36 -top-28 h-[320px] w-[320px] rounded-full blur-3xl", ui.auroraA].join(" ")} />
          <div className={["aurora absolute -right-32 top-1/3 h-[320px] w-[320px] rounded-full blur-3xl", ui.auroraB].join(" ")} />
        </div>

        <div className={["relative mx-auto grid w-full max-w-7xl gap-6 px-3 pb-10 pt-10 min-[380px]:px-4 sm:px-6 lg:items-center", ui.heroGrid].join(" ")}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className={ui.heroPanel}
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--hover-bg)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--primary)] min-[380px]:px-4 min-[380px]:text-xs">
              <Sparkles size={13} /> {badge}
            </p>

            <h1 className="mt-4 text-[clamp(2.1rem,8.4vw,4.35rem)] font-black leading-[1.03] text-[var(--foreground)]">{title}</h1>
            <TypewriterAccent lines={MARKET_ACCENTS[variant]} className="mt-3 text-sm font-semibold" />
            <p className="mt-3 text-base font-medium text-[var(--foreground)]/90 min-[380px]:text-lg">{subtitle}</p>
            <p className="mt-4 max-w-2xl text-sm text-[var(--text-muted)] min-[380px]:text-base">{intro}</p>

            <div className="mt-7 flex flex-wrap gap-2.5 min-[380px]:gap-3">
              <Link
                href="https://user.alstrades.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-4 py-2.5 text-xs font-semibold text-[var(--card-bg)] min-[380px]:px-5 min-[380px]:text-sm"
              >
                Open Account <ArrowRight size={14} />
              </Link>
              <Link
                href="https://user.alstrades.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] px-4 py-2.5 text-xs font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)] min-[380px]:px-5 min-[380px]:text-sm"
              >
                Trade Now <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className={[ui.symbolsPanel, "p-4 shadow-[0_20px_40px_-30px_var(--shadow-color)] min-[380px]:p-5"].join(" ")}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)] min-[380px]:text-sm">{symbolsTitle}</p>
            <div className="mt-3 grid gap-2.5 min-[380px]:mt-4 min-[380px]:gap-3 sm:grid-cols-2">
              {symbols.map((item, idx) => (
                <motion.article
                  key={item.symbol}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_80%,var(--hover-bg))] p-3 min-[380px]:p-4"
                >
                  <p className="text-xs font-semibold text-[var(--primary)] min-[380px]:text-sm">{item.symbol}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--foreground)] min-[380px]:text-base">{item.name}</p>
                  <p className="mt-1 text-[11px] text-[var(--text-muted)] min-[380px]:text-xs">{item.note}</p>
                  <Link
                    href="https://user.alstrades.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--secondary)] hover:text-[var(--primary)] min-[380px]:mt-3 min-[380px]:text-xs"
                  >
                    Trade this market <ArrowRight size={11} />
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-3 py-7 min-[380px]:px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.25 }}
          className={[ui.sectionPanel, "p-5 min-[380px]:p-7 sm:p-9"].join(" ")}
        >
          <div className="flex flex-wrap items-center gap-2.5 min-[380px]:gap-3">
            <h2 className="text-2xl font-bold text-[var(--foreground)] min-[380px]:text-3xl">{whatIsTitle}</h2>
            <span className="rounded-full bg-[var(--hover-bg)] px-3 py-1 text-[11px] font-bold text-[var(--primary)] min-[380px]:text-xs">{whatIsCode}</span>
          </div>
          <p className="mt-4 max-w-4xl text-sm text-[var(--text-muted)] min-[380px]:text-base">{whatIsDescription}</p>

          <h3 className="mt-7 text-base font-semibold text-[var(--foreground)] min-[380px]:mt-8 min-[380px]:text-lg">{featureTitle}</h3>
          <div className="mt-3 grid gap-2.5 min-[380px]:mt-4 min-[380px]:gap-3 md:grid-cols-2">
            {features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--hover-bg)] px-3 py-2.5 text-xs text-[var(--foreground)] min-[380px]:px-4 min-[380px]:py-3 min-[380px]:text-sm"
              >
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--primary)]" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-3 py-7 min-[380px]:px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.25 }}
          className={[ui.pulsePanel, "p-5 min-[380px]:p-7"].join(" ")}
        >
          <h2 className="text-[clamp(1.6rem,5.2vw,2.8rem)] font-bold leading-tight text-[var(--foreground)]">{pulseTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm text-[var(--text-muted)] min-[380px]:text-base">{pulseSubtitle}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, idx) => (
              <motion.article
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={[ui.metricCard, "p-4"].join(" ")}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">{metric.label}</p>
                <p className="mt-2 text-2xl font-black text-[var(--foreground)]">{metric.value}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{metric.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-3 py-7 min-[380px]:px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.25 }}
          className={[ui.edgePanel, "p-5 min-[380px]:p-7"].join(" ")}
        >
          <h2 className="text-[clamp(1.6rem,5vw,2.7rem)] font-bold leading-tight text-[var(--foreground)]">{edgeTitle}</h2>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {edgeCards.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={[ui.edgeCard, "p-4"].join(" ")}
              >
                <p className="text-base font-semibold text-[var(--foreground)]">{card.title}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-3 pt-7 min-[380px]:px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.25 }}
          className={[ui.journeyPanel, "p-5 min-[380px]:p-7"].join(" ")}
        >
          <h2 className="text-[clamp(1.6rem,5vw,2.7rem)] font-bold leading-tight text-[var(--foreground)]">{journeyTitle}</h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {journeySteps.map((step, idx) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={[ui.stepCard, "p-4"].join(" ")}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--primary)]">Step {idx + 1}</p>
                <p className="mt-2 text-base font-semibold text-[var(--foreground)]">{step.title}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{step.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5 min-[380px]:gap-3">
            <Link
              href="https://user.alstrades.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-4 py-2.5 text-xs font-semibold text-[var(--card-bg)] min-[380px]:px-5 min-[380px]:text-sm"
            >
              Open Account <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] px-4 py-2.5 text-xs font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)] min-[380px]:px-5 min-[380px]:text-sm"
            >
              Talk to Specialist <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
