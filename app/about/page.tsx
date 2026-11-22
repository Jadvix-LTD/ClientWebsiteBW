import Image from "next/image";
import { disciplines } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { CtaBand, PageHero, ProcessSteps } from "@/components/sections";
import { SectionHeader } from "@/components/ui";

export const metadata = pageMeta({
  title: "About Us",
  description:
    "About Beaver and Weaver Engineering Services Ltd. (BWENSE): our mission, vision, values and approach to BIM modelling, coordination and engineering detailing.",
  path: "/about",
});

const values = [
  { title: "Precision", text: "Dimensions, levels and quantities are checked, not assumed. Accuracy is what we deliver." },
  { title: "Accountability", text: "We are clear about what we are responsible for, and we raise questions early and in writing." },
  { title: "Collaboration", text: "We work within your standards and alongside your people as one project team." },
  { title: "Clarity", text: "Drawings, reports and correspondence that a site team can read at a glance." },
  { title: "Continuous improvement", text: "Lessons from each project feed back into our templates, checks and workflows." },
];

const approach = [
  { title: "Understand the brief", text: "We start with your objectives, standards, information requirements and the decisions you need to make." },
  { title: "Agree the scope", text: "Level of detail, deliverables, software versions and responsibilities are agreed before modelling begins." },
  { title: "Deliver in checked stages", text: "Work is issued in planned packages, and each one is checked internally before it reaches you." },
  { title: "Keep communication open", text: "Regular updates, a tracked query log and one point of contact who knows your project." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Engineering support woven into your team"
        lead={`${site.name} provides BIM, CAD and engineering detailing services to construction teams across the UK, Europe and North America.`}
        crumbs={[{ name: "About us", path: "/about" }]}
      />

      <section className="section" aria-labelledby="overview-title">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader id="overview-title" title="The story behind the name" />
            <div className="mt-6 space-y-4">
              <p>
                Our trade name, <strong className="font-semibold text-navy">BWENSE</strong>, means “the world” in a Kenyan
                language. It reflects the project teams we work with in many countries, and the reach that good technical
                information gives a project.
              </p>
              <p>
                The company name joins two ideas. The beaver is nature’s most persistent engineer. The weaver brings
                separate threads together into one strong piece, which is what good coordination does.
              </p>
              <p>
                In practice we provide architectural, structural, MEP and facade BIM, detailing, Scan to BIM and BIM
                support, helping architects, engineers, contractors and manufacturers coordinate effectively and build
                with fewer surprises.
              </p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-xl border border-line">
            <Image src="/images/service-structural.svg" alt="Steel connection detail drawing produced by Beaver and Weaver detailers" width={640} height={460} unoptimized className="h-auto w-full" />
          </figure>
        </div>
      </section>

      <section className="section bg-ice" aria-label="Mission and vision">
        <div className="container-x grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Mission</p>
            <p className="mt-4 font-heading text-[1.5rem] leading-[1.35] font-medium text-navy">
              To give construction teams accurate, coordinated technical information they can build from, on time and to
              their standards
            </p>
          </div>
          <div>
            <p className="eyebrow">Vision</p>
            <p className="mt-4 font-heading text-[1.5rem] leading-[1.35] font-medium text-navy">
              To be the engineering partner that project teams around the world trust first, true to our name
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container-x">
          <SectionHeader id="values-title" title="What we hold ourselves to" />
          <dl className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="border-t border-line py-6">
                <dt className="font-semibold text-navy">{v.title}</dt>
                <dd className="mt-2">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="approach-title">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeader
            id="approach-title"
            title="How we work with your team"
            lead="Good outsourcing should feel like having more of your own team available. These habits make that happen."
          />
          <ol className="border-t border-line">
            {approach.map((a, i) => (
              <li key={a.title} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-5">
                <span className="font-heading text-navy tabular-nums">{i + 1}</span>
                <div>
                  <h3 className="text-[1.0625rem]">{a.title}</h3>
                  <p className="mt-1">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-ice" aria-labelledby="together-title">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader id="together-title" title="One building, many disciplines" />
            <div className="mt-6 space-y-4">
              <p>
                An architect develops the layout and architectural design. Structural engineers design the load-bearing
                frame, and MEP engineers design the building services. BIM specialists then build coordinated models
                that represent each of those designs.
              </p>
              <p>
                Steel detailers prepare fabrication drawings for the structural steel, while reinforcement and precast
                detailers prepare manufacturing and installation information. BIM coordinators find conflicts, such as a
                ventilation duct running through a beam, so the responsible designers can agree a solution before anything
                reaches site.
              </p>
              <p>Beaver and Weaver can take on any one of these roles, or several at once.</p>
            </div>
          </div>
          <dl className="self-start border-t border-line-strong">
            {disciplines.map((d) => (
              <div key={d.title} className="border-b border-line py-5">
                <dt className="font-semibold text-navy">{d.title}</dt>
                <dd className="mt-1">{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container-x">
          <SectionHeader id="process-title" title="Where we fit in your project" />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
