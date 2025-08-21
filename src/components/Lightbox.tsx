import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";

type LightboxProps = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop) return null; // ✅ Skip rendering on mobile

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <div className="relative max-w-lg w-full px-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-orange-400"
        >
          <X size={28} />
        </button>

        {/* Main Image */}
        <img
          src={images[current]}
          alt="Product zoomed"
          className="rounded-2xl w-full"
        />

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
        >
          <ChevronRight size={20} />
        </button>

        {/* Thumbnails */}
        <div className="flex gap-4 justify-center mt-6">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-xl overflow-hidden border-2 ${
                i === current ? "border-orange-500" : "border-transparent"
              }`}
            >
              <img
                src={src.replace(".jpg", "-thumbnail.jpg")}
                alt={`Thumbnail ${i + 1}`}
                className={`w-20 h-20 object-cover ${
                  i === current ? "opacity-75" : "hover:opacity-75"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
