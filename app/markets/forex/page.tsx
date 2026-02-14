import type { Metadata } from "next";
import MarketShowcase from "../../components/markets/MarketShowcase";
import PageStructuredData from "../../components/seo/PageStructuredData";
import { buildPageMetadata } from "../../lib/seo";

const PAGE_SEO = {
  title: "Forex Market Trading | ALS Trades",
  description:
    "Trade the forex market with ALS Trades across major and minor currency pairs, low-latency execution and transparent pricing tools.",
  path: "/markets/forex",
  pageKeywords: [
    "forex market",
    "forex market trading",
    "trade forex pairs",
    "eur usd trading",
    "gbp usd trading",
    "usd jpy trading",
    "best forex trading platform",
    "online forex broker",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Page() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <MarketShowcase
        variant="forex"
        badge="Forex Liquidity Hub"
        title="Master Global FX Flow With Institutional Execution"
        subtitle="Trade 45+ currency pairs with competitive pricing and reliable low-latency routing."
        intro="FX never truly sleeps. ALS Trades connects your strategy to deep liquidity venues so you can execute across London, New York, and Asia with consistent speed, cleaner fills, and stronger control in fast sessions."
        heroImageSrc="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2400&q=80"
        heroImageAlt="Fan of US dollar banknotes"
        symbolsTitle="Active Forex Universe"
        symbols={[
          { symbol: "EUR/USD", name: "Euro vs US Dollar", note: "Most liquid major pair" },
          { symbol: "GBP/USD", name: "British Pound vs US Dollar", note: "Volatility-rich trend pair" },
          { symbol: "USD/JPY", name: "US Dollar vs Japanese Yen", note: "Macro-sensitive benchmark" },
          { symbol: "AUD/USD", name: "Australian Dollar vs US Dollar", note: "Commodity cycle proxy" },
          { symbol: "USD/CAD", name: "US Dollar vs Canadian Dollar", note: "Energy-linked setup" },
          { symbol: "EUR/JPY", name: "Euro vs Japanese Yen", note: "Cross pair momentum favorite" },
        ]}
        whatIsTitle="What Are Forex Currency Pairs?"
        whatIsCode="FCP"
        whatIsDescription="Forex instruments are quoted in pairs, where one currency is priced against another. This relative valuation lets traders express macro, policy, and sentiment views while managing exposure with both directional and hedging strategies."
        featureTitle="Core advantages for FX traders"
        features={[
          "Trade long and short with tactical flexibility",
          "Operate 24 hours a day, 5 trading days each week",
          "Manage currency exposure across global portfolios",
          "Access carry opportunities from rate differentials",
        ]}
        pulseTitle="FX Market Pulse Built For Precision"
        pulseSubtitle="Monitor critical benchmarks quickly and keep execution decisions aligned with real market structure."
        metrics={[
          { label: "Tradable Pairs", value: "45+", detail: "Major, minor, and selected cross pairs" },
          { label: "Sessions", value: "3", detail: "Asia, London, New York market cycle" },
          { label: "Trading Window", value: "24/5", detail: "Continuous weekday currency access" },
          { label: "Order Routing", value: "Tier-1", detail: "Institutional liquidity stream" },
        ]}
        edgeTitle="Execution Edge For Serious Currency Traders"
        edgeCards={[
          {
            title: "Session-Aware Depth",
            description: "Route orders where liquidity is strongest during each regional trading window.",
          },
          {
            title: "Pricing Stability Logic",
            description: "Pricing architecture tuned to stay competitive through normal volatility.",
          },
          {
            title: "Fast Risk Reaction",
            description: "Manage stops, exposure, and scaling quickly when market momentum changes.",
          },
        ]}
        journeyTitle="From Setup To Execution In Four FX Steps"
        journeySteps={[
          { title: "Create Profile", description: "Open your account and define your base currency." },
          { title: "Fund Wallet", description: "Add capital and configure your preferred risk profile." },
          { title: "Select Pair", description: "Choose majors, minors, or crosses based on your setup." },
          { title: "Execute & Manage", description: "Enter, monitor, and optimize positions in real time." },
        ]}
      />
    </>
  );
}
