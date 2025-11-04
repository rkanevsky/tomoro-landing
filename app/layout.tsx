import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomoro - Time Tracking for Solo Freelancers",
  description:
    "Private, offline time tracking and billing app for solo freelancers. Desktop-first, zero cloud. One-time purchase, no subscriptions.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Tomoro - Time flies. We just help you catch it (and bill for it).",
    description:
      "Professional time tracking and billing for solo freelancers. Privacy-first, local-only storage.",
    url: "https://tomoro.app",
    siteName: "Tomoro",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black-rich text-neutral-100">{children}</body>
    </html>
  );
}
