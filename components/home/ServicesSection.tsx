import Link from "next/link";
import { GallerySlider } from "@/components/home/GallerySlider";
import { ServiceIcon } from "@/components/home/ServiceIcon";
import { ServiceRegionsLinks } from "@/components/layout/ServiceRegionsLinks";
import { HOME_SERVICES } from "@/lib/data/home-services";

export function ServicesSection() {
  return (
    <section className="services-section section section-alt">
      <div className="container">
        <header className="services-section-header">
          <h2>Hizmet Alanlarımız</h2>
          <p>
            Fiber altyapıdan saha operasyonlarına kadar uçtan uca telekom
            çözümleri sunuyoruz.
          </p>
        </header>

        <div className="services-grid">
          {HOME_SERVICES.map((service) => (
            <article key={service.id} className="service-card-premium">
              <span className="service-card-icon" aria-hidden="true">
                <ServiceIcon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="service-regions-block">
          <h3>Hizmet Bölgeleri</h3>
          <p>İstanbul Avrupa Yakası ilçe bazlı fiber optik arıza ve teknik servis.</p>
          <ServiceRegionsLinks />
        </div>

        <GallerySlider />

        <Link href="/hizmetlerimiz" className="services-section-link">
          Tüm hizmetleri görüntüle
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
