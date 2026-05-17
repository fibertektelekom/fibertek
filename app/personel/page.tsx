import { DashboardShell } from "@/components/dashboard/DashboardShell";

const PERSONEL_NAV = [
  { href: "/personel", label: "Özet", active: true },
  { href: "/personel", label: "Saha Ekipleri", disabled: true },
  { href: "/personel", label: "Görev Atamaları", disabled: true },
  { href: "/personel", label: "Devam / Mesai", disabled: true },
  { href: "/personel", label: "Raporlar", disabled: true },
];

export default function PersonelPage() {
  return (
    <DashboardShell
      title="Personel Takip"
      panelName="Personel"
      panelSubtitle="Personel Takip"
      navItems={PERSONEL_NAV}
    >
      <div className="dashboard-card">
        <h2>Saha personel takip alanı</h2>
        <p>
          Ekip listesi, görev ataması, saha konumu ve operasyon raporları bu
          modülde yönetilecektir. Kurumsal site ile ayrı panel yapısı
          kullanılmaktadır.
        </p>
        <div className="dashboard-grid">
          <div className="dashboard-stat">
            <strong>50+</strong>
            <span>Toplam saha kapasitesi</span>
          </div>
          <div className="dashboard-stat">
            <strong>—</strong>
            <span>Sahada aktif ekip</span>
          </div>
          <div className="dashboard-stat">
            <strong>—</strong>
            <span>Bugünkü görevler</span>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
