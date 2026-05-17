export type GalleryImage = {
  src: string;
  alt: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  ...Array.from({ length: 10 }, (_, i) => {
    const num = i + 1;
    return {
      src: `/image/galary/galary_${num}.jpeg`,
      alt: `Fibertek Telekom proje görseli ${num}`,
    };
  }),
  { src: "/image/galary/galary11.jpeg", alt: "Fibertek Telekom proje görseli 11" },
  { src: "/image/galary/galary12.jpeg", alt: "Fibertek Telekom proje görseli 12" },
  { src: "/image/galary/galary13.jpeg", alt: "Fibertek Telekom proje görseli 13" },
  { src: "/image/galary/galary14.jpeg", alt: "Fibertek Telekom proje görseli 14" },
];
