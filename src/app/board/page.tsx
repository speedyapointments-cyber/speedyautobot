"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { useRole } from "@/components/RoleSwitch";
import { SEED, TOPICS, type BoardPost, type BoardTopic } from "@/lib/board";

const KEY = "speedy.board.v1";

export default function BoardPage() {
  const { role } = useRole();
  const [posts, setPosts] = useState<BoardPost[]>(SEED);
  const [topic, setTopic] = useState<BoardTopic | "All">("All");
  const [open, setOpen] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [reply, setReply] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setPosts(JSON.parse(raw) as BoardPost[]);
    } catch {
      /* keep seed */
    }
  }, []);

  function persist(next: BoardPost[]) {
    setPosts(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }

  const visible = useMemo(
    () => (topic === "All" ? posts : posts.filter((p) => p.topic === topic)),
    [posts, topic],
  );
  const thread = posts.find((p) => p.id === open) ?? null;
  const official = role === "shop";
  const author = official ? "Speedy" : role === "mechanic" ? "Tech" : "Guest";

  function addPost() {
    if (!title.trim() || !body.trim()) return;
    const next: BoardPost = {
      id: `b-${Date.now()}`,
      topic: topic === "All" ? "Ask Speedy" : topic,
      title: title.trim(),
      body: body.trim(),
      author,
      official,
      createdAt: new Date().toISOString(),
      replies: [],
    };
    persist([next, ...posts]);
    setTitle("");
    setBody("");
    setOpen(next.id);
  }

  function addReply() {
    if (!thread || !reply.trim()) return;
    persist(
      posts.map((p) =>
        p.id !== thread.id
          ? p
          : {
              ...p,
              replies: [
                ...p.replies,
                {
                  id: `r-${Date.now()}`,
                  author,
                  official,
                  body: reply.trim(),
                  createdAt: new Date().toISOString(),
                },
              ],
            },
      ),
    );
    setReply("");
  }

  return (
    <AppShell>
      <div className="px-5 py-6 space-y-5">
        <p className="text-xs font-medium tracking-[0.24em] text-[var(--gold)] uppercase">Message board</p>
        <h1 className="section-title">Questions &amp; talk</h1>
        <p className="muted text-sm">
          Ask Speedy, talk jobs, EV, roadside, or shop rules. Shop owner mode posts
          as the official Speedy reply. This board lives on the device until we hook
          a live server.
        </p>

        <div className="flex flex-wrap gap-2">
          {(["All", ...TOPICS] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setTopic(item);
                setOpen(null);
              }}
              className={`rounded-full border px-3 py-1 text-xs ${
                topic === item ? "border-[var(--gold)] text-[var(--gold-bright)]" : "border-[var(--line)] text-[var(--ink-muted)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {thread ? (
          <section className="space-y-3">
            <button type="button" className="text-sm text-[var(--gold-bright)]" onClick={() => setOpen(null)}>
              ← All posts
            </button>
            <article className="panel space-y-2">
              <p className="text-xs text-[var(--ink-muted)]">
                {thread.topic} · {thread.author} {thread.official ? "· Official" : ""}
              </p>
              <h2 className="text-xl" style={{ fontFamily: "var(--font-display), sans-serif" }}>{thread.title}</h2>
              <p className="text-sm">{thread.body}</p>
            </article>
            {thread.replies.map((item) => (
              <article key={item.id} className="panel space-y-1">
                <p className="text-xs text-[var(--gold-bright)]">
                  {item.author} {item.official ? "· Official Speedy" : ""}
                </p>
                <p className="text-sm">{item.body}</p>
              </article>
            ))}
            <textarea className="field min-h-[90px]" placeholder={official ? "Reply as Speedy" : "Add a reply"} value={reply} onChange={(e) => setReply(e.target.value)} />
            <button type="button" className="btn-gold" onClick={addReply}>
              Post reply
            </button>
          </section>
        ) : (
          <>
            <section className="panel space-y-3">
              <p className="text-sm text-[var(--gold-bright)]">New post</p>
              <input className="field" placeholder="Question or title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea className="field min-h-[90px]" placeholder="Details" value={body} onChange={(e) => setBody(e.target.value)} />
              <button type="button" className="btn-gold" onClick={addPost}>
                Post to {topic === "All" ? "Ask Speedy" : topic}
              </button>
            </section>
            <ul className="space-y-3">
              {visible.map((post) => (
                <li key={post.id}>
                  <button type="button" className="panel w-full space-y-1 text-left" onClick={() => setOpen(post.id)}>
                    <p className="text-xs text-[var(--ink-muted)]">
                      {post.topic} · {post.replies.length} replies
                    </p>
                    <p className="text-lg" style={{ fontFamily: "var(--font-display), sans-serif" }}>{post.title}</p>
                    <p className="muted text-sm line-clamp-2">{post.body}</p>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </AppShell>
  );
}
