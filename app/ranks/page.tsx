"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import armorAura   from "@/pic/rank-armor/aura.png";
import armorWizard from "@/pic/rank-armor/wizard.png";
import armorGorkha from "@/pic/rank-armor/gorkha.png";
import armorIsekai from "@/pic/rank-armor/isekai.png";
import armorBlind  from "@/pic/rank-armor/blind.png";
import tagAura     from "@/pic/rank-nametag/aura.png";
import tagWizard   from "@/pic/rank-nametag/wizard.png";
import tagGorkha   from "@/pic/rank-nametag/gorkha.png";
import tagIsekai   from "@/pic/rank-nametag/isekai.png";
import tagBlind    from "@/pic/rank-nametag/blind.png";
import kitAura     from "@/pic/ranks/aura.png";
import kitWizard   from "@/pic/ranks/wizard.png";
import kitGorkha   from "@/pic/ranks/gorkha.png";
import kitIsekai   from "@/pic/ranks/isekai.png";
import kitBlind    from "@/pic/ranks/blind.png";

interface Perk { label: string; desc: string; }
interface Rank {
  id: string; name: string; price: number;
  armor: StaticImageData; nametag: StaticImageData; kit: StaticImageData;
  badge: string | null; cardClass: string; perks: Perk[];
}

const ranks: Rank[] = [
  {
    id: "aura", name: "AURA", price: 99, armor: armorAura, nametag: tagAura, kit: kitAura, badge: null,
    cardClass: "border-white/10 hover:border-red-700/60 hover:shadow-[0_8px_40px_rgba(127,29,29,0.3)]",
    perks: [
      { label: "Aura Kit",             desc: "Claim your exclusive rank-tier gear" },
      { label: "5 Vaults",             desc: "Massive secure storage for your rarest loot" },
      { label: "5 Homes",              desc: "Set multiple teleport markers across the map" },
      { label: "/depth",               desc: "Instantly check your current Y-level depth" },
      { label: "/enderchest",           desc: "Open your ender chest from anywhere, anytime" },
      { label: "/kittycannon",         desc: "Fire explosive cats just because you can" },
      { label: "Go In Game To Review", desc: "Join the server and check your perks live" },
    ],
  },
  {
    id: "wizard", name: "WIZARD", price: 199, armor: armorWizard, nametag: tagWizard, kit: kitWizard, badge: null,
    cardClass: "border-white/10 hover:border-red-600/60 hover:shadow-[0_8px_40px_rgba(153,27,27,0.35)]",
    perks: [
      { label: "Wizard Kit",           desc: "Claim your exclusive high-tier rank gear" },
      { label: "8 Vaults",             desc: "Massive secure storage expansion for your items" },
      { label: "8 Homes",              desc: "Set up to 8 homes across the world" },
      { label: "/craft",               desc: "Open a portable crafting table anywhere, instantly" },
      { label: "/depth",               desc: "Quickly check your current Y-level depth coordinates" },
      { label: "/enderchest",           desc: "Open your ender chest from anywhere, anytime" },
      { label: "/kittycannon",         desc: "Fire explosive cats just because you can" },
      { label: "Go In Game To Review", desc: "Join the server and check your perks live" },
    ],
  },
  {
    id: "gorkha", name: "GORKHA", price: 299, armor: armorGorkha, nametag: tagGorkha, kit: kitGorkha, badge: "POPULAR",
    cardClass: "border-red-800/50 hover:border-red-500/80 hover:shadow-[0_8px_40px_rgba(185,28,28,0.4)]",
    perks: [
      { label: "Gorkha Kit",           desc: "Claim your supreme, top-tier rank gear" },
      { label: "14 Vaults",            desc: "Massive secure storage expansion for your items" },
      { label: "14 Homes",             desc: "Establish up to 14 teleport homes across the world" },
      { label: "/nick",                desc: "Stand out or stay incognito with a custom nickname" },
      { label: "/craft",               desc: "Open a portable crafting table instantly from anywhere" },
      { label: "/depth",               desc: "Instantly check your precise Y-level depth coordinates" },
      { label: "/enderchest",           desc: "Open your ender chest from anywhere, anytime" },
      { label: "/kittycannon",         desc: "Fire explosive cats just because you can" },
      { label: "Go In Game To Review", desc: "Join the server and check your perks live" },
    ],
  },
  {
    id: "isekai", name: "ISEKAI", price: 399, armor: armorIsekai, nametag: tagIsekai, kit: kitIsekai, badge: null,
    cardClass: "border-red-700/60 hover:border-red-400/80 hover:shadow-[0_8px_40px_rgba(220,38,38,0.4)]",
    perks: [
      { label: "Isekai Kit",           desc: "Equip yourself with the 2nd most powerful rank gear" },
      { label: "20 Vaults",            desc: "Massive storage capacity for an entire world's worth of loot" },
      { label: "20 Homes",             desc: "Set up to 20 bases across every corner of the map" },
      { label: "/enderchest",          desc: "Open your ender chest from anywhere, anytime" },
      { label: "/pweather",            desc: "Control your personal weather" },
      { label: "/disposal",            desc: "Instantly delete unwanted items to keep your inventory clean" },
      { label: "/nick",                desc: "Reborn with a brand new identity using a custom nickname" },
      { label: "/craft",               desc: "Use a portable crafting grid on the fly" },
      { label: "/depth",               desc: "Keep track of your exact Y-level coordinates" },
      { label: "/kittycannon",         desc: "Fire explosive cats just because you can" },
      { label: "Go In Game To Review", desc: "Join the server and check your perks live" },
    ],
  },
  {
    id: "blind", name: "BLIND", price: 499, armor: armorBlind, nametag: tagBlind, kit: kitBlind, badge: "ELITE",
    cardClass: "border-red-500/70 shadow-[0_0_20px_rgba(220,38,38,0.15)] hover:shadow-[0_8px_60px_rgba(220,38,38,0.5)] hover:border-red-400",
    perks: [
      { label: "Blind Kit",            desc: "Claim the absolute highest-tier rank kit available" },
      { label: "25 Vaults",            desc: "Unmatched secure storage to hoard an entire empire's loot" },
      { label: "25 Homes",             desc: "Teleport freely anywhere across the map with 25 markers" },
      { label: "/condense",            desc: "Instantly turn your raw materials into blocks on the fly" },
      { label: "/workbench",           desc: "Open a portable crafting table anywhere, anytime" },
      { label: "/enderchest",          desc: "Immediate access to your ender chest on demand" },
      { label: "/disposal",            desc: "Instantly trash unwanted items from your inventory" },
      { label: "/pweather",            desc: "Toggle your personal weather" },
      { label: "/nick",                desc: "Change up your server identity with custom nicknames" },
      { label: "/craft",               desc: "Access to a crafting table anytime" },
      { label: "/depth",               desc: "Instantly view your precise Y-level coordinates" },
      { label: "/kittycannon",         desc: "Fire off explosive kittens just because you can" },
      { label: "Go In Game To Review", desc: "Join the server and check your perks live" },
    ],
  },
];

