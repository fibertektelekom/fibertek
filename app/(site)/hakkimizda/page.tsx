import Image from "next/image";
import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { COMPANY_VALUES } from "@/lib/data/values";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Fibertek Telekom — İstanbul PERPA merkezli fiber optik altyapı ve saha operasyonları uzmanı telekom firması.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        description="İstanbul merkezli fiber optik altyapı ve saha operasyonlarında uzman telekom firması."
      />

      <section className="section">
        <div className="container">
          <div className="feature-split">
            <div className="feature-media">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Fiber optik kablo altyapısı"
                width={800}
                height={500}
                unoptimized
              />
            </div>
            <div className="about-content">
              <p>
                Fibertek Telekom, İstanbul / PERPA merkezli olarak faaliyet
                gösteren; fiber optik altyapı, telekom altyapısı ve saha
                operasyonları alanında uzmanlaşmış bir telekom firmasıdır.
                Superonline işlerini yürüten yapımızla sektörde güçlü saha
                deneyimi ve kurumsal proje kültürüne sahibiz.
              </p>
              <p>
                50&apos;den fazla çalışanımızla; fiber altyapı kurulumları, FTTX
                çözümleri, ek ve sonlandırma işleri, network kurulum ve bakım
                süreçlerinde disiplinli, ölçülebilir ve güvenilir hizmet
                sunuyoruz.
              </p>
            </div>
          </div>

          <div className="about-content about-content-spaced">
            <h2>Çalışma Anlayışımız</h2>
            <p>
              Her projede teknik kalite, zamanında teslim ve saha koordinasyonunu
              ön planda tutuyoruz. Kurumsal müşterilerimiz ve iş ortaklarımızla
              uzun vadeli, şeffaf ve sürdürülebilir bir çözüm ortaklığı
              hedefliyoruz.
            </p>
            <p>
              Fiber optik altyapı projelerinde planlama aşamasından devreye
              almaya kadar tüm süreçleri deneyimli teknik kadromuz ve saha
              ekiplerimizle yönetiyoruz. Operasyonel süreçlerde standartlara
              bağlı, raporlanabilir ve kontrollü bir iş modeli uyguluyoruz.
            </p>
          </div>

          <div className="values-grid">
            {COMPANY_VALUES.map((value) => (
              <div key={value.title} className="value-box">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ekibimizle Tanışın"
        description="Projeniz veya iş birliği talepleriniz için bizimle iletişime geçebilirsiniz."
        buttonLabel="İletişim"
        buttonHref="/iletisim"
      />
    </>
  );
}
