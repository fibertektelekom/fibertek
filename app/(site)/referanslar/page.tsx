import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { ALL_REFERENCES } from "@/lib/data/references";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Akçadağ Telekom, Superonline, İstanbul Finans Merkezi, Techom ve kurumsal fiber altyapı proje referansları.",
};

export default function ReferanslarPage() {
  return (
    <>
      <PageHero
        title="Çalıştığımız Kurumlar ve Saha Projeleri"
        description="Sektörde güvenilir iş ortaklıkları ve kurumsal proje deneyimimiz."
      />

      <section className="section">
        <div className="container">
          <div className="ref-page-grid">
            {ALL_REFERENCES.map((ref) => (
              <article key={ref.id} className="ref-page-card">
                <h3>{ref.title}</h3>
                {ref.description ? <p>{ref.description}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Projeniz İçin Referans Talebi"
        description="Benzer kapsamdaki projeleriniz için ekibimizle görüşebilirsiniz."
        buttonLabel="İletişime Geçin"
        buttonHref="/iletisim"
      />
    </>
  );
}
