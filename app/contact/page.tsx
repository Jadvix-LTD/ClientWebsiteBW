import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata = pageMeta({
  title: "Contact Us & Request a Quote",
  description:
    "Request a quote for BIM modelling, CAD drafting, steel, precast or rebar detailing, MEP coordination, facade detailing or Scan to BIM. Upload drawings and tell us your deadline.",
  path: "/contact",
});

const nextSteps = [
  { title: "We review your brief", text: "An engineer reads your enquiry and checks the drawings or models you shared." },
  { title: "We clarify the scope", text: "If anything affects scope or fee, we ask before quoting rather than after." },
  { title: "You receive a proposal", text: "Scope, deliverables, programme and fee, set out clearly." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Request a quote"
        lead="Tell us about your project and share any drawings you have. The more we can see, the more accurate the proposal."
        crumbs={[{ name: "Contact us", path: "/contact" }]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="rounded-2xl border border-line p-6 md:p-10">
            <h2 className="text-[1.5rem]">Project enquiry</h2>
            <p className="mt-2 mb-8 text-muted">Fields marked * are required</p>
            <EnquiryForm services={services.map((s) => ({ slug: s.slug, title: s.title }))} />
          </div>

          <aside className="space-y-10 lg:pt-2">
            <div>
              <h2 className="text-[1.125rem]">Contact details</h2>
              <dl className="mt-4 border-t border-line text-[0.9375rem]">
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-4">
                  <dt className="text-muted">Email</dt>
                  <dd><a href={`mailto:${site.email}`} className="font-semibold text-navy hover:text-royal-ink">{site.email}</a></dd>
                </div>
                {site.phone && (
                  <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-4">
                    <dt className="text-muted">Phone</dt>
                    <dd><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-semibold text-navy">{site.phone}</a></dd>
                  </div>
                )}
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-4">
                  <dt className="text-muted">Serving</dt>
                  <dd className="text-navy">{site.markets.join(", ")}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-[1.125rem]">What happens next</h2>
              <ol className="mt-4 border-t border-line">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-line py-4">
                    <span className="font-heading text-navy tabular-nums">{i + 1}</span>
                    <div>
                      <h3 className="text-[1rem]">{s.title}</h3>
                      <p className="mt-1 text-[0.9375rem]">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl bg-ice p-6">
              <h2 className="text-[1rem] font-semibold">Confidential by default</h2>
              <p className="mt-2 text-[0.9375rem]">
                Your files are used only to assess your enquiry. If you need an NDA first, mention it in the description
                and we will send one before you share drawings.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
