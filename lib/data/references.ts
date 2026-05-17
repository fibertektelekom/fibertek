export type Reference = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
};

export const HOME_REFERENCES: Reference[] = [
  {
    id: "akcadag",
    title: "Akçadağ Telekom",
    subtitle: "Telekom altyapı iş ortaklığı",
  },
  {
    id: "superonline",
    title: "Superonline",
    subtitle: "Saha ve altyapı operasyonları",
  },
  {
    id: "istanbul-finans-merkezi",
    title: "İstanbul Finans Merkezi",
    subtitle: "Kurumsal altyapı ve saha uygulamaları",
  },
  {
    id: "techom",
    title: "Techom",
    subtitle: "Telekom ve teknik altyapı projeleri",
  },
  {
    id: "kurumsal-fiber",
    title: "Kurumsal Fiber Altyapı Projeleri",
    subtitle: "Planlama, kurulum ve devreye alma",
  },
  {
    id: "saha-destek",
    title: "Saha Operasyon Destekleri",
    subtitle: "Teknik ekip ve koordinasyon hizmetleri",
  },
];

export const ALL_REFERENCES: Reference[] = [
  {
    id: "akcadag",
    title: "Akçadağ Telekom",
    description:
      "Telekom altyapı alanında iş ortaklığı kapsamında fiber optik ve saha operasyon projelerinde birlikte çalışılan kurumsal referansımızdır. Ortak projelerde teknik kalite ve saha koordinasyonu önceliklidir.",
  },
  {
    id: "superonline",
    title: "Superonline",
    description:
      "Fibertek Telekom, Superonline işlerini yürüten bir telekom altyapı firması olarak saha işleri, fiber altyapı kurulum ve operasyonel destek süreçlerinde aktif rol almaktadır.",
  },
  {
    id: "istanbul-finans-merkezi",
    title: "İstanbul Finans Merkezi",
    description:
      "İstanbul Finans Merkezi kapsamında kurumsal fiber ve pasif altyapı projelerinde planlama, saha kurulumu ve teknik uygulama hizmetleri sunulmaktadır.",
  },
  {
    id: "techom",
    title: "Techom",
    description:
      "Techom ile yürütülen telekom ve teknik altyapı projelerinde saha operasyonları, kablolama ve devreye alma süreçlerinde iş ortaklığı sağlanmaktadır.",
  },
  {
    id: "kurumsal-fiber",
    title: "Kurumsal Fiber Altyapı Projeleri",
    description:
      "Metro erişim, bina içi dağıtım ve kurumsal müşteri altyapılarında planlama, kurulum ve devreye alma aşamalarında tam kapsamlı proje deneyimi.",
  },
  {
    id: "saha-destek",
    title: "Saha Operasyon Destekleri",
    description:
      "Geniş saha ekibiyle kurulum, montaj, bakım ve teknik müdahale süreçlerinde operasyonel destek hizmetleri. Proje bazlı ekip tahsisi ve koordinasyon.",
  },
];
