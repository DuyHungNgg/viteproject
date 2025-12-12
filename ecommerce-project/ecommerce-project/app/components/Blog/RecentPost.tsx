import Image from "next/image";

interface RecentPostProps {
  title: string;
  img: string;
}

export default function RecentPost({ title, img }: RecentPostProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="relative w-16 h-16 mt-3 rounded-lg overflow-hidden">
        <Image src={img} fill alt={title} className="object-cover" />
      </div>

      <p className="text-sm text-gray-700 hover:text-black cursor-pointer">
        {title}
      </p>
    </div>
  );
}
