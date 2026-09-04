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
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex" aria-hidden>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)] bg-[#0b0b0b]">
              <WrenchCarIcon />
            </span>
            <span className="-ml-2 grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)] bg-[#0b0b0b]">
              <CarWrenchIcon />
            </span>
          </span>
          <div className="leading-tight">
            <p className="text-[0.62rem] tracking-[0.18em] text-[var(--ink-muted)] uppercase">
              Speedy Network
            </p>
            <p
              className="font-[family-name:var(--font-display)] text-[1.45rem] uppercase tracking-[0.04em] text-[var(--gold-bright)]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Speedy
            </p>
          </div>
        </Link>
        <a
          href="https://www.speedyauto704.com/"
          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-[var(--gold)] transition hover:border-[var(--gold)] hover:bg-[rgba(212,175,55,0.08)]"
        >
          Shop
        </a>
      </header>

      <main className={hideNav ? "flex-1" : "safe-bottom flex-1"}>{children}</main>
      {!hideNav ? <BottomNav /> : null}
    </div>
  );
}

function WrenchCarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--gold-bright)]">
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />
    </svg>
  );
}

function CarWrenchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--gold-bright)]">
      <path d="M4 15.5 7 11h3l1.2-2.5h5.2L18 11h2.5l1 2.5H20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8" cy="17" r="1.6" fill="currentColor" />
      <circle cx="16.5" cy="17" r="1.6" fill="currentColor" />
    </svg>
  );
}
