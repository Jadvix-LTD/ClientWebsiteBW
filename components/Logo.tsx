import Image from "next/image";

/** The supplied Beaver and Weaver logo, trimmed with a transparent background (/brand/logo.webp, 729 × 160). */
export function Logo({ className = "h-11 w-auto md:h-[52px]", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/brand/logo.webp"
      alt="Beaver and Weaver Engineering Services"
      width={729}
      height={160}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}
