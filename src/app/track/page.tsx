"use client";

import { useMemo, useState, type FormEvent } from "react";
import { AppShell } from "@/components/AppShell";

type Stage = {
  id: string;
  label: string;
  detail: string;
};

const STAGES: Stage[] = [
  { id: "received", label: "Request received", detail: "We have your job details." },
  { id: "assigned", label: "Tech assigned", detail: "A Speedy tech is locked in." },
  { id: "enroute", label: "En route", detail: "Heading to your location." },
  { id: "working", label: "In progress", detail: "Wrenches turning on-site." },
  { id: "done", label: "Complete", detail: "Ready for pickup / sign-off." },
];

function hashTicket(value: string) {
  let h = 0;
  for (let i = 0; i < value.length; i++) h = (h * 31 + value.charCodeAt(i)) >>> 0;
  return h;
}

export default function TrackPage() {
  const [query, setQuery] = useState("");
  const [lookup, setLookup] = useState("");

  const progress = useMemo(() => {
    if (!lookup) return null;
    const idx = hashTicket(lookup.trim().toLowerCase()) % STAGES.length;
    return idx;
  }, [lookup]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLookup(query.trim());
  }

  return (
    <AppShell>
      <div className="px-5 py-6">
        <p className="animate-rise text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Live status
        </p>
        <h1 className="section-title animate-rise-delay-1 mt-2">Track your job</h1>
        <p className="muted animate-rise-delay-2 mt-3 text-sm">
          Enter your phone number or confirmation code to see where Speedy is on
          your repair.
        </p>

        <form onSubmit={onSubmit} className="animate-rise-delay-3 mt-6 space-y-3">
          <label className="block text-sm text-[var(--ink-muted)]" htmlFor="track-query">
            Phone or confirmation code
          </label>
          <input
            id="track-query"
            className="field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. 704-555-0199 or SPDY-4821"
            autoComplete="tel"
          />
          <button type="submit" className="btn-gold">
            Check Status
          </button>
        </form>

        {progress !== null ? (
          <div className="panel mt-6 animate-rise">
            <p className="text-xs tracking-[0.18em] text-[var(--ink-muted)] uppercase">
              Ticket {lookup.toUpperCase()}
            </p>
            <p className="mt-1 text-lg text-[var(--gold-bright)]">
              {STAGES[progress].label}
            </p>
            <ol className="mt-5 space-y-0">
              {STAGES.map((stage, i) => {
                const done = i < progress;
                const current = i === progress;
                return (
                  <li key={stage.id} className="relative flex gap-3 pb-5 last:pb-0">
                    {i < STAGES.length - 1 ? (
                      <span
                        className={`absolute top-3 left-[5px] h-[calc(100%-0.4rem)] w-px ${
                          done || current ? "bg-[var(--gold-deep)]" : "bg-[#2a2a2a]"
                        }`}
                      />
                    ) : null}
                    <span
                      className={`track-dot relative z-10 mt-1 ${
                        done ? "done" : current ? "current" : ""
                      }`}
                    />
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          done || current ? "text-[var(--ink)]" : "text-[#6a6358]"
                        }`}
                      >
                        {stage.label}
                      </p>
                      <p className="text-xs text-[var(--ink-muted)]">{stage.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
