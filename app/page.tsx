import type { Metadata } from "next";
import LandingPage from "./components/landing/LandingPage";
import PageStructuredData from "./components/seo/PageStructuredData";
import { buildPageMetadata } from "./lib/seo";

const PAGE_SEO = {
  title: "FP Trades | Trade Forex, Crypto, Indexes and Metals",
  description:
    "Explore FP Trades for forex, crypto, index and metal market access with professional-grade execution, transparent pricing and advanced trading tools.",
  path: "/",
  pageKeywords: [
    "FP Trades home",
    "trade forex online",
    "trade crypto online",
    "trade indexes online",
    "trade metals online",
    "forex market platform",
    "crypto market platform",
    "index market platform",
    "metal market platform",
    "online broker website",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Home() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <LandingPage />
    </>
  );
}
