"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { AppShell } from "@/components/AppShell";
import { InsuranceQuotes } from "@/components/InsuranceQuotes";

const SKILLS = [
  "Brakes (install)",
  "No-start / diagnostics",
  "Scan tools / PMI",
  "Tint (install)",
  "Detailing",
  "Golf cart kits",
  "Roadside / jump / lockout",
  "Oil / fluids",
  "EV 12V / wheels / brakes on EV (no HV)",
  "EV / hybrid high-voltage (xEV1 or OEM HV required)",
];

const DOCS = [
  "Government photo ID",
  "Valid driver license",
  "W-9 (you are a 1099 vendor, not an employee)",
  "Certificate of insurance: $1M general liability",
  "Garagekeepers coverage (min $50k)",
  "Commercial auto on the service vehicle ($1M CSL)",
  "Service vehicle registration + photos",
  "Tool / scan-tool photos",
  "ASE, EPA 609, or tint certs if you claim those skills",
  "ASE xEV1 or OEM HV safety card if you claim EV / hybrid HV",
];

export default function ApplyPage() {
  const [sent, setSent] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [docsReady, setDocsReady] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [bgCheck, setBgCheck] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    experience: "",
    about: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggle(list: string[], value: string, setter: (next: string[]) => void) {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    if (!agree || !bgCheck || skills.length === 0) return;
    setSent(true);
  }

  return (
    <AppShell>
      <div className="px-5 py-6">
        <p className="animate-rise text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Network hiring
        </p>
        <h1 className="section-title animate-rise-delay-1 mt-2">Apply as a vendor</h1>
        <p className="muted animate-rise-delay-2 mt-3 text-sm">
          ICE labor is $22 / $38 / $55 per flagged hour. EV / HV labor is $35 / $52 /
          $75. $75 is the EV tap-out.
        </p>
        <div className="mt-3 flex flex-col gap-2 text-sm">
          <Link href="/network-terms" className="text-[var(--gold-bright)] underline">
            Full pay, vetting, and liability terms
          </Link>
          <Link href="/academy" className="text-[var(--gold-bright)] underline">
            Speedy Academy certification
          </Link>
        </div>
        {sent ? (
          <div className="panel animate-rise mt-6">
            <p className="text-2xl text-[var(--gold-bright)]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Application received
            </p>
            <p className="muted mt-2 text-sm">Thanks, {form.name}. You are pending.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="animate-rise-delay-3 mt-6 space-y-5">
            <div className="panel space-y-2">
              <p className="text-sm text-[var(--gold-bright)]">Pay at a glance</p>
              <p className="muted text-sm">ICE: $22 / $38 / $55. EV: $35 / $52 / $75. Parts not commissioned.</p>
            </div>
            <InsuranceQuotes />
            <Field label="Full legal name" id="apply-name" required>
              <input id="apply-name" className="field" value={form.name} onChange={(e) => update("name", e.target.value)} required autoComplete="name" />
            </Field>
            <Field label="Phone" id="apply-phone" required>
              <input id="apply-phone" className="field" value={form.phone} onChange={(e) => update("phone", e.target.value)} required autoComplete="tel" inputMode="tel" />
            </Field>
            <Field label="Email" id="apply-email">
              <input id="apply-email" type="email" className="field" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" />
            </Field>
            <Field label="Home / shop ZIP" id="apply-zip">
              <input id="apply-zip" className="field" value={form.zip} onChange={(e) => update("zip", e.target.value)} inputMode="numeric" />
            </Field>
            <fieldset className="space-y-2">
              <legend className="text-sm text-[var(--ink-muted)]">Skills you want approved <span className="text-[var(--gold)]">*</span></legend>
              <p className="muted text-xs">EV / HV is its own skill. Brakes on an EV is not high-voltage work.</p>
              {SKILLS.map((skill) => (
                <label key={skill} className="flex gap-3 text-sm">
                  <input type="checkbox" checked={skills.includes(skill)} onChange={() => toggle(skills, skill, setSkills)} />
                  {skill}
                </label>
              ))}
            </fieldset>
            <Field label="About you" id="apply-about">
              <textarea id="apply-about" className="field min-h-[110px] resize-y" value={form.about} onChange={(e) => update("about", e.target.value)} placeholder="xEV / OEM HV cards, scan tools, service vehicle…" />
            </Field>
            <fieldset className="space-y-2">
              <legend className="text-sm text-[var(--ink-muted)]">Documents you can produce</legend>
              {DOCS.map((doc) => (
                <label key={doc} className="flex gap-3 text-sm">
                  <input type="checkbox" checked={docsReady.includes(doc)} onChange={() => toggle(docsReady, doc, setDocsReady)} />
                  {doc}
                </label>
              ))}
            </fieldset>
            <label className="flex gap-3 text-sm">
              <input type="checkbox" checked={bgCheck} onChange={(e) => setBgCheck(e.target.checked)} required />
              I consent to a background and driving-record check.
            </label>
            <label className="flex gap-3 text-sm">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
              I have read the Network vendor terms. Independent contractor, not employee.
            </label>
            <button type="submit" className="btn-gold" disabled={!agree || !bgCheck || skills.length === 0}>
              Submit application
            </button>
          </form>
        )}
      </div>
    </AppShell>
  );
}

function Field({
  label,
  id,
  children,
  required,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-[var(--ink-muted)]" htmlFor={id}>
        {label}
        {required ? <span className="text-[var(--gold)]"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
