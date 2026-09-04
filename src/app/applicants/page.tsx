import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { APPLICANTS } from "@/lib/applicants";

export default function ApplicantsPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Hiring roster</p>
        <h1 className="section-title">People who can apply</h1>
        <p className="muted text-sm">
          Ten detailed vendor profiles shop owners can review. These are roster
          cards for dispatch practice — not a public employee list. Real applicants
          still use the apply form.
        </p>
        <p className="text-sm text-[var(--gold-bright)]">{APPLICANTS.length} people on the list</p>
        <ul className="space-y-4">
          {APPLICANTS.map((person) => (
            <li key={person.id} className="panel space-y-2">
              <p className="text-xs text-[var(--ink-muted)]">{person.id} · {person.status}</p>
              <p className="text-xl" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                {person.name}
              </p>
              <p className="text-sm text-[var(--gold-bright)]">{person.role} · {person.payBand}</p>
              <p className="muted text-sm">
                {person.zip} · {person.years} years · {person.skills.join(", ")}
              </p>
              <p className="muted text-sm">{person.about}</p>
              <p className="muted text-xs">Van: {person.vehicle}</p>
              <p className="muted text-xs">Certs: {person.certs}</p>
              <p className="muted text-xs">Insurance: {person.insurance}</p>
              <Link href="/apply" className="inline-block text-xs text-[var(--gold-bright)] underline">
                Open apply form
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/shop" className="btn-gold">Back to shop board</Link>
      </div>
    </AppShell>
  );
}
