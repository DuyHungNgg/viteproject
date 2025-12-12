// app/page.tsx
import Image from "next/image";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

import Slider from "./components/Slider";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR */}
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
            <a href="#" className="hover:text-[#B88E2F]">
              Home
            </a>
            <Link href="/shop" className="hover:text-[#B88E2F]">
              Shop
            </Link>
            <a href="/blog" className="hover:text-[#B88E2F]">
              Blog
            </a>
            <Link href={"/contact"} className="hover:text-[#B88E2F]">
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

      {/* HERO */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/img/img-banner-detail.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* CARD */}
        <div
          className="
            absolute 
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[90%] max-w-[420px]
            bg-[#FFF3E3] p-6 rounded-xl shadow-xl

            md:left-auto md:right-10 md:w-[420px] md:translate-x-0
            md:p-10
          "
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            New Arrival
          </p>

          <h1 className="mt-3 text-2xl font-bold leading-snug text-[#B88E2F] md:text-4xl">
            Discover Our <br /> New Collection
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis.
          </p>

          <button className="mt-7 bg-[#B88E2F] px-8 py-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#a27b22]">
            Buy Now
          </button>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Browse The Range</h2>
          <p className="mb-10 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="text-center">
            <div className="relative mx-auto h-64 w-72 overflow-hidden rounded-lg">
              <Image
                src="/img/Dining.webp"
                alt="Dining"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xl font-medium">Dining</p>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <div className="relative mx-auto h-64 w-72 overflow-hidden rounded-lg">
              <Image
                src="/img/Living.png"
                alt="Living"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xl font-medium">Living</p>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <div className="relative mx-auto h-64 w-72 overflow-hidden rounded-lg">
              <Image
                src="/img/bedroom.jpg"
                alt="Bedroom"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xl font-medium">Bedroom</p>
          </div>
        </div>
      </section>

      <section>  
        <div>
          {/* our products */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-15 mb-7">Browse The Range</h1>
            <div className="flex justify-center px-5px">
              <div className="grid grid-cols-4 gap-8 mt-6 mb-2">
                <div className="max-w-sm">
                  <div className="group relative">
                    {/* Ảnh sản phẩm */}
                    <img
                    src="img/53.webp"
                    alt="Leviosa"
                    className="w-full h-72 object-cover"
                    />

                    {/* Overlay khi hover */}
                    <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition flex flex-col justify-center items-center text-white"
                    >
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

                    {/* Text dưới ảnh */}
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Leviosa</h3>
                        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                        <p className="mt-1 font-bold">Rp 2.500.000</p>
                    </div>
                  </div>
                </div>

                <div className="max-w-sm">
                  <div className="group relative">
                    {/* Ảnh sản phẩm */}
                    <img
                    src=" img/Prato-03-1.png"
                    alt="Leviosa"
                    className="w-full h-72 object-cover"
                    />

                    {/* Overlay khi hover */}
                    <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition flex flex-col justify-center items-center text-white"
                    >
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

                    {/* Text dưới ảnh */}
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Leviosa</h3>
                        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                        <p className="mt-1 font-bold">Rp 2.500.000</p>
                    </div>
                  </div>
                </div>

                <div className="max-w-sm">
                  <div className="group relative">
                    {/* Ảnh sản phẩm */}
                    <img
                    src="img/sofa-361-1-1.jpg"
                    alt="Leviosa"
                    className="w-full h-72 object-cover"
                    />

                    {/* Overlay khi hover */}
                    <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition flex flex-col justify-center items-center text-white"
                    >
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

                    {/* Text dưới ảnh */}
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Leviosa</h3>
                        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                        <p className="mt-1 font-bold">Rp 2.500.000</p>
                    </div>
                  </div>
                </div>

                <div className="max-w-sm">
                  <div className="group relative">
                    {/* Ảnh sản phẩm */}
                    <img
                    src="img/sofa-da-bo-y-1177-1-1.jpg"
                    alt="Leviosa"
                    className="w-full h-72 object-cover"
                    />

                    {/* Overlay khi hover */}
                    <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition flex flex-col justify-center items-center text-white"
                    >
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

                    {/* Text dưới ảnh */}
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Leviosa</h3>
                        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                        <p className="mt-1 font-bold">Rp 2.500.000</p>
                    </div>
                  </div>
                </div>

                <div className="max-w-sm">
                  <div className="group relative">
                    {/* Ảnh sản phẩm */}
                    <img
                    src="img/sofa-modular_1.png"
                    alt="Leviosa"
                    className="w-full h-72 object-cover"
                    />

                    {/* Overlay khi hover */}
                    <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition flex flex-col justify-center items-center text-white"
                    >
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

                    {/* Text dưới ảnh */}
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Leviosa</h3>
                        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                        <p className="mt-1 font-bold">Rp 2.500.000</p>
                    </div>
                  </div>
                </div>

                <div className="max-w-sm">
                  <div className="group relative">
                    {/* Ảnh sản phẩm */}
                    <img
                    src="img/sofa-perry-h-297.jpg"
                    alt="Leviosa"
                    className="w-full h-72 object-cover"
                    />

                    {/* Overlay khi hover */}
                    <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition flex flex-col justify-center items-center text-white"
                    >
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

                    {/* Text dưới ảnh */}
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Leviosa</h3>
                        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                        <p className="mt-1 font-bold">Rp 2.500.000</p>
                    </div>
                  </div>
                </div>

                <div className="max-w-sm">
                  <div className="group relative">
                    {/* Ảnh sản phẩm */}
                    <img
                    src="img/z3773175834406-488a806df4a967ba41575a896cc0a7fb.webp"
                    alt="Leviosa"
                    className="w-full h-72 object-cover"
                    />

                    {/* Overlay khi hover */}
                    <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition flex flex-col justify-center items-center text-white"
                    >
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

                    {/* Text dưới ảnh */}
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Leviosa</h3>
                        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                        <p className="mt-1 font-bold">Rp 2.500.000</p>
                    </div>
                  </div>
                </div>

                <div className="max-w-sm">
                  <div className="group relative">
                    {/* Ảnh sản phẩm */}
                    <img
                    src="img/ban-tra-tron-phong-khach-1.webp"
                    alt="Leviosa"
                    className="w-full h-72 object-cover"
                    />

                    {/* Overlay khi hover */}
                    <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                            transition flex flex-col justify-center items-center text-white"
                    >
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

                    {/* Text dưới ảnh */}
                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Leviosa</h3>
                        <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                        <p className="mt-1 font-bold">Rp 2.500.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href={"/shop"}>
              <button
                      className=" mt-5 px-15 py-3 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-sm hover:bg-yellow-500 transition block mx-auto "
                  >
                      SHOW MORE
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#FFF3E3] w-1440px h-560px"> 
          {/* inspiration */}
          <div className="items-center grid grid-cols-[30%_60%] gap-4 mt-6 ">
            {/* text */}
            <div className="text-justify pl-20">
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-2">
                50+ Beautiful rooms inspiration</h2>
                  <p className="text-gray-600 mb-6">
                      Our designer already made a lot of beautiful prototype of rooms that inspire you
                  </p>
                <button className="px-6 py-3 bg-yellow-600 text-white font-semibold hover:bg-[#a0781f] transition" >
                    Explore More
                </button>
              </div>
            </div>

            <div className="w-full mx-auto items-center h-[520px]">
              <Slider/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          {/*share*/}
          <div>
            <div className="text-center">
              <h1 className="text-lg mt-10">Share your setup with </h1>
              <h2 className="text-3xl font-bold">#FuniroFurniture</h2>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/*Cột 1: 4 ảnh*/}
              <div className="grid grid-cols-2 gap-6">
                  <img alt="pic" src="img/share/1.jpg" className="rounded-xl block mt-auto"/>
                  <img alt="pic" src="img/share/2.webp" className="rounded-xl block"/>
                  <img alt="pic" src="img/share/2.webp" className="rounded-xl block"/>
                  <img alt="pic" src="img/share/3.jpg" className="rounded-xl block"/>
              </div>

              {/*Cột 2: 1 ảnh (ở giữa hoặc tùy chỉnh)*/}
              <div className="flex flex-col justify-center">
                  <img alt="pic" src="img/share/4.jpg" className="rounded-xl block mx-auto"/>
              </div>

              {/*Cột 3: 4 ảnh*/}
              <div className="grid grid-cols-2 gap-6">
                  <img alt="pic" src="img/share/5.jpg " className="rounded-xl block mt-auto"/>
                  <img alt="pic" src="img/share/6.webp" className="rounded-xl block mt-auto"/>
                  <img alt="pic" src="img/share/6.webp" className="rounded-xl block"/>
                  <img alt="pic" src="img/share/7.png" className="rounded-xl block"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="footer mt-20">
          <div className="w-[90%] my-10 mx-auto h-px bg-gray-200"></div>
          <div className="grid grid-cols-[35%_10%_15%_35%] gap-4 mx-20" >
            <div className="text-left">
              <h1 className="text-base font-bold mb-10">Funiro.</h1>
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

