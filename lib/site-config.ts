export const SITE = {
  name: "Fibertek Telekom",
  tagline: "Fiber Altyapı & Saha Operasyonları",
  description:
    "İstanbul merkezli fiber optik altyapı, saha operasyonları ve kurumsal telekom çözümleri.",
  phone: "+905305524964",
  phoneDisplay: "+90 530 552 49 64",
  whatsapp: "905305524964",
  address: "PERPA Ticaret Merkezi, Şişli / İstanbul",
  addressShort: "PERPA / İstanbul",
  workingHours: "Pazartesi – Cuma: 09:00 – 18:00",
  mapsUrl: "https://maps.app.goo.gl/HnNLQ4w8d5pMcF3G6",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.351629261567!2d28.968383375861336!3d41.061305871343116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab787f0c406b5%3A0xecfcb4a3f3dc8e80!2sF%C4%B0BERTEK%20TELEKOM!5e0!3m2!1str!2str!4v1779032563251!5m2!1str!2str",
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}`;
export const TEL_URL = `tel:${SITE.phone}`;
