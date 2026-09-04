"use client";

import { SHOP, smsHref } from "@/lib/shop";

export function TextStart({
  label = `Text ${SHOP.contactName}`,
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
