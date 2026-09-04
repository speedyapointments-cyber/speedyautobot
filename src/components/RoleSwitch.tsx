"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ROLE_KEY, ROLE_LABEL, type Role } from "@/lib/roles";

export function useRole() {
  const [role, setRole] = useState<Role>("customer");
  useEffect(() => {
    const saved = localStorage.getItem(ROLE_KEY) as Role | null;
    if (saved === "mechanic" || saved === "shop" || saved === "customer") setRole(saved);
  }, []);
  function choose(next: Role) {
    localStorage.setItem(ROLE_KEY, next);
    setRole(next);
  }
  return { role, choose };
}

export function RoleSwitch() {
  const { role, choose } = useRole();
  return (
    <div className="grid grid-cols-3 gap-2">
      {(["customer", "mechanic", "shop"] as Role[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => choose(item)}
          className={`rounded-xl border px-2 py-2 text-[0.7rem] uppercase tracking-wide ${
            role === item
              ? "border-[var(--gold)] bg-[rgba(212,175,55,0.12)] text-[var(--gold-bright)]"
              : "border-[var(--line)] text-[var(--ink-muted)]"
          }`}
        >
          {ROLE_LABEL[item]}
        </button>
      ))}
    </div>
  );
}

export function RoleHomeLinks() {
  const { role } = useRole();
  if (role === "mechanic") {
    return (
      <div className="flex flex-col gap-3">
        <Link href="/tech" className="btn-gold">Open mechanic board</Link>
        <Link href="/academy" className="btn-ghost">Academy</Link>
        <Link href="/apply" className="btn-ghost">Finish application</Link>
      </div>
    );
  }
  if (role === "shop") {
    return (
      <div className="flex flex-col gap-3">
        <Link href="/shop" className="btn-gold">Open shop console</Link>
        <Link href="/login" className="btn-ghost">Shop login</Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <Link href="/book" className="btn-gold cta-pulse">Book Service</Link>
      <Link href="/garage" className="btn-ghost">My vehicle + maintenance</Link>
    </div>
  );
}
