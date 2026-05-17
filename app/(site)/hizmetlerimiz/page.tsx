import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { ALL_SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Fiber optik altyapı, FTTX, saha operasyonları, Superonline altyapı destekleri ve kurumsal telekom çözümleri.",
};

export default function HizmetlerimizPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        description="Fiber altyapıdan saha operasyonlarına kadar kurumsal telekom çözümleri."
      />

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {ALL_SERVICES.map((service) => (
              <article key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Hizmet Talebi Oluşturun"
        description="Projeniz için detaylı bilgi ve teklif almak üzere iletişim formunu kullanabilirsiniz."
        buttonLabel="Teklif İste"
        buttonHref="/iletisim"
      />
    </>
  );
}
