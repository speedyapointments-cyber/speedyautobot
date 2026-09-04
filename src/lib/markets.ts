export type MarketStatus = "Live" | "Hiring — not live yet" | "Waitlist";

export type Market = {
  city: string;
  state: string;
  status: MarketStatus;
  note: string;
  need: string;
};

export const MARKETS: Market[] = [
  { city: "Charlotte", state: "NC", status: "Live", note: "Shop + mobile. McDaniel Lane bay is the hub.", need: "Always hiring overflow ICE + EV." },
  { city: "Concord / Kannapolis", state: "NC", status: "Live", note: "Covered from Charlotte radius when a vendor is in ZIP.", need: "L2 brakes." },
  { city: "Raleigh / Durham", state: "NC", status: "Hiring — not live yet", note: "Service starts after 3 qualified vendors + insurance.", need: "Brakes, no-start, one EV." },
  { city: "Greensboro / Winston-Salem", state: "NC", status: "Hiring — not live yet", note: "Same rule. No customer ads until the bench is real.", need: "Brakes + roadside." },
  { city: "Columbia", state: "SC", status: "Hiring — not live yet", note: "Collect applicants now. Do not book customers yet.", need: "L2 + one detail/tint." },
  { city: "Greenville / Spartanburg", state: "SC", status: "Hiring — not live yet", note: "I-85 corridor after Charlotte overflows.", need: "Mobile brakes." },
  { city: "Atlanta", state: "GA", status: "Waitlist", note: "Big market. We wait on a bench, not a logo.", need: "EV + L3 + insurance-ready vans." },
  { city: "Nashville", state: "TN", status: "Waitlist", note: "Applications open. Dispatch closed.", need: "Roadside + brakes." },
  { city: "Richmond", state: "VA", status: "Waitlist", note: "Applications open.", need: "L2." },
  { city: "Jacksonville", state: "FL", status: "Waitlist", note: "Applications open.", need: "Roadside heat + EV 12V." },
  { city: "Dallas / Fort Worth", state: "TX", status: "Waitlist", note: "National intake only. No local ads.", need: "Full bench before launch." },
  { city: "Anywhere else", state: "US", status: "Waitlist", note: "Apply with city + ZIP. We open that town when the roster is qualified.", need: "Tell us the city." },
];

export const LAUNCH_RULE =
  "Speedy does not advertise a city until it has qualified, insured vendors in that ZIP. Charlotte is live. Every other market is applicant intake first.";
