import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { GarageCard } from "@/components/GarageCard";
import { LocationCard } from "@/components/LocationCard";
import { SHOP } from "@/lib/shop";

export default function BookPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-6">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Appointments</p>
        <h1 className="section-title">Book your repair</h1>
        <p className="muted text-sm">
          Pin the car, confirm what is due on this vehicle, then pick a time.
        </p>
        <GarageCard />
        <LocationCard title="Where should we come?" />
        <div className="panel space-y-4">
          <p className="text-lg text-[var(--gold-bright)]">ARI Portal</p>
          <a href={SHOP.bookUrl} target="_blank" rel="noopener noreferrer" className="btn-gold cta-pulse">
            Open Booking Portal
          </a>
          <a href={`tel:${SHOP.phoneTel}`} className="btn-ghost">
            Prefer to call? {SHOP.phone}
          </a>
          <Link href="/garage" className="btn-ghost">
            Update mileage first
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)]">
          <iframe title="Speedy ARI booking" src={SHOP.bookUrl} className="h-[62vh] w-full bg-white" allow="payment *; geolocation *" />
        </div>
      </div>
    </AppShell>
  );
}
