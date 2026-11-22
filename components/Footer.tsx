import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { CookieSettingsButton } from "./CookieConsent";

export function Footer() {
  const year = new Date().getFullYear();
  const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_GA_ID);
  const heading = "text-[0.9375rem] font-semibold text-navy";
  const linkCls = "text-body transition-colors duration-150 hover:text-navy";

  return (
    <footer className="border-t border-line bg-ice text-[0.9375rem]">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1fr] lg:gap-8">
        <div>
          <Link href="/" aria-label="Beaver and Weaver Engineering Services, home">
            <Logo className="h-11 w-auto" />
          </Link>
          <p className="mt-6 max-w-xs">
            BIM modelling, CAD drafting and engineering detailing for architects, engineers, contractors and fabricators
          </p>
        </div>

        <div>
          <h2 className={heading}>Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className={linkCls}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Company</h2>
          <ul className="mt-4 space-y-2">
            <li><Link href="/about" className={linkCls}>About us</Link></li>
            <li><Link href="/industries" className={linkCls}>Industries</Link></li>
            <li><Link href="/careers" className={linkCls}>Careers</Link></li>
            <li><Link href="/contact" className={linkCls}>Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h2 className={heading}>Contact</h2>
          <ul className="mt-4 space-y-2">
            <li><a href={`mailto:${site.email}`} className="font-semibold text-navy hover:text-royal-ink">{site.email}</a></li>
            {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className={linkCls}>{site.phone}</a></li>}
            <li>{site.markets.join(", ")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-[0.875rem] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}
            {site.companyNumber ? `. Registered in England and Wales, No. ${site.companyNumber}` : ""}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy-policy" className="hover:text-navy">Privacy policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-navy">Cookie policy</Link></li>
            {analyticsEnabled && <li><CookieSettingsButton /></li>}
          </ul>
        </div>
      </div>
    </footer>
  );
}
