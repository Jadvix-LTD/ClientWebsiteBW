import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section bg-ice">
      <div className="container-x py-12 md:py-16">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 max-w-2xl text-[2.25rem] leading-[1.1] tracking-[-0.02em] sm:text-[3rem]">This page could not be found</h1>
        <p className="mt-5 max-w-[36rem] text-[1.125rem]">The page you are looking for may have moved or no longer exists.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/services" variant="secondary">View services</ButtonLink>
        </div>
      </div>
    </section>
  );
}
