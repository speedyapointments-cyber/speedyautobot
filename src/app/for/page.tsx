"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { RoleSwitch, useRole } from "@/components/RoleSwitch";

export default function ForPage() {
  const { role } = useRole();
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Who is this app for</p>
        <h1 className="section-title">Pick your side</h1>
        <p className="muted text-sm">
          Speedy Network is three tools in one: customers book and pin the car,
          mobile mechanics take jobs, shop owners dispatch.
        </p>
        <RoleSwitch />
        <p className="text-sm text-[var(--gold-bright)]">This device is set to {role}.</p>
        <div className="panel space-y-2">
          <p className="text-sm text-[var(--gold-bright)]">Customers</p>
          <p className="muted text-sm">Book, pin location, track, garage maintenance, rate, recommend.</p>
          <Link href="/" className="text-sm text-[var(--gold-bright)] underline">Customer home</Link>
        </div>
        <div className="panel space-y-2">
          <p className="text-sm text-[var(--gold-bright)]">Mobile mechanics</p>
          <p className="muted text-sm">Jobs, pay band, Academy, insurance quotes, photos, go-en-route.</p>
          <Link href="/tech" className="text-sm text-[var(--gold-bright)] underline">Mechanic board</Link>
        </div>
        <div className="panel space-y-2">
          <p className="text-sm text-[var(--gold-bright)]">Shop owners</p>
          <p className="muted text-sm">Dispatch board, assign vendors, applicants, labor rates, COI watch.</p>
          <Link href="/shop" className="text-sm text-[var(--gold-bright)] underline">Shop console</Link>
        </div>
      </div>
    </AppShell>
  );
}
