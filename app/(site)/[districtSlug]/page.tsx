import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DistrictServicePage } from "@/components/district/DistrictServicePage";
import {
  DISTRICT_PAGES,
  getDistrictBySlug,
  getDistrictMetaDescription,
  getDistrictMetaTitle,
} from "@/lib/data/district-pages";

type PageProps = {
  params: Promise<{ districtSlug: string }>;
};

export function generateStaticParams() {
  return DISTRICT_PAGES.map((d) => ({ districtSlug: d.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { districtSlug } = await params;
  const district = getDistrictBySlug(districtSlug);

  if (!district) {
    return { title: "Sayfa bulunamadı" };
  }

  return {
    title: getDistrictMetaTitle(district.name),
    description: getDistrictMetaDescription(district.name),
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { districtSlug } = await params;
  const district = getDistrictBySlug(districtSlug);

  if (!district) {
    notFound();
  }

  return <DistrictServicePage district={district} />;
}
