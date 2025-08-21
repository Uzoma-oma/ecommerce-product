import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: string[];
  thumbnails: string[];
  initialIndex: number;
  onClose: () => void;
};

export default function Lightbox({
  images,
  thumbnails,
  initialIndex,
  onClose,
}: LightboxProps) {
  const [selected, setSelected] = useState(initialIndex);

  const prev = () =>
    setSelected((selected - 1 + images.length) % images.length);
  const next = () => setSelected((selected + 1) % images.length);

  return (
    <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-orange-400"
      >
        <X size={28} />
      </button>

      {/* Main Image */}
      <div className="relative w-[500px] h-[500px]">
        <img
          src={images[selected]}
          alt="Selected product"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-[-20px] -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-[-20px] -translate-y-1/2 bg-white rounded-full p-3 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails (desktop only) */}
      <div className="hidden md:flex gap-6 mt-6">
        {thumbnails.map((thumb, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`rounded-xl overflow-hidden border-2 transition ${
              i === selected ? "border-orange-500" : "border-transparent"
            }`}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${i + 1}`}
              className={`w-20 h-20 object-cover ${
                i === selected ? "opacity-100" : "hover:opacity-70"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
