interface CategoryItemProps {
  name: string;
  count: number;
}

export default function CategoryItem({ name, count }: CategoryItemProps) {
  return (
    <div className="flex justify-between text-sm text-gray-400 mb-5 hover:text-black cursor-pointer">
      <span>{name}</span>
      <span>{count}</span>
    </div>
  );
}
