export type HomeServiceIcon =
  | "fiber"
  | "fttx"
  | "field"
  | "maintenance"
  | "corporate"
  | "splice";

export type HomeService = {
  id: string;
  icon: HomeServiceIcon;
  title: string;
  description: string;
};

export const HOME_SERVICES: HomeService[] = [
  {
    id: "fiber",
    icon: "fiber",
    title: "Fiber Optik Altyapı",
    description:
      "Kurumsal fiber altyapı projelerinde planlama, kurulum ve devreye alma hizmetleri.",
  },
  {
    id: "fttx",
    icon: "fttx",
    title: "FTTX Çözümleri",
    description:
      "FTTH ve FTTX altyapılarında son kullanıcıya kadar yüksek hızlı fiber erişim çözümleri.",
  },
  {
    id: "saha",
    icon: "field",
    title: "Saha Operasyonları",
    description:
      "Geniş saha ekibiyle koordineli kurulum, bakım ve teknik destek operasyonları.",
  },
  {
    id: "bakim",
    icon: "maintenance",
    title: "Bakım & Teknik Destek",
    description:
      "Fiber altyapı bakım, arıza tespiti ve hızlı müdahale çözümleri.",
  },
  {
    id: "kurumsal",
    icon: "corporate",
    title: "Kurumsal Telekom Çözümleri",
    description:
      "İşletmelere özel güvenilir, ölçeklenebilir ve sürdürülebilir telekom altyapıları.",
  },
  {
    id: "ek-sonlandirma",
    icon: "splice",
    title: "Ek ve Sonlandırma",
    description:
      "Fiber ek, sonlandırma ve test süreçlerinde profesyonel uygulama hizmetleri.",
  },
];
