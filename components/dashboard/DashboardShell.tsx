import Link from "next/link";
import { SITE } from "@/lib/site-config";

export type DashboardNavItem = {
  href: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
};

type DashboardShellProps = {
  title: string;
  panelName: string;
  panelSubtitle: string;
  navItems: DashboardNavItem[];
  children: React.ReactNode;
};

export function DashboardShell({
  title,
  panelName,
  panelSubtitle,
  navItems,
  children,
}: DashboardShellProps) {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-brand">
          <strong>{SITE.name}</strong>
          <span>{panelSubtitle}</span>
        </div>
        <nav className="dashboard-nav" aria-label={panelName}>
          {navItems.map((item) =>
            item.disabled ? (
              <span key={item.label} className="muted">
                {item.label}
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={item.active ? "active" : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <nav className="dashboard-nav" style={{ marginTop: "auto", paddingTop: "1rem" }}>
          <Link href="/">← Kurumsal Site</Link>
        </nav>
      </aside>
      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <h1>{title}</h1>
        </header>
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}
