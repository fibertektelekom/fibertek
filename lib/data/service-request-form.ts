export const SERVICE_TYPE_OPTIONS = [
  { value: "", label: "Seçiniz" },
  { value: "fiber-optik-altyapi", label: "Fiber Optik Altyapı" },
  { value: "fiber-optik-ariza", label: "Fiber Optik Arıza" },
  { value: "internet-arizasi", label: "İnternet Arızası" },
  { value: "superonline-saha", label: "Superonline Saha İşleri" },
  { value: "saha-operasyon", label: "Saha Operasyon Destek" },
  { value: "guvenlik-kamera", label: "Güvenlik Kamera Kurulumu" },
  { value: "network-kablolama", label: "Network & Kablolama" },
  { value: "yeni-hat", label: "Yeni Hat Çekimi" },
  { value: "teknik-destek", label: "Teknik Destek" },
  { value: "diger", label: "Diğer" },
] as const;

export const DISTRICT_OPTIONS = [
  { value: "", label: "Seçiniz" },
  { value: "sultangazi", label: "Sultangazi" },
  { value: "eyup-sultan", label: "Eyüp Sultan" },
  { value: "besiktas", label: "Beşiktaş" },
  { value: "gokturk", label: "Göktürk" },
  { value: "zekeriyakoy", label: "Zekeriyaköy" },
  { value: "arnavutkoy", label: "Arnavutköy" },
] as const;

export function getDistrictLabel(value: string): string {
  return DISTRICT_OPTIONS.find((o) => o.value === value)?.label ?? value;
}

export function getServiceTypeLabel(value: string): string {
  return SERVICE_TYPE_OPTIONS.find((o) => o.value === value)?.label ?? value;
}
