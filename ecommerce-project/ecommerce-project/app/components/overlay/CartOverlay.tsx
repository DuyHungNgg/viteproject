"use client";

import Image from "next/image";
import Link from "next/link";

type CartOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartOverlay({ open, onClose }: CartOverlayProps) {
  if (!open) return null;

  return (
    <>
      {/* Màn xám */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed top-10 right-10 w-[320px] bg-white rounded-2xl shadow-2xl z-50 p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button className="text-gray-500 text-lg" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="h-px bg-gray-200 mb-4" />

        {/* ITEM 1 */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
            <Image src="/img/prod1.jpg" alt="Asgaard sofa" fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-800">Asgaard sofa</h3>
            <p className="text-xs text-gray-600">
              1 x <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </p>
          </div>
          <button className="text-gray-500 text-lg">×</button>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
            <Image src="/img/prod2.jpg" alt="Casaliving Wood" fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-800">Casaliving Wood</h3>
            <p className="text-xs text-gray-600">
              1 x <span className="text-[#B88E2F]">Rs. 270,000.00</span>
            </p>
          </div>
          <button className="text-gray-500 text-lg">×</button>
        </div>

        {/* Subtotal */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">Subtotal</span>
          <span className="text-sm font-semibold text-[#B88E2F]">Rs. 520,000.00</span>
        </div>

        <div className="w-full h-px bg-gray-500" />

        {/* Buttons */}
        <div className="flex gap-4 mt-2 w-auto justify-center">
          <Link href="/cart">
            <button className="flex-1 border border-black rounded-lg px-3 py-1 text-xs">
              Cart
            </button>
          </Link>
          <Link href="/checkout">
            <button className="flex-1 border border-black rounded-lg px-3 py-1 text-xs">
              Checkout
            </button>
          </Link>
          <Link href="/procomparison">
            <button className="flex-1 border border-black rounded-lg px-3 py-1 text-xs">
              Comparison
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
