import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personel Takip",
  robots: { index: false, follow: false },
};

export default function PersonelRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
