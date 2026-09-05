import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { TextStart } from "@/components/TextStart";
import { SHOP } from "@/lib/shop";

const LOCKUP =
  "https://static.wixstatic.com/media/d5cd96_19236b40475a4321b097fcf9e73b3836~mv2.png";

export default function HomePage() {
  return (
    <AppShell>
      <section className="px-5 pt-6 pb-4">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-[2rem] font-semibold leading-[0.95] tracking-tight text-white">
            SPEEDY AUTO
            <br />
            704
          </h1>
        </div>
        <Link href="https://www.speedyauto704.com/" className="mt-3 inline-block text-sm font-semibold text-[#c9a227]">
          General Info &gt;
        </Link>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <a href={SHOP.bookUrl} target="_blank" rel="noopener noreferrer" className="btn-gold rounded-2xl py-5 text-sm font-semibold tracking-wide">
            BOOK
          </a>
          <Link href="/text" className="btn-ghost rounded-2xl py-5 text-sm font-semibold tracking-wide">
            ROADSIDE
          </Link>
        </div>

        <div className="mt-3">
          <TextStart label="TEXT START" className="btn-gold rounded-2xl py-5 text-sm font-semibold tracking-wide" />
        </div>

        <p className="mt-5 text-[1.05rem] text-white">Text START first so we can reply.</p>
        <p className="mt-3 text-[1.02rem]">
          <span className="font-semibold text-[#c9a227]">Hours:</span>{" "}
          <span className="text-white">Mon–Fri 8am–6pm, Sat 8am–2pm.</span>
        </p>
        <p className="mt-2 text-[1.02rem]">
          <span className="font-semibold text-[#c9a227]">24 Hour Roadside Assistance:</span>{" "}
          <a href={`tel:${SHOP.phoneTel}`} className="text-white underline-offset-2">{SHOP.phone.replace(/[()]/g, "").replace(" ", "-")}</a>
        </p>
        <a href="https://maps.google.com/?q=6016+McDaniel+Lane+Suite+D+Charlotte+NC+28213" className="mt-2 block text-[1.02rem] text-white underline decoration-white/40">
          {SHOP.address}
        </a>
      </section>

      <section className="relative mt-6 overflow-hidden">
        <img src={LOCKUP} alt="" className="absolute inset-0 h-full w-full scale-150 object-cover opacity-35" />
        <div className="relative px-5 py-16">
          <img src={LOCKUP} alt="Speedy Mobile Auto Repair and Shop Services" className="h-16 w-auto object-contain" />
          <p className="mt-10 inline-block rounded-full border border-[#c9a227] px-8 py-3 text-lg tracking-[0.12em] text-[#f0c94a]">
            CHARLOTTE, NC
          </p>
        </div>
      </section>
    </AppShell>
  );
}
