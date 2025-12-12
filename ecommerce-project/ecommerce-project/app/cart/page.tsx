"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/Default/Header";
import Footer from "../components/Default/Footer";

export default function CartPage() {
  return (
    <main>
      <Header />

      {/* ===== BANNER SHOP ===== */}
      <section>
        <div className="relative h-[300px] flex items-center justify-center">
          <img
            src="/img/banner-mo.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative text-center">
            <h1 className="text-4xl font-bold">Cart</h1>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Home</span> &gt; Cart
            </p>
          </div>
        </div>
      </section>

      {/* ===== NỘI DUNG CART GỐC (TABLE) ===== */}
      <section className="mx-auto flex max-w-8xl flex-col gap-10 px-6 py-16 lg:flex-row ">
        {/* LEFT: BẢNG SẢN PHẨM */}
        <div className="flex-[2]">
          <div className="grid grid-cols-[1fr_1.4fr_1.3fr_0.5fr_1.3fr_0.5fr] bg-[#FFF3E3] px-8 py-3 text-xs font-semibold text-gray-600 text-left">
            <span></span>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          <div className="grid grid-cols-[1fr_1.4fr_1.3fr_0.5fr_1.3fr_0.5fr] items-center px-8 py-6 text-left">
            <div className="relative h-20 w-30 overflow-hidden rounded-lg bg-[#FFF3E3]">
              <Image
                src="/img/prod1.jpg"
                alt="Asgaard sofa"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-sm text-gray-700">Asgaard sofa</div>

            <div className=" text-sm text-gray-500">Rs. 250,000.00</div>

            <div className="flex ">
              <input
                title="Quantity"
                type="number"
                min={1}
                defaultValue={1}
                className="h-8 w-10 rounded border border-gray-300 text-center text-sm outline-none"
              />
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700">
                Rs. 250,000.00
              </span>
            </div>

            <div>
              <button
                type="button"
                className="text-[#B88E2F] text-2xl font-black"
                aria-label="Remove item"
              >
                🗑
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: CART TOTALS */}
        <aside className="flex-[1]">
          <div className="h-full rounded-sm bg-[#FFF3E3] px-20 py-10">
            <h2 className="mb-8 text-3xl text-center font-semibold text-gray-900">
              Cart Totals
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-400">Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="text-base font-semibold text-[#B88E2F]">
                  Rs. 250,000.00
                </span>
              </div>
            </div>

            <Link href={"/checkout"}>
              <button className="mt-10 w-full rounded-lg border border-black px-6 py-3 text-sm font-normal transition hover:bg-[#B88E2F] hover:text-white">
                Checkout
              </button>
            </Link>
          </div>
        </aside>
      </section>

      < Footer />

    </main>
  );
}