function KitModal({ rank, onClose }: { rank: Rank; onClose: () => void }) {
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
            <p className="text-[9px] text-white/30 tracking-[0.5em] uppercase">Kit Preview</p>
            <p className="text-white font-black tracking-[0.3em] uppercase text-base mt-0.5">{rank.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 font-bold text-xl tracking-wide">Rs. {rank.price}</span>
            <button onClick={onClose} className="w-8 h-8 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-950/40 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 cursor-pointer text-xs" aria-label="Close">✕</button>
          </div>
        </div>
        <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative w-full bg-black/20 p-4">
          <Image src={rank.kit} alt={`${rank.name} kit`} className="w-full h-auto object-contain rounded-lg" style={{ imageRendering: "pixelated" }} priority />
          <div className="absolute inset-4 shadow-[inset_0_0_40px_rgba(220,38,38,0.04)] pointer-events-none rounded-lg" />
        </div>
        <ul className="flex flex-col gap-1.5 px-5 py-3 border-t border-white/10">
          {rank.perks.map((perk, i) => (
            <li key={i} className="flex items-start gap-1.5 text-[11px] leading-snug">
              <span className="text-red-500 mt-0.5 shrink-0">▸</span>
              <div>
                <span className="text-white/90 font-semibold font-mono">{perk.label}</span>
                <span className="text-white/40"> — {perk.desc}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="px-5 py-4 border-t border-white/10">
          <Link href={`/payment?item=${encodeURIComponent(rank.name + " Rank")}&price=${rank.price}&type=rank`} className="w-full py-3 bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-black tracking-[0.3em] uppercase text-xs rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(220,38,38,0.5)] hover:scale-[1.02] active:scale-100 cursor-pointer block text-center">
            Purchase — Rs. {rank.price}
          </Link>
        </div>
        <div className="shimmer-line h-[1px] w-full opacity-40" />
      </div>
    </div>
  );
}

export default function RanksPage() {
  const [preview, setPreview] = useState<Rank | null>(null);

  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 px-6 py-12">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-red-500/80 text-[10px] tracking-[0.6em] uppercase mb-3 text-center font-semibold">blindmc.fun</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-[0.2em] text-white uppercase text-center mb-2">Ranks</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-2" />
          <p className="text-white/30 text-xs tracking-widest uppercase text-center mb-10">All ranks are permanent — one-time purchase</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {ranks.map((rank) => (
              <div
                key={rank.id}
                className={`group relative flex flex-col bg-black/40 backdrop-blur-sm border ${rank.cardClass} rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:z-10 will-change-transform`}
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {rank.badge && (
                  <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-widest uppercase">{rank.badge}</div>
                )}
                <div className="relative w-full aspect-square p-4">
                  <Image src={rank.armor} alt={`${rank.name} armor`} fill className="object-contain p-3 scale-[1.4] group-hover:scale-[1.55] transition-transform duration-500 ease-out drop-shadow-[0_0_20px_rgba(220,38,38,0.2)]" />
                </div>
                <div className="px-4 pb-4 flex flex-col gap-3 flex-1">
                  <div>
                    <p className="text-white font-black tracking-wider text-sm">{rank.name}</p>
                    <p className="text-red-400 font-bold text-xl mt-0.5">Rs. {rank.price}</p>
                  </div>
                  <div className="w-full h-px bg-white/10 group-hover:bg-red-900/40 transition-colors duration-300" />
                  <ul className="flex flex-col gap-1.5 flex-1">
                    {rank.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] leading-snug">
                        <span className="text-red-600 group-hover:text-red-400 mt-0.5 shrink-0 transition-colors duration-200">▸</span>
                        <div>
                          <span className="text-white/90 font-semibold font-mono">{perk.label}</span>
                          <span className="text-white/40 group-hover:text-white/50 transition-colors duration-200"> — {perk.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => setPreview(rank)}
                      className="flex-1 py-2 border border-white/20 hover:border-red-500/60 hover:bg-red-950/30 text-white/50 hover:text-red-300 font-bold tracking-wider rounded-lg transition-all duration-200 uppercase text-[10px] cursor-pointer hover:scale-[1.04] active:scale-100"
                    >
                      Preview
                    </button>
                    <Link
                      href={`/payment?item=${encodeURIComponent(rank.name + " Rank")}&price=${rank.price}&type=rank`}
                      className="flex-1 py-2 bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-black tracking-wider rounded-lg transition-all duration-200 uppercase text-[10px] cursor-pointer hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(220,38,38,0.6)] active:scale-100 block text-center"
                    >
                      Purchase
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      {preview && <KitModal rank={preview} onClose={() => setPreview(null)} />}
    </div>
  );
}
