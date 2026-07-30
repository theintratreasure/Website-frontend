import type { Metadata } from "next";
import { TradingConditionPageView } from "../../components/pages/routes/PublicRoutePages";
import PageStructuredData from "../../components/seo/PageStructuredData";
import { buildPageMetadata } from "../../lib/seo";

const PAGE_SEO = {
  title: "Trading Conditions | FP Trades",
  description:
    "Understand FP Trades trading conditions including pricing behavior, execution model, cost clarity and instrument parameters.",
  path: "/trading/condition",
  pageKeywords: [
    "trading conditions",
    "forex pricing conditions",
    "stp ecn execution model",
    "transparent pricing trading",
    "broker trading parameters",
    "FP Trades pricing model",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Page() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <TradingConditionPageView />
    </>
  );
}
