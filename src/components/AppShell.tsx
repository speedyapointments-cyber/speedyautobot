"use client";

import Link from "next/link";
import { BottomNav } from "./BottomNav";

export function AppShell({
  children,
  hideNav = false,
}: {
  children: React.ReactNode;
  hideNav?: boolean;
}) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--line)] bg-[rgba(7,7,7,0.88)] px-4 py-3 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)] bg-[rgba(212,175,55,0.12)] text-[var(--gold-bright)]"
            aria-hidden
          >
            <BoltIcon />
          </span>
          <div className="leading-tight">
            <p
              className="font-[family-name:var(--font-display)] text-[1.35rem] uppercase tracking-[0.04em] text-[var(--gold-bright)]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Speedy
            </p>
            <p className="text-[0.65rem] tracking-[0.16em] text-[var(--ink-muted)] uppercase">
              Mobile Auto Repair
            </p>
          </div>
        </Link>
        <Link
          href="/login"
          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-medium text-[var(--gold)] transition hover:border-[var(--gold)] hover:bg-[rgba(212,175,55,0.08)]"
        >
          Shop Login
        </Link>
      </header>

      <main className={hideNav ? "flex-1" : "safe-bottom flex-1"}>{children}</main>
      {!hideNav ? <BottomNav /> : null}
    </div>
  );
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />
    </svg>
  );
}
