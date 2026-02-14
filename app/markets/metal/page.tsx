import type { Metadata } from "next";
import MarketShowcase from "../../components/markets/MarketShowcase";
import PageStructuredData from "../../components/seo/PageStructuredData";
import { buildPageMetadata } from "../../lib/seo";

const PAGE_SEO = {
  title: "Metal Market Trading | ALS Trades",
  description:
    "Trade metal markets including gold and silver with ALS Trades using transparent pricing and stable execution across volatile sessions.",
  path: "/markets/metal",
  pageKeywords: [
    "metal market",
    "metal market trading",
    "gold market trading",
    "silver market trading",
    "trade xau usd",
    "trade xag usd",
    "precious metals broker",
    "gold and silver cfd trading",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Page() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <MarketShowcase
        variant="metal"
        badge="Precious Metals Desk"
        title="Trade Metals With Defensive Strength And Tactical Speed"
        subtitle="Position in gold and related metals using a transparent execution framework."
        intro="Metal markets remain central for inflation hedging and risk balancing. ALS Trades gives you robust access to precious instruments with efficient fills, clear cost visibility, and platform stability for high-impact moments."
        heroImageSrc="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=2400&q=80"
        heroImageAlt="Gold bar tooling and metal surfaces"
        symbolsTitle="Key Metal Instruments"
        symbols={[
          { symbol: "XAU/USD", name: "Gold vs US Dollar", note: "Global risk and inflation proxy" },
          { symbol: "XAG/USD", name: "Silver vs US Dollar", note: "Monetary plus industrial exposure" },
          { symbol: "XPT/USD", name: "Platinum vs US Dollar", note: "Specialized demand-driven metal" },
          { symbol: "XPD/USD", name: "Palladium vs US Dollar", note: "Automotive cycle-sensitive" },
          { symbol: "XAUEUR", name: "Gold vs Euro", note: "Regional hedge alternative" },
          { symbol: "XAGEUR", name: "Silver vs Euro", note: "Euro-zone commodity view" },
        ]}
        whatIsTitle="What Are Metal Trading Instruments?"
        whatIsCode="MTI"
        whatIsDescription="Metal instruments track the relative pricing of precious commodities against currencies. Traders use these markets for capital protection, inflation positioning, and tactical directional trades during uncertainty cycles."
        featureTitle="Strategic benefits of metal trading"
        features={[
          "Add defensive allocation during uncertainty and risk-off phases",
          "Position around inflation and central-bank policy shifts",
          "Capture momentum in commodity-led cycles",
          "Diversify beyond currencies and equity benchmarks",
        ]}
        pulseTitle="Metal Market Pulse With Clarity"
        pulseSubtitle="Track defensive flows and commodity momentum with signals built for fast execution decisions."
        metrics={[
          { label: "Core Metals", value: "6+", detail: "Gold, silver, and specialty instruments" },
          { label: "Use Cases", value: "Dual", detail: "Hedging and directional opportunities" },
          { label: "Market Drivers", value: "Macro", detail: "Rates, inflation, and global risk sentiment" },
          { label: "Execution Layer", value: "Pro", detail: "Stable routing and order management" },
        ]}
        edgeTitle="ALS Trades Advantage In Metals"
        edgeCards={[
          {
            title: "Defensive Allocation Access",
            description: "Integrate metals into broader portfolio risk-balancing frameworks.",
          },
          {
            title: "High-Impact Event Readiness",
            description: "Stay execution-ready through major policy and inflation releases.",
          },
          {
            title: "Transparent Cost Structure",
            description: "Evaluate setup quality with clearer pricing and execution visibility.",
          },
        ]}
        journeyTitle="Go Live In Metals In Four Steps"
        journeySteps={[
          { title: "Register Profile", description: "Set up account access and basic trading preferences." },
          { title: "Fund Account", description: "Add capital and calibrate your risk allocation." },
          { title: "Select Instrument", description: "Choose gold, silver, or specialty metal market." },
          { title: "Trade With Control", description: "Execute setups and manage exposure actively." },
        ]}
      />
    </>
  );
}
