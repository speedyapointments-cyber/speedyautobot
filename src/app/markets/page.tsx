import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { LAUNCH_RULE, MARKETS } from "@/lib/markets";

export default function MarketsPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Markets</p>
        <h1 className="section-title">Nation first. City when ready.</h1>
        <p className="muted text-sm">{LAUNCH_RULE}</p>
        <Link href="/apply" className="btn-gold">Apply from any U.S. city</Link>
        <ul className="space-y-3">
          {MARKETS.map((market) => (
            <li key={`${market.city}-${market.state}`} className="panel space-y-1">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">{market.status}</p>
              <p className="text-xl" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                {market.city}, {market.state}
              </p>
              <p className="muted text-sm">{market.note}</p>
              <p className="text-sm text-[var(--gold-bright)]">Need: {market.need}</p>
            </li>
          ))}
        </ul>
      </div>
    </AppShell>
  );
}
