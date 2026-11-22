import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./Icons";

export { ArrowIcon };

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "on-dark";
  size?: "sm";
  className?: string;
}) {
  return (
    <Link href={href} className={`btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowIcon />
    </Link>
  );
}

/** Section title block: optional eyebrow, headline and a lead paragraph. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 id={id} className="text-[1.75rem] leading-[1.15] tracking-[-0.01em] sm:text-[2.25rem]">
        {title}
      </h2>
      {lead && <p className="mt-4 text-[1.0625rem]">{lead}</p>}
    </div>
  );
}
