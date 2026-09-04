import type { AcademyCourse } from "./academy";

export const EV_COURSES: AcademyCourse[] = [
  {
    slug: "ev-high-voltage-safety",
    skill: "EV",
    level: 1,
    title: "EV High-Voltage Safety",
    badge: "EV Safety Qualified",
    minutes: 25,
    payUnlock: "Required before any EV ticket. Unlocks EV-1 at $35 / flagged hour after practical.",
    outcomes: [
      "Treat orange cable as live until you prove it is isolated",
      "Use in-date HV gloves and a CAT III / IV meter",
      "Stop and tow when the pack is damaged — do not be a hero",
    ],
    modules: [
      {
        title: "Why EV pay is separate",
        points: [
          "ICE band stays $22 / $38 / $55.",
          "EV band is $35 / $52 / $75 because of HV risk, PPE, and scarcer techs.",
          "A brakes badge on a Tesla does not make you EV-qualified.",
        ],
      },
      {
        title: "Hard stops",
        points: [
          "No work on orange HV until the vehicle is isolated per OEM and verified dead.",
          "Swollen, leaking, or crash-damaged pack = stop, photo, tow. No driveway pack work.",
          "Insurance must not exclude electric / high-voltage work.",
          "ASE xEV1 or OEM HV safety plus this Academy course before live tickets.",
        ],
      },
    ],
    quiz: [
      {
        q: "You are ICE Level 3 ($55). Customer has a Tesla 12V / LV support issue that becomes an HV isolation job. What rate applies?",
        choices: [
          "$55 because you are Level 3",
          "EV rate only if you are EV-qualified; otherwise decline or call an EV tech",
          "$22",
          "Whatever the customer offers cash",
        ],
        answer: 1,
        why: "EV tickets use the EV band and an EV-qualified vendor. ICE level does not carry over.",
      },
      {
        q: "Orange cable is exposed after a fender-bender. First move?",
        choices: [
          "Wrap it in electrical tape and finish the estimate",
          "Stop, keep people back, do not cut or probe, photo, tow / HV-qualified only",
          "Jump the 12V from the van",
          "Remove the pack in the driveway",
        ],
        answer: 1,
        why: "Damaged HV is a safety stop. Driveway pack work is not a Speedy ticket.",
      },
      {
        q: "HV gloves expired last month. You have a leather pair. Policy?",
        choices: [
          "Leather is fine",
          "Do not take the HV job. In-date class-0 gloves and leather protectors, or decline",
          "Use dish gloves",
          "One time is fine",
        ],
        answer: 1,
        why: "Expired HV PPE is the same as no PPE.",
      },
      {
        q: "Which credential is the floor for Speedy EV-1?",
        choices: [
          "YouTube HV video",
          "ASE xEV1 or OEM HV safety + this course + practical",
          "A brakes certificate",
          "A jump pack",
        ],
        answer: 1,
        why: "xEV1 / OEM safety is the industry floor. Speedy still adds Academy + practical.",
      },
      {
        q: "EV-3 tap-out flagged-hour rate is?",
        choices: ["$55", "$75", "$150", "$27"],
        answer: 1,
        why: "EV specialist tap-out is $75 per flagged hour. ICE tap-out stays $55.",
      },
    ],
  },
];
