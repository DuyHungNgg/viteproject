"use client";

import Image from "next/image";
import Link from "next/link";

import { useCart } from "../../context/CartContext";

const format = (n: number) => new Intl.NumberFormat("en-US").format(n);

type CartOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartOverlay({ open, onClose }: CartOverlayProps) {
    const { items, updateQty, removeItem, subtotal, total } = useCart();
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

        <div className="h-px bg-gray-300" />

        <div className=" max-h-[500px] overflow-y-auto">
          {items.map((item) => (
          <div
            key={item.id} 
            className="grid grid-cols-[30%_60%_10%]"
          >
            <div className="relative h-10 w-18 overflow-hidden rounded-lg my-3">
              <Image src={item.image ?? "/img/prod1.jpg"} alt={item.name} fill className="object-cover" />
            </div>

            <div className="content-center">
                <div className="text-sm text-gray-700">{item.name}</div>

                <div className="flex ">
                  <div className="flex mr-2 text-left ">
                    <input
                      title="Quantity"
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) => updateQty(item.id, Number(e.target.value))}
                      className="h-full w-12 rounded border border-gray-300 text-center text-sm outline-none mr-2" 
                    /> x
                  </div>

                  <div className=" text-sm content-end font-medium text-gray-400">
                    Rs. {format(item.price)}
                  </div>
                </div>
              </div>

            <button
              type="button"
              className="text-[#B88E2F] text-2xl font-black"
              aria-label="Remove item"
              onClick={() => removeItem(item.id)}
            >
              🗑
            </button>
          </div>
        ))}
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
