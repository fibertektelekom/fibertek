export type Service = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export const HOME_SERVICES: Service[] = [
  {
    id: "fiber",
    title: "Fiber Optik Altyapı",
    description:
      "Kurumsal fiber altyapı projelerinde planlama, kurulum ve devreye alma hizmetleri.",
    image:
      "https://images.unsplash.com/photo-1544197150-99a580c7610b?w=600&q=80",
  },
  {
    id: "fttx",
    title: "FTTX Çözümleri",
    description:
      "FTTH ve FTTX altyapılarında son kullanıcıya kadar fiber erişim çözümleri.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    id: "saha",
    title: "Saha Operasyonları",
    description:
      "Geniş saha ekibiyle koordineli kurulum, bakım ve teknik destek operasyonları.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
];

export const ALL_SERVICES: Service[] = [
  {
    id: "fiber-optik",
    title: "Fiber Optik Altyapı",
    description:
      "Kurumsal fiber optik altyapı projelerinde keşif, planlama, kurulum ve devreye alma. Metro ve erişim ağı altyapılarında teknik uzmanlık ve saha uygulaması.",
  },
  {
    id: "fttx",
    title: "FTTX Çözümleri",
    description:
      "FTTH ve FTTX projelerinde son kullanıcıya kadar fiber erişim altyapısı. Bina içi dağıtım, sonlandırma ve bağlantı süreçlerinin profesyonel yönetimi.",
  },
  {
    id: "ek-sonlandirma",
    title: "Ek ve Sonlandırma İşleri",
    description:
      "Fiber kablo ek, fusion ve sonlandırma işleri. Patch panel, ODF ve dağıtım noktalarında standartlara uygun teknik uygulama.",
  },
  {
    id: "network",
    title: "Network Kurulum",
    description:
      "Aktif ve pasif network ekipmanlarının kurulumu, kablolama ve rack kabinet düzenlemesi. Kurumsal ağ altyapısının sahada hayata geçirilmesi.",
  },
  {
    id: "saha",
    title: "Saha Operasyonları",
    description:
      "50+ kişilik saha gücüyle koordineli kurulum, montaj ve operasyonel destek. Proje bazlı ekip yönetimi ve saha koordinasyonu.",
  },
  {
    id: "bakim",
    title: "Bakım ve Teknik Destek",
    description:
      "Mevcut altyapının periyodik bakımı, arıza müdahalesi ve teknik destek hizmetleri. Süreklilik odaklı operasyonel destek.",
  },
  {
    id: "kurumsal",
    title: "Kurumsal Telekom Çözümleri",
    description:
      "Kurumsal müşterilere özel telekom altyapı projeleri. Planlama, uygulama ve işletme desteği süreçlerinde uçtan uca hizmet.",
  },
  {
    id: "superonline",
    title: "Superonline Saha İşleri ve Altyapı Destekleri",
    description:
      "Superonline kapsamındaki saha işleri, fiber altyapı kurulum ve operasyonel destek süreçleri. Deneyimli ekip ve kurumsal iş disipliniyle yürütülen projeler.",
  },
];

export const SERVICE_FORM_OPTIONS = [
  { value: "", label: "Seçiniz" },
  { value: "fiber", label: "Fiber Optik Altyapı" },
  { value: "fttx", label: "FTTX Çözümleri" },
  { value: "saha", label: "Saha Operasyonları" },
  { value: "superonline", label: "Superonline Saha İşleri" },
  { value: "diger", label: "Diğer" },
] as const;
