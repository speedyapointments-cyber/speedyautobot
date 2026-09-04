"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { headline, schedule, type Vehicle } from "@/lib/maintenance";

const KEY = "speedy.garage.v1";

export function readGarage(): Vehicle | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Vehicle) : null;
  } catch {
    return null;
  }
}

export function writeGarage(vehicle: Vehicle) {
  localStorage.setItem(KEY, JSON.stringify(vehicle));
}

export function GarageCard() {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    setVehicle(readGarage());
  }, []);

  if (!vehicle) {
    return (
      <section className="panel space-y-3">
        <h2 className="section-title text-[1.9rem]!">Your vehicle</h2>
        <p className="muted text-sm">
          Add year, make, model, and mileage. Speedy will keep a maintenance list
          in the app and flag what is due.
        </p>
        <Link href="/garage" className="btn-gold">
          Add my vehicle
        </Link>
      </section>
    );
  }

  const rows = schedule(vehicle);
  return (
    <section className="panel space-y-3">
      <p className="text-xs tracking-[0.18em] text-[var(--gold)] uppercase">Garage</p>
      <h2 className="section-title text-[1.9rem]!">
        {vehicle.year} {vehicle.make} {vehicle.model}
      </h2>
      <p className="muted text-sm">
        {vehicle.mileage.toLocaleString()} miles · {vehicle.powertrain.toUpperCase()}
      </p>
      <p className="text-sm text-[var(--gold-bright)]">{headline(rows)}</p>
      <ul className="space-y-2 text-sm">
        {rows.slice(0, 3).map((row) => (
          <li key={row.id} className="flex justify-between gap-3">
            <span>{row.name}</span>
            <span className={row.status === "due" ? "text-[var(--danger)]" : row.status === "soon" ? "text-[var(--gold-bright)]" : "muted"}>
              {row.status === "due" ? "Due" : `${row.milesLeft.toLocaleString()} mi`}
            </span>
          </li>
        ))}
      </ul>
      <Link href="/garage" className="btn-ghost">
        Full schedule
      </Link>
    </section>
  );
}
