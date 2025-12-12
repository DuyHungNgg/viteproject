import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
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
                    <Link href="/blog" className="hover:text-[#B88E2F]">
                        Blog
                    </Link>
                    <a href="#"className="hover:text-[#B88E2F]">
                        Contact
                    </a>
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
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <p className="mt-2 text-gray-700">
                    <span className="font-semibold">Home</span> &gt; Contact
                    </p>
                </div>
            </div>
        </section>
        
        {/* ----------- CONTACT SECTION ----------- */}
        <section>
            {/* ----------- Title Section ----------- */}
            <div className="text-center mt-20 mb-30">
                <h2 className="text-2xl font-bold">Get In Touch With Us</h2>

                <p className="text-gray-500 mt-2 text-sm">
                For More Information About Our Products & Services, Please Feel Free To Drop Us 
                <br />
                An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            {/* ----------- Contact Content ----------- */}
            <div className="grid grid-cols-[35%_65%] gap-10 max-w-6xl mx-auto pb-5">

                {/* ---------- LEFT : CONTACT INFO ---------- */}
                <div className="space-y-10">

                    {/* Address */}
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">📍</span>
                        <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-5">
                            236 5th SE Avenue, New
                            <br />
                            York NY10000, United States
                        </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">📞</span>
                        <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-5">
                            Mobile: (+84) 546-6789
                            <br />
                            Hotline: (+84) 456-6789
                        </p>
                        </div>
                    </div>

                    {/* Working Time */}
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">⏰</span>
                        <div>
                        <h3 className="font-semibold">Working Time</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-5">
                            Monday–Friday: 9:00 – 22:00
                            <br />
                            Saturday–Sunday: 9:00 – 21:00
                        </p>
                        </div>
                    </div>

                </div>

                {/* ---------- RIGHT : CONTACT FORM ---------- */}
                <form className="space-y-6">
                <div>
                    <label className="text-sm font-medium">Your Name</label>
                    <input
                    type="text"
                    placeholder="Abc"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                    type="email"
                    placeholder="Abc@gmail.com"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Subject</label>
                    <input
                    type="text"
                    placeholder="This is an optional"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                    rows={5}
                    placeholder="Hi! I'd like to ask about..."
                    className="w-full border border-gray-300 rounded-md p-3 mt-1"
                    />
                </div>

                    <button className="w-[200px] bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 transition">
                        Submit
                    </button>

                </form>
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
