"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "../components/layout/Header";
import BannerHeader from "../components/layout/BannerHeader";
import BannerFooter from "../components/layout/BannerFooter";
import Footer from "../components/layout/Footer";

import { useCart } from "../context/CartContext";

const format = (n: number) => new Intl.NumberFormat("en-US").format(n);

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, total } = useCart();

  return (
    <main className="bg-white">
      <Header />

      < BannerHeader
        title="Cart"
        crumbs={[{ label: "Home" }, { label: "Cart" }]}
      />

      <section className="mx-auto flex max-w-8xl flex-col gap-10 px-6 py-16 lg:flex-row">
        {/* LEFT */}
        <div className="flex-[2]">
          {/* Header desktop */}
          <div className="hidden lg:grid grid-cols-[1fr_1.4fr_1.3fr_0.5fr_1.3fr_0.5fr] bg-[#FFF3E3] px-8 py-3 text-xs font-semibold text-gray-600 text-left rounded-xs">
            <span></span>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          {/* Rows desktop */}
          <div className=" max-h-[500px] overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="hidden lg:grid grid-cols-[1fr_1.4fr_1.3fr_0.5fr_1.3fr_0.5fr] items-center px-8 py-6 text-left"
              >
                <div className="relative h-20 w-32 overflow-hidden rounded-lg bg-[#FFF3E3]">
                  <Image src={item.image ?? "/img/prod1.jpg"} alt={item.name} fill className="object-cover" />
                </div>

                <div className="text-sm text-gray-700">{item.name}</div>

                <div className="text-sm text-gray-500">Rs. {format(item.price)}</div>

                <div className="flex">
                  <input
                    title="Quantity"
                    type="number"
                    min={1}
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                    className="h-8 w-12 rounded border border-gray-300 text-center text-sm outline-none"
                  />
                </div>

                <div className="text-sm font-medium text-gray-700">
                  Rs. {format(item.price * item.qty)}
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
          

          {/* Mobile cards */}
          <div className="space-y-4 lg:hidden">
            {items.map((item) => (
              <div key={item.id} className="rounded-xl border border-gray-500 p-4">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#FFF3E3]">
                    <Image src={item.image ?? "/img/prod1.jpg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                      <button
                        type="button"
                        className="text-[#B88E2F] text-xl font-black"
                        aria-label="Remove item"
                        onClick={() => removeItem(item.id)}
                      >
                        🗑
                      </button>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">Rs. {format(item.price)}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <label className="text-xs text-gray-500">Quantity</label>
                      <input
                        title="Quantity"
                        type="number"
                        min={1}
                        value={item.qty}
                        onChange={(e) => updateQty(item.id, Number(e.target.value))}
                        className="h-8 w-16 rounded border border-gray-300 text-center text-sm outline-none"
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Subtotal</span>
                      <span className="text-sm font-semibold text-gray-800">
                        Rs. {format(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <aside className="flex-1">
          <div className="h-full rounded-sm bg-[#FFF3E3] px-6 py-10 sm:px-10 lg:px-20">
            <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
              Cart Totals
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-400">Rs. {format(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="text-base font-semibold text-[#B88E2F]">
                  Rs. {format(total)}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-10 block w-full rounded-lg border border-black px-6 py-3 text-center text-sm font-normal transition text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white"
            >
              Checkout
            </Link>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
