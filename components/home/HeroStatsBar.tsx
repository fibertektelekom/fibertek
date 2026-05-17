import { HERO_STATS } from "@/lib/data/hero-stats";
import { HeroStatIcon } from "@/components/home/HeroStatIcon";

export function HeroStatsBar() {
  return (
    <div className="hero-stats-bar" aria-label="Operasyon özeti">
      <div className="hero-stats-inner">
        {HERO_STATS.map((stat) => (
          <article key={stat.id} className="hero-stat-item">
            <span className="hero-stat-icon">
              <HeroStatIcon name={stat.icon} />
            </span>
            <div className="hero-stat-text">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
