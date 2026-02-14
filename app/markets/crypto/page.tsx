import type { Metadata } from "next";
import MarketShowcase from "../../components/markets/MarketShowcase";
import PageStructuredData from "../../components/seo/PageStructuredData";
import { buildPageMetadata } from "../../lib/seo";

const PAGE_SEO = {
  title: "Crypto Market Trading | ALS Trades",
  description:
    "Trade crypto markets on ALS Trades with fast execution, transparent trading conditions and structured risk controls.",
  path: "/markets/crypto",
  pageKeywords: [
    "crypto market",
    "crypto market trading",
    "trade btc usd",
    "trade eth usd",
    "digital asset trading platform",
    "online crypto broker",
    "bitcoin cfd trading",
    "crypto volatility trading",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Page() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <MarketShowcase
        variant="crypto"
        badge="Digital Asset Desk"
        title="Capture Crypto Momentum With Disciplined Control"
        subtitle="Trade leading digital pairs using a structure built for speed and risk clarity."
        intro="Crypto markets move in fast cycles driven by liquidity, sentiment, and catalysts. ALS Trades helps you respond faster with transparent execution, resilient infrastructure, and tools designed for controlled volatility participation."
        heroImageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2400&q=80"
        heroImageAlt="Trader using a laptop"
        symbolsTitle="High-Interest Crypto Pairs"
        symbols={[
          { symbol: "BTC/USD", name: "Bitcoin vs US Dollar", note: "Institutional crypto benchmark" },
          { symbol: "ETH/USD", name: "Ethereum vs US Dollar", note: "Smart-contract market leader" },
          { symbol: "SOL/USD", name: "Solana vs US Dollar", note: "High-beta trend instrument" },
          { symbol: "XRP/USD", name: "XRP vs US Dollar", note: "Payments narrative market" },
          { symbol: "ADA/USD", name: "Cardano vs US Dollar", note: "Cycle rotation candidate" },
          { symbol: "BNB/USD", name: "BNB vs US Dollar", note: "Exchange ecosystem pair" },
        ]}
        whatIsTitle="What Are Crypto Trading Pairs?"
        whatIsCode="CTP"
        whatIsDescription="A crypto pair reflects the value relationship between digital assets and fiat or other assets. Traders use these instruments to follow trend expansion, rotate across sectors, and manage risk in rapidly shifting volatility regimes."
        featureTitle="Crypto trading strengths"
        features={[
          "Follow momentum with both breakout and pullback strategies",
          "React quickly to market catalysts and on-chain narratives",
          "Diversify outside traditional asset classes",
          "Apply strict risk controls in high-volatility phases",
        ]}
        pulseTitle="Digital Market Pulse For Faster Decisions"
        pulseSubtitle="Track actionable signals across trend, volatility, and liquidity without clutter."
        metrics={[
          { label: "Core Pairs", value: "30+", detail: "Most active large-cap instruments" },
          { label: "Volatility Cycles", value: "24/7", detail: "Continuous global digital market" },
          { label: "Execution", value: "Low-Latency", detail: "Fast order acknowledgment and fills" },
          { label: "Risk Controls", value: "Multi-Layer", detail: "Position and exposure safeguards" },
        ]}
        edgeTitle="Why ALS Trades Fits Modern Crypto Workflows"
        edgeCards={[
          {
            title: "Event-Responsive Infrastructure",
            description: "Maintain execution control during rapid moves and high-volume bursts.",
          },
          {
            title: "Structured Position Handling",
            description: "Scale entries and exits with clearer exposure visibility across pairs.",
          },
          {
            title: "Operational Reliability",
            description: "Stay focused on strategy with stable platform performance under load.",
          },
        ]}
        journeyTitle="Launch Your Crypto Workflow In Four Steps"
        journeySteps={[
          { title: "Activate Account", description: "Set up profile and secure access credentials." },
          { title: "Allocate Capital", description: "Fund your account and define risk limits." },
          { title: "Pick Market", description: "Select the crypto pair aligned with your setup." },
          { title: "Trade & Refine", description: "Execute, monitor performance, and optimize entries." },
        ]}
      />
    </>
  );
}
