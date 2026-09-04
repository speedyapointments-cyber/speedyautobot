"use client";

import Link from "next/link";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { LocationCard } from "@/components/LocationCard";

const JOBS = [
  { id: "SPDY-1042", title: "Front brakes — driveway", where: "University City", flags: 2.0, rate: 38, status: "Offered" },
  { id: "SPDY-1048", title: "No-start / PMI", where: "NoDa", flags: 1.2, rate: 38, status: "Offered" },
  { id: "SPDY-1051", title: "EV 12V — roadside", where: "I-85 / Sugar Creek", flags: 1.0, rate: 35, status: "Offered" },
];

export default function TechPage() {
  const [online, setOnline] = useState(false);
  const [taken, setTaken] = useState<string | null>(null);

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Mobile mechanic</p>
        <h1 className="section-title">Tech board</h1>
        <p className="muted text-sm">
          Independent vendor view. You are not on a clock wage. Accept only jobs
          you are approved for. Marvin still assigns the first live tickets.
        </p>

        <button type="button" className={online ? "btn-gold" : "btn-ghost"} onClick={() => setOnline((v) => !v)}>
          {online ? "Available for dispatch" : "Go available"}
        </button>

        <LocationCard title="Your truck pin" />

        <section className="panel space-y-3">
          <p className="text-sm text-[var(--gold-bright)]">Pay on this board</p>
          <p className="muted text-sm">ICE $22 / $38 / $55 · EV $35 / $52 / $75 per flagged hour. +$25 after-hours roadside.</p>
        </section>

        <ul className="space-y-3">
          {JOBS.map((job) => (
            <li key={job.id} className="panel space-y-2">
              <p className="text-xs text-[var(--ink-muted)]">{job.id} · {job.status}</p>
              <p className="text-lg" style={{ fontFamily: "var(--font-display), sans-serif" }}>{job.title}</p>
              <p className="muted text-sm">{job.where} · {job.flags} flagged hr · ${job.flags * job.rate}</p>
              <button type="button" className="btn-gold" onClick={() => setTaken(job.id)} disabled={!online}>
                {taken === job.id ? "Accepted — wait for shop confirm" : online ? "Accept offer" : "Go available first"}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3">
          <Link href="/academy" className="btn-ghost text-xs">Academy</Link>
          <Link href="/apply" className="btn-ghost text-xs">Application</Link>
          <Link href="/network-terms" className="btn-ghost text-xs">Pay terms</Link>
          <Link href="/for" className="btn-ghost text-xs">Switch role</Link>
        </div>
      </div>
    </AppShell>
  );
}
