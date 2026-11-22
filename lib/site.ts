/**
 * Central company details. Update these values and every page, the footer,
 * structured data and the legal pages pick them up automatically.
 */
export const site = {
  name: "Beaver and Weaver Engineering Services Ltd.",
  shortName: "BWENSE",
  tradeNameMeaning: "“the world”",
  tagline: "Built on Intelligence. Driven by Innovation.",
  headline: "Engineering the Next Dimension",
  strapline: "Precision BIM Solutions for Modern Construction",
  description:
    "BWENSE (Beaver and Weaver Engineering Services Ltd.) provides architectural, structural, MEP and facade BIM modelling, steel, precast and rebar detailing, Scan to BIM and BIM coordination for construction teams across the UK, Europe and North America.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.bwense.com").replace(/\/$/, ""),
  email: "enquiries@bwense.com",
  phone: "" as string, // e.g. "+44 20 0000 0000" – leave empty to hide
  address: {
    locality: "" as string,
    region: "" as string,
    country: "United Kingdom",
  },
  companyNumber: "" as string, // Companies House number – shown in the footer & legal pages when set
  markets: ["United Kingdom", "Europe", "North America"],
  social: {
    linkedin: "" as string,
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact us" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
