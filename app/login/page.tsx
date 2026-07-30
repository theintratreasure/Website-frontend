import type { Metadata } from "next";
import SimplePage from "../components/SimplePage";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildPageMetadata } from "../lib/seo";

const PAGE_SEO = {
  title: "Login | FP Trades Secure Client Access",
  description:
    "Log in to FP Trades client access area to manage your trading profile, monitor positions and access platform services securely.",
  path: "/login",
  pageKeywords: [
    "FP Trades login",
    "trading account login",
    "secure broker login",
    "client portal access",
    "forex account sign in",
    "trading dashboard login",
  ],
} as const;

export const metadata: Metadata = buildPageMetadata(PAGE_SEO);

export default function LoginPage() {
  return (
    <>
      <PageStructuredData title={PAGE_SEO.title} description={PAGE_SEO.description} path={PAGE_SEO.path} />
      <SimplePage
        title="Log in"
        description="Securely access your trading dashboard, manage funds, and monitor open positions from one place."
        primaryLabel="Open Account"
        primaryHref="https://user.fptradess.com/signup"
        imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Trader using a laptop"
      />
    </>
  );
}
