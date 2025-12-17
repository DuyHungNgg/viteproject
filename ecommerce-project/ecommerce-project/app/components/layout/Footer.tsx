"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="h-px w-full bg-gray-500" />

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[25%_20%_20%_24%]">
          {/* Col 1 */}
          <div className="text-left">
            <h1 className="text-base font-bold">Furniro.</h1>
            <p className="mt-6 text-sm text-gray-400">
              400 University Drive Suite 300 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col">
            <h2 className="text-base text-gray-400">Links</h2>
            <div className="mt-6 flex flex-col gap-4">
              <Link href="/" className="text-sm font-bold hover:text-[#B88E2F]">
                Home
              </Link>
              <Link href="/shop" className="text-sm font-bold hover:text-[#B88E2F]">
                Shop
              </Link>
              <Link href="/blog" className="text-sm font-bold hover:text-[#B88E2F]">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-bold hover:text-[#B88E2F]">
                Contact
              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h2 className="text-base text-gray-400">Help</h2>
            <div className="mt-6 flex flex-col gap-4">
              <p className="text-sm font-bold">Payment Options</p>
              <p className="text-sm font-bold">Returns</p>
              <p className="text-sm font-bold">Privacy Policies</p>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <p className="text-base text-gray-400">Newsletter</p>

            {/* label để hết lỗi accessibility */}
            <label className="sr-only" htmlFor="newsletterEmail">
              Email address
            </label>

            <div className="mt-6 flex items-center gap-3 text-sm">
              <input
                id="newsletterEmail"
                type="email"
                className="w-full flex-1 border-b border-gray-300 bg-transparent pb-1 outline-none focus:border-black"
                placeholder="Enter Your Email Address"
              />
              <button className="shrink-0 border-b border-black pb-1 font-semibold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300" />

        <p className="mt-6 text-sm text-gray-700">
          2023 furniro. All rights reserved
        </p>
      </div>
    </footer>
  );
}
