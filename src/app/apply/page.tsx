"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
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

const CHECKLIST = [
  { id: "id", label: "Government photo ID ready to upload" },
  { id: "license", label: "Valid driver license" },
  { id: "w9", label: "W-9 (1099 vendor, not employee)" },
  { id: "gl", label: "$1M general liability certificate" },
  { id: "gk", label: "Garagekeepers coverage (customer car in your care)" },
  { id: "auto", label: "Commercial auto on the service vehicle" },
  { id: "rig", label: "Service vehicle photos + registration" },
  { id: "tools", label: "Tools / scan / tint / detail kit for the skills you claim" },
] as const;

const STEPS = [
  { id: "you", title: "You" },
  { id: "skills", title: "Skills" },
  { id: "checklist", title: "Checklist" },
  { id: "insurance", title: "Insurance" },
  { id: "legal", title: "Legal" },
  { id: "review", title: "Submit" },
] as const;

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [checks, setChecks] = useState<string[]>([]);
  const [agree, setAgree] = useState(false);
  const [bgCheck, setBgCheck] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    city: "",
    about: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggle(list: string[], value: string, setter: (next: string[]) => void) {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  const youOk = form.name.trim().length > 1 && form.phone.trim().length > 6 && form.zip.trim().length >= 5;
  const skillsOk = skills.length > 0;
  const listOk = checks.length === CHECKLIST.length;
  const legalOk = agree && bgCheck;
  const ready = youOk && skillsOk && listOk && legalOk;

  const blocked = useMemo(() => {
    if (step === 0) return !youOk;
    if (step === 1) return !skillsOk;
    if (step === 2) return !listOk;
    if (step === 4) return !legalOk;
    if (step === 5) return !ready;
    return false;
  }, [step, youOk, skillsOk, listOk, legalOk, ready]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!ready) return;
    setSent(true);
  }

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Speedy roster</p>
        <h1 className="section-title">Get on the list</h1>
        <p className="muted text-sm">
          Checklist first. Application will not send until every box is checked.
          This fills a database. It does not open a shop for you.
        </p>
        <Link href="/faq" className="text-sm text-[var(--gold-bright)] underline">
          Questions — insurance, pay, when jobs start
        </Link>

        {sent ? (
          <div className="panel space-y-2">
            <p className="text-2xl text-[var(--gold-bright)]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Roster application in
            </p>
            <p className="muted text-sm">
              Thanks, {form.name}. Pending for {form.city || form.zip}. Next is documents and Academy.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <ol className="grid grid-cols-6 gap-1">
              {STEPS.map((item, index) => {
                const done =
                  (index === 0 && youOk) ||
                  (index === 1 && skillsOk) ||
                  (index === 2 && listOk) ||
                  (index === 3 && step > 3) ||
                  (index === 4 && legalOk) ||
                  (index === 5 && sent);
                return (
                  <li key={item.id} className="text-center">
                    <button
                      type="button"
                      onClick={() => setStep(index)}
                      className={`w-full rounded-lg py-2 text-[0.62rem] tracking-wide ${
                        index === step ? "bg-[#c9a227] text-black" : done ? "bg-[#2a2410] text-[var(--gold-bright)]" : "bg-[#161616] text-[var(--ink-muted)]"
                      }`}
                    >
                      {index + 1}. {item.title}
                    </button>
                  </li>
                );
              })}
            </ol>

            {step === 0 ? (
              <div className="space-y-4">
                <Field label="Full legal name" id="apply-name" required>
                  <input id="apply-name" className="field" value={form.name} onChange={(e) => update("name", e.target.value)} required autoComplete="name" />
                </Field>
                <Field label="Phone" id="apply-phone" required>
                  <input id="apply-phone" className="field" value={form.phone} onChange={(e) => update("phone", e.target.value)} required autoComplete="tel" inputMode="tel" />
                </Field>
                <Field label="Email" id="apply-email">
                  <input id="apply-email" type="email" className="field" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" />
                </Field>
                <Field label="City you work from" id="apply-city">
                  <input id="apply-city" className="field" value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="Charlotte, Raleigh, Gastonia…" />
                </Field>
                <Field label="ZIP" id="apply-zip" required>
                  <input id="apply-zip" className="field" value={form.zip} onChange={(e) => update("zip", e.target.value)} inputMode="numeric" />
                </Field>
              </div>
            ) : null}

            {step === 1 ? (
              <fieldset className="space-y-2">
                <legend className="text-sm text-[var(--ink-muted)]">Skills you can finish unsupervised</legend>
                {SKILLS.map((skill) => (
                  <label key={skill} className="flex gap-3 text-sm">
                    <input type="checkbox" checked={skills.includes(skill)} onChange={() => toggle(skills, skill, setSkills)} />
                    {skill}
                  </label>
                ))}
                <Field label="Notes / certs" id="apply-about">
                  <textarea id="apply-about" className="field min-h-[90px] resize-y" value={form.about} onChange={(e) => update("about", e.target.value)} />
                </Field>
              </fieldset>
            ) : null}

            {step === 2 ? (
              <fieldset className="space-y-3">
                <legend className="text-sm text-[var(--gold-bright)]">Start checklist — all required</legend>
                <p className="muted text-sm">{checks.length} of {CHECKLIST.length} checked</p>
                {CHECKLIST.map((item) => (
                  <label key={item.id} className="flex gap-3 rounded-xl border border-[var(--line)] p-3 text-sm">
                    <input type="checkbox" checked={checks.includes(item.id)} onChange={() => toggle(checks, item.id, setChecks)} />
                    {item.label}
                  </label>
                ))}
              </fieldset>
            ) : null}

            {step === 3 ? (
              <div className="space-y-3">
                <p className="muted text-sm">
                  Bind coverage, then come back and check the insurance boxes on the checklist.
                  Average solo entry: tint/detail ~$250–$350/mo, mobile mechanic ~$350–$600/mo.
                </p>
                <InsuranceQuotes />
              </div>
            ) : null}

            {step === 4 ? (
              <div className="space-y-3">
                <label className="flex gap-3 text-sm">
                  <input type="checkbox" checked={bgCheck} onChange={(e) => setBgCheck(e.target.checked)} />
                  I consent to a background and driving-record check.
                </label>
                <label className="flex gap-3 text-sm">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                  I have read the Network vendor terms. Independent contractor, not employee.
                </label>
                <Link href="/network-terms" className="text-sm text-[var(--gold-bright)] underline">Open terms</Link>
              </div>
            ) : null}

            {step === 5 ? (
              <div className="panel space-y-2">
                <p className="text-sm text-[var(--gold-bright)]">Review</p>
                <p className="muted text-sm">{form.name} · {form.phone} · {form.city} {form.zip}</p>
                <p className="muted text-sm">Skills: {skills.join(", ") || "none"}</p>
                <p className="muted text-sm">Checklist: {checks.length}/{CHECKLIST.length}</p>
                <p className="muted text-sm">Legal: {legalOk ? "signed" : "missing"}</p>
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="btn-ghost" onClick={() => setStep((n) => Math.max(0, n - 1))} disabled={step === 0}>
                Back
              </button>
              {step < 5 ? (
                <button type="button" className="btn-gold" onClick={() => setStep((n) => Math.min(5, n + 1))} disabled={blocked}>
                  Next
                </button>
              ) : (
                <button type="submit" className="btn-gold" disabled={!ready}>
                  Submit application
                </button>
              )}
            </div>
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
