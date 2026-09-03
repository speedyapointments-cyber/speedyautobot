"use client";

import { useState, type FormEvent } from "react";
import { AppShell } from "@/components/AppShell";

export default function ApplyPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Mobile Technician",
    experience: "",
    certifications: "",
    specialties: "",
    tools: "",
    serviceArea: "",
    about: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSent(true);
  }

  function resetForm() {
    setSent(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      role: "Mobile Technician",
      experience: "",
      certifications: "",
      specialties: "",
      tools: "",
      serviceArea: "",
      about: "",
    });
  }

  return (
    <AppShell>
      <div className="px-5 py-6">
        <p className="animate-rise text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Mechanic network
        </p>
        <h1 className="section-title animate-rise-delay-1 mt-2">
          Apply with qualifications
        </h1>
        <p className="muted animate-rise-delay-2 mt-3 text-sm">
          Join Speedy Network. List your certs, specialties, and tools so Marvin
          can match you to the right jobs — then send the work out. Jobs are not
          auto-assigned.
        </p>

        {sent ? (
          <div className="panel animate-rise mt-6">
            <p
              className="text-2xl text-[var(--gold-bright)]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Qualifications received
            </p>
            <p className="muted mt-2 text-sm">
              Thanks, {form.name}. Marvin reviews network applications and matches
              jobs by qualification — not auto-dispatch.
            </p>
            <button type="button" className="btn-ghost mt-5" onClick={resetForm}>
              Submit another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="animate-rise-delay-3 mt-6 space-y-4">
            <Field label="Full name" id="apply-name" required>
              <input
                id="apply-name"
                className="field"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
                autoComplete="name"
              />
            </Field>
            <Field label="Phone" id="apply-phone" required>
              <input
                id="apply-phone"
                className="field"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                required
                autoComplete="tel"
                inputMode="tel"
              />
            </Field>
            <Field label="Email" id="apply-email">
              <input
                id="apply-email"
                type="email"
                className="field"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                autoComplete="email"
              />
            </Field>
            <Field label="Role on the network" id="apply-role">
              <select
                id="apply-role"
                className="field"
                value={form.role}
                onChange={(e) => update("role", e.target.value)}
              >
                <option>Mobile Technician</option>
                <option>Roadside Assistant</option>
                <option>Shop Support</option>
                <option>Apprentice</option>
              </select>
            </Field>
            <Field label="Years of experience" id="apply-exp" required>
              <input
                id="apply-exp"
                className="field"
                value={form.experience}
                onChange={(e) => update("experience", e.target.value)}
                placeholder="e.g. 5 years"
                required
              />
            </Field>
            <Field label="Certifications & licenses" id="apply-certs" required>
              <textarea
                id="apply-certs"
                className="field min-h-[88px] resize-y"
                value={form.certifications}
                onChange={(e) => update("certifications", e.target.value)}
                placeholder="ASE, state license, insurance, CDL…"
                required
              />
            </Field>
            <Field label="Specialties" id="apply-specialties" required>
              <textarea
                id="apply-specialties"
                className="field min-h-[88px] resize-y"
                value={form.specialties}
                onChange={(e) => update("specialties", e.target.value)}
                placeholder="Brakes, diagnostics, European, diesels, EV…"
                required
              />
            </Field>
            <Field label="Tools & equipment" id="apply-tools">
              <textarea
                id="apply-tools"
                className="field min-h-[72px] resize-y"
                value={form.tools}
                onChange={(e) => update("tools", e.target.value)}
                placeholder="Scan tool, lift, roadside kit…"
              />
            </Field>
            <Field label="Service area" id="apply-area">
              <input
                id="apply-area"
                className="field"
                value={form.serviceArea}
                onChange={(e) => update("serviceArea", e.target.value)}
                placeholder="e.g. Charlotte metro / Mecklenburg"
              />
            </Field>
            <Field label="Anything else Marvin should know" id="apply-about">
              <textarea
                id="apply-about"
                className="field min-h-[88px] resize-y"
                value={form.about}
                onChange={(e) => update("about", e.target.value)}
                placeholder="Availability, shop vs mobile preference…"
              />
            </Field>
            <button type="submit" className="btn-gold">
              Submit qualifications
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
