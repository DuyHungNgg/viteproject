"use client";

import { useState } from "react";
import Link from "next/link";
import CartOverlay from "../overlay/CartOverlay"; // chỉnh path đúng theo dự án bạn

export default function Header() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      {/* Overlay tách riêng */}
      <CartOverlay open={showOverlay} onClose={() => setShowOverlay(false)} />

      <header className="sticky top-0 z-20 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#B88E2F] text-lg font-bold text-white">
                M
              </div>
              <span className="text-2xl font-bold text-gray-900">Furniro</span>
            </div>
          </Link>

          {/* Menu */}
          <nav className="hidden items-center gap-10 text-sm font-medium text-gray-700 md:flex">
            <Link href="/" className="hover:text-[#B88E2F]">Home</Link>
            <Link href="/shop" className="hover:text-[#B88E2F]">Shop</Link>
            <Link href="/blog" className="hover:text-[#B88E2F]">Blog</Link>
            <Link href="/contact" className="hover:text-[#B88E2F]">Contact</Link>
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
    </>
  );
}
