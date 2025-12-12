"use client";

import Link from "next/link";

export default function ProductCard({ img, name, desc, price }) {
  return (
    <div className="max-w-sm group relative mb-8">

      <img src={img} alt={name} className="w-full h-80 object-cover" />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                      transition flex flex-col justify-center items-center text-white ">
        {/* Nút Add to cart */}
        <Link href={"/cart"}>    
            <button
            className="bg-white text-yellow-600 font-semibold px-6 py-2 mb-6
                        hover:bg-yellow-500 hover:text-white transition"
            >
            Add to cart
            </button>
        </Link>

        {/* Hàng nút Share / Compare / Like */}
        <div className="flex gap-6 text-sm">
            <button>Share</button>
            <Link href={"/procomparison"}>
                <button className="hover:text-amber-400 hover:font-bold">Compare</button>
            </Link>
            <button>♡ Like</button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
        <p className="mt-1 font-bold">{price}</p>
      </div>
    </div>
  );
}
