import { AppShell } from "@/components/AppShell";
import { LocationCard } from "@/components/LocationCard";
import { SHOP } from "@/lib/shop";

export default function BookPage() {
  return (
    <AppShell>
      <div className="px-5 py-6">
        <p className="animate-rise text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Appointments
        </p>
        <h1 className="section-title animate-rise-delay-1 mt-2">Book your repair</h1>
        <p className="muted animate-rise-delay-2 mt-3 text-sm">
          Pin your driveway or roadside first, then pick a time. {SHOP.tagline}.
        </p>

        <div className="mt-6">
          <LocationCard title="Where should we come?" />
        </div>

        <div className="panel animate-rise-delay-3 mt-6 space-y-4">
          <div>
            <p className="text-xs tracking-[0.18em] text-[var(--ink-muted)] uppercase">
              Booking partner
            </p>
            <p className="mt-1 text-lg text-[var(--gold-bright)]">ARI Portal</p>
          </div>
          <a
            href={SHOP.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold cta-pulse"
          >
            Open Booking Portal
          </a>
          <a href={`tel:${SHOP.phoneTel}`} className="btn-ghost">
            Prefer to call? {SHOP.phone}
          </a>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)]">
          <iframe
            title="Speedy ARI booking"
            src={SHOP.bookUrl}
            className="h-[62vh] w-full bg-white"
            allow="payment *; geolocation *"
          />
        </div>
      </div>
    </AppShell>
  );
}
