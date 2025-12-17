import Image from "next/image";
import Link from "next/link";

import Header from "../components/layout/Header";
import BannerHeader from "../components/layout/BannerHeader";
import BannerFooter from "../components/layout/BannerFooter";
import Footer from "../components/layout/Footer";

import {
  compareProducts,
  specGroups,
  CompareProduct,
} from "../mockup/compareProducts.ts";

// nhỏ gọn: định dạng tiền
const formatPrice = (value: number) =>
  "Rs. " + value.toLocaleString("en-IN", { minimumFractionDigits: 2 });

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25;

  return (
    <div className="flex items-center gap-1 text-yellow-400 text-sm">
      {/* full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={i}>★</span>
      ))}

      {/* half star */}
      {hasHalf && (
        <span className="relative text-gray-400">
          ★
          <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-400">
            ★
          </span>
        </span>
      )}
    </div>
  );
}

export default function ComparePage() {
  const productsToCompare: CompareProduct[] = compareProducts; // hiện 2 sp

  return (
    <main className=" min-h-screen bg-white">
      < Header />

      <BannerHeader
        title="Product Comparison"
        crumbs={[{ label: "Home" }, { label: "Product Comparison" }]}
      />

      {/* KHUNG CHÍNH */}
      <section className="mx-auto mt-8 max-w-5xl px-16 pb-10 ">
        {/* ==== HÀNG TRÊN: card sản phẩm ==== */}
        <div className="lg:grid grid-cols-[1.3fr_1.5fr_1.5fr_1.5fr] overflow-x-auto gap-5">
          {/* Cột 1: text + button */}
          <div className="space-y-2 mb-5 text-xs">
            <h2 className="text-2xl font-bold">Go to Product page for more Products</h2>
            <Link
            href="/shop"
            className="text-gray-400 py-2 text-xs underline underline-offset-4 hover:text-black"
            >
            View More  
            </Link>
          </div>

          {/* Cột các sản phẩm */}
          {productsToCompare.map((p) => (
          <div key={p.id} className="space-y-3 mb-5 text-sm ">
            <div className="relative h-32 overflow-hidden rounded-lg">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <h3 className="text-sm font-semibold">{p.name}</h3>
            <p className="text-xs text-gray-500">{formatPrice(p.price)}</p>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold">{p.rating}</span>
              <RatingStars rating={p.rating} />
              {/* Divider */}
              <div className="h-5 w-px bg-gray-400"></div>
              <span className="text-xs text-gray-500">{p.reviews} Review</span>
            </div>
          </div>
          ))}

          {/* Cột Add Product */}
          <div className="flex flex-col gap-2 mt-5">
            <span className="font-semibold">Add A Product</span>
            <button className=" text-left rounded-sm bg-[#B88E2F] py-2 px-3 text-xs font-normal text-white hover:bg-[#a0781f]">
            Choose a Product
            </button>
          </div>
        </div>

        {/* ==== PHẦN BẢNG THÔNG SỐ ==== */}
        <div className=" space-y-5">
        {specGroups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-10 h-10 text-2xl font-semibold">{group.title}</h3>
            <div>
              {group.items.map((item) => (
              <div
                key={item.key}
                className="grid grid-cols-[1.3fr_1.5fr_1.5fr_1.5fr] text-sm divide-x divide-red-600"
                >
                <p className="h-20 mt-3">{item.label}</p>

                {productsToCompare.map((p) => (
                    <p key={p.id} className="ml-3 mt-3"> 
                    {p.specs[item.key] ?? "-"}
                    </p>
                ))}

                {/* cột 4 trống vẫn được chia line */}
                <div />

              </div>
              ))}
            </div>
          </div>
          ))}
        </div>

        {/* ==== NÚT ADD TO CART MỖI CỘT (CUỐI BẢNG) ==== */}
        <div className="grid grid-cols-[1.3fr_1.5fr_1.5fr_1.5fr] w-full pb-6  ">
          <div/>

          {productsToCompare.map((p) => ( 
            <Link href={"/cart"} >
              <button
              key={p.id}
              className="mb-2 w-[70%] bg-[#B88E2F] mx-3 py-2 text-xs font-thin text-white hover:bg-[#a0781f] "
              >
              Add To Cart
              </button>
            </Link>
          ))}

        </div>
      </section>

      < BannerFooter />

      < Footer />
    
    </main>
  );
}
