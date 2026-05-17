import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fibertektelekom.com"),
  title: {
    default: "Fibertek Telekom",
    template: "%s | Fibertek Telekom",
  },
  description:
    "İstanbul merkezli fiber optik altyapı, saha operasyonları ve kurumsal telekom çözümleri. 50+ kişilik saha gücü.",
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
