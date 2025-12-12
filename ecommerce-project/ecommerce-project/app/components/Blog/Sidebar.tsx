import CategoryItem from "./CategoryItem";
import RecentPost from "./RecentPost";


export default function Sidebar() {
  return (
    <aside className="space-y-10">

      {/* SEARCH */}
      <div className="flex items-center border px-3 py-2 rounded-lg">
        <input
          placeholder="Search"
          className="flex-1 outline-none"
        />
        <span>🔍</span>
      </div>

      {/* CATEGORIES */}
      <div className="pl-3 pr-7">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>

        <CategoryItem name="Crafts" count={2} />
        <CategoryItem name="Design" count={8} />
        <CategoryItem name="Handmade" count={7} />
        <CategoryItem name="Interior" count={1} />
        <CategoryItem name="Wood" count={6} />
      </div>

      {/* RECENT POSTS */}
      <div className="pl-3 pt-10">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>

        <RecentPost title="Going all in with millennial design" img="/img/blog/blog1.avif" />
        <RecentPost title="Exploring new ways of decorating" img="/img/blog/blog2.jpg" />
        <RecentPost title="Handmade pieces that took time" img="/img/blog/blog3.webp" />
      </div>
    </aside>
  );
}
