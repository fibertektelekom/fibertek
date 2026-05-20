export type DistrictServiceItem = {
  title: string;
  description: string;
};

export const DISTRICT_SERVICE_ITEMS: DistrictServiceItem[] = [
  {
    title: "Fiber optik arıza tespiti ve müdahale",
    description:
      "Hat kesintisi, zayıf sinyal ve bağlantı kopması durumlarında sahada hızlı tespit ve müdahale.",
  },
  {
    title: "İnternet bağlantı sorunları için teknik destek",
    description:
      "Modem, hat ve iç tesisat kaynaklı internet arızalarında yerinde teknik destek.",
  },
  {
    title: "Superonline saha işleri ve altyapı destek hizmetleri",
    description:
      "Superonline kapsamındaki saha kurulum, bakım ve operasyonel destek süreçleri.",
  },
  {
    title: "Yeni fiber hat çekimi ve kablolama",
    description:
      "Bina içi/dışı yeni fiber hat çekimi, sonlandırma ve düzenli kablolama uygulamaları.",
  },
  {
    title: "Network ve zayıf akım kablolama",
    description:
      "Aktif/pasif network, patch panel ve zayıf akım altyapı kablolama hizmetleri.",
  },
  {
    title: "Güvenlik kamera kurulumu",
    description:
      "IP kamera ve güvenlik sistemi montajı, kurulumu ve devreye alma desteği.",
  },
];

export type DistrictPage = {
  slug: string;
  name: string;
  districtValue: string;
  image: string;
  intro: string;
  footerLinkLabel: string;
};

export const DISTRICT_PAGES: DistrictPage[] = [
  {
    slug: "sultangazi-fiber-optik-ariza",
    name: "Sultangazi",
    districtValue: "sultangazi",
    image: "/image/galary/galary11.jpeg",
    footerLinkLabel: "Sultangazi Fiber Optik Arıza",
    intro:
      "Sultangazi ve çevresinde fiber optik arıza, internet kesintisi ve saha destek talepleriniz için Fibertek Telekom ekipleri hızlı müdahale planlaması yapar. Konut ve iş yerlerinde hat kontrolü, sonlandırma ve teknik destek süreçlerini tek elden yönetiyoruz.",
  },
  {
    slug: "eyup-sultan-fiber-optik-ariza",
    name: "Eyüp Sultan",
    districtValue: "eyup-sultan",
    image: "/image/galary/galary13.jpeg",
    footerLinkLabel: "Eyüp Sultan Fiber Optik Arıza",
    intro:
      "Eyüp Sultan bölgesinde fiber altyapı arızaları, internet bağlantı problemleri ve Superonline saha işleri için deneyimli teknik ekibimizle hizmet veriyoruz. Talebinize göre aynı gün içinde saha yönlendirmesi yapılabilir.",
  },
  {
    slug: "besiktas-fiber-optik-ariza",
    name: "Beşiktaş",
    districtValue: "besiktas",
    image: "/image/galary/galary14.jpeg",
    footerLinkLabel: "Beşiktaş Fiber Optik Arıza",
    intro:
      "Beşiktaş merkez ve mahallelerinde kurumsal ve bireysel müşteriler için fiber optik arıza, network kablolama ve güvenlik kamera kurulum hizmetleri sunuyoruz. Yoğun bölgelerde planlı saha koordinasyonu ile kesintisiz iletişim sağlıyoruz.",
  },
  {
    slug: "gokturk-fiber-optik-ariza",
    name: "Göktürk",
    districtValue: "gokturk",
    image: "/image/galary/galary11.jpeg",
    footerLinkLabel: "Göktürk Fiber Optik Arıza",
    intro:
      "Göktürk ve çevre yerleşimlerde yeni hat çekimi, fiber arıza müdahalesi ve zayıf akım projelerinde sahada uçtan uca destek sağlıyoruz. Site ve villa projelerinde kablolama düzeni ve test süreçlerini titizlikle uyguluyoruz.",
  },
  {
    slug: "zekeriyakoy-fiber-optik-ariza",
    name: "Zekeriyaköy",
    districtValue: "zekeriyakoy",
    image: "/image/galary/galary13.jpeg",
    footerLinkLabel: "Zekeriyaköy Fiber Optik Arıza",
    intro:
      "Zekeriyaköy bölgesinde fiber optik altyapı bakımı, internet arızası ve kamera sistemleri kurulumu için Fibertek Telekom’dan bölgeye özel hızlı destek alabilirsiniz. Uzun hat ve saha erişimi gerektiren işlerde planlı ekip tahsisi yapılır.",
  },
  {
    slug: "arnavutkoy-fiber-optik-ariza",
    name: "Arnavutköy",
    districtValue: "arnavutkoy",
    image: "/image/galary/galary14.jpeg",
    footerLinkLabel: "Arnavutköy Fiber Optik Arıza",
    intro:
      "Arnavutköy ve yakın çevrede fiber optik arıza, yeni hat çekimi ve Superonline saha destek işlerinde geniş ekip kapasitemizle hizmet veriyoruz. Talep formu üzerinden bölgenize özel yönlendirme ile süreci başlatabilirsiniz.",
  },
];

export function getDistrictBySlug(slug: string): DistrictPage | undefined {
  return DISTRICT_PAGES.find((d) => d.slug === slug);
}

export function getDistrictHeroTitle(name: string): string {
  return `${name} Fiber Optik Arıza ve İnternet Teknik Servis Hizmetleri`;
}

export function getDistrictHeroDescription(name: string): string {
  return `${name} bölgesinde fiber optik arıza, internet arızası, Superonline saha destek, yeni hat çekimi, network kablolama ve güvenlik kamera kurulumu hizmetleri için Fibertek Telekom'dan hızlı destek alabilirsiniz.`;
}

export function getDistrictMetaTitle(name: string): string {
  return `${name} Fiber Optik Arıza ve İnternet Teknik Servis | Fibertek Telekom`;
}

export function getDistrictMetaDescription(name: string): string {
  return `${name} fiber optik arıza, internet arızası, Superonline saha destek, yeni hat çekimi, network kablolama ve güvenlik kamera kurulumu için Fibertek Telekom'dan hızlı destek alın.`;
}

export function getDistrictImageAlt(name: string): string {
  return `${name} fiber optik arıza ve internet teknik servis hizmeti`;
}
