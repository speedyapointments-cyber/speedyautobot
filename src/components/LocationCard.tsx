"use client";

import { useState } from "react";
import {
  SHOP_GEO,
  mapsDirections,
  mapsPin,
  milesBetween,
  osmEmbed,
} from "@/lib/geo";

type Fix = {
  lat: number;
  lng: number;
  accuracy: number;
  label: string;
};

export function LocationCard({
  title = "Your location",
}: {
  title?: string;
}) {
  const [status, setStatus] = useState<"idle" | "busy" | "ok" | "denied" | "off">("idle");
  const [fix, setFix] = useState<Fix | null>(null);

  async function locate() {
    if (!navigator.geolocation) {
      setStatus("off");
      return;
    }
    setStatus("busy");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        let label = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`,
          );
          if (res.ok) {
            const data = await res.json();
            label =
              [data.principalSubdivision, data.city || data.locality, data.postcode]
                .filter(Boolean)
                .join(" · ") || label;
            if (data.localityInfo?.informative?.[0]?.name) {
              label = `${data.city || data.locality || ""} ${data.postcode || ""}`.trim() || label;
            }
          }
        } catch {
          /* coordinates still work */
        }
        setFix({
          lat,
          lng,
          accuracy: pos.coords.accuracy,
          label,
        });
        setStatus("ok");
      },
      (err) => {
        setStatus(err.code === err.PERMISSION_DENIED ? "denied" : "off");
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 15000 },
    );
  }

  const miles = fix ? milesBetween(fix, SHOP_GEO) : null;
  const inRange = miles !== null && miles <= SHOP_GEO.radiusMiles;

  return (
    <section className="panel space-y-3">
      <p className="text-sm text-[var(--gold-bright)]">{title}</p>
      <p className="muted text-sm">
        Mobile service is within about {SHOP_GEO.radiusMiles} miles of the shop on
        McDaniel Lane. Allow location so we can pin the driveway or roadside.
      </p>
      <button type="button" className="btn-gold" onClick={locate} disabled={status === "busy"}>
        {status === "busy" ? "Finding you…" : fix ? "Refresh location" : "Use my location"}
      </button>
      {status === "denied" ? (
        <p className="text-sm text-[var(--danger)]">
          Location is blocked. In the browser address bar, allow Location for this site and tap again.
        </p>
      ) : null}
      {status === "off" ? (
        <p className="muted text-sm">This device cannot share GPS. Type the address when you book.</p>
      ) : null}
      {fix ? (
        <>
          <p className="text-sm">{fix.label}</p>
          <p className="muted text-xs">
            {miles?.toFixed(1)} miles from the shop
            {inRange ? " · inside the mobile radius" : " · outside the usual mobile radius — we can still quote"}
          </p>
          <div className="overflow-hidden rounded-xl border border-[var(--line)]">
            <iframe
              title="Your location map"
              src={osmEmbed(fix.lat, fix.lng)}
              className="h-48 w-full"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a className="btn-ghost text-xs" href={mapsPin(fix.lat, fix.lng)} target="_blank" rel="noreferrer">
              Open pin
            </a>
            <a className="btn-ghost text-xs" href={mapsDirections(fix)} target="_blank" rel="noreferrer">
              Directions to shop
            </a>
          </div>
        </>
      ) : (
        <div className="overflow-hidden rounded-xl border border-[var(--line)]">
          <iframe
            title="Speedy shop map"
            src={osmEmbed(SHOP_GEO.lat, SHOP_GEO.lng)}
            className="h-48 w-full"
            loading="lazy"
          />
        </div>
      )}
      <a className="muted text-xs underline" href={mapsPin(SHOP_GEO.lat, SHOP_GEO.lng)} target="_blank" rel="noreferrer">
        Shop pin — {SHOP_GEO.label}
      </a>
    </section>
  );
}
