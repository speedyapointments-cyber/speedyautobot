import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { FeedbackBox } from "@/components/FeedbackBox";
import { Logo } from "@/components/Logo";

export default function FeedbackPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <Logo className="h-14 w-auto object-contain object-left" />
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Desk</p>
        <h1 className="section-title">Tell us</h1>
        <p className="muted text-sm">
          Use this when the app fails, a city page is wrong, or the FAQ did not cover it.
        </p>
        <FeedbackBox />
        <Link href="/faq" className="btn-ghost">Written FAQ</Link>
        <Link href="/board" className="btn-ghost">Open the full board</Link>
      </div>
    </AppShell>
  );
}
