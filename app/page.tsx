import Image from "next/image";
import Link from "next/link";
import { benefits, disciplines, industries } from "@/lib/content";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { ButtonLink, SectionHeader, TextLink } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { CtaBand, FaqList, ProcessSteps, ServiceCard } from "@/components/sections";
import { IndustryIcon } from "@/components/IndustryIcon";

export const metadata = pageMeta({
  title: "BIM Modelling, CAD Drafting & Engineering Detailing | Beaver and Weaver",
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO: the one dark, coloured moment on the page */}
      <section className="bg-navy-900 text-white">
        <div className="container-x grid items-center gap-12 pt-12 pb-12 md:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:pt-12 lg:pb-8">
          <div>
            <p className="text-[0.9375rem] font-semibold text-white/60">{site.headline}</p>
            <h1 className="mt-4 text-[2.25rem] leading-[1.08] tracking-[-0.02em] !text-white sm:text-[3rem] xl:text-[3.5rem]">
              BIM modelling and detailing for construction teams
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1.125rem] leading-[1.6] text-white/70 md:text-[1.25rem]">
              Architectural, structural, MEP and facade models, coordinated and detailed to your standards, for
              architects, engineers, contractors and fabricators across the UK, Europe and North America
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request a quote</ButtonLink>
              <ButtonLink href="/services" variant="on-dark">View services</ButtonLink>
            </div>
          </div>
          <figure>
            <Image
              src="/images/hero-bim-dark.svg"
              alt="Isometric BIM model of a four-storey steel-framed building with curtain wall, ductwork and a resolved clash callout"
              width={680}
              height={540}
              priority
              unoptimized
              className="mx-auto h-auto w-full max-w-[680px]"
            />
          </figure>
        </div>
        <div className="border-t border-white/10">
          <ul className="container-x grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex h-16 items-center gap-3 text-[0.9375rem] text-white/70 transition-colors duration-150 hover:text-white"
                >
                  <Icon name={s.code} className="h-5 w-5 shrink-0 text-white/40" />
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" aria-labelledby="about-title">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHeader id="about-title" title="A technical team that works to your standards" />
            <div className="mt-6 space-y-4">
              <p>
                Beaver and Weaver Engineering Services Ltd. provides BIM, CAD and engineering detailing support to the
                construction industry. We help architects, consultants, contractors and fabricators turn design intent
                into coordinated models and drawings that can be built from.
              </p>
              <p>
                We cover every stage from design development to as-built handover, taking on the modelling, coordination
                and documentation so your engineers can stay focused on design. Conflicts are found on screen, while they
                are still simple and inexpensive to resolve.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/about">About the company</TextLink>
            </div>
          </div>

          {/* company facts set like a drawing title block */}
          <dl className="self-start overflow-hidden rounded-xl border border-line text-[0.9375rem]">
            {[
              ["Company", site.name],
              ["Trade name", "BWENSE, meaning “the world” in a Kenyan language"],
              ["Disciplines", "Architectural, structural, MEP, facade"],
              ["Markets", site.markets.join(", ")],
              ["Tagline", site.tagline],
            ].map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-[8rem_1fr] gap-4 px-5 py-4 ${i > 0 ? "border-t border-line" : ""}`}>
                <dt className="text-muted">{k}</dt>
                <dd className="font-semibold text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-ice" aria-labelledby="services-title">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              id="services-title"
              title="Six service lines"
              lead="Take one when you need extra capacity, or combine them for a coordinated package across every trade."
            />
            <TextLink href="/services">All services</TextLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY BIM */}
      <section className="section" aria-labelledby="why-title">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeader
            id="why-title"
            title="Why coordinated models pay off on site"
            lead="A building brings many disciplines together. Without proper design, documentation and coordination, projects pick up errors, site conflicts, wasted material, delays and extra cost."
          />
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="border-t border-line py-6">
                <dt className="font-semibold text-navy">{b.title}</dt>
                <dd className="mt-2">{b.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PROCESS: grid bubbles on a structural gridline */}
      <section className="section border-t border-line" aria-labelledby="process-title">
        <div className="container-x">
          <SectionHeader
            id="process-title"
            title="From project brief to as-built handover"
            lead="Stages often overlap, and design changes can call for further modelling, coordination and documentation. We plan for that from the start."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="section bg-ice" aria-labelledby="scope-title">
        <div className="container-x">
          <SectionHeader
            id="scope-title"
            title="Design, modelling, detailing and coordination"
            lead="These activities are closely related, but each has a different purpose and level of responsibility. We agree which of them we are delivering before work starts."
          />
          <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d) => (
              <div key={d.title} className="flex flex-col border-t border-line-strong pt-6 pb-8">
                <h3 className="text-[1.125rem]">{d.title}</h3>
                <p className="mt-3 flex-1">{d.text}</p>
                <p className="mt-4 text-[0.9375rem] text-muted">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" aria-labelledby="industries-title">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader id="industries-title" title="Sectors we support" />
            <TextLink href="/industries">All sectors</TextLink>
          </div>
          <ul className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind) => (
              <li key={ind.slug} className="border-t border-line py-6">
                <Link href={`/industries#${ind.slug}`} className="group block">
                  <IndustryIcon slug={ind.slug} className="h-7 w-7 text-muted" />
                  <h3 className="mt-4 text-[1.125rem] transition-colors duration-150 group-hover:text-royal-ink">{ind.title}</h3>
                  <p className="mt-2 text-[0.9375rem]">{ind.examples.join(" · ")}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line" aria-labelledby="faq-title">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <SectionHeader id="faq-title" title="Questions we are often asked" />
            <p className="mt-4">
              Anything else? Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-royal-ink underline underline-offset-4">{site.email}</a>
            </p>
          </div>
          <FaqList />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
