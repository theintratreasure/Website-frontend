import type { Metadata } from "next";
import { ReviewsPageView } from "../components/pages/routes/PublicRoutePages";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildPageMetadata } from "../lib/seo";

const PAGE_SEO = {
  title: "FP Tradess Reviews | Trader Feedback and Platform Experience",
  description:
    "Read FP Tradess reviews and trader feedback covering execution quality, platform reliability, account services and market access.",
  path: "/reviews",
  pageKeywords: [
    "fp tradess reviews",
    "trader testimonials",
    "forex broker feedback",
    "platform performance reviews",
    "broker service quality",
    "real trader experience",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Page() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <ReviewsPageView />
    </>
  );
}
