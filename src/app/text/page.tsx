"use client";

import { useEffect } from "react";
import { AppShell } from "@/components/AppShell";
import { TextStart } from "@/components/TextStart";
import { SHOP, smsHref } from "@/lib/shop";

export default function TextPage() {
  useEffect(() => {
    window.location.href = smsHref();
  }, []);

  return (
    <AppShell>
      <div className="px-5 py-8 space-y-4">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">24-hour · Ava</p>
        <h1 className="section-title">Text Ava</h1>
        <p className="muted text-sm">
          Ava is the 24-hour contact. Messages should open to {SHOP.phone}.
          If it did not, tap the button. After-hours roadside is $125.
        </p>
        <TextStart label="Text Ava" />
        <a href={`tel:${SHOP.phoneTel}`} className="btn-ghost">
          Or call {SHOP.phone}
        </a>
      </div>
    </AppShell>
  );
}
