import type { Metadata } from "next";
import { RegulationPageView } from "../components/pages/routes/PublicRoutePages";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildPageMetadata } from "../lib/seo";

const PAGE_SEO = {
  title: "Regulation and Compliance | FP Trades",
  description:
    "Review FP Trades compliance framework, governance standards and operational controls designed to protect client trust and transparency.",
  path: "/regulation",
  pageKeywords: [
    "FP Trades regulation",
    "broker compliance policy",
    "trading governance standards",
    "client protection framework",
    "regulated trading operations",
    "broker oversight controls",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Page() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <RegulationPageView />
    </>
  );
}
