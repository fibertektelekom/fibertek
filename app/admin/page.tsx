import { DashboardShell } from "@/components/dashboard/DashboardShell";

const ADMIN_NAV = [
  { href: "/admin", label: "Genel Bakış", active: true },
  { href: "/admin", label: "Projeler", disabled: true },
  { href: "/admin", label: "Teklif Talepleri", disabled: true },
  { href: "/admin", label: "Ayarlar", disabled: true },
];

export default function AdminPage() {
  return (
    <DashboardShell
      title="Yönetim Paneli"
      panelName="Yönetim"
      panelSubtitle="Yönetim Paneli"
      navItems={ADMIN_NAV}
    >
      <div className="dashboard-card">
        <h2>Kurumsal yönetim alanı</h2>
        <p>
          Proje yönetimi, teklif takibi ve içerik güncellemeleri bu panel
          üzerinden ilerletilecektir. Modüller hazır altyapıya göre
          genişletilebilir.
        </p>
        <div className="dashboard-grid">
          <div className="dashboard-stat">
            <strong>—</strong>
            <span>Aktif projeler</span>
          </div>
          <div className="dashboard-stat">
            <strong>—</strong>
            <span>Bekleyen teklifler</span>
          </div>
          <div className="dashboard-stat">
            <strong>50+</strong>
            <span>Saha personeli kapasitesi</span>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
