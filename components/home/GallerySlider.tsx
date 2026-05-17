import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/data/gallery";

export function GallerySlider() {
  const loop = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <div className="gallery-slider" aria-label="Saha ve altyapı proje galerisi">
      <div className="gallery-track">
        {loop.map((img, i) => (
          <figure
            key={`galary-${i}`}
            className="gallery-item"
            aria-hidden={i >= GALLERY_IMAGES.length ? true : undefined}
          >
            <Image
              src={img.src}
              alt={i >= GALLERY_IMAGES.length ? "" : img.alt}
              width={400}
              height={260}
              unoptimized
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
