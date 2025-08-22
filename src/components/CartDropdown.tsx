import { useCart } from "../hooks/useCart"; 
import deleteIcon from "../assets/icon-delete.svg"; 
import productThumb from "../assets/image-product-1-thumbnail.jpg"; 

export default function CartDropdown() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="absolute right-0 top-16 w-[360px] bg-white rounded-lg shadow-xl z-50">
      <h2 className="font-bold text-veryDarkBlue px-6 py-4 border-b border-grayishBlue/30">
        Cart
      </h2>

      <div className="p-6">
        {cartItems.length === 0 ? (
          <p className="text-darkGrayishBlue text-center font-bold py-16">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={productThumb} // 
                    alt={item.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <div className="flex-1 text-darkGrayishBlue text-sm">
                    <p className="truncate">{item.name}</p>
                    <p>
                      ${item.price.toFixed(2)} × {item.qty}{" "}
                      <span className="font-bold text-veryDarkBlue">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <img src={deleteIcon} alt="delete" /> 
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout button pinned below */}
            <button
              onClick={() => {
                alert("Proceeding to checkout…");
                clearCart();
              }}
              className="w-full mt-6 bg-orange-600 text-white font-bold py-4 rounded-lg hover:opacity-70 transition"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
