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
          Ten detailed vendor cards across live and waitlist cities. Charlotte and
          Concord can take tickets. Other cities stay dark until the bench is qualified.
        </p>
        <Link href="/markets" className="btn-ghost">See every market</Link>
        <ul className="space-y-4">
          {APPLICANTS.map((person) => (
            <li key={person.id} className="panel space-y-2">
              <p className="text-xs text-[var(--ink-muted)]">{person.id} · {person.status}</p>
              <p className="text-xl" style={{ fontFamily: "var(--font-display), sans-serif" }}>{person.name}</p>
              <p className="text-sm text-[var(--gold-bright)]">{person.role} · {person.payBand}</p>
              <p className="muted text-sm">
                {person.city}, {person.state} {person.zip} · {person.years} years · {person.skills.join(", ")}
              </p>
              <p className="muted text-sm">{person.about}</p>
              <p className="muted text-xs">Van: {person.vehicle}</p>
              <p className="muted text-xs">Certs: {person.certs}</p>
              <p className="muted text-xs">Insurance: {person.insurance}</p>
            </li>
          ))}
        </ul>
      </div>
    </AppShell>
  );
}
