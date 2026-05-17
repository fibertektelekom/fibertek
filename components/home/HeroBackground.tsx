"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ASSETS } from "@/lib/site-assets";

const INTERVAL_MS = 6000;

export function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % ASSETS.hero.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hero-bg-wrap" aria-hidden="true">
      {ASSETS.hero.map((src, index) => (
        <div
          key={src}
          className={`hero-bg-slide${index === active ? " is-active" : ""}`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="hero-bg-img"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
