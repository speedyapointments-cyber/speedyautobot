export type AcademyQuestion = {
  q: string;
  choices: string[];
  answer: number;
  why: string;
};

export type AcademyCourse = {
  slug: string;
  skill: string;
  level: 1 | 2;
  title: string;
  badge: string;
  minutes: number;
  payUnlock: string;
  outcomes: string[];
  modules: { title: string; points: string[] }[];
  quiz: AcademyQuestion[];
};

export const PASS_SCORE = 80;

export const COURSES: AcademyCourse[] = [
  {
    slug: "speedy-standards",
    skill: "Network",
    level: 1,
    title: "Speedy Network Standards",
    badge: "Network Ready",
    minutes: 20,
    payUnlock: "Required before any paid ticket",
    outcomes: [
      "Write an estimate and get authorization the NC way",
      "Photo a job so a comeback is defensible",
      "Stay on-app and inside insurance rules",
    ],
    modules: [
      {
        title: "Who you are on a Speedy ticket",
        points: [
          "Independent vendor, not an employee. No clock wage.",
          "Marvin dispatches. You may decline. No auto-dispatch.",
          "Pay is $22 / $38 / $55 per flagged hour. $55 is the tap-out.",
        ],
      },
      {
        title: "Ticket rules",
        points: [
          "Labor and parts stay separate. Parts are receipt cost if Speedy authorized them.",
          "Extra work needs customer authorization before you turn the wrench.",
          "NC Motor Vehicle Repair Act applies on covered jobs: written estimate, notify if you will beat the estimate by more than 10%, itemized invoice.",
        ],
      },
      {
        title: "Cover the shop",
        points: [
          "Before and after photos on every ticket.",
          "No cash off-app with a Speedy-introduced customer.",
          "Insurance must stay current: $1M GL, garagekeepers, commercial auto.",
        ],
      },
    ],
    quiz: [
      {
        q: "A driveway brake job is flagged 1.5 hours. You are Level 2. What do you earn on labor?",
        choices: ["60% of whatever labor you write on the RO", "$57", "$38", "$55 × 1.5"],
        answer: 1,
        why: "Level 2 is $38 per flagged hour. 1.5 × $38 = $57. Not a raw percent of a padded labor line.",
      },
      {
        q: "Customer says ‘just do whatever else you find.’ Rotors are worse than quoted. What do you do first?",
        choices: [
          "Finish the job and add it to the invoice",
          "Text a friend for a price",
          "Stop, send photos, and get authorization before extra work",
          "Use the old rotors and call it good",
        ],
        answer: 2,
        why: "Authorization before extra work. That is Speedy policy and NC repair-act practice on covered jobs.",
      },
      {
        q: "A Speedy customer offers cash if you come back Saturday without the app. What is the rule?",
        choices: [
          "Fine if you discount it",
          "Fine after 30 days",
          "Off-app cash on a Speedy customer is removal and lost holdback",
          "Only banned on warranties",
        ],
        answer: 2,
        why: "Circumventing Speedy on a Speedy-introduced customer is a fireable vendor offense.",
      },
      {
        q: "Which insurance actually covers the customer’s car while it is on your stands?",
        choices: ["Personal auto", "Homeowners", "Garagekeepers", "The Speedy website policy"],
        answer: 2,
        why: "General liability excludes property in your care. Garagekeepers is the policy for the customer vehicle.",
      },
      {
        q: "When does the Speedy Academy quiz certificate let you take live tickets?",
        choices: [
          "Immediately after 80%",
          "After Marvin approves documents and, for install skills, a practical",
          "After you post it on Facebook",
          "After one YouTube brake video",
        ],
        answer: 1,
        why: "Online pass = knowledge badge only. Live work stays pending until vetting and practical sign-off.",
      },
    ],
  },
  {
    slug: "brakes-fundamentals",
    skill: "Brakes",
    level: 1,
    title: "Brakes Fundamentals",
    badge: "Brakes Fundamentals Certified",
    minutes: 25,
    payUnlock: "Opens brakes as a claimed skill at Level 1 ($22/hr) after practical",
    outcomes: [
      "Know when a pad slap is not the job",
      "Catch a seized slide pin before the comeback",
      "Torque and bedding, not ‘good enough’",
    ],
    modules: [
      {
        title: "What the ticket is actually asking",
        points: [
          "Pad-only vs pad and rotor vs hardware and hoses.",
          "A brakes install is not a no-start or a scan-tool job.",
          "If the caliper is not retracting, stop and photo it. Do not force it.",
        ],
      },
      {
        title: "Comeback killers",
        points: [
          "Slide pins, boots, and bracket torque.",
          "Open-end wrench on a banjo bolt is how you get a leak call at 9pm.",
          "Test drive and pedal feel before you leave the driveway.",
        ],
      },
    ],
    quiz: [
      {
        q: "After new pads the pedal is high and the wheel is hot 10 minutes later. Most likely cause?",
        choices: [
          "Customer drove too soon",
          "Caliper not retracted / slide pins seized",
          "Need a bigger rotor",
          "Air in the radio",
        ],
        answer: 1,
        why: "Drag from a stuck caliper or pins is the classic post-brake comeback.",
      },
      {
        q: "Customer-supplied cheap pads. They want a Speedy parts warranty. Policy?",
        choices: [
          "Same as Speedy parts",
          "No Speedy parts warranty on customer-supplied parts",
          "90 days no matter what",
          "Only if they keep the box",
        ],
        answer: 1,
        why: "Customer-supplied parts carry no Speedy parts warranty. Labor workmanship still has the 30-day / 1,000-mile rule.",
      },
      {
        q: "You find a ripped axle boot while doing brakes. Next step?",
        choices: [
          "Replace it and add it",
          "Ignore it",
          "Photo it, quote it, get authorization, then decide",
          "Tell them it is fine for a year",
        ],
        answer: 2,
        why: "Find it, show it, get a yes or no. Do not bury extra work in the brake line.",
      },
      {
        q: "Which job is outside a brakes-install skill badge?",
        choices: [
          "Rear pad and rotor",
          "Parking-brake hardware on a drum-in-hat",
          "No-start after a jump",
          "Bleed a corner you opened",
        ],
        answer: 2,
        why: "Skills stay separate. A brakes badge does not authorize a no-start diagnosis.",
      },
      {
        q: "Minimum photos on a Speedy brake ticket?",
        choices: [
          "None if the customer is watching",
          "Before pads, hardware, torque paint or wrench on lug, after wheel on",
          "Only the invoice",
          "A selfie with the van",
        ],
        answer: 1,
        why: "Photos are how Speedy defends the ticket and how you get paid without an argument.",
      },
    ],
  },
  {
    slug: "no-start-diagnostics",
    skill: "No-start",
    level: 1,
    title: "No-Start & Scan Fundamentals",
    badge: "Diagnostics Fundamentals Certified",
    minutes: 25,
    payUnlock: "Opens no-start / PMI tickets after practical",
    outcomes: [
      "Separate no-crank, crank-no-start, and stall",
      "Use a scan tool as a tool, not a magic eight ball",
      "Know when the job is a tow, not a driveway hero move",
    ],
    modules: [
      {
        title: "Triage",
        points: [
          "No-crank vs crank-no-start vs starts-and-dies.",
          "Battery, connections, and grounds before parts cannon.",
          "Posted diagnostic / PMI fee uses your flagged-hour rate.",
        ],
      },
      {
        title: "Scan discipline",
        points: [
          "Codes are clues. Clear-and-guess is not a diagnosis.",
          "Pending vs stored vs permanent.",
          "If you need a lab scope and do not have one, say so and stop.",
        ],
      },
    ],
    quiz: [
      {
        q: "Engine cranks strong, no start, no spark, no injector pulse. First honest move?",
        choices: [
          "Throw a crank sensor",
          "Confirm power, ground, and a valid crank signal before parts",
          "Replace the PCM",
          "Add seafoam",
        ],
        answer: 1,
        why: "Prove the inputs. Parts without a signal check is how no-starts become two tickets.",
      },
      {
        q: "Customer already bought a battery. Car still dead. Your scan tool is at the shop. Do you take the no-start?",
        choices: [
          "Yes, jump it and leave",
          "No. Do not claim a scan skill you cannot perform on site",
          "Yes if they pay cash",
          "Only on Sundays",
        ],
        answer: 1,
        why: "If the skill needs a scan tool, the tool has to be on the truck.",
      },
      {
        q: "PMI after a module R&R. What does Speedy expect?",
        choices: [
          "Clear codes and go",
          "Complete the OEM-required initialize / program / calibrate, then document it",
          "A battery tender overnight",
          "Nothing if it starts",
        ],
        answer: 1,
        why: "PMI is its own skill. Starting is not the same as programmed and calibrated.",
      },
      {
        q: "You find a wiring chase chewed through. Estimate is already maxed. Next?",
        choices: [
          "Tape it and invoice the original number",
          "Stop, photo, revised estimate, authorization",
          "Tow it to your house",
          "Ignore the harness",
        ],
        answer: 1,
        why: "Scope change = new authorization. Always.",
      },
      {
        q: "Which statement is true?",
        choices: [
          "A brakes badge includes no-start",
          "A tint badge includes PMI",
          "No-start and PMI are separate checkboxes",
          "Golf cart kits count as scan tools",
        ],
        answer: 2,
        why: "Speedy skills are not a blob. Claim only what you can finish unsupervised.",
      },
    ],
  },
  {
    slug: "tint-fundamentals",
    skill: "Tint",
    level: 1,
    title: "Tint Fundamentals",
    badge: "Tint Fundamentals Certified",
    minutes: 20,
    payUnlock: "Opens tint tickets after a practical install check",
    outcomes: [
      "Know legal shade vs customer want",
      "Prep and contamination control",
      "When a bubble is your comeback, not the film",
    ],
    modules: [
      {
        title: "Legal and customer",
        points: [
          "NC windshield strip and front-side rules are not a suggestion. Quote legal film first.",
          "Tint is not detailing. Do not sell a full detail on a tint badge.",
        ],
      },
      {
        title: "Install quality",
        points: [
          "Glass must be chemically clean. Dust is a comeback.",
          "Rear defroster lines and camera / rain-sensor windows need extra care.",
          "Give a cure-time card. Peeling film to ‘check it’ on day one is how jobs get ruined.",
        ],
      },
    ],
    quiz: [
      {
        q: "Customer wants front sides darker than NC allows. What do you do?",
        choices: [
          "Do it and hope",
          "Refuse the illegal shade, offer the legal option in writing",
          "Tint the windshield instead",
          "Charge double",
        ],
        answer: 1,
        why: "Speedy does not install illegal film. Quote the legal spec and get a yes.",
      },
      {
        q: "A rear window has a factory defroster. Best practice?",
        choices: [
          "Dry shrink hard over the lines until they print through",
          "Use the right film and technique so lines are not torn or silvered",
          "Shave the defroster off",
          "Skip the rear",
        ],
        answer: 1,
        why: "Defroster damage is a full-glass comeback. Technique matters.",
      },
      {
        q: "Contamination under film shows up the next morning. Who owns it?",
        choices: [
          "The film brand",
          "The customer’s driveway dust, so no comeback",
          "The installer — prep failure is workmanship",
          "Speedy marketing",
        ],
        answer: 2,
        why: "Dirt under film is an install defect. Redo at $0 labor if it is workmanship.",
      },
      {
        q: "Tint job also needs a clay-bar paint wipe. Skill check?",
        choices: [
          "Covered by tint badge",
          "That is detailing — separate skill or separate ticket",
          "Free add-on",
          "Always included",
        ],
        answer: 1,
        why: "Tint and detailing stay separate on purpose.",
      },
      {
        q: "When can you peel film to ‘fix a finger’ after the customer drove home?",
        choices: [
          "Anytime in 24 hours",
          "Only after cure guidance and a scheduled comeback, not in the parking lot on day one if the film is still wet-setting",
          "Never, even for a real defect",
          "Only if they paid cash",
        ],
        answer: 1,
        why: "Follow cure time. Real defects get a scheduled warranty visit, not a rushed peel that ruins the glass.",
      },
    ],
  },
  {
    slug: "detailing-fundamentals",
    skill: "Detailing",
    level: 1,
    title: "Detailing Fundamentals",
    badge: "Detailing Fundamentals Certified",
    minutes: 20,
    payUnlock: "Opens detailing tickets after a practical check",
    outcomes: [
      "Match the package sold — not a free paint correction",
      "Chemistry safety on trim and film",
      "Before / after photos that match the ticket",
    ],
    modules: [
      {
        title: "Scope",
        points: [
          "Wash, interior, polish, and ceramic are different tickets.",
          "Do not hit ceramic-coated or freshly tinted glass with the wrong chemical.",
        ],
      },
      {
        title: "Quality bar",
        points: [
          "Vacuum tracks, jambs, and trunk if the package includes them.",
          "If paint is too far gone, say so before you promise a correction.",
        ],
      },
    ],
    quiz: [
      {
        q: "Sold an interior detail. Seats have dye transfer. Next?",
        choices: [
          "Ignore it",
          "Photo, explain limit of the package, get a yes for extra correction or leave it",
          "Use bleach",
          "Replace the seats",
        ],
        answer: 1,
        why: "Show the limit. Do not invent a body-shop result on a detail ticket.",
      },
      {
        q: "Car was tinted yesterday. Customer wants a full exterior detail today. Risk?",
        choices: [
          "None",
          "High-pressure and some chemicals can lift fresh film — wait out cure or isolate glass",
          "Tint always loves a pressure washer",
          "Only the hood matters",
        ],
        answer: 1,
        why: "Fresh tint and aggressive wash chemistry do not mix.",
      },
      {
        q: "Which photo set belongs on a Speedy detail ticket?",
        choices: [
          "Only the smile at pickup",
          "All four sides, interior before, interior after, any damage found",
          "None",
          "Just the vacuum",
        ],
        answer: 1,
        why: "Pre-existing damage photos protect you and Speedy.",
      },
      {
        q: "Customer asks you to ‘just cut the oxidation off.’ Paint is through the clear. You should?",
        choices: [
          "Compound until primer shows",
          "Stop and explain it needs paint, not a detail",
          "Wax over it",
          "Charge ceramic and hope",
        ],
        answer: 1,
        why: "Failed clear is not a polish job. Tell the truth.",
      },
      {
        q: "Detailing pay uses which number?",
        choices: [
          "Whatever you feel",
          "Your flagged-hour level rate against the booked package time",
          "70% of the whole ticket including product",
          "$159 × clock hours"
        ],
        answer: 1,
        why: "Same $22 / $38 / $55 band. Product is not a commission line.",
      },
    ],
  },
  {
    slug: "golf-cart-kits",
    skill: "Golf cart kits",
    level: 1,
    title: "Golf Cart Kit Fundamentals",
    badge: "Golf Cart Kit Fundamentals Certified",
    minutes: 20,
    payUnlock: "Opens kit installs after a practical",
    outcomes: [
      "Follow the kit instructions, not memory",
      "Torque, wire routing, and a test loop",
      "Know when it is a golf-cart shop problem, not a car-brake problem",
    ],
    modules: [
      {
        title: "Kit discipline",
        points: [
          "Inventory the box before you cut or drill.",
          "Lift points on a cart are not truck lift points.",
          "Low-speed electrical is still a fire if you pinch a harness.",
        ],
      },
    ],
    quiz: [
      {
        q: "Kit is short one bracket. You are already on site. Next?",
        choices: [
          "Fabricate from scrap and hope",
          "Stop, photo the packing list, call Speedy, do not drill extra holes",
          "Skip that corner",
          "Use zip ties as structure",
        ],
        answer: 1,
        why: "Missing kit parts are a pause, not a custom fab unless Marvin authorizes it.",
      },
      {
        q: "After a lift kit the cart rubs at full lock. You should?",
        choices: [
          "Leave it",
          "Recheck torque, alignment of arms, and specified tire size before blaming the kit",
          "Cut the fender",
          "Air down to 5 psi",
        ],
        answer: 1,
        why: "Most rubs are install or spec issues. Check the book first.",
      },
      {
        q: "A golf-cart kit badge lets you do what else?",
        choices: [
          "Any car no-start",
          "Only the kit and related on-cart work you were approved for",
          "Window tint",
          "Roadside lockouts on Teslas",
        ],
        answer: 1,
        why: "Skills stay in their lane.",
      },
      {
        q: "Battery pack is swollen on an electric cart. Policy?",
        choices: [
          "Install the kit on top of it",
          "Stop, photo, do not puncture, get a revised ticket",
          "Jump it from the van",
          "Charge it inside the customer garage overnight",
        ],
        answer: 1,
        why: "Damaged EV/cart batteries are a safety stop, not a kit footnote.",
      },
      {
        q: "Test loop before you leave?",
        choices: [
          "Optional",
          "Forward, reverse, brakes, lights, and a short ride on the surface you have",
          "Only if the customer asks",
          "Rev it twice",
        ],
        answer: 1,
        why: "If you did not ride it, you did not finish it.",
      },
    ],
  },
  {
    slug: "roadside-safety",
    skill: "Roadside",
    level: 1,
    title: "Roadside Safety",
    badge: "Roadside Ready",
    minutes: 15,
    payUnlock: "Opens jump / lockout / roadside after safety check",
    outcomes: [
      "Scene safety before the wrench",
      "Know a no-go vs a 10-minute jump",
      "Document the +$25 after-hours bonus correctly",
    ],
    modules: [
      {
        title: "Arrive alive",
        points: [
          "Hi-vis, triangles or beacons, never between traffic and the car if you can avoid it.",
          "If the shoulder is a highway lane, tow is the product.",
        ],
      },
    ],
    quiz: [
      {
        q: "Car is in a live left lane at dusk. Best call?",
        choices: [
          "Pop the hood anyway",
          "Do not work it. Make it a tow. Scene safety first",
          "Stand in the lane to flag cars",
          "Winch from the opposite shoulder across traffic",
        ],
        answer: 1,
        why: "A live-lane repair is not a Speedy hero job.",
      },
      {
        q: "After 6pm Sunday jump, Level 2, 0.5 flagged hours. Pay?",
        choices: ["$19", "$38 + $25 bonus after the job is complete", "$55", "$22 only"],
        answer: 1,
        why: "Flagged time at level rate, plus the $25 after-hours roadside bonus when the ticket is complete.",
      },
      {
        q: "Lockout and the customer cannot prove the car is theirs. You?",
        choices: [
          "Open it anyway",
          "Do not open it. ID and proof first",
          "Slide a coat hanger",
          "Ask a bystander",
        ],
        answer: 1,
        why: "Wrong-car lockouts are a liability nightmare.",
      },
      {
        q: "Jump pack hooked backwards, smell of electronics. Next?",
        choices: [
          "Try again",
          "Disconnect, photo, stop, do not keep pumping voltage into a smoked module",
          "Rev the van",
          "Clear codes and leave",
        ],
        answer: 1,
        why: "Stop the damage. Document. New authorization if modules are in play.",
      },
      {
        q: "Personal auto insurance covers paid roadside in the van?",
        choices: ["Yes always", "No. Commercial auto is required", "Only under 5 miles", "If Ava texts you"],
        answer: 1,
        why: "Personal auto excludes commercial use. That is why the COI is required before any roadside ticket.",
      },
    ],
  },
];

export function getCourse(slug: string) {
  return COURSES.find((course) => course.slug === slug);
}
