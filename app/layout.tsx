import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "gdg.sfhacks.io";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "SF Hacks × GDG — AI Hackathon";
  const description = "A one-day AI hackathon for curious builders in San Francisco on October 2, 2026.";

  return {
    metadataBase: base,
    title,
    description,
    icons: { icon: "/sfhacks-logo.png", shortcut: "/sfhacks-logo.png" },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: new URL("/og-v2.png", base).toString(), width: 1200, height: 630, alt: "SF Hacks × GDG AI Hackathon" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og-v2.png", base).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
