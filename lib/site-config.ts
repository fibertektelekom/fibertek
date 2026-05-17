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
