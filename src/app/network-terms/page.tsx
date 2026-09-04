import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { InsuranceQuotes } from "@/components/InsuranceQuotes";

export default function NetworkTermsPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Hiring policy
        </p>
        <h1 className="section-title">Network vendor terms</h1>
        <p className="muted text-sm">
          Draft operating rules for Speedy Network vendors in the Charlotte metro.
          This is not a signed contract and is not legal advice. No paid jobs go out
          until documents are approved and a vendor agreement is signed.
        </p>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">What this is</h2>
          <p className="muted text-sm">
            Speedy Network is a dispatch marketplace for independent mobile and
            shop vendors. Approved vendors are not employees, partners, or agents of
            Speedy Mobile Auto Repair. There is no hourly clock wage, salary,
            overtime, benefits, or workers’ compensation from Speedy. Pay is per
            completed, approved ticket only.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Labor pay band</h2>
          <p className="muted text-sm">
            Flagged / book hours only. Band is $22 to $55 per flagged hour. $55 is
            the tap-out. Parts are not commissioned.
          </p>
          <ul className="muted text-sm space-y-2 list-disc pl-5">
            <li>Level 1 Provisional: $22 / flagged hour</li>
            <li>Level 2 Network: $38 / flagged hour</li>
            <li>Level 3 Specialist: $55 / flagged hour</li>
          </ul>
        </section>

        <InsuranceQuotes />

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Vetting</h2>
          <p className="muted text-sm">
            Application, documents, background check, Academy quiz, practical, then
            a signed vendor agreement. Nobody works pending.
          </p>
        </section>

        <Link href="/apply" className="btn-gold">
          Back to application
        </Link>
      </div>
    </AppShell>
  );
}
