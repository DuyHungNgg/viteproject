import Image from "next/image";
import Link from "next/link";
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
        <span className="relative text-gray-300">
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
    <main className=" min-h-screen">
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
                    <h1 className="text-4xl font-bold">Product Comparison</h1>
                    <p className="mt-2 text-gray-700">
                    <span className="font-semibold">Home</span> &gt; Product Comparison
                    </p>
                </div>
            </div>
        </section>

        {/* KHUNG CHÍNH */}
        <section className="mx-auto mt-8 max-w-5xl px-15 pb-10 ">
            {/* ==== HÀNG TRÊN: card sản phẩm ==== */}
            <div className="grid grid-cols-[1.3fr_1.5fr_1.5fr_1.5fr] gap-5 pb-6">
                {/* Cột 1: text + button */}
                <div className="space-y-2 text-sx">
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
                <div key={p.id} className="space-y-3 text-sm">
                    <div className="relative h-28 w-full overflow-hidden rounded-lg">
                        <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-sm font-semibold">{p.name}</h3>
                    <p className="text-xs text-gray-500">{formatPrice(p.price)}</p>

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold">{p.rating}</span>
                        <RatingStars rating={p.rating} />
                        {/* Divider */}
                        <div className="h-5 w-px bg-gray-300"></div>
                        <span className="text-xs text-gray-500">{p.reviews} Review</span>
                    </div>
                </div>
                ))}

                {/* Cột Add Product */}
                <div className="flex flex-col gap-2 mt-5">
                    <span className="font-semibold">Add A Product</span>
                    <button className=" text-left rounded-sm bg-[#B88E2F] py-2 px-3 text-xs font-nomal text-white hover:bg-[#a0781f]">
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
