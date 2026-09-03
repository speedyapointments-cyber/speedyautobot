"use client";

import { SHOP } from "@/lib/shop";

type Props = {
  className?: string;
};

/** Opens SMS to Ava with START prefilled; falls back to web helper if sms: is blocked. */
export function TextAvaButton({ className }: Props) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!mobile) {
      e.preventDefault();
      window.location.href = SHOP.textAvaWebUrl;
      return;
    }
    e.preventDefault();
    window.location.href = SHOP.textAvaSmsUrl;
    window.setTimeout(() => {
      window.location.href = SHOP.textAvaSmsUrlAlt;
    }, 400);
    window.setTimeout(() => {
      if (!document.hidden) {
        window.location.href = SHOP.textAvaWebUrl;
      }
    }, 1200);
  }

  return (
    <a
      href={SHOP.textAvaSmsUrl}
      className={className}
      onClick={onClick}
      aria-label="Text Ava — opens SMS with START"
    >
      Text Ava
    </a>
  );
}
