import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "../components/Lightbox";

const IMAGES = [
  "/image-product-1.jpg",
  "/image-product-2.jpg",
  "/image-product-3.jpg",
  "/image-product-4.jpg",
];

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
        className={`w-20 h-20 object-cover ${
          isActive ? "opacity-70" : "hover:opacity-70"
        }`}
      />
    </button>
  );
}

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () =>
    setSelected((selected - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setSelected((selected + 1) % IMAGES.length);

  return (
    <div className="flex flex-col gap-6 mt-10 md:mt-16">
      {/* Main Image (with mobile arrows) */}
      <div className="relative w-full">
        <img
          src={IMAGES[selected]}
          alt="Selected product"
          className="rounded-none md:rounded-2xl w-full md:w-[405px] md:h-[405px] object-cover md:mx-auto"
        />

        {/* Mobile navigation arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md md:hidden"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md md:hidden"
        >
          <ChevronRight size={20} />
        </button>

        {/* Lightbox trigger (desktop only) */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="hidden md:block absolute inset-0"
          aria-label="Open lightbox"
        />
      </div>

      {/* Thumbnails (desktop only) */}
      <div className="hidden md:flex gap-6 justify-center">
        {IMAGES.map((src, i) => (
          <Thumbnail
            key={i}
            src={src.replace(".jpg", "-thumbnail.jpg")}
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
          initialIndex={selected}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
