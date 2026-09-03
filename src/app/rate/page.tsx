"use client";

import { useState, type FormEvent } from "react";
import { AppShell } from "@/components/AppShell";

export default function RatePage() {
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (stars < 1) return;
    setSent(true);
  }

  return (
    <AppShell>
      <div className="px-5 py-6">
        <p className="animate-rise text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Feedback
        </p>
        <h1 className="section-title animate-rise-delay-1 mt-2">Rate your visit</h1>
        <p className="muted animate-rise-delay-2 mt-3 text-sm">
          Rate your Speedy Network visit. Reviews help Marvin keep the right
          mechanics on the right jobs.
        </p>

        {sent ? (
          <div className="panel animate-rise mt-6 text-center">
            <p className="text-2xl text-[var(--gold-bright)]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Thank you
            </p>
            <p className="muted mt-2 text-sm">
              We got your {stars}-star review{name ? `, ${name}` : ""}. Drive safe.
            </p>
            <button
              type="button"
              className="btn-ghost mt-5"
              onClick={() => {
                setSent(false);
                setStars(0);
                setComment("");
                setName("");
              }}
            >
              Leave another review
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="animate-rise-delay-3 mt-6 space-y-5">
            <div className="panel">
              <p className="text-sm text-[var(--ink-muted)]">Overall experience</p>
              <div
                className="mt-3 flex justify-between gap-1"
                role="radiogroup"
                aria-label="Star rating"
              >
                {[1, 2, 3, 4, 5].map((n) => {
                  const active = (hover || stars) >= n;
                  return (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={stars === n}
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      className={`star text-4xl leading-none ${active ? "active" : ""}`}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      onFocus={() => setHover(n)}
                      onBlur={() => setHover(0)}
                      onClick={() => setStars(n)}
                    >
                      ★
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-[var(--ink-muted)]" htmlFor="rate-name">
                Your name
              </label>
              <input
                id="rate-name"
                className="field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Optional"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-[var(--ink-muted)]" htmlFor="rate-comment">
                Comments
              </label>
              <textarea
                id="rate-comment"
                className="field min-h-[120px] resize-y"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What went well? Anything we can improve?"
              />
            </div>

            <button type="submit" className="btn-gold" disabled={stars < 1}>
              Submit Review
            </button>
          </form>
        )}
      </div>
    </AppShell>
  );
}
