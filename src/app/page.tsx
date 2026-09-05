import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Logo } from "@/components/Logo";
import { TextStart } from "@/components/TextStart";
import { SHOP } from "@/lib/shop";

export default function HomePage() {
  return (
    <AppShell>
      <section className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-3">
          <Logo className="h-14 w-auto shrink-0 object-contain object-left" />
          <h1 className="text-[1.35rem] font-semibold leading-tight text-white">
            Speedy Mobile Auto
            <br />
            and Shop Services
          </h1>
        </div>

        <Link href="https://www.speedyauto704.com/" className="mt-4 inline-block text-sm font-semibold text-[#c9a227]">
          General Info &gt;
        </Link>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <a href={SHOP.bookUrl} target="_blank" rel="noopener noreferrer" className="btn-gold rounded-2xl py-5 text-sm font-semibold tracking-wide">
            BOOK
          </a>
          <Link href="/text" className="btn-ghost rounded-2xl py-5 text-sm font-semibold tracking-wide">
            24 HOUR ROADSIDE
          </Link>
          <a href={`tel:${SHOP.phoneTel}`} className="btn-ghost rounded-2xl py-5 text-sm font-semibold tracking-wide">
            CALL
          </a>
          <TextStart label="TEXT NOW 24/7" className="btn-gold rounded-2xl py-5 text-sm font-semibold tracking-wide" />
        </div>

        <p className="mt-5 text-[1.05rem] text-white">Text START first so we can reply.</p>
        <p className="mt-3 text-[1.02rem]">
          <span className="font-semibold text-white">Hours:</span>{" "}
          <span className="text-white">Mon–Fri 8am–6pm, Sat 8am–2pm.</span>
        </p>
        <p className="mt-2 text-[1.02rem]">
          <span className="font-semibold text-white">24 Hour Roadside Assistance:</span>{" "}
          <a href={`tel:${SHOP.phoneTel}`} className="font-semibold text-[#c9a227]">704-835-2577</a>
        </p>
        <a href="https://maps.google.com/?q=6016+McDaniel+Lane+Suite+D+Charlotte+NC+28213" className="mt-2 block text-[1.02rem] text-white">
          {SHOP.address}
        </a>
      </section>

      <section className="relative mt-8 min-h-[280px] overflow-hidden">
        <Logo className="absolute inset-0 h-full w-full scale-150 object-cover opacity-30" />
        <div className="relative px-5 py-16">
          <Logo className="h-16 w-auto object-contain" />
          <p className="mt-10 inline-block rounded-full border border-[#c9a227] px-8 py-3 text-lg tracking-[0.14em] text-[#f0c94a]">
            CHARLOTTE, NC
          </p>
        </div>
      </section>
    </AppShell>
  );
}
