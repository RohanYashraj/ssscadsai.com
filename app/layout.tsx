import type { Metadata } from "next";
import { Syne, Geist } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/lib/site-content";
import { Analytics } from "@/components/analytics";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const baseUrl = siteContent.meta.baseUrl || undefined;

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    type: "website",
    ...(baseUrl && { url: baseUrl }),
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteContent.siteName,
      description: siteContent.meta.description,
      ...(baseUrl && { url: baseUrl }),
    },
    {
      "@type": "Organization",
      name: siteContent.siteName,
      description: siteContent.meta.description,
      ...(baseUrl && { url: baseUrl }),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${geistSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
