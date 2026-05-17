import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { SITE, TEL_URL, WHATSAPP_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "PERPA İstanbul, telefon, WhatsApp ve teklif formu ile Fibertek Telekom iletişim.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        description="Projeniz için bizimle iletişime geçin."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-block">
              <h2>İletişim Bilgileri</h2>
              <div className="contact-item">
                <strong>Telefon</strong>
                <a href={TEL_URL}>{SITE.phoneDisplay}</a>
              </div>
              <div className="contact-item">
                <strong>WhatsApp</strong>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div className="contact-item">
                <strong>Adres</strong>
                <p>
                  PERPA Ticaret Merkezi
                  <br />
                  Şişli / İstanbul
                </p>
              </div>
              <div className="contact-item">
                <strong>Çalışma Saatleri</strong>
                <p>{SITE.workingHours}</p>
              </div>
              <a
                href={WHATSAPP_URL}
                className="btn btn-primary btn-full"
                style={{ marginTop: "1rem" }}
                target="_blank"
                rel="noopener"
              >
                WhatsApp ile Yazın
              </a>
            </div>

            <ContactForm />
          </div>

          <div className="map-placeholder" role="img" aria-label="Harita alanı">
            <p>
              <strong>Google Harita</strong>
              <br />
              PERPA Ticaret Merkezi, Şişli / İstanbul
              <br />
              <em>Harita entegrasyonu buraya eklenecektir.</em>
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
