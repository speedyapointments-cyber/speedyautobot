import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Logo } from "@/components/Logo";
import { TextStart } from "@/components/TextStart";
import { MARKETS, marketBySlug } from "@/lib/markets";
import { SHOP } from "@/lib/shop";

export function generateStaticParams() {
  return MARKETS.map((market) => ({ slug: market.slug }));
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const market = marketBySlug(slug);
  if (!market) notFound();

  const live = market.status === "Live";

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <Logo className="h-14 w-auto object-contain object-left" />
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Speedy Auto 704 · {market.city}
        </p>
        <h1 className="section-title">
          {market.city}, {market.state}
        </h1>
        <p className="text-sm text-[var(--gold-bright)]">{market.status}</p>
        <p className="muted text-sm">{market.note}</p>
        <p className="muted text-sm">
          {market.shop
            ? "This is the Speedy shop city. Book or text Start."
            : "No Speedy building here. Same badges, same desk. We take vendor applications now. Customer work starts after the local roster is qualified."}
        </p>
        <p className="text-sm text-[var(--gold-bright)]">Roster need: {market.need}</p>

        {live ? (
          <>
            <TextStart label="TEXT START" />
            <a href={SHOP.bookUrl} className="btn-ghost" target="_blank" rel="noopener noreferrer">
              BOOK
            </a>
          </>
        ) : (
          <p className="muted text-sm">
            Customer booking for this city is closed until the bench is ready.
            If you are already a Speedy customer traveling through, text Start and the
            Charlotte desk will tell you if a vendor can roll.
          </p>
        )}

        <Link href={`/apply?city=${encodeURIComponent(market.city)}`} className="btn-gold">
          Apply to the {market.city} roster
        </Link>
        <Link href="/markets" className="btn-ghost">
          All cities
        </Link>
      </div>
    </AppShell>
  );
}
