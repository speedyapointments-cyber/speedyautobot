import type { Metadata, Viewport } from "next";
import { Sora, Teko } from "next/font/google";
import "./globals.css";
import { SHARE } from "@/lib/share";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://speedy-network.vercel.app"),
  title: {
    default: "Speedy Mobile Auto Repair",
    template: "%s | Speedy",
  },
  description:
    "Charlotte mobile and shop auto repair. We come to you or you come to us. Book, track, rate, or apply on Speedy Network.",
  applicationName: "Speedy Network",
  keywords: [
    "Speedy Mobile Auto Repair",
    "Charlotte mobile mechanic",
    "Speedy Network",
    "auto repair Charlotte NC",
  ],
  authors: [{ name: "Speedy Mobile Auto Repair" }],
  alternates: {
    canonical: SHARE.app,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SHARE.app,
    siteName: "Speedy Mobile Auto Repair",
    title: "Speedy Mobile Auto Repair",
    description:
      "Charlotte mobile and shop auto repair. Book in one tap — we come to you or you come to us.",
    images: [
      {
        url: SHARE.ogImage,
        width: 1200,
        height: 630,
        alt: "Speedy Mobile Auto Repair and Shop Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speedy Mobile Auto Repair",
    description:
      "Charlotte mobile and shop auto repair. Book in one tap.",
    images: [SHARE.ogImage],
  },
  appleWebApp: {
    capable: true,
    title: "Speedy",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${teko.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
