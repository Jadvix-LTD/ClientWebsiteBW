import type { Metadata, Viewport } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-montserrat", display: "swap" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-source-sans", display: "swap" });

const defaultTitle = "BIM Modelling, CAD Drafting & Engineering Detailing | Beaver and Weaver";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | Beaver and Weaver Engineering Services` },
  description: site.description,
  applicationName: "Beaver and Weaver Engineering Services",
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "BIM services UK",
    "BIM modelling",
    "Revit modelling services",
    "CAD drafting services",
    "structural steel detailing",
    "precast detailing",
    "rebar detailing",
    "MEP BIM coordination",
    "clash detection",
    "facade detailing",
    "curtain wall modelling",
    "scan to BIM",
    "BIM outsourcing",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Beaver and Weaver Engineering Services",
    title: defaultTitle,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
  category: "construction",
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#0C2A5B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only z-50 bg-royal px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
