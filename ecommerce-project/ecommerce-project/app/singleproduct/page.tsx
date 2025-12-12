import Image from "next/image";
import Link from "next/link";

import { products } from "../mockup/products";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function SingleProductPage() {
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
                            <button
                                key={idx}
                                className="relative h-16 w-16 overflow-hidden rounded-lg border border-gray-200 hover:border-[#B88E2F]"
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
                            <button className="h-6 w-6 rounded-full bg-[#816BFF]" />
                            <button className="h-6 w-6 rounded-full bg-black" />
                            <button className="h-6 w-6 rounded-full bg-[#B88E2F]" />
                        </div>
                    </div>

                    {/* Qty + buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        {/* Qty */}
                        <div className="flex items-center border border-gray-300">
                            <button className="px-3 py-2 text-sm">-</button>
                            <span className="px-4 py-2 text-sm">1</span>
                            <button className="px-3 py-2 text-sm">+</button>
                        </div>

                        {/* Add to cart */}
                        <Link href={"/cart"}>
                            <button className="rounded-lg border border-black px-8 py-2 text-sm font-semibold hover:bg-black hover:text-white">
                                Add To Cart
                            </button>
                        </Link>
                        
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

            <div className="w-full mt-10 mx-auto h-px bg-gray-200"></div>

        </section>

        <section>
            <div className="flex flex-1 justify-center mt-5  my-[43px] w-full">
                <p className="font-bold mx-15 text-base">Descriostion</p>
                <p className="text-gray-400 mx-15 text-base">Additional Information</p>
                <p className="text-gray-400 mx-15 text-base">Reviews [5]</p>
            </div>
            <div className="text-justify justify-items-center mx-auto text-sm text-gray-400 font-thin  w-[1026px]">
                <p className="mt-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quod ab, perspiciatis maxime, nemo assumenda eum nesciunt officiis placeat, eveniet dolor saepe excepturi quibusdam. Voluptate magni praesentium recusandae doloremque omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias quod totam omnis hic cum tempore dolorem nam voluptatem</p>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit possimus harum labore. Exercitationem temporibus et harum sed nulla consectetur reprehenderit iure quae laborum voluptate autem recusandae ex eligendi consequatur nam perferendis nobis accusamus ipsum, aliquam illo earum non blanditiis tempora quibusdam. Suscipit nisi aperiam sequi minima et molestias officia. Cumque.</p>
            </div>
            <div className="grid grid-cols-2 justify-items-center mx-auto my-10">
                <img src="/img/prod/prod7.jpg" alt="" className=" w-[605px] h-[348px] rounded-2xl object-cover"/>
                <img src="/img/prod/prod5.jpg" alt="" className=" w-[605px] h-[348px] rounded-2xl object-cover"/>
            </div>
            <div className="w-full mt-10 mx-auto h-px bg-gray-200"></div>
        </section>

        <section> 
            <div>
                {/* our products */}
                <div>
                    <h1 className="text-3xl text-center font-bold mt-15 mb-7">Related Products</h1>
                    <div className="flex justify-center text-left px-5">
                        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                            {products
                            .slice() // clone mảng
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 4)
                            .map((p, i) => (
                                <ProductCard
                                key={i}
                                img={p.img}
                                name={p.name}
                                desc={p.desc}
                                price={p.price}
                                />
                            ))}
                            </div>
                    </div>
                    <Link href={"/shop"}>
                        <button
                                className=" mt-8 px-15 py-3 border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white transition block mx-auto "
                            >
                                SHOW MORE
                        </button>
                    </Link>
                </div>
            </div>
        </section>

        < Footer />
      </main>
  );
}

