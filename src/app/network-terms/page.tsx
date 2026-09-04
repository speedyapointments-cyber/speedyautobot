import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { InsuranceQuotes } from "@/components/InsuranceQuotes";

export default function NetworkTermsPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Hiring policy</p>
        <h1 className="section-title">Network vendor terms</h1>
        <p className="muted text-sm">
          Draft operating rules for Speedy Network. Charlotte is the live hub.
          Applications are accepted nationwide. This is not a signed contract and is
          not legal advice.
        </p>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">National intake, local launch</h2>
          <p className="muted text-sm">
            The goal is to collect qualified vendors in cities across the U.S. We do
            not offer customer service in a new city until that city has insured,
            Academy-checked people on the bench. Applying from Atlanta does not mean
            Speedy is open in Atlanta tomorrow.
          </p>
          <Link href="/markets" className="text-sm text-[var(--gold-bright)] underline">Open markets list</Link>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">What this is</h2>
          <p className="muted text-sm">
            Independent vendor marketplace. Not employees. Marvin assigns work. No auto-dispatch.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Labor pay band</h2>
          <p className="muted text-sm">ICE $22 / $38 / $55. EV $35 / $52 / $75. Flagged hours. Parts not commissioned.</p>
        </section>

        <InsuranceQuotes />
        <Link href="/apply" className="btn-gold">Back to application</Link>
      </div>
    </AppShell>
  );
}
