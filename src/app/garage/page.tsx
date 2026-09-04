"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { AppShell } from "@/components/AppShell";
import { readGarage, writeGarage } from "@/components/GarageCard";
import { headline, schedule, type Powertrain, type Vehicle } from "@/lib/maintenance";

const empty: Omit<Vehicle, "updatedAt"> = {
  year: "",
  make: "",
  model: "",
  mileage: 0,
  powertrain: "gas",
  vin: "",
};

export default function GaragePage() {
  const [form, setForm] = useState(empty);
  const [saved, setSaved] = useState<Vehicle | null>(null);

  useEffect(() => {
    const existing = readGarage();
    if (existing) {
      setSaved(existing);
      setForm({
        year: existing.year,
        make: existing.make,
        model: existing.model,
        mileage: existing.mileage,
        powertrain: existing.powertrain,
        vin: existing.vin,
      });
    }
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.year || !form.make || !form.model || !form.mileage) return;
    const next: Vehicle = { ...form, mileage: Number(form.mileage), updatedAt: new Date().toISOString() };
    writeGarage(next);
    setSaved(next);
  }

  const rows = saved ? schedule(saved) : [];

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Garage</p>
        <h1 className="section-title">Your vehicle</h1>
        <p className="muted text-sm">
          We use this to send a maintenance list — oil, tires, brakes, filters, EV
          thermal. It is a Speedy reminder guide. The factory book still wins if they
          disagree.
        </p>

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Year">
              <input className="field" inputMode="numeric" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} required />
            </Field>
            <Field label="Mileage">
              <input className="field" inputMode="numeric" value={form.mileage || ""} onChange={(e) => setForm({ ...form, mileage: Number(e.target.value.replace(/\D/g, "")) })} required />
            </Field>
          </div>
          <Field label="Make">
            <input className="field" value={form.make} onChange={(e) => setForm({ ...form, make: e.target.value })} placeholder="Toyota" required />
          </Field>
          <Field label="Model">
            <input className="field" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} placeholder="Camry / Model Y" required />
          </Field>
          <Field label="Powertrain">
            <select className="field" value={form.powertrain} onChange={(e) => setForm({ ...form, powertrain: e.target.value as Powertrain })}>
              <option value="gas">Gas</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="ev">Electric</option>
            </select>
          </Field>
          <Field label="VIN (optional)">
            <input className="field" value={form.vin} onChange={(e) => setForm({ ...form, vin: e.target.value.toUpperCase() })} maxLength={17} />
          </Field>
          <button type="submit" className="btn-gold">
            Save and update my schedule
          </button>
        </form>

        {saved ? (
          <section className="panel space-y-3">
            <p className="text-sm text-[var(--gold-bright)]">{headline(rows)}</p>
            <p className="muted text-xs">
              {saved.year} {saved.make} {saved.model} · {saved.mileage.toLocaleString()} mi · updated{" "}
              {new Date(saved.updatedAt).toLocaleDateString()}
            </p>
            <ul className="space-y-3">
              {rows.map((row) => (
                <li key={row.id} className="border-t border-[var(--line)] pt-3 first:border-0 first:pt-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm">{row.name}</p>
                      <p className="muted text-xs">{row.note}</p>
                    </div>
                    <p className={`text-xs ${row.status === "due" ? "text-[var(--danger)]" : row.status === "soon" ? "text-[var(--gold-bright)]" : "muted"}`}>
                      {row.status === "due" ? "Due now" : `Due at ${row.nextAt.toLocaleString()}`}
                    </p>
                  </div>
                  <Link href="/book" className="mt-2 inline-block text-xs text-[var(--gold-bright)] underline">
                    Book {row.bookHint}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </AppShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1 text-sm text-[var(--ink-muted)]">
      {label}
      {children}
    </label>
  );
}
