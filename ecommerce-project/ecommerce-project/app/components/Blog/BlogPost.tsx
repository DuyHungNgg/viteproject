import Image from "next/image";
import Link from "next/link";

type BlogPostProps = {
  image: string;
  title: string;
  date: string;
  category: string;
  description: string;
  slug: string; 
};


export default function BlogPost({
  image,
  title,
  date,
  category,
  description,
  slug,
}: BlogPostProps) {
  return (
    <article className="mx-auto w-[80%]">
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
        <span>👤 Admin</span>
        <span>📅 {date}</span>
        <span>🏷 {category}</span>
      </div>

      <h2 className="mt-3 text-2xl font-bold">{title}</h2>
      <p className="mt-2 leading-relaxed text-gray-600">{description}</p>

      <Link
        href={`/blog/${slug}`}
        className="mt-3 inline-block font-semibold underline-offset-4 hover:underline"
      >
        Read more
      </Link>
    </article>
  );
}
