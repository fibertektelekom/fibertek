"use client";

import { useEffect, useState } from "react";

const CHAR_MS = 32;

type HeroTypewriterProps = {
  text: string;
};

export function HeroTypewriter({ text }: HeroTypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let index = 0;
    setDisplayed("");
    setDone(false);

    const id = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, CHAR_MS);

    return () => window.clearInterval(id);
  }, [text]);

  return (
    <p className="hero-lead hero-typewriter" aria-live="polite">
      <span className="hero-typewriter-text">{displayed}</span>
      <span className={`hero-cursor${done ? " is-done" : ""}`} aria-hidden="true">
        |
      </span>
    </p>
  );
}
