export type MarketStatus = "Live" | "Page + hiring" | "Hiring — not live yet" | "Waitlist";

export type Market = {
  city: string;
  state: string;
  status: MarketStatus;
  note: string;
  need: string;
  shop: boolean;
};

export const MARKETS: Market[] = [
  { city: "Charlotte", state: "NC", status: "Live", shop: true, note: "Only city with a Speedy bay — 6016 McDaniel Lane. Shop + mobile.", need: "Overflow ICE, EV, tint, detail." },
  { city: "Concord / Kannapolis", state: "NC", status: "Live", shop: false, note: "No shop. Covered from Charlotte when a vendor is in ZIP.", need: "L2 brakes." },
  { city: "Gastonia / Belmont", state: "NC", status: "Page + hiring", shop: false, note: "No location. City page + mechanic ads only.", need: "Mobile brakes + roadside." },
  { city: "Rock Hill", state: "SC", status: "Page + hiring", shop: false, note: "No location. I-77 south. Collect the bench first.", need: "Brakes + one detail." },
  { city: "Lake Norman / Huntersville", state: "NC", status: "Page + hiring", shop: false, note: "No location. Drive-up from Charlotte. Ads to techs, not a fake storefront.", need: "Mobile + detailing." },
  { city: "Monroe / Union County", state: "NC", status: "Page + hiring", shop: false, note: "No location. Page exists to fill the roster.", need: "Brakes." },
  { city: "Greensboro / Winston-Salem", state: "NC", status: "Hiring — not live yet", shop: false, note: "I-85. Mechanic ads + apply page. No customer booking yet.", need: "Brakes + roadside." },
  { city: "Raleigh / Durham", state: "NC", status: "Hiring — not live yet", shop: false, note: "Big bench needed. Page and hiring ads only until 3 insured vendors.", need: "Brakes, no-start, one EV." },
  { city: "Fayetteville", state: "NC", status: "Hiring — not live yet", shop: false, note: "Military + commuter cars. Page first, shop never required.", need: "Roadside + brakes." },
  { city: "Wilmington", state: "NC", status: "Hiring — not live yet", shop: false, note: "Coastal page. Heat and beach traffic. No bay.", need: "Roadside + detail/tint." },
  { city: "Asheville", state: "NC", status: "Waitlist", shop: false, note: "Mountain drive times. Collect names before promising ETAs.", need: "Mobile brakes." },
  { city: "Columbia", state: "SC", status: "Hiring — not live yet", shop: false, note: "No shop. Applicant intake.", need: "L2 + one tint or detail." },
  { city: "Greenville / Spartanburg", state: "SC", status: "Hiring — not live yet", shop: false, note: "I-85 after Charlotte overflows.", need: "Mobile brakes." },
  { city: "Charleston", state: "SC", status: "Waitlist", shop: false, note: "Page can go up. Do not sell same-day until the roster is real.", need: "Roadside + tint." },
  { city: "Atlanta", state: "GA", status: "Waitlist", shop: false, note: "Huge. Wait on a bench, not a logo.", need: "EV + L3 + insured vans." },
  { city: "Nashville", state: "TN", status: "Waitlist", shop: false, note: "Applications open. Dispatch closed.", need: "Roadside + brakes." },
  { city: "Richmond", state: "VA", status: "Waitlist", shop: false, note: "Applications open.", need: "L2." },
  { city: "Jacksonville", state: "FL", status: "Waitlist", shop: false, note: "Applications open.", need: "Roadside heat + EV 12V." },
  { city: "Anywhere else", state: "US", status: "Waitlist", shop: false, note: "Apply with city + ZIP. That town gets a page when we want names. It gets jobs when the roster is qualified.", need: "Tell us the city." },
];

export const LAUNCH_RULE =
  "Speedy branding stays Speedy. Charlotte is the only shop. Other cities get a page and hiring ads to fill a mechanic / tint / detail database. Customers in that city are not booked until the bench is insured and Academy-checked.";
