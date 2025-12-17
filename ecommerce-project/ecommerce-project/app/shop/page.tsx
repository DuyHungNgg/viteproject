"use client";

import { useMemo, useState } from "react";

import Header from "../components/layout/Header";
import BannerHeader from "../components/layout/BannerHeader";
import Pagination from "../components/layout/Pagination";
import BannerFooter from "../components/layout/BannerFooter";
import Footer from "../components/layout/Footer";

// app/shop/page.tsx
import ProductCard from "../components/product/ProductCard";
import { products } from "../mockup/products";

export default function ShopPage() {
    const [currentPage, setCurrentPage] = useState(1);

    // nếu bạn muốn cho select "Show" hoạt động sau này, đổi chỗ này thành state
    const [itemsPerPage, setItemsPerPage] = useState(16);


    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, products.length);

    const currentProducts = useMemo(
    () => products.slice(startIndex, endIndex),
    [startIndex, endIndex, itemsPerPage]
    );

  return (
    <main className="min-h-screen bg-white">
        < Header />

        <BannerHeader
            title="Shop"
            crumbs={[{ label: "Home" }, { label: "Shop" }]}
        />

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
                        Showing {startIndex} – {endIndex} of {products.length} results
                    </span>
                </div>

                {/* BÊN PHẢI */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-600">Show</span>
                    <select
                        aria-label="Select number of items to show"
                        className="w-15 border border-gray-300 rounded px-2 py-1 text-sm"
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1); // reset về trang 1
                        }}
                        >
                        <option value={16}>16</option>
                        <option value={12}>12</option>
                        <option value={8}>8</option>
                    </select>
                </div>
            </div>
        </section>

        {/* GRID SẢN PHẨM */}
        <section className="px-20 py-10">
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                {currentProducts.map((p) => (
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
        </section>

        {/* CHỈ ĐỂ 1 Pagination */}
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        />
        
        < BannerFooter />

        < Footer />
    </main>
  );
}
