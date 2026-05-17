type HeroStatIconProps = {
  name: (typeof import("@/lib/data/hero-stats").HERO_STATS)[number]["icon"];
};

export function HeroStatIcon({ name }: HeroStatIconProps) {
  switch (name) {
    case "team":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "location":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "fiber":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4" />
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "corporate":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 21V9h6v12M9 12h6" />
        </svg>
      );
    default:
      return null;
  }
}
