"use client";

import { useState } from "react";
import { mailtoHref, smsHref, whatsappHref } from "@/lib/share";

export function ShareActions({
  title,
  text,
  url,
}: {
  title: string;
  text: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  async function nativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        /* user cancelled */
      }
    }
    await copy();
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(`${text}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link", url);
    }
  }

  return (
    <div className="space-y-3">
      <button type="button" className="btn-gold" onClick={nativeShare}>
        Share / Recommend
      </button>
      <button type="button" className="btn-ghost" onClick={copy}>
        {copied ? "Copied" : "Copy message + link"}
      </button>
      <div className="grid grid-cols-3 gap-2">
        <a className="btn-ghost text-xs" href={smsHref(text)}>
          Text
        </a>
        <a className="btn-ghost text-xs" href={whatsappHref(text)}>
          WhatsApp
        </a>
        <a className="btn-ghost text-xs" href={mailtoHref(title, text)}>
          Email
        </a>
      </div>
    </div>
  );
}
