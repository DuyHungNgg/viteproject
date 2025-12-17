"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { products } from "../mockup/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/product/ProductCard";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function SingleProductPage() {
    const product = products[0]; // mock tạm, sau này lấy theo params

    const { id, img, name, desc, price, badge, oldPrice } = product;

    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({
        id,
        name,
        price,
        qty: 1,
        image: img,
        });
    };

    const relatedProducts = useMemo(() => {
        return [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    }, []);



  return (
    <main className="min-h-screen bg-white">
        < Header />
        <section>
            <div className="flex h-15 pl-20 items-center gap-2 text-sm text-gray-500 bg-[#F9F1E7]">
                <Link href="/" className="hover:text-black">Home</Link>

                <span className="text-black text-xl font-bold">›</span>

                <Link href="/shop" className="hover:text-black">Shop</Link>

                <span className="text-black text-xl font-bold">›</span>

                <span className="inline-block h-8 border-l border-gray-400 mx-2"></span>

                <span className="font-nomal text-black">Asgaard sofa</span>
            </div>
        </section>

        <section>
            <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 lg:grid-cols-[40%_1fr]">
                {/* LEFT: GALLERY */}
                <div className="flex gap-4">
                    {/* Thumbnails */}
                    <div className="flex flex-col gap-4">
                        {["/img/prod1.jpg", "/img/prod2.jpg", "/img/prod3.jpg", "/img/prod4.jpg"].map(
                            (src, idx) => (
                            <button aria-label="..."
                                key={idx}
                                className="relative h-16 w-16 overflow-hidden rounded-lg border border-gray-300 hover:border-[#B88E2F]"
                            >
                                <Image src={src} alt={`thumb-${idx}`} fill className="object-cover" />
                            </button>
                            )
                        )}
                    </div>

                    {/* Ảnh lớn */}
                    <div className="relative flex-1 overflow-hidden rounded-xl bg-[#FFF3E3]">
                        <Image
                            src="/img/prod-main.jpg"
                            alt="Asgaard sofa"
                            fill
                            className="object-contain p-8"
                        />
                    </div>
                </div>

                {/* RIGHT: INFO */}
                <div className="space-y-6">
                    {/* Title + price */}
                    <div className="space-y-2">
                        <h1 className="text-3xl font-semibold">Asgaard sofa</h1>
                        <p className="text-lg font-semibold text-gray-700">Rs. 250,000.00</p>

                        {/* Rating */}
                        <div className="flex items-center gap-3 text-sm">
                            <div className="flex items-center gap-1 text-[#FFC700]">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>☆</span>
                            </div>
                            <span className="h-4 w-px bg-gray-300" />
                            <span className="text-gray-500">5 Customer Review</span>
                        </div>
                    </div>

                    {/* Mô tả ngắn */}
                    <p className="text-sm leading-relaxed text-gray-600">
                    Setting the bar as one of the loudest speakers in its class, the Kilburn is
                    a compact, stout-hearted hero with a well-balanced audio which boasts a clear
                    midrange and extended highs for a sound.
                    </p>

                    {/* Size */}
                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500">Size</p>
                        <div className="flex gap-2">
                            {["L", "XL", "XS"].map((size) => (
                            <button
                                key={size}
                                className="h-7 w-7 rounded-md bg-gray-100 text-xs font-medium hover:bg-black hover:text-white"
                            >
                                {size}
                            </button>
                            ))}
                        </div>
                    </div>

                    {/* Color */}
                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500">Color</p>
                        <div className="flex gap-3">
                            <button aria-label="color" className="h-6 w-6 rounded-full bg-[#816BFF]" />
                            <button aria-label="color" className="h-6 w-6 rounded-full bg-black" />
                            <button aria-label="color" className="h-6 w-6 rounded-full bg-[#B88E2F]" />
                        </div>
                    </div>

                    {/* Qty + buttons */}
                    <div className="flex lg:flex-wrap items-center gap-4 pt-2">
                        {/* Qty */}
                        <div className="flex items-center border border-gray-300">
                            <button className="px-3 py-2 text-sm">-</button>
                            <span className="px-4 py-2 text-sm">1</span>
                            <button className="px-3 py-2 text-sm">+</button>
                        </div>

                        {/* Add to cart */}

                        <button 
                            onClick={handleAddToCart}
                            className="rounded-lg border border-black px-8 py-2 text-sm font-semibold hover:bg-black hover:text-white"
                        >
                            Add To Cart
                        </button>

                        {/* Compare */}
                        <Link href={"/procomparison"}>
                            <button className="rounded-lg border border-black px-8 py-2 text-sm font-semibold hover:bg-black hover:text-white">
                                + Compare
                            </button>
                        </Link>
                    </div>

                    {/* SKU / Category / Tags / Share */}
                    <div className="mt-6 border-t pt-4 text-xs text-gray-500 space-y-2">
                        <div className="flex gap-10">
                            <span className="w-20">SKU</span>
                            <span>: SS001</span>
                        </div>
                        <div className="flex gap-10">
                            <span className="w-20">Category</span>
                            <span>: Sofas</span>
                        </div>
                        <div className="flex gap-10">
                            <span className="w-20">Tags</span>
                            <span>: Sofa, Chair, Home, Shop</span>
                        </div>
                        <div className="flex gap-10">
                            <span className="w-20">Share</span>
                            <div className="flex gap-3 text-lg">
                            <span>📘</span>
                            <span>📸</span>
                            <span>🔗</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mt-10 mx-auto h-px bg-gray-300"></div>

        </section>

        <section className="w-full">
            {/* Tabs */}
            <div className="mx-auto my-10 flex max-w-6xl flex-wrap justify-center gap-6 px-4 sm:gap-10">
                <p className="text-base font-bold">Description</p>
                <p className="text-base text-gray-400">Additional Information</p>
                <p className="text-base text-gray-400">Reviews [5]</p>
            </div>

            {/* Text */}
            <div className="mx-auto max-w-4xl px-4 text-justify text-sm font-thin text-gray-400">
                <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </p>
                <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse aliquam harum quidem sunt! Debitis, rem quidem? Consequuntur totam cumque, eum aliquam magnam ipsa vitae eaque? Facilis et adipisci nostrum rerum fugit, voluptatibus sapiente saepe tempore dignissimos nihil natus pariatur velit corrupti, laudantium, tenetur fuga alias! Ab earum sit pariatur!
                </p>
            </div>

            {/* Images */}
            <div className="mx-auto my-10 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
                <img
                src="/img/prod/prod7.jpg"
                alt=""
                className="h-[220px] w-full rounded-2xl object-cover sm:h-[280px] lg:h-[348px]"
                />
                <img
                src="/img/prod/prod5.jpg"
                alt=""
                className="h-[220px] w-full rounded-2xl object-cover sm:h-[280px] lg:h-[348px]"
                />
            </div>

            <div className="mx-auto mt-10 h-px w-full max-w-6xl bg-gray-300 px-4" />
        </section>


        <section>
            <div>
                <h1 className="text-3xl text-center font-bold mt-15 mb-7">
                Related Products
                </h1>

                <div className="flex justify-center text-left px-5">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {relatedProducts.map((p) => (
                    <ProductCard
                        key={p.id}
                        id={p.id}
                        img={p.img}
                        name={p.name}
                        desc={p.desc}
                        price={p.price}
                        oldPrice={p.oldPrice}
                        badge={p.badge}
                    />
                    ))}
                </div>
                </div>

                <Link href="/shop">
                <button
                    className="mt-8 px-15 py-3 border border-yellow-500 text-yellow-500 
                            font-semibold hover:bg-yellow-500 hover:text-white 
                            transition block mx-auto"
                >
                    SHOW MORE
                </button>
                </Link>
            </div>
            </section>


        < Footer />
      </main>
  );
}

