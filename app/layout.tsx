import type { Metadata } from "next";
import "./globals.css";

const OG_IMAGE = "/image/og-fibertek.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://fibertektelekom.com"),
  title: {
    default: "Fibertek Telekom",
    template: "%s | Fibertek Telekom",
  },
  description:
    "İstanbul merkezli fiber optik altyapı, saha operasyonları ve kurumsal telekom çözümleri. 50+ kişilik saha gücü.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Fibertek Telekom",
    title: "Fibertek Telekom",
    description:
      "İstanbul merkezli fiber optik altyapı, saha operasyonları ve kurumsal telekom çözümleri.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Fibertek Telekom — Fiber altyapı ve saha operasyonları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibertek Telekom",
    description:
      "İstanbul merkezli fiber optik altyapı, saha operasyonları ve kurumsal telekom çözümleri.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
