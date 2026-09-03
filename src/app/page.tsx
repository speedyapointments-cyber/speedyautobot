import { AppShell } from "@/components/AppShell";
import { TextAvaButton } from "@/components/TextAvaButton";
import { SHOP } from "@/lib/shop";

export default function HomePage() {
  return (
    <AppShell>
      <section className="hero-wash relative min-h-[78dvh] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_40%)]" />
        <div className="relative flex min-h-[78dvh] flex-col justify-end px-5 pb-8 pt-16">
          <p className="animate-rise text-xs font-medium tracking-[0.28em] text-[var(--gold)] uppercase">
            Charlotte · Mobile &amp; Shop
          </p>
          <h1
            className="animate-rise-delay-1 mt-2 max-w-[12ch] text-[clamp(3.2rem,14vw,4.4rem)] leading-[0.88] font-semibold uppercase text-[var(--ink)]"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            <span className="gold-text">Speedy</span>
            <br />
            Mobile Auto Repair
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-[28ch] text-[0.98rem] text-[var(--ink-muted)]">
            {SHOP.tagline}. Independently owned. Excellence on every visit.
          </p>

          <div className="animate-rise-delay-3 mt-7 flex flex-col gap-3">
            <a
              href={SHOP.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold cta-pulse"
            >
              Book
            </a>
            <a href={`tel:${SHOP.roadsideTel}`} className="btn-ghost">
              24 Hour Roadside
            </a>
            <div>
              <TextAvaButton className="btn-ghost" />
              <p className="muted mt-2 text-center text-xs">
                Text START first so we can reply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="panel animate-rise">
          <h2 className="section-title text-[1.9rem]!">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{SHOP.hours.weekdays}</li>
            <li>{SHOP.hours.saturday}</li>
            <li>{SHOP.hours.sunday}</li>
          </ul>
          <p className="muted mt-4 text-sm">{SHOP.address}</p>
          <a
            href={`tel:${SHOP.phoneTel}`}
            className="mt-2 inline-block text-sm text-[var(--gold-bright)]"
          >
            {SHOP.phone}
          </a>
        </div>
      </section>

      <section className="px-5 pb-8">
        <div className="panel animate-rise">
          <h2 className="section-title text-[1.9rem]!">Pricing</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {SHOP.pricing.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-8">
        <div className="panel animate-rise">
          <h2 className="section-title text-[1.9rem]!">Pay</h2>
          <p className="mt-4 text-sm">{SHOP.payAccepted.join(" · ")}</p>
          <p className="muted mt-2 text-sm">{SHOP.payDeclined.join(". ")}.</p>
        </div>
      </section>
    </AppShell>
  );
}
