import type { Metadata, Viewport } from "next";
import { Sora, Teko } from "next/font/google";
import "./globals.css";

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
  title: "Speedy Network",
  description:
    "Speedy Network — Charlotte mechanic network. Book, 24 Hour Roadside, Text Ava, track, rate, and apply with qualifications. Marvin matches jobs; no auto-dispatch.",
  applicationName: "Speedy Network",
  appleWebApp: {
    capable: true,
    title: "Speedy Network",
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
