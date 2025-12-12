"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <main>
      {/* ====== OVERLAY XÁM + THẺ CART NHỎ ====== */}
      {showOverlay && (
        <>
          {/* Màn xám */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setShowOverlay(false)}
          />

          {/* Thẻ giỏ hàng nhỏ (popup) */}
          <div className="fixed top-10 right-10 w-[320px] bg-white rounded-2xl shadow-2xl z-50 p-6">
            <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
            <div className="h-px bg-gray-200 mb-4" />

            {/* ITEM 1 */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/img/prod1.jpg"
                  alt="Asgaard sofa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">
                  Asgaard sofa
                </h3>
                <p className="text-xs text-gray-600">
                  1 x{" "}
                  <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                </p>
              </div>
              <button className="text-gray-500 text-lg">×</button>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/img/prod2.jpg"
                  alt="Casaliving Wood"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">
                  Casaliving Wood
                </h3>
                <p className="text-xs text-gray-600">
                  1 x{" "}
                  <span className="text-[#B88E2F]">Rs. 270,000.00</span>
                </p>
              </div>
              <button className="text-gray-500 text-lg">×</button>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-semibold text-[#B88E2F]">
                Rs. 520,000.00
              </span>
            </div>

            <div className="w-full h-px bg-gray-500"></div>

            {/* Buttons */}
            <div className="flex gap-4 mt-2 w-auto justify-center ">
                <Link href={"/cart"}>
                    <button className="flex-1 border border-black rounded-lg px-3 py-1 text-xs">
                        Cart
                    </button>
                </Link>
                <Link href={"/checkout"}>
                    <button className="flex-1 border border-black rounded-lg px-3 py-1 text-xs">
                        Checkout
                    </button>
                </Link>
                <Link href={"/procomparison"}>
                    <button className="flex-1 border border-black rounded-lg px-3 py-1 text-xs">
                        Comparison
                </button>
                </Link>
            </div>
          </div>
        </>
      )}

      {/* ====== HEADER ====== */}
      <header className="sticky top-0 z-20 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#B88E2F] text-lg font-bold text-white">
              M
            </div>
            <span className="text-2xl font-bold text-gray-900">Furniro</span>
          </div>

          {/* Menu */}
          <nav className="hidden items-center gap-10 text-sm font-medium text-gray-700 md:flex">
            <Link href="/" className="hover:text-[#B88E2F]">
              Home
            </Link>
            <Link href="/shop" className="hover:text-[#B88E2F]">
              Shop
            </Link>
            <Link href="/blog" className="hover:text-[#B88E2F]">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#B88E2F]">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-xl text-gray-700">
            <button>👤</button>
            <button>🔍</button>
            <button>♡</button>
            <button onClick={() => setShowOverlay(true)}>🛒</button>
          </div>
        </div>
      </header>
    </main>
    );
}