import Image from "next/image";
import Link from "next/link";

// app/blog/page.tsx
import BlogPost from "../components/BlogPost";
import Sidebar from "../components/Sidebar";


export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">

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
                    <a href="#"className="hover:text-[#B88E2F]">
                        Blog
                    </a>
                    <Link href="/contact" className="hover:text-[#B88E2F]">
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
                    <h1 className="text-4xl font-bold">Blog</h1>
                    <p className="mt-2 text-gray-700">
                    <span className="font-semibold">Home</span> &gt; Blog
                    </p>
                </div>
            </div>
        </section>

        <section className=" mx-auto pl-40 py-12 grid grid-cols-1 md:grid-cols-[60%_30%] gap-10">
            <div className="space-y-14">
            <BlogPost
                image="/img/blog/blog1.avif"
                title="Going all-in with millennial design"
                date="14 Oct 2022"
                category="Wood"
                description="Lorem ipsum dolor sit amet..."
            />
            <BlogPost
                image="/img/blog/blog2.jpg"
                title="Exploring new ways of decorating"
                date="14 Oct 2022"
                category="Handmade"
                description="Lorem ipsum dolor sit amet..."
            />
            <BlogPost
                image="/img/blog/blog3.webp"
                title="Handmade pieces that took time to make"
                date="14 Oct 2022"
                category="Wood"
                description="Lorem ipsum dolor sit amet..."
            />
            <BlogPost
                image="/img/blog/blog5.webp"
                title="Handmade pieces that took time to make"
                date="14 Oct 2022"
                category="Wood"
                description="Lorem ipsum dolor sit amet..."
            />
            </div>

            <Sidebar />
        </section>

        {/* Pagination – cuối trang */}
        <section className="flex justify-center ">
            <div className="flex gap-3">

                {/* Trang 1 – đang được chọn */}
                <button
                className="w-10 h-10 rounded-md bg-[#B88E2F] text-white text-sm font-thin
                            flex items-center justify-center"
                >
                1
                </button>

                {/* Trang 2 */}
                <button
                className="w-10 h-10 rounded-md bg-[#F9F3EB] text-gray-700 text-sm font-thin
                            flex items-center justify-center hover:bg-[#e8dcc6]"
                >
                2
                </button>

                {/* Trang 3 */}
                <button
                className="w-10 h-10 rounded-md bg-[#F9F3EB] text-gray-700 text-sm font-thin
                            flex items-center justify-center hover:bg-[#e8dcc6]"
                >
                3
                </button>

                {/* Next */}
                <button
                className="px-4 h-10 rounded-md bg-[#F9F3EB] text-gray-700 text-sm font-thin
                            flex items-center justify-center hover:bg-[#e8dcc6]"
                >
                Next
                </button>
            </div>
        </section>

        <section className="w-full bg-[#FAF3EA] py-12 mt-15">
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
            <div className="footer mt-20">
                <div className="w-[90%] my-10 mx-auto h-px bg-gray-200"></div>
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
                        <a href="#"className="text-sm font-bold mt-10 hover:text-[#B88E2F]">
                            Blog
                        </a>
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