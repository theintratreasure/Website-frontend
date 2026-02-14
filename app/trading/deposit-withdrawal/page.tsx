import type { Metadata } from "next";
import { TradingDepositWithdrawalPageView } from "../../components/pages/routes/PublicRoutePages";
import PageStructuredData from "../../components/seo/PageStructuredData";
import { buildPageMetadata } from "../../lib/seo";

const PAGE_SEO = {
  title: "Deposit and Withdrawal | ALS Trades",
  description:
    "Learn ALS Trades deposit and withdrawal process, supported funding methods, verification flow and transaction handling standards.",
  path: "/trading/deposit-withdrawal",
  pageKeywords: [
    "deposit and withdrawal",
    "trading account funding",
    "broker withdrawal process",
    "secure payment methods trading",
    "fund trading account online",
    "als trades payment options",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function Page() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <TradingDepositWithdrawalPageView />
    </>
  );
}
