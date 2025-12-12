"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <main>

        {/* ===== FOOTER ===== */}
        <section>
            <div className="footer ">
                <div className="w-full my-5 mx-auto h-px bg-gray-200"></div> <div className="w-full my-5 mx-auto h-px bg-gray-200"></div> <div className="w-full my-5 mx-auto h-px bg-gray-200"></div> <div className="w-full my-5 mx-auto h-px bg-gray-200"></div>
                <div className="grid grid-cols-[35%_10%_15%_35%] gap-4 mx-20">
                    <div className="text-left">
                        <h1 className="text-base font-bold mb-10">Furniro.</h1>
                        <h2 className="text-sm mb-2 text-gray-400 mt-10">
                            400 University Drive Suite 200 Coral Gables,
                        </h2>
                        <h2 className="text-sm mb-2 text-gray-400">FL 33134 USA</h2>
                    </div>

                    <div className="flex flex-col flex-1">
                        <h2 className="text-base text-gray-400">Links</h2>
                        <Link
                            href="/"
                            className="text-sm font-bold mt-10 hover:text-[#B88E2F]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="text-sm font-bold mt-10 hover:text-[#B88E2F]"
                        >
                            Shop
                        </Link>
                        <Link
                            href="/blog"
                            className="text-sm font-bold mt-10 hover:text-[#B88E2F]"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-bold mt-10 hover:text-[#B88E2F]"
                        >
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

                <div className="w-full mt-10 mx-auto h-px bg-gray-200"></div>
                <h2 className="text-sm my-10 mx-20">2023 furino. All rights revered</h2>
            </div>
        </section>
    </main>
  );
}
