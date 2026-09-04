"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ENTRANCE, band } from "@/lib/entrance";

export default function EntrancePage() {
  const [picks, setPicks] = useState<number[]>(() => ENTRANCE.map(() => -1));
  const [done, setDone] = useState(false);

  const score = useMemo(() => {
    const right = ENTRANCE.filter((item, i) => picks[i] === item.answer).length;
    return Math.round((right / ENTRANCE.length) * 100);
  }, [picks]);

  const result = band(score);
  const weak = ENTRANCE.filter((item, i) => picks[i] !== item.answer).map((item) => item.skill);
  const weakSet = [...new Set(weak)];

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Entrance assessment</p>
        <h1 className="section-title">Gauge your experience</h1>
        <p className="muted text-sm">
          Twelve shop questions. This is how Speedy reads where you stand before a
          practical. It is not ASE. A high score does not skip documents or insurance.
        </p>

        {!done ? (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (picks.some((p) => p < 0)) return;
              setDone(true);
            }}
          >
            {ENTRANCE.map((item, index) => (
              <fieldset key={item.q} className="panel space-y-2">
                <legend className="text-sm">
                  {index + 1}. [{item.skill}] {item.q}
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
            <button type="submit" className="btn-gold">See my level</button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="panel space-y-2">
              <p className="text-3xl text-[var(--gold-bright)]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                {score}%
              </p>
              <p className="text-sm text-[var(--gold-bright)]">{result.level}</p>
              <p className="muted text-sm">{result.pay}</p>
              <p className="muted text-sm">{result.note}</p>
              {weakSet.length ? <p className="muted text-sm">Study next: {weakSet.join(", ")}</p> : <p className="muted text-sm">No weak sections on the written.</p>}
            </div>
            {ENTRANCE.map((item, index) => (
              <div key={item.q} className="panel space-y-1">
                <p className="text-sm">{item.q}</p>
                <p className="text-sm text-[var(--gold-bright)]">
                  {picks[index] === item.answer ? "Correct. " : "Miss. "}
                  {item.why}
                </p>
              </div>
            ))}
            <button type="button" className="btn-ghost" onClick={() => { setDone(false); setPicks(ENTRANCE.map(() => -1)); }}>
              Retake
            </button>
            <Link href="/academy" className="btn-ghost">Go to Academy</Link>
            <Link href="/apply" className="btn-gold">Apply with this score in mind</Link>
          </div>
        )}
      </div>
    </AppShell>
  );
}
