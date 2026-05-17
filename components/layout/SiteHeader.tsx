"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ASSETS } from "@/lib/site-assets";
import { NAV_ITEMS, SITE, WHATSAPP_URL } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header site-header--premium">
      <div className="header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image
            src={ASSETS.logo}
            alt={SITE.name}
            width={48}
            height={48}
            className="logo-img"
            priority
            unoptimized
          />
          <div className="logo-text logo-text--fiber">
            <span className="logo-main">{SITE.nameBrand}</span>
            <span className="logo-sub">{SITE.tagline}</span>
          </div>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav-main${open ? " is-open" : ""}`}
          aria-label="Ana menü"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={WHATSAPP_URL}
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile iletişim"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
