/** One line-icon set: 32px grid, single colour (currentColor), drawn to read at 18 to 24px. */
type P = { className?: string };
const s = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const paths: Record<string, React.ReactNode> = {
  AR: <path d="M5 27V8l11-4 11 4v19zM11 27v-7h10v7M10 12h3M19 12h3M10 16h3M19 16h3" {...s} />,
  ST: <path d="M7 5h18M7 27h18M16 5v22M10 5v3M22 5v3M10 27v-3M22 27v-3" {...s} />,
  ME: (
    <>
      <rect x="4" y="9" width="17" height="8" rx="1" {...s} />
      <path d="M21 13h7M24 17v3M4 23h16" {...s} />
      <circle cx="24" cy="23" r="3" {...s} />
    </>
  ),
  FA: (
    <>
      <rect x="5" y="4" width="22" height="24" {...s} />
      <path d="M12.3 4v24M19.6 4v24M5 12h22M5 20h22" {...s} />
    </>
  ),
  DC: <path d="M6 10V6h4M22 6h4v4M26 22v4h-4M10 26H6v-4M16 9l7 4v7l-7 4-7-4v-7zM9 13l7 4 7-4M16 17v7" {...s} />,
  BS: (
    <>
      <circle cx="16" cy="16" r="4" {...s} />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M6.8 25.2l2.8-2.8M22.4 9.6l2.8-2.8" {...s} />
    </>
  ),
  check: <path d="M7 16.5l5.5 5.5L25 10" {...s} />,
  mail: (
    <>
      <rect x="4" y="7" width="24" height="18" rx="2" {...s} />
      <path d="M4 9l12 9 12-9" {...s} />
    </>
  ),
  globe: (
    <>
      <circle cx="16" cy="16" r="12" {...s} />
      <path d="M4 16h24M16 4c3.5 3.4 5 7.3 5 12s-1.5 8.6-5 12c-3.5-3.4-5-7.3-5-12s1.5-8.6 5-12z" {...s} />
    </>
  ),
  phone: <path d="M8 4h5l2 6-3 2c1.5 3.2 4 5.7 7 7l2-3 6 2v5c0 1.7-1.3 3-3 3C13.4 26 6 18.6 6 7c0-1.7 1.3-3 3-3z" {...s} />,
  shield: <path d="M16 3l11 4v8c0 7-4.7 11.7-11 14-6.3-2.3-11-7-11-14V7zM11 16l3.5 3.5L21 13" {...s} />,
  upload: <path d="M16 21V6m0 0l-6 6m6-6l6 6M6 20v6h20v-6" {...s} />,
  chevron: <path d="M10 13l6 6 6-6" {...s} />,
};

export function Icon({ name, className = "h-5 w-5" }: P & { name: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      {paths[name] ?? paths.check}
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
