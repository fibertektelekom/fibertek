import Link from "next/link";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroStatsBar } from "@/components/home/HeroStatsBar";

function ArrowIcon() {
  return (
    <svg
      className="btn-hero-arrow"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function HomeHero() {
  return (
    <section className="hero hero--premium">
      <HeroBackground />
      <div className="hero-overlay hero-overlay--cinematic" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-eyebrow">50+ Kişilik Saha Gücüyle</p>
            <h1>Fiber Altyapı Çözümleri</h1>
            <p className="hero-desc">
              Fibertek Telekom; fiber optik altyapı, saha operasyonları ve
              kurumsal telekom çözümlerinde güçlü ekip yapısı ve sektör
              tecrübesiyle hizmet verir.
            </p>
            <div className="hero-actions">
              <Link href="/hizmetlerimiz" className="btn btn-hero-primary">
                Hizmetlerimizi İnceleyin
                <ArrowIcon />
              </Link>
              <Link href="/iletisim" className="btn btn-hero-secondary">
                Teklif Al
              </Link>
            </div>
          </div>
          <div className="hero-visual-spacer" aria-hidden="true" />
        </div>

        <HeroStatsBar />
      </div>
    </section>
  );
}
