import Link from "next/link";
import { industries } from "@/lib/content";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/sections";
import { IndustryIcon } from "@/components/IndustryIcon";
import { SectionHeader } from "@/components/ui";
import { Icon } from "@/components/Icons";

export const metadata = pageMeta({
  title: "Industries We Support",
  description:
    "BIM modelling and engineering detailing for residential, commercial, industrial, infrastructure and public sector construction projects in the UK, Europe and North America.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors we support"
        lead="Each sector brings its own challenges: repetition in residential, dense services in commercial, long spans in industrial. We adapt the model and the detailing to suit."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />

      <section className="section">
        <div className="container-x border-t border-line">
          {industries.map((ind) => (
            <article key={ind.slug} id={ind.slug} className="grid scroll-mt-24 gap-6 border-b border-line py-10 md:grid-cols-[3rem_1fr_1fr] md:gap-10">
              <IndustryIcon slug={ind.slug} className="h-8 w-8 text-muted" />
              <div>
                <h2 className="text-[1.5rem]">{ind.title}</h2>
                <p className="mt-3">{ind.text}</p>
              </div>
              <ul className="space-y-3 md:pt-1">
                {ind.examples.map((e) => (
                  <li key={e} className="flex items-center gap-3 text-navy">
                    <Icon name="check" className="h-5 w-5 shrink-0 text-muted" />
                    {e}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-ice" aria-labelledby="svc-title">
        <div className="container-x">
          <SectionHeader id="svc-title" title="The services behind each project" />
          <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="border-t border-line">
                <Link href={`/services/${s.slug}`} className="group flex h-16 items-center gap-3 font-semibold text-navy">
                  <Icon name={s.code} className="h-5 w-5 shrink-0 text-muted" />
                  <span className="transition-colors duration-150 group-hover:text-royal-ink">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
