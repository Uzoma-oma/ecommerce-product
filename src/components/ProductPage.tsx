import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductPage() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Image Gallery */}
      <ProductGallery />

      {/* Right: Product Info */}
      <ProductInfo />
    </section>
  );
}
