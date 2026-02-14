import type { Metadata } from "next";
import MarketShowcase from "../../components/markets/MarketShowcase";
import PageStructuredData from "../../components/seo/PageStructuredData";
import { buildPageMetadata } from "../../lib/seo";

const PAGE_SEO = {
  title: "Indexes Market Trading | ALS Trades",
  description:
    "Trade global index markets with ALS Trades and capture macro trends across US, Europe and Asia benchmark indices.",
  path: "/markets/indexes",
  pageKeywords: [
    "indexes market",
    "index market trading",
    "trade us30",
    "trade nas100",
    "trade spx500",
    "global index broker",
    "equity index cfd trading",
    "macro trading indexes",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Page() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <MarketShowcase
        variant="indexes"
        badge="Global Index Arena"
        title="Trade Index Trends Through A Macro-Focused Lens"
        subtitle="Take directional exposure to major economies without stock-by-stock complexity."
        intro="Index products compress broad market behavior into tradable instruments. ALS Trades enables you to capture regional momentum and macro sentiment with efficient execution and clear pricing visibility."
        heroImageSrc="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=2400&q=80"
        heroImageAlt="Newspaper on a table"
        symbolsTitle="Benchmark Index Contracts"
        symbols={[
          { symbol: "US30", name: "Dow Jones Industrial", note: "US blue-chip sentiment" },
          { symbol: "NAS100", name: "Nasdaq 100", note: "Technology-led growth benchmark" },
          { symbol: "SPX500", name: "S&P 500", note: "Broad US equity indicator" },
          { symbol: "GER40", name: "Germany 40", note: "European industrial barometer" },
          { symbol: "UK100", name: "FTSE 100", note: "Large-cap UK index" },
          { symbol: "JPN225", name: "Nikkei 225", note: "Japan risk appetite gauge" },
        ]}
        whatIsTitle="What Are Index Instruments?"
        whatIsCode="IDX"
        whatIsDescription="Index instruments track aggregated baskets of stocks and reflect the performance of key sectors or national markets. They allow traders to position around macro moves with less single-company event risk."
        featureTitle="Why traders deploy index exposure"
        features={[
          "Trade broad economic sentiment with one instrument",
          "Reduce single-stock shock risk in directional setups",
          "Build tactical hedges for equity allocations",
          "Align positions to global session momentum",
        ]}
        pulseTitle="Index Pulse For Macro Timing"
        pulseSubtitle="Read regional market rhythm quickly and align your entries with higher-probability trends."
        metrics={[
          { label: "Benchmarks", value: "20+", detail: "Global index coverage across regions" },
          { label: "Session Opportunities", value: "3", detail: "Asia, Europe, US directional windows" },
          { label: "Trade Styles", value: "Multi", detail: "Intraday, swing, and hedge use-cases" },
          { label: "Market Focus", value: "Macro", detail: "Economy-wide directional expression" },
        ]}
        edgeTitle="Professional Index Trading Advantages"
        edgeCards={[
          {
            title: "Macro Theme Alignment",
            description: "Translate economic narratives into clear index positioning frameworks.",
          },
          {
            title: "Session-Based Opportunity",
            description: "Use regional openings and overlaps to capture cleaner momentum shifts.",
          },
          {
            title: "Portfolio Overlay Utility",
            description: "Use index contracts to hedge or rebalance broader equity exposure.",
          },
        ]}
        journeyTitle="Build Your Index Plan In Four Steps"
        journeySteps={[
          { title: "Open Trading Access", description: "Complete registration and activate platform permissions." },
          { title: "Set Allocation", description: "Fund account and assign index risk budget." },
          { title: "Choose Benchmark", description: "Select the market index matching your macro thesis." },
          { title: "Execute Strategy", description: "Deploy and manage positions across key sessions." },
        ]}
      />
    </>
  );
}
