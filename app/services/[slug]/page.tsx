import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";
import { CtaBand, PageHero, ServiceCard } from "@/components/sections";
import { ButtonLink, SectionHeader, TextLink } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({ title: service.title, description: service.metaDescription, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.subServices.map((s) => s.name),
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: { "@id": absoluteUrl("/#organization"), name: site.name },
    areaServed: site.markets,
  };

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        lead={service.summary}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`/contact?service=${service.slug}`}>Request a quote</ButtonLink>
          <ButtonLink href="#scope" variant="secondary">What is included</ButtonLink>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <div className="space-y-4 text-[1.125rem] leading-[1.65]">
              {service.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <h2 id="scope" className="mt-16 scroll-mt-24 text-[1.5rem]">What is included</h2>
            <dl className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {service.subServices.map((sub) => (
                <div key={sub.name} className="border-t border-line py-5">
                  <dt className="font-semibold text-navy">{sub.name}</dt>
                  <dd className="mt-2">{sub.detail}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-14 text-[1.5rem]">Who it is for</h2>
            <ul className="mt-6 border-t border-line">
              {service.useCases.map((u) => (
                <li key={u} className="flex items-center gap-3 border-b border-line py-4 text-navy">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-muted" />
                  {u}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <figure className="overflow-hidden rounded-xl border border-line">
              <Image src={service.image} alt={service.imageAlt} width={640} height={460} unoptimized className="h-auto w-full" />
            </figure>
            <div className="rounded-xl border border-line p-6">
              <h2 className="text-[1rem] font-semibold">Typical deliverables</h2>
              <ul className="mt-4 space-y-3 text-[0.9375rem]">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                    {d}
                  </li>
                ))}
              </ul>
              <h2 className="mt-6 border-t border-line pt-6 text-[1rem] font-semibold">Typical software</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((t) => (
                  <li key={t} className="rounded-md bg-ice-2 px-3 py-1 text-[0.875rem] text-navy">{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-[0.875rem] text-muted">We work in the formats and versions your project specifies</p>
            </div>
            <div className="rounded-xl bg-ice p-6">
              <h2 className="text-[1.125rem]">Need a quote?</h2>
              <p className="mt-2 text-[0.9375rem]">Send your drawings and deadline, and we will reply with a proposal.</p>
              <ButtonLink href={`/contact?service=${service.slug}`} className="mt-5 w-full">Request a quote</ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-ice" aria-labelledby="related-title">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader id="related-title" title="Often combined with" />
            <TextLink href="/services">All services</TextLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Send us your drawings for a quote" />
      <JsonLd data={schema} />
    </>
  );
}
