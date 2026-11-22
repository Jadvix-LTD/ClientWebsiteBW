import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Service } from "@/lib/services";
import { faqs, processSteps } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { ArrowIcon, Icon } from "./Icons";
import { ButtonLink } from "./ui";
import { JsonLd } from "./JsonLd";

/* ---------- Service card: the drawing carries the colour, the card stays quiet ---------- */
export function ServiceCard({ service, headingLevel = "h3" }: { service: Service; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-colors duration-150 hover:border-line-strong">
      <div className="border-b border-line">
        <Image src={service.image} alt={service.imageAlt} width={640} height={460} unoptimized className="h-auto w-full" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <H className="text-[1.25rem]">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 focus:outline-none">
            {service.title}
          </Link>
        </H>
        <p className="mt-2">{service.summary}</p>
        <p className="mt-4 text-[0.9375rem] text-muted">{service.subServices.map((s) => s.name).join(" · ")}</p>
        <span className="text-link mt-auto pt-6 group-hover:text-navy" aria-hidden="true">
          View service <ArrowIcon />
        </span>
      </div>
    </article>
  );
}

/* ---------- Inner page header ---------- */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs: { name: string; path: string }[];
  children?: ReactNode;
}) {
  const trail = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <section className="border-b border-line bg-ice">
      <div className="container-x py-12 md:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.875rem] text-muted">
            {trail.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === trail.length - 1 ? (
                  <span aria-current="page" className="text-body">{c.name}</span>
                ) : (
                  <Link href={c.path} className="transition-colors duration-150 hover:text-navy">{c.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow mt-8">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-3" : "mt-8"} max-w-3xl text-[2.25rem] leading-[1.1] tracking-[-0.02em] sm:text-[2.75rem] lg:text-[3rem]`}>
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-[36rem] text-[1.125rem] leading-[1.6]">{lead}</p>}
        {children}
      </div>
      <JsonLd data={breadcrumbSchema(trail)} />
    </section>
  );
}

/* ---------- Seven stages on a structural gridline (the signature) ---------- */
export function ProcessSteps() {
  return (
    <ol className="relative grid gap-8 lg:grid-cols-7 lg:gap-6">
      <span aria-hidden="true" className="gridline absolute top-5 right-0 left-0 hidden h-px lg:block" />
      <span aria-hidden="true" className="gridline-v absolute top-0 bottom-0 left-5 w-px lg:hidden" />
      {processSteps.map((s, i) => (
        <li key={s.title} className="relative flex gap-5 lg:block">
          <span className="bubble relative">{i + 1}</span>
          <div className="lg:mt-5">
            <h3 className="text-[1rem] leading-[1.35]">{s.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-[1.55]">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- FAQ ---------- */
export function FaqList() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <div className="border-t border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-line">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
              {f.q}
              <Icon name="chevron" className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="pb-6">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={schema} />
    </>
  );
}

/* ---------- Closing call to action ---------- */
export function CtaBand({
  title = "Send us your drawings for a quote",
  text = "Share PDF, DWG, Revit or IFC files with the scope and deadline, and we will reply with a proposal covering scope, programme and fee.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-8 rounded-2xl bg-ice p-8 md:p-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <h2 className="text-[1.75rem] leading-[1.15] sm:text-[2.25rem]">{title}</h2>
            <p className="mt-4 max-w-xl">{text}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:justify-end">
            <ButtonLink href="/contact">Request a quote</ButtonLink>
            <a href={`mailto:${site.email}`} className="text-link">{site.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
