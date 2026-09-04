"use client";

import { smsHref } from "@/lib/shop";

export function TextStart({
  label = "24-hour text",
  className = "btn-gold",
}: {
  label?: string;
  className?: string;
}) {
  const href = smsHref();

  function openSms() {
    window.location.href = href;
  }

  return (
    <a href={href} className={className} onClick={openSms}>
      {label}
    </a>
  );
}
