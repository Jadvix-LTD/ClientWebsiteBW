import Link from "next/link";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { CtaBand, PageHero, ProcessSteps, ServiceCard } from "@/components/sections";
import { SectionHeader } from "@/components/ui";

export const metadata = pageMeta({
  title: "BIM, CAD & Engineering Detailing Services",
  description:
    "Architectural BIM and CAD, structural BIM with steel, precast and rebar detailing, MEP BIM coordination, facade detailing, Scan to BIM and BIM support services from Beaver and Weaver.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="BIM, CAD and engineering detailing services"
        lead="Six service lines covering every major discipline on a building project. Use one for extra capacity, or combine them for a coordinated package."
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      <section className="section" aria-label="Service list">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} headingLevel="h2" />
          ))}
        </div>
      </section>

      <section className="section bg-ice" aria-labelledby="matrix-title">
        <div className="container-x">
          <SectionHeader id="matrix-title" title="Services and deliverables at a glance" />
          <div className="mt-10 overflow-x-auto rounded-xl border border-line bg-white">
            <table className="w-full min-w-[680px] text-left text-[0.9375rem]">
              <thead className="border-b border-line text-muted">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">Service</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Includes</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Typical deliverables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {services.map((s) => (
                  <tr key={s.slug} className="align-top transition-colors duration-150 hover:bg-ice">
                    <th scope="row" className="px-6 py-5 font-semibold text-navy">
                      <Link href={`/services/${s.slug}`} className="hover:text-royal-ink">{s.title}</Link>
                    </th>
                    <td className="px-6 py-5">{s.subServices.map((x) => x.name).join(", ")}</td>
                    <td className="px-6 py-5">{s.deliverables.slice(0, 3).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container-x">
          <SectionHeader id="process-title" title="A workflow your team already knows" />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Send what you have with a short description of the outcome you need. We will recommend the right scope and tell you plainly if something falls outside it."
      />
    </>
  );
}
