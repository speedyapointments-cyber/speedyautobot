"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/book", label: "Book", icon: BookIcon },
  { href: "/track", label: "Track", icon: TrackIcon },
  { href: "/rate", label: "Rate", icon: RateIcon },
  { href: "/apply", label: "Apply", icon: ApplyIcon },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[rgba(8,8,8,0.92)] backdrop-blur-xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-2 pb-2">
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          const Icon = tab.icon;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`flex flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[0.68rem] font-medium tracking-wide transition ${
                  active
                    ? "text-[var(--gold-bright)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                <Icon active={active} />
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
      />
      <path
        d="M8 3v4M16 3v4M4 10h16"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrackIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
      />
      <path
        d="M12 8v4l3 2"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RateIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m12 3.8 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.2 7.2 18.7l.9-5.4L4.2 9.5l5.4-.8L12 3.8Z"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
        strokeLinejoin="round"
        fill={active ? "rgba(240,201,74,0.2)" : "none"}
      />
    </svg>
  );
}

function ApplyIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
      />
      <rect
        x="4"
        y="7"
        width="16"
        height="14"
        rx="2"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
      />
      <path
        d="M9 13h6M12 10v6"
        stroke={active ? "var(--gold-bright)" : "currentColor"}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
