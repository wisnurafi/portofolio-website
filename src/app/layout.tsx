import type { Metadata, Viewport } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/json-ld";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const description =
  "Portfolio of Wisnu Rafi, Security Engineer at BeyondSoft Singapore. Reverse engineering, systems software, and tools people actually install.";

export const viewport: Viewport = {
  themeColor: "#232323",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wisnu Rafi - Security Engineer",
  description,
  keywords: [
    "Wisnu Rafi",
    "Security Engineer",
    "Reverse Engineering",
    "Systems Software Engineer",
    "BeyondSoft Singapore",
    "C++",
    "C#",
    "Windows Internals",
    "Red Team",
    "Malware Analysis",
    "Uninstra",
    "My Kait",
    "SentinelX",
  ],
  authors: [{ name: "Wisnu Rafi", url: "https://github.com/wisnurafi" }],
  creator: "Wisnu Rafi",
  publisher: "Wisnu Rafi",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "wisnu.rafi",
    title: "Wisnu Rafi - Security Engineer",
    description:
      "Security Engineer at BeyondSoft Singapore. I trust a bug after I can reproduce it twice.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Wisnu Rafi - Security Engineer at BeyondSoft Singapore",
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
      <body>
        <JsonLd siteUrl={siteUrl} />
        {children}
      </body>
    </html>
  );
}
