import Link from "next/link";
import HeroImageSlider from "./hero/HeroImageSlider";
import TypewriterAccent from "./hero/TypewriterAccent";

const SIMPLE_SLIDES = [
  "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
];

const SIMPLE_ACCENTS: Record<string, string[]> = {
  Accounts: ["Match your strategy", "Risk-aware tiers", "Institutional-ready access"],
  Partners: ["Grow referrals", "Tiered rewards", "Dedicated support"],
  Login: ["Secure access", "Fast session", "Account continuity"],
  "Open Account": ["Start in minutes", "Verified onboarding", "Funding ready"],
};

type SimplePageProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function SimplePage({
  title,
  description,
  primaryLabel,
  primaryHref,
  imageSrc,
  imageAlt,
}: SimplePageProps) {
  const isExternal = primaryHref.startsWith("http://") || primaryHref.startsWith("https://");
  const accentLines = SIMPLE_ACCENTS[title] ?? ["Secure onboarding", "Fast activation", "Support-led setup"];
  const sliderImages = imageSrc ? [imageSrc, ...SIMPLE_SLIDES] : SIMPLE_SLIDES;
  const uniqueSlides = sliderImages.filter((src, idx) => sliderImages.indexOf(src) === idx);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-5xl items-center px-4 py-12 sm:px-6">
      <section className="grid w-full gap-6 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_40px_-28px_var(--shadow-color)] sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <div className="flex flex-col">
          <p className="inline-flex w-fit rounded-full bg-[var(--hover-bg)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
            ALS Trades
          </p>
          <h1 className="mt-4 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">{title}</h1>
          <TypewriterAccent lines={accentLines} className="mt-3 text-sm font-semibold" />
          <p className="mt-4 max-w-2xl text-[var(--text-muted)]">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="rounded-lg bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-5 py-2.5 text-sm font-semibold text-[var(--card-bg)]"
            >
              {primaryLabel}
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-[var(--card-border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--hover-bg)]"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--hover-bg)] shadow-[0_18px_30px_-26px_var(--shadow-color)]">
          <HeroImageSlider
            images={uniqueSlides}
            alt={imageAlt ?? ""}
            imageClassName="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--card-bg)_90%,transparent)_0%,transparent_65%)]" />
        </div>
      </section>
    </main>
  );
}
