"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import spearImg from "@/pic/keys/spear.png";
import maceImg from "@/pic/keys/mace.png";
import isekaiImg from "@/pic/keys/isekai.png";
import blindImg from "@/pic/keys/blind.png";
import spearPreviewImg from "@/pic/crates-preview/spear.png";
import macePreviewImg from "@/pic/crates-preview/mace.png";
import isekaiPreviewImg from "@/pic/crates-preview/isekai.png";
import blindPreviewImg from "@/pic/crates-preview/blind.png";

interface Crate {
  id: string; name: string; price: number; keys: number;
  image: StaticImageData; preview: StaticImageData; badge: string | null;
}

const crates: Crate[] = [
  { id: "spear",  name: "Spear Key",  price: 99,  keys: 3, image: spearImg,  preview: spearPreviewImg,  badge: null },
  { id: "mace",   name: "Mace Key",   price: 149, keys: 3, image: maceImg,   preview: macePreviewImg,   badge: null },
  { id: "isekai", name: "Isekai Key", price: 199, keys: 3, image: isekaiImg, preview: isekaiPreviewImg, badge: "Popular" },
  { id: "blind",  name: "Blind Key",  price: 299, keys: 3, image: blindImg,  preview: blindPreviewImg,  badge: "Elite" },
];

function CrateModal({ crate, onClose }: { crate: Crate; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="animate-backdrop-in absolute inset-0 bg-black/20 backdrop-blur-3xl" onClick={onClose} />

      <div className="animate-modal-in relative z-10 w-96 rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_0_120px_rgba(0,0,0,0.9),0_0_60px_rgba(220,38,38,0.1)]">
        <div className="shimmer-line h-[2px] w-full" />

        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <div>
            <p className="text-[9px] text-white/30 tracking-[0.5em] uppercase">Crate Preview</p>
            <p className="text-white font-black tracking-[0.3em] uppercase text-base mt-0.5">{crate.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-bold text-xl tracking-wide">Rs. {crate.price}</span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-950/40 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 cursor-pointer text-xs"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative w-full bg-black/20 mx-0 p-4">
          <Image
            src={crate.preview}
            alt={`${crate.name} contents`}
            className="w-full h-auto object-contain rounded-lg"
            style={{ imageRendering: "pixelated" }}
            priority
          />
          <div className="absolute inset-4 shadow-[inset_0_0_40px_rgba(220,38,38,0.04)] pointer-events-none rounded-lg" />
        </div>

        <div className="px-5 py-4">
          <Link
            href={`/payment?item=${encodeURIComponent(crate.name)}&price=${crate.price}&type=keys`}
            className="w-full py-3 bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-black tracking-[0.3em] uppercase text-xs rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(220,38,38,0.5)] hover:scale-[1.02] active:scale-100 cursor-pointer block text-center"
          >
            Purchase — Rs. {crate.price}
          </Link>
        </div>

        <div className="shimmer-line h-[1px] w-full opacity-40" />
      </div>
    </div>
  );
}

export default function KeysPage() {
  const [preview, setPreview] = useState<Crate | null>(null);

  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-500/80 text-[10px] tracking-[0.6em] uppercase mb-3 text-center font-semibold">blindmc.fun</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-[0.2em] text-white uppercase text-center mb-2">Crate Keys</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-2" />
          <p className="text-white/30 text-xs tracking-widest uppercase text-center mb-10">Mystery loot crates</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {crates.map((crate) => (
              <div
                key={crate.id}
                className="group relative flex flex-col bg-black/40 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(220,38,38,0.2)] will-change-transform"
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {crate.badge && (
                  <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-widest uppercase">{crate.badge}</div>
                )}

                <div className="relative w-full aspect-square p-4">
                  <Image
                    src={crate.image}
                    alt={crate.name}
                    fill
                    className="object-contain p-3 group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                  />
                </div>

                <div className="px-4 pb-4 flex flex-col gap-2">
                  <div>
                    <p className="text-white font-black tracking-wider text-sm">{crate.name}</p>
                    <p className="text-white/40 text-[11px] mt-0.5">{crate.keys} Keys</p>
                    <p className="text-red-400 font-bold text-xl mt-0.5">Rs. {crate.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPreview(crate)}
                      className="flex-1 py-2 border border-white/20 hover:border-red-500/60 hover:bg-red-950/30 text-white/50 hover:text-red-300 font-bold tracking-wider rounded-lg transition-all duration-200 uppercase text-[10px] cursor-pointer hover:scale-[1.04] active:scale-100"
                    >
                      Preview
                    </button>
                    <Link
                      href={`/payment?item=${encodeURIComponent(crate.name)}&price=${crate.price}&type=keys`}
                      className="flex-1 py-2 bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-black tracking-wider rounded-lg transition-all duration-200 uppercase text-[10px] cursor-pointer hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(220,38,38,0.6)] active:scale-100 block text-center"
                    >
                      Purchase
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/60 text-sm text-center mt-6 tracking-wide">You can choose anything among the items inside the crates</p>
        </div>
      </main>

      <Footer />
      {preview && <CrateModal crate={preview} onClose={() => setPreview(null)} />}
    </div>
  );
}
