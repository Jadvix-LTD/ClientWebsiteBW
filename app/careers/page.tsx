import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections";
import { SectionHeader } from "@/components/ui";

export const metadata = pageMeta({
  title: "Careers",
  description:
    "Careers at Beaver and Weaver Engineering Services. We welcome applications from BIM modellers, detailers, coordinators and CAD technicians.",
  path: "/careers",
});

const roles = [
  { title: "BIM modellers", text: "Architectural, structural and MEP modelling in Revit to project standards." },
  { title: "Steel and precast detailers", text: "Fabrication and erection drawings in Tekla Structures and AutoCAD." },
  { title: "BIM coordinators", text: "Federated model reviews, clash testing and issue management." },
  { title: "CAD technicians", text: "Accurate 2D drafting and drawing production for live projects." },
];

export default function CareersPage() {
  const subject = encodeURIComponent("Career enquiry - Beaver and Weaver");
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career with us"
        lead="We are growing a team of people who care about getting the details right. If that sounds like you, we would like to hear from you."
        crumbs={[{ name: "Careers", path: "/careers" }]}
      />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeader
              title="Skills we are always interested in"
              lead="There may not be an advertised vacancy right now, but we keep strong applications on file and get in touch as projects come in."
            />
            <a href={`mailto:${site.email}?subject=${subject}`} className="btn btn-primary mt-8">Send your CV</a>
            <p className="mt-4 text-[0.9375rem] text-muted">
              Include a short portfolio or sample drawings, and the software you use day to day
            </p>
          </div>
          <dl className="self-start border-t border-line">
            {roles.map((r) => (
              <div key={r.title} className="border-b border-line py-5">
                <dt className="font-semibold text-navy">{r.title}</dt>
                <dd className="mt-1">{r.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
