import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import {
  DISTRICT_SERVICE_ITEMS,
  type DistrictPage,
  getDistrictHeroDescription,
  getDistrictHeroTitle,
  getDistrictImageAlt,
} from "@/lib/data/district-pages";

type DistrictServicePageProps = {
  district: DistrictPage;
};

export function DistrictServicePage({ district }: DistrictServicePageProps) {
  const { name } = district;

  return (
    <>
      <PageHero
        title={getDistrictHeroTitle(name)}
        description={getDistrictHeroDescription(name)}
      />

      <section className="section">
        <div className="container">
          <div className="district-layout">
            <div className="district-media">
              <Image
                src={district.image}
                alt={getDistrictImageAlt(name)}
                width={960}
                height={540}
                className="district-image"
                priority
                unoptimized
              />
            </div>

            <div className="district-content">
              <p className="district-intro">{district.intro}</p>

              <h2>{name} bölgesinde sunduğumuz hizmetler</h2>
              <ul className="district-services-list">
                {DISTRICT_SERVICE_ITEMS.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="district-form-block">
            <ContactForm defaultDistrict={district.districtValue} />
          </div>
        </div>
      </section>
    </>
  );
}
