import Image from "next/image";

type BlogPostProps = {
  image: string;
  title: string;
  date: string;
  category: string;
  description: string;
};

export default function BlogPost({
  image,
  title,
  date,
  category,
  description,
}: BlogPostProps) {
  return (
    <article className="w-175">
      <div className="relative h-125 w-full overflow-hidden rounded-xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
        <span>👤 Admin</span>
        <span>📅 {date}</span>
        <span>🏷 {category}</span>
      </div>

      <h2 className="mt-3 text-2xl font-bold">{title}</h2>
      <p className="mt-2 leading-relaxed text-gray-600">{description}</p>

      <a className="mt-3 inline-block font-semibold underline-offset-4 hover:underline">
        Read more
      </a>
    </article>
  );
}
