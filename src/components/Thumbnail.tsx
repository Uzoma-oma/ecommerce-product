type ThumbnailProps = {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Thumbnail({ src, alt, isActive, onClick }: ThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden border-2 ${
        isActive ? "border-orange opacity-70" : "border-transparent hover:opacity-70"
      }`}
    >
      <img src={src} alt={alt} className="w-20 h-20 object-cover" />
      {isActive && (
        <div className="absolute inset-0 bg-white/50" />
      )}
    </button>
  );
}
