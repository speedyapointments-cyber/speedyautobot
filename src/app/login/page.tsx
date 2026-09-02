"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { AppShell } from "@/components/AppShell";
import { SHOP } from "@/lib/shop";

const STORAGE_KEY = "speedy-shop-session";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { user?: string };
        if (parsed.user === SHOP.shopLogin) setAuthed(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);
    const user = String(data.get("username") ?? "")
      .trim()
      .toLowerCase();
    const password = String(data.get("password") ?? "");
    if (user !== SHOP.shopLogin || password !== SHOP.shopPassword) {
      setError("Invalid shop credentials. Use shop login speedy704.");
      return;
    }
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ user: SHOP.shopLogin, at: Date.now() }),
    );
    setAuthed(true);
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
  }

  return (
    <AppShell>
      <div className="px-5 py-6">
        <p className="animate-rise text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">
          Staff access
        </p>
        <h1 className="section-title animate-rise-delay-1 mt-2">Shop login</h1>
        <p className="muted animate-rise-delay-2 mt-3 text-sm">
          Sign in with the Speedy shop account to manage the day&apos;s jobs.
        </p>

        {authed ? (
          <div className="panel animate-rise mt-6 space-y-4" data-testid="shop-authed">
            <p className="text-xs tracking-[0.18em] text-[var(--ink-muted)] uppercase">
              Signed in as
            </p>
            <p className="text-2xl text-[var(--gold-bright)]">{SHOP.shopLogin}</p>
            <p className="muted text-sm">
              Shop dashboard preview — today&apos;s bookings, track board, and
              applicant inbox will land here as you grow the app.
            </p>
            <div className="grid gap-3">
              <Link href="/book" className="btn-gold">
                Open booking portal
              </Link>
              <Link href="/track" className="btn-ghost">
                Job track board
              </Link>
              <button type="button" className="btn-ghost" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="animate-rise-delay-3 mt-6 space-y-4"
            data-testid="shop-login-form"
          >
            <div className="space-y-2">
              <label className="text-sm text-[var(--ink-muted)]" htmlFor="shop-user">
                Shop username
              </label>
              <input
                id="shop-user"
                name="username"
                className="field"
                defaultValue={SHOP.shopLogin}
                autoComplete="username"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[var(--ink-muted)]" htmlFor="shop-pass">
                Password
              </label>
              <input
                id="shop-pass"
                name="password"
                type="password"
                className="field"
                defaultValue={SHOP.shopPassword}
                autoComplete="current-password"
                required
              />
            </div>
            {error ? (
              <p className="text-sm text-[var(--danger)]" role="alert">
                {error}
              </p>
            ) : (
              <p className="text-xs text-[var(--ink-muted)]">
                Shop login: <span className="text-[var(--gold)]">{SHOP.shopLogin}</span>
              </p>
            )}
            <button
              type="submit"
              className="btn-gold relative z-10 mb-2"
              data-testid="shop-login-submit"
            >
              Sign in to shop
            </button>
          </form>
        )}
      </div>
    </AppShell>
  );
}
