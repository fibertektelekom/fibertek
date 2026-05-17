export type GalleryImage = {
  src: string;
  alt: string;
};

const GALLERY_COUNT = 10;

export const GALLERY_IMAGES: GalleryImage[] = Array.from(
  { length: GALLERY_COUNT },
  (_, i) => {
    const num = i + 1;
    return {
      src: `/image/galary/galary_${num}.jpeg`,
      alt: `Fibertek Telekom proje görseli ${num}`,
    };
  }
);
