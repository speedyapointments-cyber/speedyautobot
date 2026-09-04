"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "./RoleSwitch";

const CUSTOMER = [
  { href: "/", label: "Home" },
  { href: "/book", label: "Book" },
  { href: "/track", label: "Track" },
  { href: "/garage", label: "Garage" },
  { href: "/for", label: "Mode" },
];

const MECHANIC = [
  { href: "/tech", label: "Jobs" },
  { href: "/academy", label: "Academy" },
  { href: "/apply", label: "Apply" },
  { href: "/network-terms", label: "Pay" },
  { href: "/for", label: "Mode" },
];

const SHOP = [
  { href: "/shop", label: "Board" },
  { href: "/book", label: "Book" },
  { href: "/apply", label: "Hire" },
  { href: "/login", label: "Staff" },
  { href: "/for", label: "Mode" },
];

export function BottomNav() {
  const pathname = usePathname();
  const { role } = useRole();
  const tabs = role === "mechanic" ? MECHANIC : role === "shop" ? SHOP : CUSTOMER;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[rgba(8,8,8,0.92)] backdrop-blur-xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-2 pb-2">
        {tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <li key={tab.href + tab.label}>
              <Link
                href={tab.href}
                className={`flex flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[0.68rem] font-medium tracking-wide ${
                  active ? "text-[var(--gold-bright)]" : "text-[var(--ink-muted)]"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-[var(--gold-bright)]" : "bg-[#3a3a3a]"}`} />
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
