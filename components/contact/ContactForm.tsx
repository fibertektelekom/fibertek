"use client";

import { FormEvent, useState } from "react";
import { SERVICE_FORM_OPTIONS } from "@/lib/data/services";
import { buildWhatsAppQuoteUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const hizmetSelect = form.elements.namedItem("hizmet") as HTMLSelectElement;
    const hizmetLabel =
      hizmetSelect.selectedIndex > 0
        ? hizmetSelect.options[hizmetSelect.selectedIndex].text
        : "Belirtilmedi";

    setSubmitting(true);

    const url = buildWhatsAppQuoteUrl({
      adSoyad: String(data.get("ad_soyad") ?? "").trim(),
      firma: String(data.get("firma") ?? "").trim(),
      telefon: String(data.get("telefon") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      hizmet: hizmetLabel,
      mesaj: String(data.get("mesaj") ?? "").trim(),
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  return (
    <div className="contact-form-wrap">
      <h2>Teklif Formu</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="firma">Firma</label>
          <input
            type="text"
            id="firma"
            name="firma"
            autoComplete="organization"
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefon">Telefon *</label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            autoComplete="tel"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-posta</label>
          <input type="email" id="email" name="email" autoComplete="email" />
        </div>
        <div className="form-group">
          <label htmlFor="hizmet">Hizmet Türü</label>
          <select id="hizmet" name="hizmet" defaultValue="">
            {SERVICE_FORM_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mesaj">Proje / Talep Detayı *</label>
          <textarea
            id="mesaj"
            name="mesaj"
            required
            placeholder="Projeniz veya talebiniz hakkında kısa bilgi veriniz."
          />
        </div>
        <button
          type="submit"
          className="btn btn-navy btn-full"
          disabled={submitting}
        >
          {submitting ? "Yönlendiriliyor..." : "WhatsApp ile Teklif Gönder"}
        </button>
        <p className="form-hint">
          Form gönderildiğinde talebiniz WhatsApp üzerinden iletilir.
        </p>
      </form>
    </div>
  );
}
