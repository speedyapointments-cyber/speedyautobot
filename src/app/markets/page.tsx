import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Logo } from "@/components/Logo";
import { LAUNCH_RULE, MARKETS } from "@/lib/markets";

export default function MarketsPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <Logo className="h-14 w-auto object-contain object-left" />
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Speedy AUTO 704</p>
        <h1 className="section-title">Fill the bench. Then the city.</h1>
        <p className="muted text-sm">{LAUNCH_RULE}</p>
        <p className="muted text-sm">
          Same site, same plan. Each city is its own page. Add another city later by
          adding one row — not a new website.
        </p>
        <Link href="/apply" className="btn-gold">Join the Speedy roster</Link>
        <ul className="space-y-3">
          {MARKETS.map((market) => (
            <li key={market.slug} className="panel space-y-1">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">{market.status}</p>
              <p className="text-xl" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                {market.city}, {market.state}
              </p>
              <p className="muted text-sm">{market.note}</p>
              <p className="text-sm text-[var(--gold-bright)]">Need: {market.need}</p>
              <p className="text-xs text-[var(--ink-muted)]">{market.shop ? "Physical shop" : "No Speedy location — page and roster only"}</p>
              <Link href={`/nc/${market.slug}`.replace("/nc/", `/${market.state === "US" ? "us" : market.state.toLowerCase()}/`).replace("/nc/", "/")} className="text-sm text-[var(--gold-bright)] underline">
                Open {market.city} page
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AppShell>
  );
}
