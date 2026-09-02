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
  title: "Speedy Mobile Auto Repair",
  description:
    "Independently owned mobile auto repair in Charlotte, NC. Book, track, rate, and apply — all makes and models.",
  applicationName: "Speedy Mobile Auto Repair",
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
