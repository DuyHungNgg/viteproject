import Image from "next/image";
import Link from "next/link";

// app/blog/page.tsx
import BlogPost from "../components/BlogPost";
import Sidebar from "../components/Sidebar";

import Header from "../components/Default/Header";
import Pagination from "../components/Pagination";
import BannerFooter from "../components/Default/BannerFooter";
import Footer from "../components/Default/Footer";


export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
        < Header />

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

        < Pagination />

        < BannerFooter />
        
        < Footer />

    </main>
  );
}

