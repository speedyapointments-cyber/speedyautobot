import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SHOP } from "@/lib/shop";

export default function HomePage() {
  return (
    <AppShell>
      <section className="hero-wash relative min-h-[78dvh] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_40%)]" />
        <div className="relative flex min-h-[78dvh] flex-col justify-end px-5 pb-8 pt-16">
          <p className="animate-rise text-xs font-medium tracking-[0.28em] text-[var(--gold)] uppercase">
            Charlotte · Mobile Service
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
            {SHOP.tagline} Independently owned. Excellence on every visit.
          </p>
          <div className="animate-rise-delay-3 mt-7 flex flex-col gap-3">
            <Link href="/book" className="btn-gold cta-pulse">
              Book Service
            </Link>
            <a href={`tel:${SHOP.phoneTel}`} className="btn-ghost">
              Call {SHOP.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="panel animate-rise">
          <h2 className="section-title text-[1.9rem]!">Why drivers call Speedy</h2>
          <p className="muted mt-2 text-sm">
            All makes and models. We come to your driveway, office, or roadside —
            and we earn your trust every step of the way.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              "Mobile diagnostics & repairs",
              "Roadside assistance in Charlotte",
              "Honest estimates before we wrench",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs tracking-wide text-[var(--ink-muted)] uppercase">
            {SHOP.hours}
          </p>
        </div>
      </section>
    </AppShell>
  );
}
