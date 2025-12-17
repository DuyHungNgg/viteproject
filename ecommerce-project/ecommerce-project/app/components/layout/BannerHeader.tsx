type Crumb = { label: string; href?: string };

type BannerHeaderProps = {
  title: string;                 // nội dung H1
  crumbs: Crumb[];               // breadcrumb (Home > ...)
  imageSrc?: string;             // ảnh nền (optional)
  heightClass?: string;          // tuỳ chỉnh chiều cao (optional)
};

export default function BannerHeader({
  title,
  crumbs,
  imageSrc = "/img/banner-mo.jpg",
  heightClass = "h-[400px]",
}: BannerHeaderProps) {
  return (
    <section>
      <div className={`relative ${heightClass} flex items-center justify-center`}>
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-white/50" />

        <div className="relative text-center px-4">
          <h1 className="text-4xl font-bold">{title}</h1>

          <p className="mt-2 text-gray-700">
            {crumbs.map((c, i) => (
              <span key={i}>
                <span className={i === 0 ? "font-semibold" : ""}>{c.label}</span>
                {i < crumbs.length - 1 && <span> &gt; </span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
