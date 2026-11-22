"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { nav } from "@/lib/site";
import { services } from "@/lib/services";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const link = (active: boolean) =>
    `relative flex h-18 items-center gap-1 text-[0.9375rem] font-medium transition-colors duration-150 ${
      active ? "text-navy after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-royal" : "text-body hover:text-navy"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-18 items-center justify-between gap-8">
        <Link href="/" aria-label="Beaver and Weaver Engineering Services, home" className="shrink-0">
          <Logo priority className="h-10 w-auto md:h-11" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const active = isActive(item.href);
              if (item.href !== "/services") {
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={link(active)}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.href} className="group relative">
                  <Link href={item.href} aria-current={active ? "page" : undefined} className={link(active)}>
                    {item.label}
                    <Icon name="chevron" className="h-4 w-4 text-muted" />
                  </Link>
                  <div className="invisible absolute top-full left-1/2 w-[560px] -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-[opacity,transform] duration-200 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="grid grid-cols-2 gap-1 rounded-xl border border-line bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="flex gap-3 rounded-lg p-3 transition-colors duration-150 hover:bg-ice">
                            <Icon name={s.code} className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                            <span>
                              <span className="block text-[0.9375rem] font-semibold text-navy">{s.title}</span>
                              <span className="mt-0.5 block text-[0.875rem] leading-5 text-muted">
                                {s.subServices.slice(0, 3).map((x) => x.name).join(", ")}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Get a quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy shadow-[inset_0_0_0_1px_var(--color-line-strong)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <ul className="container-x py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex h-12 items-center font-medium ${isActive(item.href) ? "text-navy" : "text-body"}`}
                >
                  {item.label}
                </Link>
                {item.href === "/services" && (
                  <ul className="mb-3 grid gap-1 pl-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="flex h-10 items-center text-[0.9375rem] text-body">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-4">
              <Link href="/contact" className="btn btn-primary w-full">Get a quote</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
