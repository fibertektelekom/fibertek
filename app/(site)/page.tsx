import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CtaBand } from "@/components/layout/CtaBand";
import { HOME_REFERENCES } from "@/lib/data/references";
export default function HomePage() {
  return (
    <>
      <HomeHero />

      <ServicesSection />

      <section className="section">
        <div className="container">
          <div className="feature-split">
            <div className="feature-media">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                alt="Fiber optik altyapı ve saha operasyonları"
                width={800}
                height={500}
                unoptimized
              />
            </div>
            <div className="feature-text">
              <h2>Superonline Saha ve Altyapı İşleri</h2>
              <p>
                Fibertek Telekom, Superonline işlerini yürüten deneyimli bir
                telekom altyapı firmasıdır. Saha ekiplerimiz; fiber optik
                altyapı, ek-sonlandırma, network kurulum ve operasyonel destek
                süreçlerinde kurumsal standartlarda çalışır.
              </p>
              <p>
                İstanbul ve çevresindeki projelerde disiplinli saha
                koordinasyonu, teknik kalite ve zamanında teslim anlayışıyla
                güvenilir çözüm ortağı olarak hizmet sunuyoruz.
              </p>
              <ul className="feature-list">
                <li>Superonline saha işleri ve altyapı destekleri</li>
                <li>Fiber optik kurulum ve sonlandırma</li>
                <li>Kurumsal telekom altyapı projeleri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Referanslarımız</h2>
            <p>Sektörde güvenilir iş ortaklıkları ve saha proje deneyimi.</p>
          </div>
          <div className="ref-list">
            {HOME_REFERENCES.map((ref) => (
              <div key={ref.id} className="ref-item">
                {ref.title}
                {ref.subtitle ? <span>{ref.subtitle}</span> : null}
              </div>
            ))}
          </div>
          <Link href="/referanslar" className="link-more">
            Referanslar sayfasına git →
          </Link>
        </div>
      </section>

      <CtaBand
        title="Projeniz İçin Teklif Alın"
        description="Fiber altyapı, saha operasyonları veya kurumsal telekom ihtiyaçlarınız için ekibimizle iletişime geçin."
        buttonLabel="İletişim Formu"
        buttonHref="/iletisim"
      />
    </>
  );
}
