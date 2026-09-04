export const SHOP = {
  name: "Speedy Mobile Auto Repair",
  shortName: "Speedy",
  phone: "(704) 835-2577",
  phoneTel: "+17048352577",
  phoneSms: "17048352577",
  email: "speedyapointments@gmail.com",
  website: "https://www.speedyauto704.com",
  city: "Charlotte, NC",
  address: "6016 McDaniel Lane Suite D, Charlotte NC 28213",
  hours: {
    weekdays: "Mon–Fri 8:00 AM–6:00 PM",
    saturday: "Saturday 8:00 AM–2:00 PM",
    sunday: "Sunday closed",
    summary: "Mon–Fri 8:00 AM–6:00 PM · Sat 8:00 AM–2:00 PM · Sun closed",
  },
  shopLogin: "speedy704",
  shopPassword: "speedy704",
  bookUrl: "https://portal.ari.app/b/kCHD15A2N0Vobeo5jdgZhwQBJTA3",
  tagline: "we come to you or you come to us",
  smsBody: "Need 24-hour roadside / repair. This is my location and what happened:",
  pricing: [
    "Front brakes from $375",
    "Rear brakes from $385",
    "Trucks quoted",
    "Diag $85–$125",
    "Labor $150/hr",
  ],
  payAccepted: ["Cash App", "Venmo", "Apple Pay", "Tap to Pay", "PayPal"],
  payDeclined: ["No Zelle", "No checks"],
} as const;

export function smsHref(body = SHOP.smsBody) {
  return `sms:+${SHOP.phoneSms}?&body=${encodeURIComponent(body)}`;
}
