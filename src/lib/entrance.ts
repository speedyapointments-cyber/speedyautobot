export type EntranceQ = {
  q: string;
  choices: string[];
  answer: number;
  why: string;
  skill: "Brakes" | "Diag" | "Safety" | "EV" | "Shop";
};

export const ENTRANCE: EntranceQ[] = [
  {
    skill: "Brakes",
    q: "New pads, pedal is high, that wheel is hot after a short drive. First check?",
    choices: ["Customer rode the brake", "Caliper / slide pins dragging", "Need bigger rotors", "Add more grease to the pads"],
    answer: 1,
    why: "Heat after a pad slap is almost always drag from a stuck caliper or pins.",
  },
  {
    skill: "Brakes",
    q: "You open a banjo bolt with an open-end wrench and round it. Next honest move?",
    choices: ["Keep turning", "Stop, photo, tell the shop, do not hide it", "Hit it with a hammer", "Leave it 1/4 turn loose"],
    answer: 1,
    why: "A rounded banjo is a leak and a comeback. Show it before you make it worse.",
  },
  {
    skill: "Diag",
    q: "Cranks strong, no start, no spark, no injector pulse. First move?",
    choices: ["Throw a crank sensor", "Prove power, ground, and a crank signal", "Replace the PCM", "Add seafoam"],
    answer: 1,
    why: "Prove the inputs. Parts without a signal check is how no-starts become two tickets.",
  },
  {
    skill: "Diag",
    q: "Scan tool throws P0303. You clear it and it comes back immediately. You should?",
    choices: ["Sell three coils", "Diagnose cylinder 3 before parts", "Ignore pending codes", "Clear it again and leave"],
    answer: 1,
    why: "A hard code is a clue. Clearing is not a repair.",
  },
  {
    skill: "Safety",
    q: "Car is on a portable lift in a driveway. The customer wants to sit in it. Policy?",
    choices: ["Fine if they sign", "Nobody in or under a raised vehicle. Period.", "Only kids", "Only if the parking brake is on"],
    answer: 1,
    why: "Raised vehicle = exclusion zone. That is how people get killed.",
  },
  {
    skill: "Safety",
    q: "Which insurance actually covers the customer car on your stands?",
    choices: ["Personal auto", "Homeowners", "Garagekeepers", "The Speedy website"],
    answer: 2,
    why: "General liability excludes care, custody, and control. Garagekeepers is the policy.",
  },
  {
    skill: "EV",
    q: "Orange cable is showing after a fender tap. You should?",
    choices: ["Tape it and quote brakes", "Stop, keep people back, no probing, HV-qualified or tow", "Jump the 12V", "Pull the pack in the driveway"],
    answer: 1,
    why: "Damaged HV is a hard stop. Driveway pack-off is not a Speedy ticket.",
  },
  {
    skill: "EV",
    q: "Tesla is dead in a garage. Most common first fail that is NOT the high-voltage pack?",
    choices: ["Drive unit", "The 12-volt support battery", "The charge port door", "Tire pressure"],
    answer: 1,
    why: "A lot of ‘dead EVs’ are the little 12V. Still treat HV as live until isolated.",
  },
  {
    skill: "Shop",
    q: "Estimate was pads. Rotors are below spec. Customer said ‘just do whatever.’ Next?",
    choices: ["Do the rotors and add it", "Stop, photo, get a yes on the extra before you cut", "Use the old rotors", "Text a buddy for a price and keep working"],
    answer: 1,
    why: "Authorization before extra work. Speedy policy and NC repair-act practice.",
  },
  {
    skill: "Shop",
    q: "Speedy customer offers cash if you come back Saturday off-app. Rule?",
    choices: ["Fine if you discount", "Fine after 30 days", "Off-app cash on a Speedy customer is removal", "Only banned on warranties"],
    answer: 2,
    why: "Circumventing Speedy on a Speedy-introduced customer is a fireable vendor offense.",
  },
  {
    skill: "Shop",
    q: "A 2.0 hour brake job at Level 2 pays you how much labor?",
    choices: ["60% of whatever you write", "$76", "$110", "$150 × 2"],
    answer: 1,
    why: "Level 2 is $38 per flagged hour. 2 × $38 = $76. Not a percent of a padded RO.",
  },
  {
    skill: "Safety",
    q: "You do not have in-date HV gloves and the ticket is EV isolation. You should?",
    choices: ["Use dish gloves once", "Decline that ticket", "Use leather only", "Let the customer hold the cable"],
    answer: 1,
    why: "Expired or missing HV PPE means you do not take the HV job.",
  },
];

export function band(score: number) {
  if (score >= 85) return { level: "Suggested ICE L3 / EV interview", pay: "$55 ICE or $52–$75 EV after practical", note: "High written score. Still a live practical before L3 or EV-2." };
  if (score >= 70) return { level: "Suggested ICE L2", pay: "$38 / flagged hour after docs", note: "Solid written. Practical on claimed install skills next." };
  if (score >= 50) return { level: "Suggested ICE L1 Provisional", pay: "$22 / flagged hour", note: "Enough to start Academy + docs. Stay off unsupervised no-start and HV." };
  return { level: "Not ready for live tickets", pay: "No dispatch", note: "Run Speedy Standards and Brakes Fundamentals, then retake." };
}
