"use client";

import Link from "next/link";
import { BottomNav } from "./BottomNav";

const LOCKUP =
  "https://static.wixstatic.com/media/d5cd96_19236b40475a4321b097fcf9e73b3836~mv2.png";

export function AppShell({
  children,
  hideNav = false,
}: {
  children: React.ReactNode;
  hideNav?: boolean;
}) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col">
      <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[rgba(7,7,7,0.88)] px-3 py-2.5 backdrop-blur-xl">
        <Link href="/" className="flex min-w-0 flex-1 items-center">
          <img
            src={LOCKUP}
            alt="Speedy Mobile Auto Repair and Shop Services"
            className="h-11 w-auto max-w-[78%] object-contain object-left"
          />
        </Link>
        <a
          href="https://www.speedyauto704.com/"
          className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-[var(--gold)] transition hover:border-[var(--gold)] hover:bg-[rgba(212,175,55,0.08)]"
        >
          Shop
        </a>
      </header>

      <main className={hideNav ? "flex-1" : "safe-bottom flex-1"}>{children}</main>
      {!hideNav ? <BottomNav /> : null}
    </div>
  );
}
