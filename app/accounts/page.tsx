import type { Metadata } from "next";
import SimplePage from "../components/SimplePage";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildPageMetadata } from "../lib/seo";

const PAGE_SEO = {
  title: "Trading Accounts | ALS Trades",
  description:
    "Compare ALS Trades account types, features, leverage structures and execution options to choose the account that fits your trading style.",
  path: "/accounts",
  pageKeywords: [
    "als trades accounts",
    "forex trading account types",
    "open online trading account",
    "professional trading account",
    "broker account comparison",
    "multi asset account options",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function AccountsPage() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <SimplePage
        title="Accounts"
        description="Compare account types, leverage options, execution models, and platform features for your strategy."
        primaryLabel="Open Account"
        primaryHref="https://user.alstrades.com/signup"
        imageSrc="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Fan of US dollar banknotes"
      />
    </>
  );
}
