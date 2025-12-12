"use client";

export default function Pagination() {

  return (
    <main>
        {/* Pagination – cuối trang */}
        <section className="flex justify-center ">
            <div className="flex gap-3">

                {/* Trang 1 – đang được chọn */}
                <button
                className="w-10 h-10 rounded-md bg-[#B88E2F] text-white text-sm font-thin
                            flex items-center justify-center"
                >
                1
                </button>

                {/* Trang 2 */}
                <button
                className="w-10 h-10 rounded-md bg-[#F9F3EB] text-gray-700 text-sm font-thin
                            flex items-center justify-center hover:bg-[#e8dcc6]"
                >
                2
                </button>

                {/* Trang 3 */}
                <button
                className="w-10 h-10 rounded-md bg-[#F9F3EB] text-gray-700 text-sm font-thin
                            flex items-center justify-center hover:bg-[#e8dcc6]"
                >
                3
                </button>

                {/* Next */}
                <button
                className="px-4 h-10 rounded-md bg-[#F9F3EB] text-gray-700 text-sm font-thin
                            flex items-center justify-center hover:bg-[#e8dcc6]"
                >
                Next
                </button>
            </div>
        </section>
    </main>
    );
}