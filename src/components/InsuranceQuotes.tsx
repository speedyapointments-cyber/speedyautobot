import { INSURANCE_LINKS, INSURANCE_MINIMUMS } from "@/lib/insurance";

export function InsuranceQuotes() {
  return (
    <section className="panel space-y-3">
      <p className="text-sm text-[var(--gold-bright)]">Get insured before you apply</p>
      <p className="muted text-sm">{INSURANCE_MINIMUMS}</p>
      <p className="muted text-xs">
        Speedy is not an insurance agent and does not earn a commission on these
        links. Quotes are between you and the carrier. Underwriting decides.
      </p>
      <ul className="space-y-3">
        {INSURANCE_LINKS.map((item) => (
          <li key={item.name} className="space-y-1">
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--gold-bright)] underline"
            >
              {item.cta}
            </a>
            <p className="muted text-xs">
              {item.name}. {item.fit}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
