import { useState } from "react";
import { useCart } from "../hooks/useCart";
import CartDropdown from "../components/CartDropdown";

import iconMenu from "/src/assets/icon-menu.svg";
import logo from "/src/assets/logo.svg";
import iconCart from "/src/assets/icon-cart.svg";
import avatar from "/src/assets/image-avatar.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  // Calculate total items in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="border-b border-gray-400">
      <nav className="max-w-[1100px] mx-auto flex items-center justify-between py-6 px-4 md:px-0 relative">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden"
          >
            <img src={iconMenu} alt="menu" />
          </button>

          {/* Logo */}
          <img src={logo} alt="logo" className="h-5 md:h-6" />

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-6 text-gray-500">
            <li className="relative cursor-pointer hover:text-veryDarkBlue after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center">
              Collections
            </li>
            <li className="relative cursor-pointer hover:text-veryDarkBlue after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center">
              Men
            </li>
            <li className="relative cursor-pointer hover:text-veryDarkBlue after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center">
              Women
            </li>
            <li className="relative cursor-pointer hover:text-veryDarkBlue after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center">
              About
            </li>
            <li className="relative cursor-pointer hover:text-veryDarkBlue after:content-[''] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-[3px] after:bg-orange-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center">
              Contact
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 md:gap-8 relative">
          {/* Cart */}
          <button
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="relative group"
          >
            <img
              src={iconCart}
              alt="Cart"
              className="w-6 h-6 group-hover:opacity-70"
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 z-50 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                {totalItems}
              </span>
            )}
          </button>

          {/* Avatar */}
          <button className="border-2 border-transparent hover:border-orange rounded-full">
            <img
              src={avatar}
              alt="User avatar"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            />
          </button>

          {/* Cart Dropdown */}
          {isCartOpen && <CartDropdown />}
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && (
  <div className="absolute top-0 left-0 w-full h-screen bg-black/50 md:hidden z-40">
    {/* Mobile Sidebar */}
    <div className="bg-white w-64 h-full p-6">
      {/* Close Button */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className="mb-8"
      >
        ✕
      </button>

      {/* Mobile Nav Links */}
      <ul className="flex flex-col gap-6 text-gray-800 font-bold">
        <li className="cursor-pointer">Collections</li>
        <li className="cursor-pointer">Men</li>
        <li className="cursor-pointer">Women</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  </div>
)}
    </header>
  );
}
