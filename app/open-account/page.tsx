import type { Metadata } from "next";
import SimplePage from "../components/SimplePage";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildPageMetadata } from "../lib/seo";

const PAGE_SEO = {
  title: "Open Account | ALS Trades Signup",
  description:
    "Open your ALS Trades account to start trading forex, crypto, indexes and metals with a fast and secure onboarding process.",
  path: "/open-account",
  pageKeywords: [
    "open als trades account",
    "trading account signup",
    "forex account registration",
    "broker account opening",
    "create trading profile",
    "start online trading account",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function OpenAccountPage() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <SimplePage
        title="Open Account"
        description="Create your live trading profile, complete verification, and get platform access in minutes."
        primaryLabel="Log in"
        primaryHref="https://user.alstrades.com/login"
        imageSrc="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Person standing near stairs"
      />
    </>
  );
}
