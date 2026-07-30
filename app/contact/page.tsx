import type { Metadata } from "next";
import { ContactPageView } from "../components/pages/routes/PublicRoutePages";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildPageMetadata } from "../lib/seo";

const PAGE_SEO = {
  title: "Contact FP Trades | Trading Support and Account Assistance",
  description:
    "Contact FP Trades for trading support, account setup help, platform guidance and brokerage service inquiries from our specialist team.",
  path: "/contact",
  pageKeywords: [
    "contact FP Trades",
    "trading support desk",
    "broker customer support",
    "account opening support",
    "platform help center",
    "trading inquiry form",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function ContactPage() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <ContactPageView />
    </>
  );
}
