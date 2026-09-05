"use client";

import { smsHref } from "@/lib/shop";

export function TextStart({
  label = "Text Start",
  className = "btn-gold",
}: {
  label?: string;
  className?: string;
}) {
  const href = smsHref("Start");

  function openSms(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.location.href = href;
  }

  return (
    <a href={href} className={className} onClick={openSms}>
      {label}
    </a>
  );
}
