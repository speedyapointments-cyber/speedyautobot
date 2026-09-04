export type Powertrain = "gas" | "diesel" | "hybrid" | "ev";

export type Vehicle = {
  year: string;
  make: string;
  model: string;
  mileage: number;
  powertrain: Powertrain;
  vin: string;
  updatedAt: string;
};

export type ServiceItem = {
  id: string;
  name: string;
  everyMiles: number;
  note: string;
  bookHint: string;
};

const ICE: ServiceItem[] = [
  { id: "oil", name: "Oil and filter", everyMiles: 5000, note: "Synthetic can stretch; we still check at 5k.", bookHint: "Oil / fluids" },
  { id: "rotate", name: "Tire rotation + pressure", everyMiles: 7500, note: "Uneven wear is a comeback waiting.", bookHint: "Tires" },
  { id: "brakes", name: "Brake inspection", everyMiles: 10000, note: "Pads, rotors, pins, fluid color.", bookHint: "Brakes" },
  { id: "cabin", name: "Cabin filter", everyMiles: 15000, note: "Musty AC is usually this.", bookHint: "Oil / fluids" },
  { id: "air", name: "Engine air filter", everyMiles: 20000, note: "Shorter if you drive dusty roads.", bookHint: "Oil / fluids" },
  { id: "coolant", name: "Coolant check / service", everyMiles: 30000, note: "Do not mix colors.", bookHint: "Cooling" },
  { id: "plugs", name: "Spark plugs", everyMiles: 60000, note: "Misfire and poor MPG if ignored.", bookHint: "Tune-up" },
  { id: "trans", name: "Transmission service", everyMiles: 60000, note: "Fluid and filter where the unit allows.", bookHint: "Drivetrain" },
];

const EV: ServiceItem[] = [
  { id: "rotate", name: "Tire rotation + alignment check", everyMiles: 6500, note: "EV torque eats inside edges.", bookHint: "Tires" },
  { id: "cabin", name: "Cabin filter", everyMiles: 15000, note: "Same as gas cars.", bookHint: "EV 12V / wheels" },
  { id: "brake-fluid", name: "Brake fluid test", everyMiles: 30000, note: "Regen saves pads. Fluid still ages.", bookHint: "Brakes" },
  { id: "thermal", name: "Battery thermal / coolant", everyMiles: 30000, note: "OEM interval wins. We inspect and quote.", bookHint: "EV / HV" },
  { id: "12v", name: "12-volt support battery", everyMiles: 25000, note: "Most ‘dead EV’ no-starts are the little battery.", bookHint: "EV 12V" },
  { id: "inspect", name: "Undercarriage + charge-port inspect", everyMiles: 15000, note: "Look for impact, rust, pin wear.", bookHint: "EV inspect" },
];

export function catalog(powertrain: Powertrain) {
  if (powertrain === "ev") return EV;
  if (powertrain === "hybrid") return [...ICE.filter((i) => i.id !== "plugs"), EV.find((i) => i.id === "thermal")!];
  return ICE;
}

export type DueRow = ServiceItem & {
  lastAt: number;
  nextAt: number;
  milesLeft: number;
  status: "due" | "soon" | "ok";
};

export function schedule(vehicle: Vehicle): DueRow[] {
  return catalog(vehicle.powertrain)
    .map((item) => {
      const cycle = Math.floor(vehicle.mileage / item.everyMiles);
      const lastAt = cycle * item.everyMiles;
      const nextAt = (cycle + 1) * item.everyMiles;
      const milesLeft = nextAt - vehicle.mileage;
      const status: DueRow["status"] =
        milesLeft <= 200 ? "due" : milesLeft <= 1200 ? "soon" : "ok";
      return { ...item, lastAt, nextAt, milesLeft, status };
    })
    .sort((a, b) => a.milesLeft - b.milesLeft);
}

export function headline(rows: DueRow[]) {
  const due = rows.filter((r) => r.status === "due");
  const soon = rows.filter((r) => r.status === "soon");
  if (due.length) return `${due.length} service${due.length > 1 ? "s" : ""} due now`;
  if (soon.length) return `${soon[0].name} coming up in ${soon[0].milesLeft.toLocaleString()} miles`;
  return "Nothing urgent. We will keep the list current as mileage moves.";
}
