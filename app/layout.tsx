import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SiteSnipe — Find Leads. Build Sites. Close Deals.",
  description:
    "Find local businesses without websites and sell them one. SiteSnipe gives you the leads, builds the site, and arms you with data to close the deal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceMono.variable}`}
    >
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#0a0a0c",
          color: "#f0f0f2",
        }}
      >
        {children}
      </body>
    </html>
  );
}
