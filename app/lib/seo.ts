import type { Metadata } from "next";

export const SITE_URL = "https://www.alstrades.com";
export const SITE_NAME = "ALS Trades";
export const SITE_LOGO_PATH = "/icon.png";
export const SITE_FAVICON_PATH = "/favicon.ico";
export const SITE_FAVICON_32_PATH = "/favicon-32x32.png";
export const SITE_FAVICON_16_PATH = "/favicon-16x16.png";
export const SITE_APPLE_ICON_PATH = "/apple-touch-icon.png";
export const DEFAULT_OG_IMAGE_PATH = "/opengraph-image";
export const DEFAULT_TWITTER_IMAGE_PATH = "/twitter-image";
export const DEFAULT_KEYWORD_COUNT = 120;

const GLOBAL_SEED_KEYWORDS = [
  "als trades",
  "als trades official website",
  "online trading",
  "forex broker",
  "forex trading platform",
  "cfd trading",
  "multi asset trading",
  "crypto trading",
  "index trading",
  "metal trading",
  "gold trading",
  "silver trading",
  "currency pairs",
  "live markets",
  "trading account",
  "open trading account",
  "login trading platform",
  "fast order execution",
  "trading analytics",
  "market insights",
  "risk management",
  "copy trading alternatives",
  "professional traders",
  "retail traders",
  "swing trading",
  "scalping broker",
  "algorithmic trading",
  "chart based trading",
  "secure trading platform",
  "funded trading account",
  "deposit and withdrawal",
  "trading conditions",
  "market time sessions",
  "trading support",
  "global market access",
  "forex education",
  "trading strategies",
  "economic calendar trading",
  "usd pairs",
  "eur usd",
  "gbp usd",
  "usd jpy",
  "btc usd",
  "eth usd",
  "xau usd",
  "xag usd",
  "spx500",
  "nas100",
  "us30",
  "ger40",
  "uk100",
  "jpn225",
  "best trading site",
  "trusted trading brand",
  "trading in usa",
  "global forex markets",
  "institutional liquidity",
  "transparent pricing",
  "advanced trading tools",
];

const MODIFIERS = [
  "online",
  "platform",
  "broker",
  "market",
  "trading",
  "account",
  "signals",
  "analysis",
  "strategy",
  "price",
  "live",
  "today",
  "secure",
  "professional",
  "global",
  "trusted",
  "fast",
  "best",
  "advanced",
  "smart",
];

const INTENT_TERMS = [
  "how to trade",
  "where to trade",
  "best broker for",
  "high speed execution",
  "safe online trading",
  "beginner to pro trading",
  "market opportunities",
  "technical analysis",
  "price action trading",
  "day trading setup",
  "swing trading setup",
  "scalping setup",
  "news trading",
  "risk controlled trading",
];

function normalizeKeywords(keywords: readonly string[]): string[] {
  const seen = new Set<string>();
  const normalized: string[] = [];

  for (const raw of keywords) {
    const keyword = raw.trim().toLowerCase().replace(/\s+/g, " ");
    if (!keyword || seen.has(keyword)) continue;
    seen.add(keyword);
    normalized.push(keyword);
  }

  return normalized;
}

export function buildKeywordSet(pageKeywords: readonly string[], minCount = 520): string[] {
  const sourceTerms = normalizeKeywords([...GLOBAL_SEED_KEYWORDS, ...pageKeywords]);
  const generated: string[] = [...sourceTerms];

  for (const term of sourceTerms) {
    for (const mod of MODIFIERS) {
      generated.push(`${term} ${mod}`);
      generated.push(`${mod} ${term}`);
    }
  }

  for (const term of sourceTerms) {
    for (const intent of INTENT_TERMS) {
      generated.push(`${intent} ${term}`);
    }
  }

  const normalized = normalizeKeywords(generated);
  if (normalized.length >= minCount) return normalized.slice(0, minCount);

  return normalized;
}

export function buildPageMetadata({
  title,
  description,
  path,
  pageKeywords,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  pageKeywords: readonly string[];
  noindex?: boolean;
}): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const keywords = buildKeywordSet(pageKeywords, DEFAULT_KEYWORD_COUNT);
  const defaultImages = [
    {
      url: DEFAULT_OG_IMAGE_PATH,
      alt: `${title} | ${SITE_NAME}`,
    },
  ];

  return {
    title,
    description,
    keywords,
    applicationName: SITE_NAME,
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: defaultImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_TWITTER_IMAGE_PATH],
    },
    icons: {
      icon: [
        { url: SITE_FAVICON_PATH, sizes: "any" },
        { url: SITE_FAVICON_32_PATH, type: "image/png", sizes: "32x32" },
        { url: SITE_FAVICON_16_PATH, type: "image/png", sizes: "16x16" },
      ],
      apple: [{ url: SITE_APPLE_ICON_PATH, sizes: "180x180", type: "image/png" }],
      shortcut: [SITE_FAVICON_PATH],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : {
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
}
