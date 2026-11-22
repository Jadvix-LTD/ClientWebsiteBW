import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections";

export const metadata = pageMeta({
  title: "Cookie Policy",
  description: `Which cookies the ${site.shortName} website uses, why, and how to control them.`,
  path: "/cookie-policy",
});

const cookies = [
  { name: "bwense-consent-v1", type: "Essential (local storage)", purpose: "Remembers your cookie choice", duration: "Until cleared" },
  { name: "_ga", type: "Analytics (optional)", purpose: "Distinguishes visitors for Google Analytics", duration: "2 years" },
  { name: "_ga_<container-id>", type: "Analytics (optional)", purpose: "Keeps session state for Google Analytics", duration: "2 years" },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie policy" lead="Last updated November 2026." crumbs={[{ name: "Cookie Policy", path: "/cookie-policy" }]} />
      <section className="section">
        <div className="container-x">
          <div className="prose-bw max-w-3xl leading-relaxed text-body">
            <p>
              Cookies are small files stored on your device when you visit a website. This page explains which ones the{" "}
              {site.shortName} website uses and how you can control them, in line with the Privacy and Electronic
              Communications Regulations (PECR) and UK GDPR.
            </p>

            <h2>Essential</h2>
            <p>
              These are needed for the site to work and to remember your cookie choice. They cannot be switched off.
            </p>

            <h2>Analytics (only with your consent)</h2>
            <p>
              If you choose “Accept analytics”, we load Google Analytics to understand which pages are useful and how
              visitors find us. No analytics cookies are set unless you accept. You can change your mind at any time using
              the “Cookie settings” link in the footer.
            </p>
          </div>

          <div className="mt-10 max-w-3xl overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[560px] text-left text-[0.9rem]">
              <thead className="border-b border-line bg-ice text-muted">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Name</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Type</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Purpose</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {cookies.map((c) => (
                  <tr key={c.name}>
                    <td className="px-4 py-3 text-[0.875rem] tabular-nums">{c.name}</td>
                    <td className="px-4 py-3">{c.type}</td>
                    <td className="px-4 py-3 text-muted">{c.purpose}</td>
                    <td className="px-4 py-3 text-muted">{c.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose-bw mt-10 max-w-3xl leading-relaxed text-body">
            <h2>Managing cookies in your browser</h2>
            <p>
              Most browsers let you block or delete cookies in their settings. Blocking essential cookies may affect how
              the site works. For more about how we handle personal data, see our <Link href="/privacy-policy">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
