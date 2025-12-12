"use client";
import Image from "next/image";

export default function ShoppingCartSidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[350px] bg-white z-50 shadow-xl
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>

          <div className="h-px bg-gray-200 my-3"></div>

          {/* ITEM 1 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
              <Image src="/img/prod1.jpg" alt="p1" fill className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Asgaard sofa</h3>
              <p className="text-sm text-gray-600">
                1 × <span className="text-[#B88E2F]">Rs. 250,000.00</span>
              </p>
            </div>

            <button className="text-gray-500 text-xl">×</button>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
              <Image src="/img/prod2.jpg" alt="p2" fill className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Casaliving Wood</h3>
              <p className="text-sm text-gray-600">
                1 × <span className="text-[#B88E2F]">Rs. 270,000.00</span>
              </p>
            </div>

            <button className="text-gray-500 text-xl">×</button>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center mt-10">
            <span className="text-gray-600 text-lg">Subtotal</span>
            <span className="text-[#B88E2F] text-lg font-semibold">
              Rs. 520,000.00
            </span>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-3 mt-6">
            <button className="flex-1 border border-black rounded-full py-2">
              Cart
            </button>
            <button className="flex-1 border border-black rounded-full py-2">
              Checkout
            </button>
            <button className="flex-1 border border-black rounded-full py-2">
              Comparison
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
