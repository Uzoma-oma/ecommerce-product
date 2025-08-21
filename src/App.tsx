import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import { CartProvider } from "./context/CartProvider"; // 👈 import provider

function App() {
  return (
    <CartProvider> {/* 👈 wrap everything inside CartProvider */}
      <Navbar />
      <main>
        <ProductPage />
      </main>
    </CartProvider>
  );
}

export default App;
