"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { MB, UPLOAD, fileExtension } from "@/lib/enquiry";

type ServiceOption = { slug: string; title: string };
type Status = "idle" | "sending" | "success" | "error";

export function EnquiryForm({ services }: { services: ServiceOption[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [service, setService] = useState("");

  // Pre-select a service when arriving from a service page (/contact?service=slug).
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    if (slug && services.some((s) => s.slug === slug)) setService(slug);
  }, [services]);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const totalMB = files.reduce((n, f) => n + f.size, 0) / MB;

  function checkFiles(list: File[]) {
    if (list.length > UPLOAD.maxFiles) return `Please attach up to ${UPLOAD.maxFiles} files.`;
    for (const f of list) {
      if (!(UPLOAD.extensions as readonly string[]).includes(fileExtension(f.name))) return `“${f.name}” isn’t an accepted file type.`;
      if (f.size > UPLOAD.maxFileMB * MB) return `“${f.name}” is larger than ${UPLOAD.maxFileMB} MB.`;
    }
    if (list.reduce((n, f) => n + f.size, 0) > UPLOAD.maxTotalMB * MB) return `Attachments must total ${UPLOAD.maxTotalMB} MB or less.`;
    return "";
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fileError = checkFiles(files);
    if (fileError) {
      setErrors({ files: fileError });
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }
    setStatus("sending");
    setErrors({});
    setMessage("");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: new FormData(form) });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: Record<string, string> };
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
        setFiles([]);
        setService("");
      } else {
        setStatus("error");
        setErrors(json.errors ?? {});
        setMessage(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("We couldn’t reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl bg-ice p-8">
        <p className="eyebrow">Enquiry received</p>
        <h2 className="mt-3 text-[1.5rem]">Thank you — we’ve got your project details.</h2>
        <p className="mt-3">
          A member of our team will review your information and come back to you with questions or a proposal. If
          anything changes in the meantime, just reply to our email.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  const err = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-2 text-[0.875rem] font-semibold text-[#dc2626]">
        {errors[name]}
      </p>
    ) : null;
  const aria = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate={false} className="grid gap-x-5 gap-y-6 sm:grid-cols-2" encType="multipart/form-data">
      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="label">Your name *</label>
        <input id="name" name="name" required minLength={2} maxLength={120} autoComplete="name" className="field" {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="company" className="label">Company name *</label>
        <input id="company" name="company" required minLength={2} maxLength={160} autoComplete="organization" className="field" {...aria("company")} />
        {err("company")}
      </div>
      <div>
        <label htmlFor="email" className="label">Business email *</label>
        <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className="field" {...aria("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="phone" className="label">Phone <span className="font-normal text-muted">(optional)</span></label>
        <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className="field" />
      </div>
      <div>
        <label htmlFor="service" className="label">Required service *</label>
        <div className="relative">
          <select
            id="service"
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="field appearance-none pr-10"
            {...aria("service")}
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
            <option value="other">Other / not sure</option>
          </select>
          <svg viewBox="0 0 12 12" className="pointer-events-none absolute top-1/2 right-4 h-3 w-3 -translate-y-1/2 text-muted" aria-hidden="true">
            <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {err("service")}
      </div>
      <div>
        <label htmlFor="deadline" className="label">Deadline</label>
        <input id="deadline" name="deadline" type="date" min={today} className="field" {...aria("deadline")} />
        {err("deadline")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="description" className="label">Project description *</label>
        <textarea
          id="description"
          name="description"
          required
          minLength={20}
          maxLength={6000}
          rows={6}
          placeholder="Building type and size, scope required, level of detail, software/format, standards to follow…"
          className="field resize-y"
          {...aria("description")}
        />
        {err("description")}
      </div>

      <div className="sm:col-span-2">
        <span className="label" id="files-label">Supporting drawings / documents</span>
        <label
          htmlFor="files"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line-strong bg-ice px-6 py-8 text-center transition-colors duration-150 hover:border-royal"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-muted" aria-hidden="true">
            <path d="M12 16V4m0 0-4 4m4-4 4 4M5 15v4h14v-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="font-semibold text-navy">Choose files to upload</span>
          <span className="text-[0.875rem] text-muted">
            Up to {UPLOAD.maxFiles} files · {UPLOAD.maxFileMB} MB each · {UPLOAD.maxTotalMB} MB total
          </span>
          <input
            id="files"
            name="files"
            type="file"
            multiple
            accept={UPLOAD.extensions.map((x) => `.${x}`).join(",")}
            className="sr-only"
            aria-labelledby="files-label"
            onChange={(e) => {
              const list = Array.from(e.target.files ?? []);
              setFiles(list);
              const msg = checkFiles(list);
              setErrors((prev) => {
                const next = { ...prev };
                if (msg) next.files = msg;
                else delete next.files;
                return next;
              });
            }}
            {...aria("files")}
          />
        </label>
        {files.length > 0 && (
          <ul className="mt-3 divide-y divide-line rounded-lg border border-line text-[0.9375rem] tabular-nums">
            {files.map((f) => (
              <li key={f.name + f.size} className="flex justify-between gap-4 px-4 py-3">
                <span className="truncate text-navy">{f.name}</span>
                <span className="shrink-0 text-muted">{(f.size / MB).toFixed(1)} MB</span>
              </li>
            ))}
            <li className="flex justify-between px-4 py-3 font-semibold text-navy">
              <span>Total</span>
              <span>{totalMB.toFixed(1)} MB</span>
            </li>
          </ul>
        )}
        {err("files")}
        <p className="mt-2 text-[0.875rem] text-muted">
          Accepted: {UPLOAD.extensions.map((x) => x.toUpperCase()).join(", ")}. For larger models, send a download link in the description.
        </p>
      </div>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-[0.9375rem] text-navy">
          <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-[#1d5fe0]" {...aria("consent")} />
          <span>
            I agree to Beaver and Weaver using these details to respond to my enquiry, as described in the{" "}
            <Link href="/privacy-policy" className="text-royal-ink underline underline-offset-2">privacy policy</Link>. *
          </span>
        </label>
        {err("consent")}
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:cursor-wait disabled:opacity-70">
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p aria-live="polite" className={`text-[0.9375rem] ${status === "error" ? "font-semibold text-[#dc2626]" : "text-muted"}`}>
          {status === "error" ? message : ""}
        </p>
      </div>
    </form>
  );
}
