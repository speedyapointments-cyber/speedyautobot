export type VetStage =
  | "Applied"
  | "Docs"
  | "Insurance"
  | "Background"
  | "Entrance"
  | "Academy"
  | "Practical"
  | "Approved"
  | "Hold";

export const STAGES: VetStage[] = [
  "Applied",
  "Docs",
  "Insurance",
  "Background",
  "Entrance",
  "Academy",
  "Practical",
  "Approved",
];

export const TOOLS = [
  {
    id: "apply",
    name: "Speedy Apply",
    job: "Intake name, city, skills, W-9 promise",
    url: "/apply",
    auto: "Form already in the app",
  },
  {
    id: "entrance",
    name: "Entrance test",
    job: "Gauge experience, suggest L1 / L2 / L3 / EV",
    url: "/entrance",
    auto: "Score writes the suggested pay band",
  },
  {
    id: "academy",
    name: "Speedy Academy",
    job: "Standards + skill badges",
    url: "/academy",
    auto: "80% quiz pass required",
  },
  {
    id: "checkr",
    name: "Checkr",
    job: "Criminal + MVR driving record for contractors",
    url: "https://checkr.com/solutions/gig-and-marketplace",
    auto: "Order from email. FCRA consent first.",
  },
  {
    id: "goodhire",
    name: "GoodHire (Checkr)",
    job: "Smaller-shop background if you are not on Checkr API yet",
    url: "https://www.goodhire.com/",
    auto: "Manual order until API is connected",
  },
  {
    id: "hiscox",
    name: "Hiscox / NEXT / Progressive",
    job: "GL + garagekeepers + commercial auto COI",
    url: "https://www.hiscox.com/small-business-insurance/contractor-insurance",
    auto: "Applicant buys. Shop checks additional insured.",
  },
  {
    id: "irs",
    name: "IRS W-9",
    job: "1099 vendor tax form",
    url: "https://www.irs.gov/forms-pubs/about-form-w-9",
    auto: "Collect PDF. Do not treat as employee I-9.",
  },
  {
    id: "docusign",
    name: "DocuSign / Dropbox Sign",
    job: "Vendor agreement signature",
    url: "https://www.docusign.com/",
    auto: "Send after Approved stage",
  },
  {
    id: "stripe",
    name: "Stripe Connect or ACH",
    job: "Weekly 1099 payout",
    url: "https://stripe.com/connect",
    auto: "Pay only after photos + customer charged",
  },
];

export function stageFromStatus(status: string): VetStage {
  if (status === "Academy passed") return "Practical";
  if (status === "Docs in") return "Insurance";
  if (status === "Applied — pending") return "Docs";
  return "Applied";
}
