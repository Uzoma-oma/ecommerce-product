import { createContext } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  thumbnail: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
