"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function CheckOutPage() {
    const [payment, setPayment] = useState<"bank" | "transfer" | "cod">("bank");
  return (
    <main className="min-h-screen bg-white">

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
                    <Link href="/contact"className="hover:text-[#B88E2F]">
                        Contact
                    </Link>
                </nav>

                {/* Icons (dùng emoji tạm) */}
                <div className="flex items-center gap-4 text-xl text-gray-700">
                    <button className="hover:text-[#B88E2F]" aria-label="Account">
                        👤
                    </button>
                    <button className="hover:text-[#B88E2F]" aria-label="Search">
                        🔍
                    </button>
                    <button className="hover:text-[#B88E2F]" aria-label="Wishlist">
                        ♡
                    </button>
                    <button className="hover:text-[#B88E2F]" aria-label="Cart">
                        🛒
                    </button>
                </div>
            </div>
        </header>

        {/* BANNER SHOP */}
        <section>
            <div className="relative h-[300px] flex items-center justify-center">
                <img
                    src="/img/banner-mo.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover "
                />

                <div className="absolute inset-0 bg-white/50"></div>

                <div className="relative text-center">
                    <h1 className="text-4xl font-bold">Checkout</h1>
                    <p className="mt-2 text-gray-700">
                    <span className="font-semibold">Home</span> &gt; Checkout
                    </p>
                </div>
            </div>
        </section>
        
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

                    <p className="mt-2 text-xs text-gray-500">
                        Asgaard sofa &nbsp; × 1
                    </p>
                    <p className="mt-2 text-right text-xs text-gray-700">
                        Rs. 250,000.00
                    </p>

                    <p className="mt-4 text-xs font-semibold">Subtotal</p>
                    <p className="mt-4 text-right text-xs text-gray-700">
                        Rs. 250,000.00
                    </p>

                    <p className="mt-4 text-xs font-semibold">Total</p>
                    <p className="mt-4 text-right text-sm font-bold text-[#B88E2F]">
                        Rs. 250,000.00
                    </p>
                </div>

                <hr className="border-gray-200" />

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
                    <button className="mt-4 w-70 mx-auto rounded-xl border border-gray-400 px-6 py-3 text-base font-medium transition hover:bg-[#B88E2F] hover:text-white">
                    Place order
                    </button>
                </div>
            </div>
        </section>

        <section className="w-full bg-[#FAF3EA] py-12 mt-5">
            <div className="max-w-8xl ml-15 mx-auto grid grid-cols-4 gap-10">

                {/* 1. High Quality */}
                <div className="flex items-center gap-4">
                    <span className="text-4xl">🏆</span>
                    <div>
                        <h3 className="text-lg font-bold">High Quality</h3>
                        <p className="text-gray-500 text-sm">crafted from top materials</p>
                    </div>
                </div>

                {/* 2. Warranty */}
                <div className="flex items-center gap-4">
                    <span className="text-4xl">✔️</span>
                    <div>
                        <h3 className="text-lg font-bold">Warranty Protection</h3>
                        <p className="text-gray-500 text-sm">Over 2 years</p>
                    </div>
                </div>

                {/* 3. Free Shipping */}
                <div className="flex items-center gap-4">
                    <span className="text-4xl">📦</span>
                    <div>
                        <h3 className="text-lg font-bold">Free Shipping</h3>
                        <p className="text-gray-500 text-sm">Order over 150 $</p>
                    </div>
                </div>

                {/* 4. Support */}
                <div className="flex items-center gap-4">
                    <span className="text-4xl">🎧</span>
                    <div>
                        <h3 className="text-lg font-bold">24 / 7 Support</h3>
                        <p className="text-gray-500 text-sm">Dedicated support</p>
                    </div>
                </div>

            </div>
        </section>

        <section>
            <div className="footer ">
                <div className="w-[90%] my-5 mx-auto h-px bg-gray-200"></div>
                <div className="grid grid-cols-[35%_10%_15%_35%] gap-4 mx-20" >
                    <div className="text-left">
                        <h1 className="text-base font-bold mb-10">Furniro.</h1>
                        <h2 className="text-sm mb-2 text-gray-400 mt-10">400 University Drive Suite 200 Coral Gables,</h2>
                        <h2 className="text-sm mb-2 text-gray-400">FL 33134 USA</h2>
                    </div>

                    <div className="flex flex-col flex-1">
                        <h2 className="text-base text-gray-400">Links</h2>
                        <Link href="/" className="text-sm font-bold mt-10 hover:text-[#B88E2F]">
                            Home
                        </Link>
                        <Link href="/shop" className="text-sm font-bold mt-10 hover:text-[#B88E2F]">
                            Shop
                        </Link>
                        <Link href="/blog" className="text-sm font-bold mt-10 hover:text-[#B88E2F]">
                            Blog
                        </Link>
                        <Link href="/contact"className="text-sm font-bold mt-10 hover:text-[#B88E2F]">
                            Contact
                        </Link>
                    </div>

                    <div>
                        <h2 className="text-base text-gray-400 mb-10">Help</h2>
                        <h3 className="text-sm font-bold mt-10">Payment Options</h3>
                        <h3 className="text-sm font-bold mt-10">Returns</h3>
                        <h3 className="text-sm font-bold mt-10">Privacy Policies</h3>
                    </div>

                    <div>
                        <p className="text-base text-gray-400 mb-10">Newsletter</p>
                        <div className="flex items-center gap-3 text-sm mt-10 mr-30">
                            <input
                            className="flex-1 border-b border-gray-300 pb-1 focus:outline-none"
                            placeholder="Enter Your Email Address"
                            />
                            <button className="border-b border-black pb-1 font-semibold">
                            SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] mt-10 mx-auto h-px bg-gray-200"></div>
                <h2 className="text-sm my-10 mx-20">2023 furino. All rights revered</h2>
            </div>
        </section>
    
    </main>
  );
}
