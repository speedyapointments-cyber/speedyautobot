"use client";

import Link from "next/link";
import { BottomNav } from "./BottomNav";
import { SHOP } from "@/lib/shop";

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
      <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[#070707] px-3 py-2.5">
        <Link href="/" className="flex min-w-0 flex-1 items-center">
          <img
            src={LOCKUP}
            alt="Speedy Mobile Auto Repair and Shop Services"
            className="h-12 w-auto max-w-[72%] object-contain object-left"
          />
        </Link>
        <a
          href={SHOP.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#c9a227] px-3.5 py-2 text-xs font-semibold text-black"
        >
          Book Now
        </a>
      </header>

      <main className={hideNav ? "flex-1" : "safe-bottom flex-1"}>{children}</main>
      {!hideNav ? <BottomNav /> : null}
    </div>
  );
}
