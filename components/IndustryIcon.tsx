/** Simple line icons drawn on a 40px grid, one per industry slug. */
export function IndustryIcon({ slug, className = "h-10 w-10" }: { slug: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      {slug === "residential" && (
        <g {...common}>
          <path d="M6 34V17L20 7l14 10v17" />
          <path d="M6 34h28" />
          <path d="M16 34v-9h8v9" />
          <path d="M11 20h4v4h-4zM25 20h4v4h-4z" />
        </g>
      )}
      {slug === "commercial" && (
        <g {...common}>
          <path d="M8 34V6h16v28M24 14h8v20" />
          <path d="M5 34h30" />
          <path d="M12 11h3M17 11h3M12 16h3M17 16h3M12 21h3M17 21h3M12 26h3M17 26h3M27 19h2M27 24h2M27 29h2" />
        </g>
      )}
      {slug === "industrial" && (
        <g {...common}>
          <path d="M5 34V18l8 5v-5l8 5v-5l8 5V8h5v26z" />
          <path d="M5 34h30" />
          <path d="M10 28h4M18 28h4" />
        </g>
      )}
      {slug === "infrastructure" && (
        <g {...common}>
          <path d="M3 18h34" />
          <path d="M3 22h34" />
          <path d="M7 22v12M33 22v12M20 22v12" />
          <path d="M7 18c4-8 9-8 13 0 4-8 9-8 13 0" />
        </g>
      )}
      {slug === "public-institutional" && (
        <g {...common}>
          <path d="M5 15 20 6l15 9z" />
          <path d="M8 15v15M14 15v15M20 15v15M26 15v15M32 15v15" />
          <path d="M5 30h30M3 34h34" />
        </g>
      )}
    </svg>
  );
}
