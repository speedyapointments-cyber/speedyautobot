"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { AppShell } from "@/components/AppShell";
import { scheduleFor, type Powertrain, type Vehicle } from "@/lib/maintenance";
import { SHOP } from "@/lib/shop";

const KEY = "speedy-garage-v1";

const empty = {
  year: "",
  make: "",
  model: "",
  miles: "",
  powertrain: "gas" as Powertrain,
  lastOilMiles: "",
};

export default function GaragePage() {
  const [form, setForm] = useState(empty);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as Vehicle;
      setVehicle(saved);
      setForm({
        year: saved.year,
        make: saved.make,
        model: saved.model,
        miles: String(saved.miles),
        powertrain: saved.powertrain,
        lastOilMiles: saved.lastOilMiles != null ? String(saved.lastOilMiles) : "",
      });
    } catch {
      /* ignore */
    }
  }, []);

  const rows = useMemo(() => (vehicle ? scheduleFor(vehicle) : []), [vehicle]);
  const dueCount = rows.filter((row) => row.status === "due").length;

  function onSave(e: FormEvent) {
    e.preventDefault();
    const miles = Number(form.miles.replace(/,/g, ""));
    if (!form.make.trim() || !form.model.trim() || !Number.isFinite(miles)) return;
    const next: Vehicle = {
      year: form.year.trim(),
      make: form.make.trim(),
      model: form.model.trim(),
      miles,
      powertrain: form.powertrain,
      lastOilMiles: form.lastOilMiles ? Number(form.lastOilMiles.replace(/,/g, "")) : null,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(KEY, JSON.stringify(next));
    setVehicle(next);
  }

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Your garage
        </p>
        <h1 className="section-title">Vehicle + schedule</h1>
        <p className="muted text-sm">
          Save the car once. We turn the mileage into a Speedy maintenance list —
          what is due now, what is coming up. This is a conservative shop schedule,
          not the factory campaign list. Confirm anything safety-critical on a ticket.
        </p>

        <form onSubmit={onSave} className="panel space-y-3">
          <p className="text-sm text-[var(--gold-bright)]">Vehicle</p>
          <div className="grid grid-cols-2 gap-3">
            <input className="field" placeholder="Year" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} inputMode="numeric" />
            <input className="field" placeholder="Miles" value={form.miles} onChange={(e) => setForm({ ...form, miles: e.target.value })} inputMode="numeric" required />
          </div>
          <input className="field" placeholder="Make" value={form.make} onChange={(e) => setForm({ ...form, make: e.target.value })} required />
          <input className="field" placeholder="Model" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} required />
          <select
            className="field"
            value={form.powertrain}
            onChange={(e) => setForm({ ...form, powertrain: e.target.value as Powertrain })}
          >
            <option value="gas">Gas</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybrid</option>
            <option value="ev">EV</option>
          </select>
          <input
            className="field"
            placeholder="Last oil-change miles (optional)"
            value={form.lastOilMiles}
            onChange={(e) => setForm({ ...form, lastOilMiles: e.target.value })}
            inputMode="numeric"
          />
          <button type="submit" className="btn-gold">
            Save and update schedule
          </button>
        </form>

        {vehicle ? (
          <section className="space-y-3">
            <div className="panel">
              <p className="text-lg text-[var(--gold-bright)]">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </p>
              <p className="muted text-sm">
                {vehicle.miles.toLocaleString()} miles · {vehicle.powertrain.toUpperCase()}
                {dueCount ? ` · ${dueCount} item${dueCount === 1 ? "" : "s"} due` : " · nothing overdue"}
              </p>
            </div>
            {rows.map((row) => (
              <article key={row.id} className="panel space-y-1">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
                  {row.status === "due" ? "Due now" : row.status === "soon" ? "Coming up" : "On track"}
                </p>
                <p className="text-[var(--ink)]">{row.name}</p>
                <p className="muted text-sm">
                  {row.dueAtMiles != null
                    ? `Next around ${row.dueAtMiles.toLocaleString()} miles`
                    : row.everyMonths
                      ? `Every ${row.everyMonths} months`
                      : "Inspect as needed"}
                  {row.milesLeft != null
                    ? row.milesLeft <= 0
                      ? ` · ${Math.abs(row.milesLeft).toLocaleString()} miles overdue`
                      : ` · ${row.milesLeft.toLocaleString()} miles left`
                    : null}
                </p>
                <p className="muted text-xs">{row.note}</p>
              </article>
            ))}
            <Link href="/book" className="btn-gold">
              Book what is due
            </Link>
            <a href={`tel:${SHOP.phoneTel}`} className="btn-ghost">
              Call {SHOP.phone}
            </a>
          </section>
        ) : null}
      </div>
    </AppShell>
  );
}
