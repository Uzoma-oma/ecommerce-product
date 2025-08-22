import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../hooks/useCart"; 

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); 

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id: 1, // product id (could be dynamic later)
      name: "Fall Limited Edition Sneakers",
      price: 125,
      qty: quantity,
      thumbnail: "/src/assets/image-product-1-thumbnail.jpg", 
    });
    setQuantity(1); 
  };

  return (
    <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-16 md:py-12">
      {/* Brand */}
      <h3 className="uppercase text-gray-500 font-bold tracking-widest text-sm">
        Sneaker Company
      </h3>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        Fall Limited Edition Sneakers
      </h1>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything
        the weather can offer.
      </p>

      {/* Pricing */}
      <div className="flex items-center justify-between md:flex-col md:items-start gap-2">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-gray-900">$125.00</span>
          <span className="bg-gray-800 text-white font-bold px-2 py-0.5 rounded-md">
            50%
          </span>
        </div>
        <span className="text-gray-500 line-through font-semibold">
          $250.00
        </span>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 w-full md:w-40">
          <button
            onClick={decrease}
            className="text-orange-600 font-bold text-xl"
          >
            –
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            onClick={increase}
            className="text-orange-600 font-bold text-xl"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 transition w-full md:flex-1"
        >
          <ShoppingCart size={18} />
          Add to cart
        </button>
      </div>
    </div>
  );
}
