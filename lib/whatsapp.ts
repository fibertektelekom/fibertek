import { SITE } from "./site-config";

export type ServiceRequestFormData = {
  adSoyad: string;
  telefon: string;
  hizmetTuru: string;
  bolge: string;
  talepDetayi: string;
};

export function buildWhatsAppServiceRequestUrl(
  data: ServiceRequestFormData
): string {
  const lines = [
    "Yeni Hizmet Talebi",
    "",
    `Ad Soyad: ${data.adSoyad}`,
    `Telefon: ${data.telefon}`,
    `Hizmet Türü: ${data.hizmetTuru}`,
    `Bölge / İlçe: ${data.bolge}`,
    "",
    "Talep Detayı:",
    data.talepDetayi,
  ];

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
