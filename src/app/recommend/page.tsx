import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import { ShareActions } from "@/components/ShareActions";
import { SHARE } from "@/lib/share";

export const metadata: Metadata = {
  title: "Recommend Speedy",
  description: "Send Speedy Mobile Auto Repair to a friend or send a mechanic the hiring link.",
  alternates: { canonical: SHARE.recommend },
  openGraph: {
    title: "Recommend Speedy Mobile Auto Repair",
    description: "Charlotte mobile and shop auto repair. One tap to book.",
    url: SHARE.recommend,
    images: [SHARE.ogImage],
  },
};

export default function RecommendPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Share Speedy
        </p>
        <h1 className="section-title">Recommend in one tap</h1>
        <p className="muted text-sm">
          The link is short on purpose: speedyauto704.com/app. Share that, not a long Vercel URL.
        </p>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)]">Send to a customer</h2>
          <p className="muted text-sm">{SHARE.customerText}</p>
          <ShareActions
            title="Speedy Mobile Auto Repair"
            text={SHARE.customerText}
            url={SHARE.app}
          />
        </section>

        <section className="panel space-y-3">
          <h2 className="text-[var(--gold-bright)]">Send to a mechanic</h2>
          <p className="muted text-sm">{SHARE.mechanicText}</p>
          <ShareActions
            title="Join Speedy Network"
            text={SHARE.mechanicText}
            url={SHARE.mechanic}
          />
        </section>
      </div>
    </AppShell>
  );
}
