"use client";

import { useEffect, useMemo, useState } from "react";

import BlogPost from "../components/blog/BlogPost";
import Sidebar from "../components/blog/Sidebar";

import Header from "../components/layout/Header";
import BannerHeader from "../components/layout/BannerHeader";
import Pagination from "../components/layout/Pagination";
import BannerFooter from "../components/layout/BannerFooter";
import Footer from "../components/layout/Footer";

export type Blog = {
  id: number;
  image: string;
  title: string;
  date: string;
  category: string;
  description: string;
};

const BLOGS_PER_PAGE = 3;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      const data: Blog[] = await res.json();
      setBlogs(data);
      setCurrentPage(1);
    };
    load();
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE)),
    [blogs.length]
  );

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <BannerHeader
        title="Blog"
        crumbs={[{ label: "Home" }, { label: "Blog" }]}
      />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-[60%_30%]">
        {/* Sidebar lên trên khi mobile */}
        <div className="order-1 md:order-2">
          <Sidebar blogs={blogs} />
        </div>

        {/* Blog list */}
        <div className="order-2 space-y-14 md:order-1">
          {currentBlogs.map((blog) => (
            <BlogPost key={blog.id} {...blog} />
          ))}
        </div>
      </section>

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
