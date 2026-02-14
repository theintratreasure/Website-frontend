import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarFooterWrapper from "./layout/NavbarFooterWrapper";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import GlobalStructuredData from "./components/seo/GlobalStructuredData";
import {
  DEFAULT_KEYWORD_COUNT,
  DEFAULT_OG_IMAGE_PATH,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
  buildKeywordSet,
} from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ALS Trades | Forex, Crypto, Indexes and Metals Trading Platform",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "ALS Trades provides a professional multi-asset trading experience across forex, crypto, indexes, and metals with transparent pricing and reliable execution.",
  applicationName: SITE_NAME,
  keywords: buildKeywordSet(
    [
      "als trades homepage",
      "forex crypto indexes metals",
      "online trading website",
      "global trading platform",
      "forex market trading",
      "crypto market trading",
      "index market trading",
      "metal market trading",
    ],
    DEFAULT_KEYWORD_COUNT,
  ),
  icons: {
    icon: SITE_LOGO_PATH,
    apple: SITE_LOGO_PATH,
    shortcut: SITE_LOGO_PATH,
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ALS Trades | Forex, Crypto, Indexes and Metals Trading Platform",
    description:
      "Trade global markets with ALS Trades using a fast, transparent and professional trading environment.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: `${SITE_NAME} | Multi-Asset Trading Platform` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALS Trades | Multi-Asset Trading Platform",
    description: "Forex, crypto, index and metal markets with professional execution and clear pricing.",
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.theme;if(t==='dark'){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
        />
        <GlobalStructuredData />
        <ReactQueryProvider>
          <NavbarFooterWrapper>
            {children}
          </NavbarFooterWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
