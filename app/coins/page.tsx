"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer";

const packages = [
  { id: 1, amount: 550,  price: 99,  image: "/coins1.png", popular: false },
  { id: 2, amount: 1500, price: 149, image: "/coins2.png", popular: false },
  { id: 3, amount: 1950, price: 199, image: "/coins3.png", popular: false },
  { id: 4, amount: 2500, price: 249, image: "/coins4.png", popular: true },
  { id: 5, amount: 5000, price: 499, image: "/coins5.png", popular: false },
];

export default function CoinsPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-500/80 text-[10px] tracking-[0.6em] uppercase mb-3 text-center font-semibold">blindmc.fun</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-[0.2em] text-white uppercase text-center mb-2">Coins</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-2" />
          <p className="text-white/30 text-xs tracking-widest uppercase text-center mb-10">In-game currency</p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative flex flex-col bg-black/40 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(220,38,38,0.2)] will-change-transform cursor-pointer"
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {pkg.popular && (
                  <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-widest uppercase">Popular</div>
                )}

                {/* Image */}
                <div className="relative w-full aspect-square p-4">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.amount} Coins`}
                    fill
                    className="object-contain p-3 group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                  />
                </div>

                {/* Info */}
                <div className="px-4 pb-4 flex flex-col gap-2">
                  <div>
                    <p className="text-white font-black tracking-wider text-sm">{pkg.amount.toLocaleString()} Coins</p>
                    <p className="text-red-400 font-bold text-xl mt-0.5">Rs. {pkg.price}</p>
                  </div>
                  <Link
                    href={`/payment?item=${encodeURIComponent(pkg.amount.toLocaleString() + " Coins")}&price=${pkg.price}&type=coins`}
                    className="w-full py-2 bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-black tracking-widest rounded-lg transition-all duration-200 uppercase text-[10px] cursor-pointer hover:shadow-[0_0_16px_rgba(220,38,38,0.5)] block text-center"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
