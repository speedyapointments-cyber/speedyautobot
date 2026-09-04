"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { APPLICANTS, ASSIGN_OPTIONS } from "@/lib/applicants";

const SEED = [
  { id: "SPDY-1042", customer: "Keisha R.", job: "Front brakes", where: "University City", tech: "Unassigned" },
  { id: "SPDY-1048", customer: "Luis M.", job: "No-start", where: "NoDa", tech: "Unassigned" },
  { id: "SPDY-1051", customer: "Roadside", job: "EV 12V", where: "I-85", tech: "Unassigned" },
];

export default function ShopPage() {
  const [rows, setRows] = useState(SEED);
  const open = useMemo(() => rows.filter((r) => r.tech === "Unassigned").length, [rows]);

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Shop owner</p>
        <h1 className="section-title">Dispatch console</h1>
        <p className="muted text-sm">
          Assign from the 10-person applicant roster or keep the job in the bay.
        </p>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="panel"><p className="text-2xl text-[var(--gold-bright)]">{rows.length}</p><p className="muted text-xs">Today</p></div>
          <div className="panel"><p className="text-2xl text-[var(--gold-bright)]">{open}</p><p className="muted text-xs">Unassigned</p></div>
          <div className="panel"><p className="text-2xl text-[var(--gold-bright)]">{APPLICANTS.length}</p><p className="muted text-xs">Can apply</p></div>
        </div>

        <Link href="/applicants" className="btn-gold">Open 10-person applicant list</Link>

        <ul className="space-y-3">
          {rows.map((row) => (
            <li key={row.id} className="panel space-y-2">
              <p className="text-xs text-[var(--ink-muted)]">{row.id} · {row.customer}</p>
              <p>{row.job} — {row.where}</p>
              <label className="block text-xs text-[var(--ink-muted)]">
                Assign
                <select
                  className="field mt-1"
                  value={row.tech}
                  onChange={(e) =>
                    setRows((prev) => prev.map((item) => item.id === row.id ? { ...item, tech: e.target.value } : item))
                  }
                >
                  {ASSIGN_OPTIONS.map((tech) => (
                    <option key={tech}>{tech}</option>
                  ))}
                </select>
              </label>
            </li>
          ))}
        </ul>

        <section className="panel space-y-2">
          <p className="text-sm text-[var(--gold-bright)]">Roster snapshot</p>
          {APPLICANTS.map((person) => (
            <p key={person.id} className="muted text-xs">
              {person.name} — {person.role} · {person.status}
            </p>
          ))}
        </section>
      </div>
    </AppShell>
  );
}
