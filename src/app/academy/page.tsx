import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { COURSES } from "@/lib/academy";
import { EV_COURSES } from "@/lib/academy-ev";

const ALL = [...COURSES, ...EV_COURSES];

export default function AcademyPage() {
  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Speedy Academy</p>
        <h1 className="section-title">Get Speedy Certified</h1>
        <p className="muted text-sm">
          Start with the entrance test if you want a level read. Then take Standards.
        </p>
        <Link href="/entrance" className="btn-gold">
          Entrance test — gauge my experience
        </Link>
        <ul className="space-y-3">
          {ALL.map((course) => (
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
        <Link href="/apply" className="btn-ghost">Apply after you pass Standards</Link>
      </div>
    </AppShell>
  );
}
