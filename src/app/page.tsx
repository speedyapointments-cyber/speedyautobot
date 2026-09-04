import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { GarageCard } from "@/components/GarageCard";
import { RoleHomeLinks, RoleSwitch } from "@/components/RoleSwitch";
import { ShareActions } from "@/components/ShareActions";
import { SHOP } from "@/lib/shop";
import { SHARE } from "@/lib/share";

export default function HomePage() {
  return (
    <AppShell>
      <section className="hero-wash relative min-h-[70dvh] overflow-hidden">
        <div className="relative flex min-h-[70dvh] flex-col justify-end px-5 pb-8 pt-16">
          <p className="animate-rise text-xs font-medium tracking-[0.28em] text-[var(--gold)] uppercase">
            Charlotte · Customers · Techs · Shop
          </p>
          <h1
            className="animate-rise-delay-1 mt-2 max-w-[12ch] text-[clamp(3.2rem,14vw,4.4rem)] leading-[0.88] font-semibold uppercase text-[var(--ink)]"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            <span className="gold-text">Speedy</span>
            <br />
            Network
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-[32ch] text-[0.98rem] text-[var(--ink-muted)]">
            One app. Customers book and pin the car. Mobile mechanics take jobs.
            Shop owners dispatch. {SHOP.tagline}.
          </p>
          <div className="animate-rise-delay-3 mt-6 space-y-3">
            <RoleSwitch />
            <RoleHomeLinks />
            <Link href="/board" className="btn-ghost">Message board</Link>
            <a href={`tel:${SHOP.phoneTel}`} className="btn-ghost">Call {SHOP.phone}</a>
          </div>
        </div>
      </section>
      <section className="px-5 py-8"><GarageCard /></section>
      <section className="px-5 pb-8">
        <div className="panel space-y-3">
          <h2 className="section-title text-[1.9rem]!">Share this app</h2>
          <ShareActions title="Speedy Mobile Auto Repair" text={SHARE.customerText} url={SHARE.app} />
        </div>
      </section>
    </AppShell>
  );
}
