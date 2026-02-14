import type { Metadata } from "next";
import Link from "next/link";
import HeroImageSlider from "../components/hero/HeroImageSlider";
import TypewriterAccent from "../components/hero/TypewriterAccent";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildPageMetadata } from "../lib/seo";

const PAGE_SEO = {
  title: "Economic Calendar | ALS Trades",
  description: "Track live macroeconomic events with a real-time calendar view designed for active traders.",
  path: "/economic-calendar",
  pageKeywords: [
    "economic calendar",
    "live economic calendar",
    "economic events calendar",
    "forex news calendar",
    "macroeconomic releases",
    "trading event calendar",
    "interest rate decisions",
    "inflation data releases",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

const CALENDAR_SLIDES = [
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=2400&q=80",
];

export default function EconomicCalendarPage() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />

      <main className="relative bg-[var(--background)]">
        <div className="pointer-events-none absolute inset-0">
          <HeroImageSlider images={CALENDAR_SLIDES} alt="" imageClassName="object-cover opacity-18" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(30,99,181,0.12),transparent_32%),radial-gradient(circle_at_82%_30%,rgba(15,40,70,0.14),transparent_38%),linear-gradient(180deg,color-mix(in_srgb,var(--background)_95%,transparent),color-mix(in_srgb,var(--card-bg)_82%,transparent))]" />
        </div>

        <section className="relative w-full px-3 py-10 sm:px-5 lg:px-6">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="rounded-3xl border border-[color-mix(in_srgb,var(--card-border)_85%,transparent)] bg-[color-mix(in_srgb,var(--card-bg)_94%,transparent)] p-4 shadow-[0_28px_64px_-40px_var(--shadow-color)] backdrop-blur lg:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">Market Pulse</p>
                  <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">Live Economic Calendar</h1>
                  <TypewriterAccent
                    lines={["Macro releases live", "Timezone-aligned events", "Impact-first scanning"]}
                    className="mt-3 text-sm font-semibold"
                  />
                  <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
                    Track macro releases, forecasts, and revisions in real time. Times auto-adjust to your selected timezone.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-[var(--foreground)]">
                    <span className="rounded-full bg-[var(--hover-bg)] px-3 py-1">Timezone: GMT+5:30</span>
                    <span className="rounded-full bg-[var(--hover-bg)] px-3 py-1">View: Weekly</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[650px_minmax(0,1fr)] lg:items-start">
                <div className="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_20px_46px_-34px_var(--shadow-color)]">
                  <iframe
                    title="Economic Calendar"
                    src="https://sslecal2.investing.com?ecoDayBackground=%2393a6e6&columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=23&lang=1"
                    width="650"
                    height="720"
                    frameBorder="0"
                    allowTransparency
                    loading="lazy"
                    className="min-h-[540px] w-full"
                  />
                </div>

                <aside className="rounded-2xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_92%,white)] p-5 shadow-[0_16px_40px_-32px_var(--shadow-color)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">Quick Guide</p>
                  <h2 className="mt-2 text-lg font-bold text-[var(--foreground)]">Read events faster</h2>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Use importance and currency focus to prioritize the releases that usually move volatility.
                  </p>

                  <div className="mt-5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">Importance legend</p>
                    <div className="mt-3 grid gap-2 text-sm text-[var(--text-muted)]">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text-muted)_55%,var(--card-bg))]" />
                        Low impact
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--secondary)_60%,var(--card-bg))]" />
                        Medium impact
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--highlight)_80%,var(--card-bg))]" />
                        High impact
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">Tips</p>
                    <div className="mt-3 grid gap-2 text-sm text-[var(--text-muted)]">
                      <p>Use the timezone selector inside the calendar for session alignment.</p>
                      <p>Adjust the date range to scan week-by-week releases.</p>
                      <p>Watch forecast vs actual for quick direction context.</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)]"
                    >
                      Ask Support
                    </Link>
                  </div>
                </aside>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                <span>Last refresh: live via widget.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
