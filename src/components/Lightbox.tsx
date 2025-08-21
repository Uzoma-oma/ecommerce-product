import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: string[];
  thumbnails: string[];   // ✅ add thumbnails prop
  initialIndex?: number;
  onClose: () => void;
};

export default function Lightbox({
  images,
  thumbnails,
  initialIndex = 0,
  onClose,
}: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = () =>
    setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        <X size={28} />
      </button>

      <div className="relative max-w-xl w-full flex flex-col items-center gap-6">
        {/* Main Image */}
        <img
          src={images[current]}
          alt={`Product ${current + 1}`}
          className="rounded-2xl w-full object-cover"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3"
        >
          <ChevronRight size={24} />
        </button>

        {/* ✅ Thumbnails row */}
        <div className="flex gap-4 mt-4">
          {thumbnails.map((thumb, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-xl overflow-hidden border-2 ${
                i === current ? "border-orange-500" : "border-transparent"
              }`}
            >
              <img
                src={thumb}
                alt={`Thumbnail ${i + 1}`}
                className="w-20 h-20 object-cover hover:opacity-70"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
