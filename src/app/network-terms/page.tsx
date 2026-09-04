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
          Draft operating rules. Charlotte is the live hub. Applications are accepted
          nationwide. This is not a signed contract and is not legal advice. No paid
          jobs go out until documents are approved and a vendor agreement is signed.
        </p>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">National intake, local launch</h2>
          <p className="muted text-sm">
            Collect qualified vendors first. Offer customer service in that city only
            after the bench is insured and Academy-checked. An application from a new
            city is not a launch announcement.
          </p>
          <Link href="/markets" className="text-sm text-[var(--gold-bright)] underline">Open markets list</Link>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">What this is</h2>
          <p className="muted text-sm">
            Speedy Network is a dispatch marketplace for independent mobile and shop
            vendors. Approved vendors are not employees, partners, or agents of Speedy
            Mobile Auto Repair. No hourly clock wage, salary, overtime, benefits, or
            workers’ compensation from Speedy. Pay is per completed, approved ticket only.
          </p>
          <p className="muted text-sm">
            Marvin assigns work. There is no auto-dispatch. You may decline jobs. You
            may work for other shops. You bring your own tools, vehicle, and insurance.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Labor pay band</h2>
          <p className="muted text-sm">
            Paid on flagged / book hours. ICE $22 / $38 / $55. EV $35 / $52 / $75.
            Parts are not commissioned.
          </p>
          <ul className="muted text-sm space-y-2 list-disc pl-5">
            <li>Level 1 Provisional: $22 / flagged hour. Docs + interview. First 10 jobs.</li>
            <li>Level 2 Network: $38 / flagged hour. 10 jobs, 4.6+ rating, insurance current.</li>
            <li>Level 3 Specialist: $55 tap-out. 25 jobs and 4.8+ or cert + practical.</li>
            <li>EV-1 / EV-2 / EV-3: $35 / $52 / $75 after EV Academy and HV practical.</li>
          </ul>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Ticket math</h2>
          <ul className="muted text-sm space-y-2 list-disc pl-5">
            <li>Brakes flagged 2.0 hours at Level 2 = $76 labor.</li>
            <li>After-hours roadside (after 6pm or Sunday): +$25 trip bonus.</li>
            <li>5% of labor pay held 30 days, then released if there is no comeback.</li>
            <li>Payouts weekly by ACH after photos and the customer is charged.</li>
          </ul>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Warranty</h2>
          <p className="muted text-sm">
            Workmanship labor is warrantied 30 days or 1,000 miles. Workmanship comeback
            is redone at $0 labor. Customer-supplied parts have no Speedy parts warranty.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Vetting</h2>
          <ol className="muted text-sm space-y-2 list-decimal pl-5">
            <li>Application with city, state, ZIP, and skill list.</li>
            <li>Entrance test to gauge experience.</li>
            <li>Document pack and insurance certificate.</li>
            <li>Background and driving-record check.</li>
            <li>Academy quiz plus practical on claimed install skills.</li>
            <li>Signed vendor agreement before the first paid ticket in a live market.</li>
          </ol>
        </section>

        <InsuranceQuotes />

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Covering the business</h2>
          <ul className="muted text-sm space-y-2 list-disc pl-5">
            <li>Written estimate and authorization before extra work.</li>
            <li>Before-and-after photos on every ticket.</li>
            <li>No cash off-app on a Speedy-introduced customer.</li>
            <li>You indemnify Speedy for claims from your work, vehicle, or helpers.</li>
          </ul>
        </section>

        <Link href="/apply" className="btn-gold">Back to application</Link>
      </div>
    </AppShell>
  );
}
