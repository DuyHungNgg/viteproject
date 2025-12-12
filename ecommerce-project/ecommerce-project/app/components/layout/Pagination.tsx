"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional: lên đầu trang
  };

  return (
    <section className="flex justify-center">
      <div className="flex gap-3">
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => goTo(page)}
              className={
                isActive
                  ? "w-10 h-10 rounded-md bg-[#B88E2F] text-white text-sm font-thin flex items-center justify-center"
                  : "w-10 h-10 rounded-md bg-[#F9F3EB] text-gray-700 text-sm font-thin flex items-center justify-center hover:bg-[#e8dcc6]"
              }
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={`px-4 h-10 rounded-md text-sm font-thin flex items-center justify-center
            ${
              currentPage >= totalPages
                ? "bg-[#F9F3EB] text-gray-400 cursor-not-allowed"
                : "bg-[#F9F3EB] text-gray-700 hover:bg-[#e8dcc6]"
            }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
