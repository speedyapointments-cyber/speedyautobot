"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { PASS_SCORE, type AcademyCourse } from "@/lib/academy";

export function CourseClient({ course }: { course: AcademyCourse }) {
  const [step, setStep] = useState<"learn" | "quiz" | "result">("learn");
  const [picks, setPicks] = useState<number[]>(() => course.quiz.map(() => -1));
  const [name, setName] = useState("");

  const score = useMemo(() => {
    const right = course.quiz.filter((item, index) => picks[index] === item.answer).length;
    return Math.round((right / course.quiz.length) * 100);
  }, [course.quiz, picks]);

  const passed = score >= PASS_SCORE;
  const certId = `SN-${course.skill.replace(/\s+/g, "").slice(0, 6).toUpperCase()}-L${course.level}`;

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <Link href="/academy" className="text-sm text-[var(--gold-bright)]">
          ← All courses
        </Link>
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          {course.skill} · Level {course.level}
        </p>
        <h1 className="section-title">{course.title}</h1>
        <p className="muted text-sm">{course.payUnlock}</p>

        {step === "learn" && (
          <>
            <div className="panel space-y-2">
              <p className="text-sm text-[var(--gold-bright)]">You should be able to</p>
              <ul className="muted text-sm list-disc pl-5 space-y-1">
                {course.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {course.modules.map((mod) => (
              <section key={mod.title} className="panel space-y-2">
                <h2 className="text-[var(--gold-bright)]">{mod.title}</h2>
                <ul className="muted text-sm list-disc pl-5 space-y-1">
                  {mod.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
            <button type="button" className="btn-gold" onClick={() => setStep("quiz")}>
              Take the {PASS_SCORE}% quiz
            </button>
          </>
        )}

        {step === "quiz" && (
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (picks.some((pick) => pick < 0)) return;
              setStep("result");
            }}
          >
            {course.quiz.map((item, index) => (
              <fieldset key={item.q} className="panel space-y-2">
                <legend className="text-sm">
                  {index + 1}. {item.q}
                </legend>
                {item.choices.map((choice, choiceIndex) => (
                  <label key={choice} className="flex gap-3 text-sm">
                    <input
                      type="radio"
                      name={`q-${index}`}
                      checked={picks[index] === choiceIndex}
                      onChange={() =>
                        setPicks((prev) => {
                          const next = [...prev];
                          next[index] = choiceIndex;
                          return next;
                        })
                      }
                    />
                    {choice}
                  </label>
                ))}
              </fieldset>
            ))}
            <button type="submit" className="btn-gold">
              Submit quiz
            </button>
          </form>
        )}

        {step === "result" && (
          <div className="space-y-4">
            <div className="panel">
              <p className="text-2xl text-[var(--gold-bright)]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                {score}% {passed ? "Pass" : "Not yet"}
              </p>
              <p className="muted mt-2 text-sm">
                Pass mark is {PASS_SCORE}%. {passed
                  ? "Knowledge badge unlocked. Live tickets still need documents and a practical."
                  : "Read the why notes and retake. A certificate is not issued under 80%."}
              </p>
            </div>
            {course.quiz.map((item, index) => (
              <div key={item.q} className="panel space-y-1">
                <p className="text-sm">{item.q}</p>
                <p className="text-sm text-[var(--gold-bright)]">
                  {picks[index] === item.answer ? "Correct. " : "Miss. "}
                  {item.why}
                </p>
              </div>
            ))}
            {passed ? (
              <div className="panel space-y-3 border-[var(--gold)]">
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)]">
                  Certificate of completion
                </p>
                <input
                  className="field"
                  placeholder="Full legal name on certificate"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p
                  className="text-center text-2xl"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {name.trim() || "Your name"}
                </p>
                <p className="text-center text-sm text-[var(--gold-bright)]">{course.badge}</p>
                <p className="muted text-center text-xs">
                  {certId} · Speedy Academy · Internal Network credential · Not ASE
                </p>
              </div>
            ) : (
              <button type="button" className="btn-gold" onClick={() => setStep("quiz")}>
                Retake quiz
              </button>
            )}
            <Link href="/apply" className="btn-ghost">
              Continue to application
            </Link>
          </div>
        )}
      </div>
    </AppShell>
  );
}
