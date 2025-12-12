import Link from "next/link";
import { products } from "../mockup/products";

import Header from "../components/Default/Header";
import Pagination from "../components/Default/Pagination";
import BannerFooter from "../components/Default/BannerFooter";
import Footer from "../components/Default/Footer";

// app/shop/page.tsx
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
        < Header />

        {/* BANNER SHOP */}
        <section className="relative h-[300px] flex items-center justify-center">
            <img
                src="/img/banner-mo.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-white/60"></div>
            <div className="relative text-center">
                <h1 className="text-3xl font-bold">Shop</h1>
                <p className="mt-2 text-gray-700">
                <span className="font-semibold">Home</span> &gt; Shop
                </p>
            </div>
        </section>

        {/* THANH FILTER / SORT (khung xanh trong hình) */}
        <section className="bg-[#FAF3EA] py-4 px-6 mt-4 ">
            <div className="flex flex-wrap items-center justify-between text-sm gap-4">
                {/* BÊN TRÁI */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2">
                        <span className="text-lg">☰</span>
                        <span>Filter</span>
                    </button>

                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 border border-gray-400 flex items-center justify-center">
                        ⬛
                        </button>
                        <button className="w-8 h-8 border border-gray-300 flex items-center justify-center">
                        ☰
                        </button>
                    </div>

                    <span className="text-gray-500">
                        Showing 1–16 of 32 results
                    </span>
                </div>

                {/* BÊN PHẢI */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-600">Show</span>
                    <select
                        aria-label="Select number of items to show"
                        className="w-12 border border-gray-300 rounded px-2 py-1 text-sm"
                        >
                        <option>16</option>
                        <option>12</option>
                        <option>8</option>
                    </select>

                    <span className="text-gray-600">Sort by</span>
                    <select
                        aria-label="Select sorting option"
                        className="w-40 border border-gray-300 rounded px-3 py-1 text-sm"
                        >
                        <option>Default</option>
                        <option>Price: low to high</option>
                        <option>Price: high to low</option>
                        <option>Name</option>
                    </select>
                </div>
            </div>
        </section>

        {/* GRID SẢN PHẨM */}
        <section className="px-20 py-10">
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p, i) => (
                <ProductCard
                key={i}
                img={p.img}
                name={p.name}
                desc={p.desc}
                price={p.price}
                />
            ))}
            </div>
        </section>
        
        < Pagination />

        < BannerFooter />

        < Footer />
    </main>
  );
}
