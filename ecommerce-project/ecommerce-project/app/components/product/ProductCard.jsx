"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext"; // kiểm tra đúng path

export default function ProductCard({ id, img, name, desc, price, badge, oldPrice }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,     // phải là number
      qty: 1,
      image: img,
    });
  };

  return (
    <div className="group relative my-5">
      <div className="w-72 bg-gray-100 mx-auto relative overflow-hidden">
        <img src={img} alt={name} className="w-full h-72 object-cover" />

        <div className="mt-5 ml-5 pb-5">
          <h3 className="mb-2 text-lg font-semibold">{name}</h3>
          <p className="mb-2 text-gray-500 text-sm">{desc}</p>

          <div className="grid grid-cols-2">
            <p className="font-bold">Rp {price.toLocaleString()}</p>
            <p className="font-thin text-xs text-gray-400">{oldPrice}</p>
          </div>
        </div>

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white">
          {/* ❌ Không Link sang /cart ngay, vì bạn cần add trước */}
          <button
            onClick={handleAddToCart}
            className="bg-white text-yellow-600 font-semibold px-6 py-2 mb-6 hover:bg-yellow-500 hover:text-white transition"
          >
            Add to cart
          </button>

          <div className="flex gap-6 text-sm">
            <button>Share</button>
            <Link href="/procomparison">
              <button className="hover:text-amber-400 hover:font-bold">Compare</button>
            </Link>
            <button>♡ Like</button>
          </div>

          {/* muốn bấm xong chuyển trang cart thì thêm nút riêng */}
          <Link href="/cart" className="mt-4 underline text-xs">
            Go to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
