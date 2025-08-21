import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/CartProvider"; // 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>   {/* 👈 wrap App */}
      <App />
    </CartProvider>
  </StrictMode>
);
