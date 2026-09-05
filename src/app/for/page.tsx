"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Logo } from "@/components/Logo";
import { RoleSwitch, useRole } from "@/components/RoleSwitch";

export default function ForPage() {
  const { role } = useRole();
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <Logo className="h-16 w-auto object-contain object-left" />
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Speedy Mobile Auto Repair</p>
        <h1 className="section-title">SPEEDY AUTO 704</h1>
        <p className="muted text-sm">
          Same badges. Same shop. Network on the back: mechanics, window tinters,
          and detailers — at the shop or mobile.
        </p>
        <RoleSwitch />
        <p className="text-sm text-[var(--gold-bright)]">This device is set to {role}.</p>
        <div className="panel space-y-2">
          <p className="text-sm text-[var(--gold-bright)]">Customers</p>
          <p className="muted text-sm">Book shop or mobile. Pin the car. Text Start for 24-hour customer service.</p>
          <Link href="/" className="text-sm text-[var(--gold-bright)] underline">Customer home</Link>
        </div>
        <div className="panel space-y-2">
          <p className="text-sm text-[var(--gold-bright)]">Mechanics, tinters, detailers</p>
          <p className="muted text-sm">Apply by skill. Shop bay or van. 24-hour desk assigns. No auto-dispatch.</p>
          <Link href="/apply" className="text-sm text-[var(--gold-bright)] underline">Apply</Link>
        </div>
        <div className="panel space-y-2">
          <p className="text-sm text-[var(--gold-bright)]">Shop owners</p>
          <p className="muted text-sm">Dispatch your techs or Speedy vendors. Open a city only when the bench is ready.</p>
          <Link href="/shop" className="text-sm text-[var(--gold-bright)] underline">Shop console</Link>
        </div>
      </div>
    </AppShell>
  );
}
