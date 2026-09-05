import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Logo } from "@/components/Logo";
import { FAQ } from "@/lib/faq";

export default function FaqPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <Logo className="h-14 w-auto object-contain object-left" />
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Questions</p>
        <h1 className="section-title">FAQ</h1>
        <p className="muted text-sm">
          Straight answers for the roster. Brand stays Speedy. This is not legal advice.
        </p>
        <ul className="space-y-3">
          {FAQ.map((item) => (
            <li key={item.q} className="panel space-y-2">
              <p className="text-sm text-[var(--gold-bright)]">{item.q}</p>
              <p className="muted text-sm">{item.a}</p>
            </li>
          ))}
        </ul>
        <Link href="/apply" className="btn-gold">Open the start checklist</Link>
        <Link href="/board" className="btn-ghost">Message board</Link>
      </div>
    </AppShell>
  );
}
