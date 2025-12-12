"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <main>
        <header className="sticky top-0 z-20 bg-white shadow-sm">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <Link href={"/"}>
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#B88E2F] text-lg font-bold text-white">
                            M
                        </div>
                        <span className="text-2xl font-bold text-gray-900">Furniro</span>
                    </div>
                </Link>

                {/* Menu */}
                <nav className="hidden items-center gap-10 text-sm font-medium text-gray-700 md:flex">
                    <Link href="/" className="hover:text-[#B88E2F]">
                        Home
                    </Link>
                    <a href="#"className="hover:text-[#B88E2F]">
                        Shop
                    </a>
                    <Link href="/blog" className="hover:text-[#B88E2F]">
                        Blog
                    </Link>
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
    </main>
    );
}