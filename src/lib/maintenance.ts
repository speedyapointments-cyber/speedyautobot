export type Powertrain = "gas" | "diesel" | "hybrid" | "ev";

export type Vehicle = {
  year: string;
  make: string;
  model: string;
  miles: number;
  powertrain: Powertrain;
  lastOilMiles: number | null;
  updatedAt: string;
};

export type MaintItem = {
  id: string;
  name: string;
  everyMiles: number | null;
  everyMonths: number | null;
  note: string;
  evOnly?: boolean;
  skipEv?: boolean;
};

export const MAINT_ITEMS: MaintItem[] = [
  {
    id: "oil",
    name: "Engine oil and filter",
    everyMiles: 5000,
    everyMonths: 6,
    note: "5k is the safe Speedy interval. Follow the door-jamb sticker if the book says 7.5k or 10k synthetic.",
    skipEv: true,
  },
  {
    id: "rotate",
    name: "Tire rotation + tread check",
    everyMiles: 6000,
    everyMonths: 6,
    note: "EVs eat inner edges. Rotate on time.",
  },
  {
    id: "brakes",
    name: "Brake inspect (pads, slides, fluid)",
    everyMiles: 10000,
    everyMonths: 12,
    note: "Measure pads. Do not guess from pedal feel alone.",
  },
  {
    id: "cabin",
    name: "Cabin filter",
    everyMiles: 15000,
    everyMonths: 12,
    note: "Musty AC is usually this filter.",
  },
  {
    id: "air",
    name: "Engine air filter",
    everyMiles: 20000,
    everyMonths: 24,
    note: "Shorter if you drive dirt or pollen season hard.",
    skipEv: true,
  },
  {
    id: "battery12",
    name: "12-volt battery test",
    everyMiles: null,
    everyMonths: 24,
    note: "EVs still have a 12-volt. A dead 12V looks like a dead car.",
  },
  {
    id: "coolant",
    name: "Coolant check / service",
    everyMiles: 30000,
    everyMonths: 36,
    note: "On EVs this is the battery / inverter loop. Do not mix colors.",
  },
  {
    id: "trans",
    name: "Transmission / drive-unit fluid",
    everyMiles: 30000,
    everyMonths: 36,
    note: "Confirm spec. Many “lifetime” fluids are not lifetime in heat.",
  },
  {
    id: "plugs",
    name: "Spark plugs",
    everyMiles: 60000,
    everyMonths: null,
    note: "Coil-on-plug. Misfire under load is often this.",
    skipEv: true,
  },
  {
    id: "align",
    name: "Alignment check",
    everyMiles: 15000,
    everyMonths: 12,
    note: "After potholes or new tires.",
  },
];

export type DueRow = MaintItem & {
  dueAtMiles: number | null;
  milesLeft: number | null;
  status: "due" | "soon" | "ok";
};

export function scheduleFor(vehicle: Vehicle): DueRow[] {
  const items = MAINT_ITEMS.filter((item) => {
    if (vehicle.powertrain === "ev" && item.skipEv) return false;
    if (item.evOnly && vehicle.powertrain !== "ev") return false;
    return true;
  });

  return items.map((item) => {
    const baseline =
      item.id === "oil" && vehicle.lastOilMiles != null
        ? vehicle.lastOilMiles
        : Math.floor(vehicle.miles / (item.everyMiles || vehicle.miles || 1)) *
          (item.everyMiles || 0);
    const dueAtMiles =
      item.everyMiles != null
        ? (item.id === "oil" && vehicle.lastOilMiles != null
            ? vehicle.lastOilMiles + item.everyMiles
            : baseline + item.everyMiles)
        : null;
    const milesLeft = dueAtMiles != null ? dueAtMiles - vehicle.miles : null;
    let status: DueRow["status"] = "ok";
    if (milesLeft != null) {
      if (milesLeft <= 0) status = "due";
      else if (milesLeft <= 800) status = "soon";
    }
    return { ...item, dueAtMiles, milesLeft, status };
  });
}
