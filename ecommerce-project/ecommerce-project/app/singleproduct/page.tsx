import Image from "next/image";
import Link from "next/link";

export default function SingleProductPage() {
  return (
    <main className="min-h-screen bg-white">

        <header className="sticky top-0 z-20 bg-white">
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
                <img src="/img/prod7.jpg" alt="" className=" w-[605px] h-[348px] rounded-2xl object-cover"/>
                <img src="/img/prod5.jpg" alt="" className=" w-[605px] h-[348px] rounded-2xl object-cover"/>
            </div>
            <div className="w-full mt-10 mx-auto h-px bg-gray-200"></div>
        </section>

        <section>  
            <div>
                {/* our products */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold mt-15 mb-7">Related Products</h1>
                    <div className="flex justify-center px-5px">
                        <div className="grid grid-cols-4 gap-8 mt-6 mb-2">
                            <div className="max-w-sm bg-gray-100 group relative overflow-hidden">
                                {/* Ảnh sản phẩm */}
                                <img
                                    src="img/ban-tra-tron-phong-khach-1.webp"
                                    alt="Leviosa"
                                    className="w-full h-72 object-cover"
                                />

                                {/* Text dưới ảnh */}
                                <div className="my-3 ml-3 text-left">
                                    <h3 className="text-lg font-semibold">Leviosa</h3>
                                    <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                                    <p className="mt-1 font-bold">Rp 2.500.000</p>
                                </div>

                                {/* Overlay khi hover – phủ cả card */}
                                <div
                                    className="absolute inset-0 bg-black/60 opacity-0 
                                            group-hover:opacity-100 transition 
                                            flex flex-col justify-center items-center text-white"
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
                            </div>
                            <div className="max-w-sm bg-gray-100 group relative overflow-hidden">
                                {/* Ảnh sản phẩm */}
                                <img
                                    src="img/ban-tra-tron-phong-khach-1.webp"
                                    alt="Leviosa"
                                    className="w-full h-72 object-cover"
                                />

                                {/* Text dưới ảnh */}
                                <div className="my-3 ml-3 text-left">
                                    <h3 className="text-lg font-semibold">Leviosa</h3>
                                    <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                                    <p className="mt-1 font-bold">Rp 2.500.000</p>
                                </div>

                                {/* Overlay khi hover – phủ cả card */}
                                <div
                                    className="absolute inset-0 bg-black/60 opacity-0 
                                            group-hover:opacity-100 transition 
                                            flex flex-col justify-center items-center text-white"
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
                            </div>
                            <div className="max-w-sm bg-gray-100 group relative overflow-hidden">
                                {/* Ảnh sản phẩm */}
                                <img
                                    src="img/ban-tra-tron-phong-khach-1.webp"
                                    alt="Leviosa"
                                    className="w-full h-72 object-cover"
                                />

                                {/* Text dưới ảnh */}
                                <div className="my-3 ml-3 text-left">
                                    <h3 className="text-lg font-semibold">Leviosa</h3>
                                    <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                                    <p className="mt-1 font-bold">Rp 2.500.000</p>
                                </div>

                                {/* Overlay khi hover – phủ cả card */}
                                <div
                                    className="absolute inset-0 bg-black/60 opacity-0 
                                            group-hover:opacity-100 transition 
                                            flex flex-col justify-center items-center text-white"
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
                            </div>
                            <div className="max-w-sm bg-gray-100 group relative overflow-hidden">
                                {/* Ảnh sản phẩm */}
                                <img
                                    src="img/ban-tra-tron-phong-khach-1.webp"
                                    alt="Leviosa"
                                    className="w-full h-72 object-cover"
                                />

                                {/* Text dưới ảnh */}
                                <div className="my-3 ml-3 text-left">
                                    <h3 className="text-lg font-semibold">Leviosa</h3>
                                    <p className="text-gray-500 text-sm">Stylish cafe chair</p>
                                    <p className="mt-1 font-bold">Rp 2.500.000</p>
                                </div>

                                {/* Overlay khi hover – phủ cả card */}
                                <div
                                    className="absolute inset-0 bg-black/60 opacity-0 
                                            group-hover:opacity-100 transition 
                                            flex flex-col justify-center items-center text-white"
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
                            </div>

                        </div>
                    </div>
                        
                    <Link href={"/shop"}>
                        <button
                                className=" mt-8 px-15 py-3 border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white transition block mx-auto "
                            >
                                SHOW MORE
                        </button>
                    </Link>

                    <div className="w-full mt-18 h-px bg-gray-200"></div>

                </div>
            </div>
        </section>

        <section>
            <div className="footer mt-10">
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

            <div className="w-full mt-10 mx-auto h-px bg-gray-200"></div>

            <h2 className="text-sm my-10 mx-20">2023 furino. All rights revered</h2>

            </div>
        </section>
    </main>
    );
}
