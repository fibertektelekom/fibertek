import { SITE } from "./site-config";

export type QuoteFormData = {
  adSoyad: string;
  firma: string;
  telefon: string;
  email: string;
  hizmet: string;
  mesaj: string;
};

export function buildWhatsAppQuoteUrl(data: QuoteFormData): string {
  const lines = [
    "Merhaba, Fibertek Telekom web sitesinden teklif talebi gönderiyorum.",
    "",
    `Ad Soyad: ${data.adSoyad}`,
    `Firma: ${data.firma || "Belirtilmedi"}`,
    `Telefon: ${data.telefon}`,
    `E-posta: ${data.email || "Belirtilmedi"}`,
    `Hizmet: ${data.hizmet || "Belirtilmedi"}`,
    "",
    "Talep detayı:",
    data.mesaj,
  ];

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
