import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wisnu Rafi - Security Engineer",
  description:
    "Portfolio of Wisnu Rafi, Security Engineer at BeyondSoft Singapore. Reverse engineering, systems software, and tools people actually install.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wisnu Rafi - Security Engineer",
    description:
      "Security Engineer at BeyondSoft Singapore. I trust a bug after I can reproduce it twice.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "wisnu.rafi portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisnu Rafi - Security Engineer",
    description:
      "Security Engineer at BeyondSoft Singapore. I trust a bug after I can reproduce it twice.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmMono.className}>
      <body>{children}</body>
    </html>
  );
}
