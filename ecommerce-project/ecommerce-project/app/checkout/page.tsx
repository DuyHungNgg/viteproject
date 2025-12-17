"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

import Image from "next/image";
import Link from "next/link";

import Header from "../components/layout/Header";
import BannerHeader from "../components/layout/BannerHeader";
import BannerFooter from "../components/layout/BannerFooter";
import Footer from "../components/layout/Footer";

export default function CheckOutPage() {
  const [payment, setPayment] = useState<"bank" | "transfer" | "cod">("bank");
  const { items, subtotal, total } = useCart();

  return (
    <main className="min-h-screen bg-white">

        < Header />
        
        < BannerHeader
            title="Checkout"
            crumbs={[{ label: "Home" }, { label: "Checkout" }]}
        />
        
        <section className="mx-auto grid grid-cols-1 md:grid-cols-[55%_40%]   max-w-6xl gap-16 px-6 py-16">
            {/* LEFT: BILLING DETAILS */}
            <div className="flex-1 space-y-6">
                <h1 className="text-3xl font-bold">Billing details</h1>

                {/* First / Last name */}
                <div className="grid grid-cols-2 gap-5 ">
                    <div className="space-y-2">
                        <label
                        htmlFor="firstName"
                        className="block text-xs font-bold text-gray-700"
                        >
                        First Name
                        </label>
                        <input
                        id="firstName"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                        htmlFor="lastName"
                        className="block text-xs font-bold text-gray-700"
                        >
                        Last Name
                        </label>
                        <input
                        id="lastName"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                        />
                    </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                    <label
                        htmlFor="company"
                        className="block text-xs font-bold text-gray-700"
                    >
                        Company Name (Optional)
                    </label>
                    <input
                        id="company"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                    />
                </div>

                {/* Country / Region */}
                <div className="space-y-2">
                    <label
                        htmlFor="country"
                        className="block text-xs font-bold text-gray-700"
                    >
                        Country / Region
                    </label>
                    <select
                        id="country"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                        defaultValue="Sri Lanka"
                    >
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Street address */}
                <div className="space-y-2">
                    <label
                        htmlFor="street"
                        className="block text-xs font-bold text-gray-700"
                    >
                        Street address
                    </label>
                    <input
                        id="street"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                    />
                </div>

                {/* Town / City */}
                <div className="space-y-2">
                    <label
                        htmlFor="city"
                        className="block text-xs font-bold text-gray-700"
                    >
                        Town / City
                    </label>
                    <input
                        id="city"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                    />
                </div>

                {/* Province */}
                <div className="space-y-2">
                    <label
                        htmlFor="province"
                        className="block text-xs font-bold text-gray-700"
                    >
                        Province
                    </label>
                    <select
                        id="province"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                        defaultValue="Western Province"
                    >
                        <option value="Western Province">Western Province</option>
                        <option value="Central">Central</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* ZIP */}
                <div className="space-y-2">
                    <label
                        htmlFor="zip"
                        className="block text-xs font-bold text-gray-700"
                    >
                        ZIP code
                    </label>
                    <input
                        id="zip"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                    />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                    />
                </div>

                {/* Additional info */}
                <div className="space-y-2">
                    <input
                        id="note"
                        type="text"
                        placeholder="Additional information"
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                    />
                </div>
            </div>

            {/* RIGHT: PRODUCT + PAYMENT */}
            <div className=" space-y-6 text-sm text-gray-800 mr-5">
                {/* Product summary */}
                <div className="grid grid-cols-2 gap-2">
                    <h2 className="text-base font-bold">Product</h2>
                    <h2 className="text-right text-base font-bold">Subtotal</h2>

                    {items.map((item) => (
                        <React.Fragment key={item.id}>
                            <p className="mt-2 text-xs text-gray-500">
                            {item.name} × {item.qty}
                            </p>
                            <p className="mt-2 text-right text-xs text-gray-700">
                            Rs. {(item.price * item.qty).toLocaleString()}
                            </p>
                        </React.Fragment>
                    ))}


                    <p className="mt-4 text-xs font-semibold">Subtotal</p>
                    <p className="mt-4 text-right text-xs text-gray-700">
                        Rs. {subtotal.toLocaleString()}
                    </p>

                    <p className="mt-4 text-xs font-semibold">Total</p>
                    <p className="mt-4 text-right text-sm font-bold text-[#B88E2F]">
                        Rs. {total.toLocaleString()}
                    </p>
                </div>

                <hr className="border-gray-300" />

                {/* Payment methods – giống layout gốc (1 cái đậm, 2 cái nhạt) */}
                {/* Payment methods – 3 dot chọn được */}
                <div className="space-y-4 text-xs">

                    {/* Direct Bank Transfer (active + description) */}
                    <div
                        className={`space-y-2 transition-opacity ${
                        payment === "bank" ? "opacity-100" : "opacity-40"
                        }`}
                    >
                        <label className="flex cursor-pointer items-center gap-2">
                        <input
                            type="radio"
                            name="payment"
                            className="h-3 w-3 accent-black"
                            checked={payment === "bank"}
                            onChange={() => setPayment("bank")}
                        />
                        <span className="font-semibold">Direct Bank Transfer</span>
                        </label>

                        {payment === "bank" && (
                        <p className="ml-5 leading-relaxed text-gray-500">
                            Make your payment directly into our bank account. Please use your Order
                            ID as the payment reference. Your order will not be shipped until the
                            funds have cleared in our account.
                        </p>
                        )}
                    </div>

                    {/* Direct Bank Transfer (mờ khi không chọn) */}
                    <div
                        className={`transition-opacity ${
                        payment === "transfer" ? "opacity-100" : "opacity-40"
                        }`}
                    >
                        <label className="flex cursor-pointer items-center gap-2">
                        <input
                            type="radio"
                            name="payment"
                            className="h-3 w-3 accent-black"
                            checked={payment === "transfer"}
                            onChange={() => setPayment("transfer")}
                        />
                        <span>Direct Bank Transfer</span>
                        </label>
                    </div>

                    {/* Cash On Delivery */}
                    <div
                        className={`transition-opacity ${
                        payment === "cod" ? "opacity-100" : "opacity-40"
                        }`}
                    >
                        <label className="flex cursor-pointer items-center gap-2">
                        <input
                            type="radio"
                            name="payment"
                            className="h-3 w-3 accent-black"
                            checked={payment === "cod"}
                            onChange={() => setPayment("cod")}
                        />
                        <span>Cash On Delivery</span>
                        </label>
                    </div>

                    <p className="pt-2 leading-relaxed">
                        Your personal data will be used to support your experience throughout this
                        website, to manage access to your account, and for other purposes described
                        in our{" "}
                        <span className="font-semibold underline">privacy policy</span>.
                    </p>
                </div>


                {/* Button */}
                <div className="flex justify-center">
                    <button className="mt-4 w-72 mx-auto rounded-xl border border-gray-400 px-6 py-3 text-base font-medium transition hover:bg-[#B88E2F] hover:text-white">
                    Place order
                    </button>
                </div>
            </div>
        </section>

        < BannerFooter />
        < Footer />
    
    </main>
  );
}
