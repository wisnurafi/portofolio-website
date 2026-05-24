import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wisnu Rafi | Systems & Offensive Security Engineer",
  description:
    "Portfolio of Wisnu Rafi - Systems Software Engineer and Offensive Security Engineer focused on low-level systems, reverse engineering, and secure software.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wisnu Rafi | Systems & Offensive Security Engineer",
    description:
      "Systems software engineer and offensive security engineer focused on low-level systems, reverse engineering, and secure software.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Wisnu Rafi portfolio open graph image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisnu Rafi | Systems & Offensive Security Engineer",
    description:
      "Systems software engineer and offensive security engineer focused on low-level systems, reverse engineering, and secure software.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable,
        "font-sans",
        spaceGrotesk.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
