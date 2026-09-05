"use client";

import { useState } from "react";
import { BOARD_KEY, SEED, type BoardPost, type BoardTopic } from "@/lib/board";
import { SHOP } from "@/lib/shop";

export function FeedbackBox({
  defaultTopic = "App feedback",
}: {
  defaultTopic?: BoardTopic;
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState<BoardTopic>(defaultTopic);
  const [sent, setSent] = useState(false);

  function submit() {
    if (!title.trim() || !body.trim()) return;
    const post: BoardPost = {
      id: `b-${Date.now()}`,
      topic,
      title: title.trim(),
      body: body.trim(),
      author: "Guest",
      official: false,
      createdAt: new Date().toISOString(),
      replies: [],
    };
    try {
      const raw = localStorage.getItem(BOARD_KEY);
      const current = raw ? (JSON.parse(raw) as BoardPost[]) : SEED;
      localStorage.setItem(BOARD_KEY, JSON.stringify([post, ...current]));
    } catch {
      /* still mail it */
    }
    const mail = `mailto:${SHOP.email}?subject=${encodeURIComponent(`[${topic}] ${title.trim()}`)}&body=${encodeURIComponent(body.trim())}`;
    window.location.href = mail;
    setSent(true);
    setTitle("");
    setBody("");
  }

  if (sent) {
    return (
      <div className="panel space-y-2">
        <p className="text-sm text-[var(--gold-bright)]">Got it</p>
        <p className="muted text-sm">Posted to the board and opened an email to the Speedy desk so we actually see it.</p>
      </div>
    );
  }

  return (
    <section className="panel space-y-3">
      <p className="text-sm text-[var(--gold-bright)]">Ask or report a problem</p>
      <p className="muted text-xs">
        App broken, booking stuck, insurance question, city page wrong — send it.
        It lands on the board and in {SHOP.email}.
      </p>
      <select className="field" value={topic} onChange={(e) => setTopic(e.target.value as BoardTopic)}>
        <option value="App feedback">App feedback / something is broken</option>
        <option value="Ask Speedy">Ask Speedy</option>
        <option value="Mechanics">Mechanics / roster</option>
        <option value="Customers">Customers / booking</option>
        <option value="Roadside">Roadside</option>
      </select>
      <input className="field" placeholder="Short title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="field min-h-[110px]" placeholder="What happened. Phone type if the app failed." value={body} onChange={(e) => setBody(e.target.value)} />
      <button type="button" className="btn-gold" onClick={submit} disabled={!title.trim() || !body.trim()}>
        Send to Speedy
      </button>
    </section>
  );
}
