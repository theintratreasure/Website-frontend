import { SITE_URL } from "../../lib/seo";

type PageStructuredDataProps = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
};

function titleFromSegment(segment: string) {
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizePath(path: string) {
  if (!path) return "/";
  if (!path.startsWith("/")) return `/${path}`;
  return path;
}

function buildBreadcrumbs(path: string) {
  const normalized = normalizePath(path);
  const trimmed = normalized.replace(/^\/|\/$/g, "");
  const segments = trimmed ? trimmed.split("/").filter(Boolean) : [];

  const items: Array<{ name: string; item: string }> = [{ name: "Home", item: `${SITE_URL}/` }];
  let current = "";

  for (const segment of segments) {
    current += `/${segment}`;
    items.push({ name: titleFromSegment(segment), item: `${SITE_URL}${current}` });
  }

  return items;
}

export default function PageStructuredData({
  title,
  description,
  path,
  imagePath = "/opengraph-image",
}: PageStructuredDataProps) {
  const normalizedPath = normalizePath(path);
  const url = normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;

  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const breadcrumbs = buildBreadcrumbs(normalizedPath);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${imagePath}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: crumb.item,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
