import type { Metadata } from "next";
import SimplePage from "../components/SimplePage";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildPageMetadata } from "../lib/seo";

const PAGE_SEO = {
  title: "Partners | Affiliate and IB Programs at ALS Trades",
  description:
    "Explore ALS Trades partner models including affiliate and introducing broker opportunities with transparent reward structures.",
  path: "/partners",
  pageKeywords: [
    "als trades partners",
    "introducing broker program",
    "forex affiliate program",
    "broker partnership model",
    "ib reward plan",
    "trading referral program",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function PartnersPage() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <SimplePage
        title="Partners"
        description="Explore our affiliate and introducing broker partnership models with transparent reward plans."
        primaryLabel="Open Account"
        primaryHref="https://user.alstrades.com/signup"
        imageSrc="https://images.unsplash.com/photo-1681505531034-8d67054e07f6?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Two people shaking hands over a document"
      />
    </>
  );
}
