import { LOGO } from "@/lib/brand";

export function Logo({
  className = "h-12 w-auto object-contain object-left",
}: {
  className?: string;
}) {
  return <img src={LOGO.lockup} alt={LOGO.alt} className={className} />;
}
