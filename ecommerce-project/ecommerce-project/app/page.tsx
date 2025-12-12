// app/page.tsx
import Image from "next/image";
import Link from "next/link";

import ProductCard from "./components/product/ProductCard";
import { products } from "./mockup/products";

import Header from "./components/layout/Header";
import Slider from "./components/home/Slider";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      < Header />

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
            w-[90%] max-w-[640px]
            bg-[#FFF3E3] p-6 rounded-xl shadow-xl

            md:left-auto md:right-10 md:w-[640px] md:translate-x-0
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

      <section>
        <div className="bg-[#FFF3E3] w-full h-[580px]"> 
          {/* inspiration */}
          <div className="items-center grid grid-cols-[30%_60%] gap-4 mt-6 ">
            {/* text */}
            <div className="pl-20 text-left">
                <h2 className="text-3xl font-bold mb-2">
                50+ Beautiful rooms inspiration</h2>
                  <p className="text-gray-600 mb-6">
                      Our designer already made a lot of beautiful prototype of rooms that inspire you
                  </p>
                <button className="px-6 py-3 bg-yellow-600 text-white font-semibold hover:bg-[#a0781f] transition" >
                    Explore More
                </button>
            </div>

            <div className="w-full mt-5">
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

      < Footer />

    </main>
  );
}

