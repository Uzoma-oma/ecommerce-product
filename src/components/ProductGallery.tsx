import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "../components/Lightbox";

// ✅ Import images from /src/assets
import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";

import thumb1 from "../assets/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/image-product-4-thumbnail.jpg";

type ThumbnailProps = {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
};

function Thumbnail({ src, alt, isActive, onClick }: ThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl overflow-hidden border-2 cursor-pointer 
        ${isActive ? "border-orange-500" : "border-transparent"} 
        transition`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-20 h-20 object-cover 
          ${isActive ? "opacity-100" : "hover:opacity-70"}`}
      />
    </button>
  );
}

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // ✅ Arrays with imports
  const IMAGES = [img1, img2, img3, img4];
  const THUMBNAILS = [thumb1, thumb2, thumb3, thumb4];

  const prev = () =>
    setSelected((selected - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setSelected((selected + 1) % IMAGES.length);

  return (
    <div className="flex flex-col gap-6 mt-0 md:mt-16">
      {/* Main Image */}
      <div className="relative w-screen max-w-full -mx-4 md:mx-0">
        <img
          src={IMAGES[selected]}
          alt="Selected product"
          className="w-full h-auto object-cover md:w-[405px] md:h-[405px] md:mx-auto rounded-none md:rounded-2xl"
        />

        {/* Mobile arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white rounded-full p-3 shadow-md md:hidden hover:scale-105 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white rounded-full p-3 shadow-md md:hidden hover:scale-105 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Lightbox trigger (desktop only) */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="hidden md:block absolute inset-0"
          aria-label="Open lightbox"
        />
      </div>

      {/* Thumbnails (desktop only) */}
      <div className="hidden md:flex gap-6 justify-center md:justify-start md:w-[405px] md:mx-auto">
        {THUMBNAILS.map((src, i) => (
          <Thumbnail
            key={i}
            src={src}
            alt={`Thumbnail ${i + 1}`}
            isActive={i === selected}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          images={IMAGES}
          thumbnails={THUMBNAILS} // ✅ pass thumbnails here
          initialIndex={selected}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
