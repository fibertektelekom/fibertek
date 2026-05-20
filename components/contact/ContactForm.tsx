"use client";

import { FormEvent, useState } from "react";
import {
  DISTRICT_OPTIONS,
  getDistrictLabel,
  getServiceTypeLabel,
  SERVICE_TYPE_OPTIONS,
} from "@/lib/data/service-request-form";
import { buildWhatsAppServiceRequestUrl } from "@/lib/whatsapp";

type ContactFormProps = {
  /** İlçe sayfasından gelindiğinde bölge ön seçimi (ör. "sultangazi") */
  defaultDistrict?: string;
};

export function ContactForm({ defaultDistrict }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const adSoyad = String(data.get("ad_soyad") ?? "").trim();
    const telefon = String(data.get("telefon") ?? "").trim();
    const hizmetValue = String(data.get("hizmet") ?? "").trim();
    const bolgeValue = String(data.get("bolge") ?? "").trim();
    const talepDetayi = String(data.get("talep_detayi") ?? "").trim();

    if (!adSoyad || !telefon || !hizmetValue || !bolgeValue || !talepDetayi) {
      setFormError("Lütfen zorunlu alanları doldurun.");
      return;
    }

    setSubmitting(true);

    const url = buildWhatsAppServiceRequestUrl({
      adSoyad,
      telefon,
      hizmetTuru: getServiceTypeLabel(hizmetValue),
      bolge: getDistrictLabel(bolgeValue),
      talepDetayi,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  return (
    <div className="contact-form-wrap">
      <h2>Hizmet &amp; Arıza Talep Formu</h2>
      <p className="contact-form-lead">
        İstanbul Avrupa Yakası fiber optik arıza, internet destek, saha
        operasyonları ve güvenlik kamera hizmetleri için bize hızlıca ulaşın.
      </p>
      <form onSubmit={handleSubmit} noValidate>
        {formError ? (
          <p className="form-error" role="alert">
            {formError}
          </p>
        ) : null}

        <div className="form-group">
          <label htmlFor="ad-soyad">Ad Soyad *</label>
          <input
            type="text"
            id="ad-soyad"
            name="ad_soyad"
            required
            autoComplete="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefon">Telefon Numarası *</label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            placeholder="05xx xxx xx xx"
            autoComplete="tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hizmet">Hizmet Türü *</label>
          <select id="hizmet" name="hizmet" defaultValue="" required>
            {SERVICE_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="bolge">Bölge / İlçe *</label>
          <select
            id="bolge"
            name="bolge"
            defaultValue={defaultDistrict ?? ""}
            required
          >
            {DISTRICT_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="talep-detayi">Talep Detayı *</label>
          <textarea
            id="talep-detayi"
            name="talep_detayi"
            required
            placeholder="Yaşadığınız arıza veya talebinizi kısa şekilde yazınız. Örn: Fiber kablo koptu, internet bağlantısı yok, kamera kurulumu yapılacak."
          />
        </div>

        <button
          type="submit"
          className="btn btn-navy btn-full"
          disabled={submitting}
        >
          {submitting ? "Yönlendiriliyor..." : "WhatsApp Üzerinden Gönder"}
        </button>
        <p className="form-hint">
          Form gönderildiğinde talebiniz WhatsApp üzerinden iletilir.
        </p>
      </form>
    </div>
  );
}
