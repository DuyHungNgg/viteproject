"use client";

export default function BannerFooter() {

  return (
    <main>
        <section className="w-full bg-[#FAF3EA] py-12 mt-5">
            <div className="max-w-8xl ml-15 mx-auto grid grid-cols-4 gap-10">
                <div className="flex items-center gap-4">
                    <span className="text-4xl">🏆</span>
                    <div>
                    <h3 className="text-lg font-bold">High Quality</h3>
                    <p className="text-gray-500 text-sm">crafted from top materials</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-4xl">✔️</span>
                    <div>
                    <h3 className="text-lg font-bold">Warranty Protection</h3>
                    <p className="text-gray-500 text-sm">Over 2 years</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-4xl">📦</span>
                    <div>
                    <h3 className="text-lg font-bold">Free Shipping</h3>
                    <p className="text-gray-500 text-sm">Order over 150 $</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-4xl">🎧</span>
                    <div>
                    <h3 className="text-lg font-bold">24 / 7 Support</h3>
                    <p className="text-gray-500 text-sm">Dedicated support</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
