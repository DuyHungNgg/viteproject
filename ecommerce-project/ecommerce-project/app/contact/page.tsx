import Image from "next/image";
import Link from "next/link";

import Header from "../components/Default/Header";
import BannerFooter from "../components/Default/BannerFooter";
import Footer from "../components/Default/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

        < Header />

        {/* BANNER SHOP */}
        <section>
            <div className="relative h-[300px] flex items-center justify-center">
                <img
                    src="/img/banner-mo.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover "
                />

                <div className="absolute inset-0 bg-white/50"></div>

                <div className="relative text-center">
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <p className="mt-2 text-gray-700">
                    <span className="font-semibold">Home</span> &gt; Contact
                    </p>
                </div>
            </div>
        </section>
        
        {/* ----------- CONTACT SECTION ----------- */}
        <section>
            {/* ----------- Title Section ----------- */}
            <div className="text-center mt-20 mb-30">
                <h2 className="text-2xl font-bold">Get In Touch With Us</h2>

                <p className="text-gray-500 mt-2 text-sm">
                For More Information About Our Products & Services, Please Feel Free To Drop Us 
                <br />
                An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            {/* ----------- Contact Content ----------- */}
            <div className="grid grid-cols-[35%_65%] gap-10 max-w-6xl mx-auto pb-5">

                {/* ---------- LEFT : CONTACT INFO ---------- */}
                <div className="space-y-10">

                    {/* Address */}
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">📍</span>
                        <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-5">
                            236 5th SE Avenue, New
                            <br />
                            York NY10000, United States
                        </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">📞</span>
                        <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-5">
                            Mobile: (+84) 546-6789
                            <br />
                            Hotline: (+84) 456-6789
                        </p>
                        </div>
                    </div>

                    {/* Working Time */}
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">⏰</span>
                        <div>
                        <h3 className="font-semibold">Working Time</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-5">
                            Monday–Friday: 9:00 – 22:00
                            <br />
                            Saturday–Sunday: 9:00 – 21:00
                        </p>
                        </div>
                    </div>

                </div>

                {/* ---------- RIGHT : CONTACT FORM ---------- */}
                <form className="space-y-6">
                <div>
                    <label className="text-sm font-medium">Your Name</label>
                    <input
                    type="text"
                    placeholder="Abc"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                    type="email"
                    placeholder="Abc@gmail.com"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Subject</label>
                    <input
                    type="text"
                    placeholder="This is an optional"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                    rows={5}
                    placeholder="Hi! I'd like to ask about..."
                    className="w-full border border-gray-300 rounded-md p-3 mt-1"
                    />
                </div>

                    <button className="w-[200px] bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 transition">
                        Submit
                    </button>

                </form>
            </div>
        </section>

        < BannerFooter />

        < Footer />
    
    </main>
  );
}
