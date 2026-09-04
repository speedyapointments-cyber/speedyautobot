import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { COURSES } from "@/lib/academy";

export default function AcademyPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Speedy Academy
        </p>
        <h1 className="section-title">Get Speedy Certified</h1>
        <p className="muted text-sm">
          Same idea as a brand academy: short on-demand levels, a scored quiz, a
          certificate at the end. This is Speedy’s internal credential for Network
          tickets. It is not ASE and it is not a state license. Pass the quiz at 80%,
          then Marvin still does documents and a practical before live jobs.
        </p>

        <div className="panel space-y-2">
          <p className="text-sm text-[var(--gold-bright)]">How the levels work</p>
          <p className="muted text-sm">
            Level 1 quiz certificate = Fundamentals badge ($22 band after approval).
            Level 2 is a practical install check on a real car ($38). Level 3 is rating
            + volume or a specialist cert ($55 tap-out). Start with Network Standards.
          </p>
        </div>

        <ul className="space-y-3">
          {COURSES.map((course) => (
            <li key={course.slug}>
              <Link href={`/academy/${course.slug}`} className="panel block space-y-1">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                  {course.skill} · Level {course.level} · {course.minutes} min
                </p>
                <p className="text-lg" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                  {course.title}
                </p>
                <p className="muted text-sm">{course.payUnlock}</p>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/apply" className="btn-ghost">
          Apply after you pass Standards
        </Link>
      </div>
    </AppShell>
  );
}
