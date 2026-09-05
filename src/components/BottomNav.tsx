"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "./RoleSwitch";
import { SHOP } from "@/lib/shop";

const MECHANIC = [
  { href: "/tech", label: "Jobs" },
  { href: "/academy", label: "Academy" },
  { href: "/apply", label: "Apply" },
  { href: "/network-terms", label: "Pay" },
  { href: "/for", label: "Mode" },
];

const SHOP_TABS = [
  { href: "/shop", label: "Board" },
  { href: "/book", label: "Book" },
  { href: "/apply", label: "Hire" },
  { href: "/login", label: "Staff" },
  { href: "/for", label: "Mode" },
];

export function BottomNav() {
  const pathname = usePathname();
  const { role } = useRole();

  if (role === "mechanic" || role === "shop") {
    const tabs = role === "mechanic" ? MECHANIC : SHOP_TABS;
    return (
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#222] bg-[#111]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <ul className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-2 pb-2">
          {tabs.map((tab) => {
            const active = pathname.startsWith(tab.href);
            return (
              <li key={tab.href + tab.label}>
                <Link href={tab.href} className={`flex flex-col items-center px-1 py-2 text-[0.72rem] font-semibold tracking-[0.12em] ${active ? "text-[#c9a227]" : "text-[#d7d7d7]"}`}>
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#222] bg-[#111]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} aria-label="Primary">
      <ul className="mx-auto grid max-w-lg grid-cols-3 px-1 pt-2 pb-2">
        <li>
          <Link href="/" className={`flex flex-col items-center py-2 text-[0.72rem] font-semibold tracking-[0.16em] ${pathname === "/" ? "text-[#c9a227]" : "text-[#d7d7d7]"}`}>
            HOME
          </Link>
        </li>
        <li>
          <a href={`tel:${SHOP.phoneTel}`} className="flex flex-col items-center py-2 text-[0.72rem] font-semibold tracking-[0.16em] text-[#d7d7d7]">
            CALL
          </a>
        </li>
        <li>
          <Link href="/book" className={`flex flex-col items-center py-2 text-[0.72rem] font-semibold tracking-[0.16em] ${pathname.startsWith("/book") ? "text-[#c9a227]" : "text-[#d7d7d7]"}`}>
            BOOK
          </Link>
        </li>
      </ul>
    </nav>
  );
}
