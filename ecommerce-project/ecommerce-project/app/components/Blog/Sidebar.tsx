import CategoryItem from "./CategoryItem";
import RecentPost from "./RecentPost";
import type { Blog } from "@/app/blog/page";

type SidebarProps = {
  blogs: Blog[];
};

export default function Sidebar({ blogs }: SidebarProps) {
  const recent = blogs.slice(0, 3); // nếu muốn “mới nhất”, xem note bên dưới

  return (
    <aside className="mx-auto w-[80%] space-y-10">
      {/* SEARCH */}
      <div className="flex items-center rounded-lg border px-3 py-2">
        <input
          placeholder="Search"
          className="flex-1 outline-none"
          aria-label="Search"
        />
        <span>🔍</span>
      </div>

      {/* CATEGORIES */}
      <div className="pl-3 pr-7">
        <h3 className="mb-4 text-xl font-semibold">Categories</h3>

        <CategoryItem name="Crafts" count={2} />
        <CategoryItem name="Design" count={8} />
        <CategoryItem name="Handmade" count={7} />
        <CategoryItem name="Interior" count={1} />
        <CategoryItem name="Wood" count={6} />
      </div>

      {/* RECENT POSTS (từ API) */}
      <div className="pl-3 pt-10">
        <h3 className="mb-4 text-xl font-bold">Recent Posts</h3>

        {recent.map((b) => (
          <RecentPost key={b.id} title={b.title} img={b.image} />
        ))}
      </div>
    </aside>
  );
}
