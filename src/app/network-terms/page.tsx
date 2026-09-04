import Link from "next/link";
import { AppShell } from "@/components/AppShell";

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
          <p className="muted text-sm">
            Marvin assigns work. There is no auto-dispatch. You may decline jobs.
            You may work for other shops. You bring your own tools, vehicle, and
            insurance.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Labor pay band</h2>
          <p className="muted text-sm">
            You are paid on <strong className="text-[var(--ink)]">flagged / book hours</strong> for
            the job, not on clock time and not on a raw percent of a padded labor
            line. The band is <strong className="text-[var(--ink)]">$22 to $55 per flagged hour</strong>.
            $55 is the tap-out. Parts, shop supplies, tax, and card fees are not commissioned.
          </p>
          <ul className="muted text-sm space-y-2 list-disc pl-5">
            <li>
              <strong className="text-[var(--ink)]">Level 1 — Provisional: $22 / flagged hour</strong>.
              Docs + interview approved. First 10 completed jobs.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Level 2 — Network: $38 / flagged hour</strong>.
              10 jobs, 4.6+ rating, insurance current, no safety flags.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Level 3 — Specialist: $55 / flagged hour</strong>.
              Tap-out. 25 jobs and 4.8+ rating, or a verified specialist cert plus a
              practical check on that skill.
            </li>
          </ul>
          <p className="muted text-sm">
            Raises follow skill approval, rating, and clean comeback history. A new
            approved skill pays at your current level on that skill’s tickets. Speedy
            can drop a level after two workmanship comebacks or any insurance lapse.
            Nobody is paid above $55 per flagged hour.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Ticket math</h2>
          <ul className="muted text-sm space-y-2 list-disc pl-5">
            <li>Example: brakes flagged at 2.0 hours. Level 2 vendor earns 2 × $38 = $76. Parts are reimbursed at receipt cost if Speedy authorized the purchase.</li>
            <li>If the same job is flagged 2.0 hours at Level 3, pay is 2 × $55 = $110. That is the maximum labor payout for those hours.</li>
            <li>Diagnostic / PMI uses the posted book time at your level rate.</li>
            <li>After-hours roadside (after 6pm or Sunday): +$25 trip bonus after the job is complete.</li>
            <li>Customer no-show after you arrive: 50% of the posted trip / diagnostic fee, if Speedy collects it.</li>
            <li>5% of labor pay is held 30 days as a quality reserve, then released if there is no comeback on that ticket.</li>
            <li>Payouts weekly by ACH after the customer is charged and the job is marked complete with photos.</li>
          </ul>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Warranty and comebacks</h2>
          <p className="muted text-sm">
            Workmanship labor is warrantied 30 days or 1,000 miles, whichever comes
            first, unless the ticket says otherwise. If the comeback is workmanship,
            you redo the labor at $0. Defective parts follow the parts source.
            Customer-supplied parts carry no Speedy or vendor parts warranty.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Vetting — nobody works pending</h2>
          <ol className="muted text-sm space-y-2 list-decimal pl-5">
            <li>Application and skill list.</li>
            <li>Document pack (ID, license, insurance, W-9, photos).</li>
            <li>Background and driving-record check with written consent.</li>
            <li>Skills interview. Practical check for brakes, tint, no-start, or kits.</li>
            <li>Signed vendor agreement before the first paid ticket.</li>
            <li>First three jobs reviewed (photos + customer rating). Then Level 1 active.</li>
          </ol>
          <p className="muted text-sm">
            Speedy can deny or deactivate for failed checks, lapsed insurance, safety
            issues, off-app cash jobs, fake skills, or ratings that stay under 4.4.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Insurance you must carry</h2>
          <ul className="muted text-sm space-y-2 list-disc pl-5">
            <li>Commercial general liability: $1,000,000 per occurrence.</li>
            <li>Garagekeepers legal liability: at least $50,000 per vehicle (customer cars in your care).</li>
            <li>Commercial auto on the service vehicle: $1,000,000 combined single limit. Personal auto is not enough.</li>
            <li>Certificate must name Speedy Mobile Auto Repair as additional insured and stay current.</li>
          </ul>
          <p className="muted text-sm">
            Speedy does not insure your tools, your van, your injuries, or damage you
            cause. That is why garagekeepers and commercial auto are required before
            any driveway or roadside job.
          </p>
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)] text-lg">Covering the business</h2>
          <ul className="muted text-sm space-y-2 list-disc pl-5">
            <li>Written estimate and customer authorization before extra work, consistent with the North Carolina Motor Vehicle Repair Act on covered jobs.</li>
            <li>Before-and-after photos on every ticket.</li>
            <li>No cash off-app. Circumventing Speedy on a Speedy-introduced customer is grounds for immediate removal and forfeiture of held reserves.</li>
            <li>You indemnify Speedy for claims arising from your work, vehicle, or helpers.</li>
            <li>Helpers you bring are your contractors. You are responsible for them.</li>
            <li>Fluid disposal and EPA rules (including 609 for A/C) are yours to follow.</li>
          </ul>
        </section>

        <Link href="/apply" className="btn-gold">
          Back to application
        </Link>
      </div>
    </AppShell>
  );
}
