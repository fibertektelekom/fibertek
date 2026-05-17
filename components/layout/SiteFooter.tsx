import Link from "next/link";
import { NAV_ITEMS, SITE, TEL_URL, WHATSAPP_URL } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo-main">{SITE.name}</span>
            <p>
              {SITE.addressShort} merkezli fiber optik altyapı ve saha
              operasyonları firması. Kurumsal telekom projelerinde güvenilir
              çözüm ortağınız.
            </p>
          </div>
          <div className="footer-col">
            <h4>Sayfalar</h4>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <p>{SITE.addressShort}</p>
            <a href={TEL_URL}>{SITE.phoneDisplay}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {year} {SITE.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
