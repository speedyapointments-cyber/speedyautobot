"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "./RoleSwitch";

const CUSTOMER = [
  { href: "/", label: "HOME" },
  { href: "https://www.speedyauto704.com/", label: "SHOP" },
  { href: "/book", label: "BOOK" },
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
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#222] bg-[#111]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <ul className={`mx-auto grid max-w-lg px-1 pt-2 pb-2 ${tabs.length === 3 ? "grid-cols-3" : "grid-cols-5"}`}>
        {tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <li key={tab.href + tab.label}>
              <Link
                href={tab.href}
                className={`flex flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] ${
                  active ? "text-[#c9a227]" : "text-[#d7d7d7]"
                }`}
              >
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
