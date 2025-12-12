"use client";

import { useState } from "react";

import BlogPost from "../components/blog/BlogPost";
import Sidebar from "../components/blog/Sidebar";

import Header from "../components/layout/Header";
import Pagination from "../components/layout/Pagination";
import BannerFooter from "../components/layout/BannerFooter";
import Footer from "../components/layout/Footer";

const BLOGS_PER_PAGE = 3;

const BLOGS = [
  {
    image: "/img/blog/blog1.avif",
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/img/blog/blog2.jpg",
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/img/blog/blog3.webp",
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    category: "Wood",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/img/blog/blog5.webp",
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    category: "Wood",
    description: "Lorem ipsum dolor sit amet...",
  },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(BLOGS.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = BLOGS.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* BANNER BLOG */}
      <section>
        <div className="relative h-[300px] flex items-center justify-center">
          <img
            src="/img/banner-mo.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
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

      <section className="mx-auto pl-40 py-12 grid grid-cols-1 md:grid-cols-[60%_30%] gap-10">
        <div className="space-y-14">
          {currentBlogs.map((blog, idx) => (
            <BlogPost key={startIndex + idx} {...blog} />
          ))}
        </div>

        <Sidebar />
      </section>

      {/* CHỈ ĐỂ 1 Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <BannerFooter />
      <Footer />
    </main>
  );
}
