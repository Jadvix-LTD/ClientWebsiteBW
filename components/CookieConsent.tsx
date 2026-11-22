"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "bwense-consent-v1";
const OPEN_EVENT = "bwense:cookie-settings";
type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Google Analytics is only loaded after an explicit "Accept".
 * With no NEXT_PUBLIC_GA_ID set the site sets no non-essential cookies, so no banner is shown.
 */
export function CookieConsent({ gaId }: { gaId?: string }) {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = readChoice();
    setChoice(stored);
    setShowBanner(stored === null);
    setReady(true);
    const open = () => setShowBanner(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (!gaId || !ready) return null;

  const save = (value: Choice) => {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable – choice applies to this page view only */
    }
    const revoked = choice === "granted" && value === "denied";
    setChoice(value);
    setShowBanner(false);
    if (revoked) window.location.reload(); // unload the analytics script
  };

  return (
    <>
      {choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});`}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:inset-x-auto sm:right-5 sm:bottom-5"
        >
          <p className="font-semibold text-navy">Cookies on this site</p>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
            We use essential cookies to run the site. With your permission we’d also like to use Google Analytics
            cookies to understand how the site is used. See our{" "}
            <Link href="/cookie-policy" className="text-royal-ink underline underline-offset-2">cookie policy</Link>.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => save("granted")} className="btn btn-primary btn-sm flex-1">
              Accept analytics
            </button>
            <button type="button" onClick={() => save("denied")} className="btn btn-secondary btn-sm flex-1">
              Reject analytics
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsButton() {
  return (
    <button type="button" className="hover:text-navy" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}
