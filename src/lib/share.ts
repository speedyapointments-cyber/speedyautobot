export const SHARE = {
  app: "https://www.speedyauto704.com/app",
  shop: "https://www.speedyauto704.com",
  mechanic: "https://www.speedyauto704.com/mechanic",
  academy: "https://www.speedyauto704.com/academy",
  recommend: "https://www.speedyauto704.com/recommend",
  ogImage:
    "https://static.wixstatic.com/media/d5cd96_19236b40475a4321b097fcf9e73b3836~mv2.png",
  customerText:
    "Speedy Mobile Auto Repair in Charlotte — they come to you or you go to the shop. Book here: https://www.speedyauto704.com/app",
  mechanicText:
    "Hiring independent techs in Charlotte. Apply + Speedy Academy: https://www.speedyauto704.com/mechanic",
} as const;

export function smsHref(text: string) {
  return `sms:?body=${encodeURIComponent(text)}`;
}

export function whatsappHref(text: string) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, text: string) {
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
