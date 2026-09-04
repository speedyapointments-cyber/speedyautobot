"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { APPLICANTS } from "@/lib/applicants";
import { STAGES, TOOLS, stageFromStatus, type VetStage } from "@/lib/vetting";

type Row = {
  id: string;
  name: string;
  market: string;
  stage: VetStage;
  hold: boolean;
};

export default function VettingPage() {
  const [rows, setRows] = useState<Row[]>(() =>
    APPLICANTS.map((person) => ({
      id: person.id,
      name: person.name,
      market: `${person.city}, ${person.state}`,
      stage: stageFromStatus(person.status),
      hold: person.status === "Applied — pending" && person.insurance.toLowerCase().includes("missing"),
    })),
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const stage of STAGES) map[stage] = rows.filter((r) => r.stage === stage && !r.hold).length;
    map.Hold = rows.filter((r) => r.hold).length;
    return map;
  }, [rows]);

  function advance(id: string) {
    setRows((prev) =>
      prev.map((row) => {
        if (row.id !== id || row.hold) return row;
        const i = STAGES.indexOf(row.stage);
        const next = STAGES[Math.min(i + 1, STAGES.length - 1)];
        return { ...row, stage: next };
      }),
    );
  }

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Backend · Vetting</p>
        <h1 className="section-title">Central desk</h1>
        <p className="muted text-sm">
          One pipeline for every applicant in every city. The app advances the stage.
          Outside apps do the legal checks. Nobody gets a live ticket from a dark market.
        </p>

        <div className="grid grid-cols-3 gap-2 text-center">
          {STAGES.slice(0, 6).map((stage) => (
            <div key={stage} className="panel py-3">
              <p className="text-xl text-[var(--gold-bright)]">{counts[stage] ?? 0}</p>
              <p className="muted text-[0.65rem] uppercase tracking-wide">{stage}</p>
            </div>
          ))}
        </div>

        <section className="panel space-y-3">
          <p className="text-sm text-[var(--gold-bright)]">Apps this desk uses</p>
          <ul className="space-y-2">
            {TOOLS.map((tool) => (
              <li key={tool.id} className="text-sm">
                <a href={tool.url} className="text-[var(--gold-bright)] underline" target={tool.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {tool.name}
                </a>
                <span className="muted"> — {tool.job}. {tool.auto}</span>
              </li>
            ))}
          </ul>
        </section>

        <ul className="space-y-3">
          {rows.map((row) => (
            <li key={row.id} className="panel space-y-2">
              <p className="text-xs text-[var(--ink-muted)]">{row.id} · {row.market}</p>
              <p className="text-lg" style={{ fontFamily: "var(--font-display), sans-serif" }}>{row.name}</p>
              <p className={row.hold ? "text-sm text-[var(--danger)]" : "text-sm text-[var(--gold-bright)]"}>
                {row.hold ? "HOLD — missing coverage or docs" : row.stage}
              </p>
              <div className="flex flex-wrap gap-1">
                {STAGES.map((stage) => (
                  <span
                    key={stage}
                    className={`rounded-full px-2 py-0.5 text-[0.62rem] ${
                      stage === row.stage && !row.hold
                        ? "bg-[rgba(212,175,55,0.2)] text-[var(--gold-bright)]"
                        : "text-[var(--ink-muted)]"
                    }`}
                  >
                    {stage}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button type="button" className="btn-gold text-xs" onClick={() => advance(row.id)} disabled={row.hold || row.stage === "Approved"}>
                  Advance stage
                </button>
                <button
                  type="button"
                  className="btn-ghost text-xs"
                  onClick={() => setRows((prev) => prev.map((item) => item.id === row.id ? { ...item, hold: !item.hold } : item))}
                >
                  {row.hold ? "Clear hold" : "Put on hold"}
                </button>
              </div>
            </li>
          ))}
        </ul>

        <Link href="/shop" className="btn-ghost">Back to dispatch</Link>
      </div>
    </AppShell>
  );
}
