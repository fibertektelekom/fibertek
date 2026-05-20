import Link from "next/link";
import { DISTRICT_PAGES } from "@/lib/data/district-pages";

type ServiceRegionsLinksProps = {
  className?: string;
};

export function ServiceRegionsLinks({ className }: ServiceRegionsLinksProps) {
  return (
    <ul className={className ?? "service-regions-list"}>
      {DISTRICT_PAGES.map((d) => (
        <li key={d.slug}>
          <Link href={`/${d.slug}`}>{d.footerLinkLabel}</Link>
        </li>
      ))}
    </ul>
  );
}
