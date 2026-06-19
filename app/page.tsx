"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import blindHeroImg from "@/pic/Banner/blind-removebg-preview.png";
import rankLandImg from "@/pic/rank-landing/newland.png";
import joinImg from "@/pic/join/join.jpg";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("blindmc.fun");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPort = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("2083");
    setCopiedPort(true);
    setTimeout(() => setCopiedPort(false), 2000);
  };

  return (
    <div className="min-h-screen text-white flex flex-col">
      {/* Top bar: How To Join (left) + IP+Port (right) */}
      <div className="flex items-start justify-between px-8 pt-4 gap-4">

        {/* How To Join */}
        <a
          href="https://www.youtube.com/watch?v=PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-64 rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.25)] block"
        >
          <div className="relative w-full">
            <Image src={joinImg} alt="How To Join" width={joinImg.width} height={joinImg.height} className="w-full h-auto transition-transform duration-500 ease-out" />
            {/* Overlay + play — hover only */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.8)]">
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Label — hover only */}
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex items-center gap-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-3 h-3 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              <span className="text-white text-[10px] tracking-widest uppercase font-bold">How To Join</span>
            </div>
          </div>
        </a>

        {/* IP + Port — right */}
        <div className="flex flex-col items-end gap-2">
        <button
          onClick={copyIP}
          className="group relative border border-white/20 hover:border-red-500/60 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-xl px-10 py-5 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] overflow-hidden"
        >
          <Image src="/ip-behind.png" alt="" fill className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 ease-out pointer-events-none select-none" />
          <p className="relative text-white/40 text-[9px] tracking-[0.5em] uppercase mb-2 group-hover:text-white/60 transition-colors duration-200">
            Server IP — Click to Copy
          </p>
          <div className="relative flex items-center justify-center gap-3">
            <span className="text-white font-mono text-2xl font-bold tracking-widest">blindmc.fun</span>
            {copied ? <FiCheck size={16} className="text-green-400" /> : <FiCopy size={15} className="text-white/40 group-hover:text-red-400 transition-colors duration-200" />}
          </div>
          {copied && (
            <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-green-400 text-[10px] tracking-widest uppercase whitespace-nowrap">
              Copied to clipboard!
            </p>
          )}
        </button>

        {/* Port row */}
        <div className="flex items-center gap-2 bg-black/30 border border-white/10 hover:border-red-500/30 rounded-lg px-4 py-2 transition-colors duration-300">
          <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase">Port:</span>
          <span className="text-white font-mono text-sm font-semibold tracking-widest animate-pulse-subtle">2083</span>
          <button
            onClick={copyPort}
            className="ml-1 text-white/30 hover:text-red-400 transition-colors duration-200"
            aria-label="Copy port"
          >
            {copiedPort ? <FiCheck size={13} className="text-green-400" /> : <FiCopy size={13} />}
          </button>
        </div>
        </div>
      </div>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-2 relative -mt-4">
        {/* Animated banner */}
        <div className="animate-breathe mb-1 drop-shadow-[0_0_60px_rgba(220,38,38,0.4)]">
          <Image src={blindHeroImg} alt="Blind MC" width={280} height={147} className="object-contain" priority />
        </div>
      </section>

      {/* Shop section */}
      <section className="px-8 pb-6 flex-1">
        <div className="max-w-5xl mx-auto border border-white/10 rounded-2xl bg-black/30 backdrop-blur-sm px-6 pt-4 pb-5 h-full">
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-4 text-center">Available Now</p>
          <div className="grid grid-cols-3 gap-4">
          {/* Coins card */}
          <Link href="/coins" className="group block">
            <div className="relative w-full aspect-[4/3] group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(220,38,38,0.15)] group-hover:drop-shadow-[0_0_40px_rgba(220,38,38,0.3)]">
              <Image src="/coins-nobg.png" alt="Coins" fill className="object-contain scale-[1.45] group-hover:scale-[1.55] transition-transform duration-500 ease-out" />
            </div>
            <div className="mt-2 px-1">
              <p className="text-white font-black tracking-widest uppercase text-sm">Coins</p>
              <p className="text-white/40 text-xs mt-0.5">In-game currency</p>
            </div>
          </Link>

          {/* Crates card */}
          <Link href="/keys" className="group block">
            <div className="relative w-full aspect-[4/3] group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(220,38,38,0.15)] group-hover:drop-shadow-[0_0_40px_rgba(220,38,38,0.3)]">
              <Image src="/crates-nobg.png" alt="Crates" fill className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out" />
            </div>
            <div className="mt-2 px-1">
              <p className="text-white font-black tracking-widest uppercase text-sm">Crate Keys</p>
              <p className="text-white/40 text-xs mt-0.5">Mystery loot keys</p>
            </div>
          </Link>

          {/* Ranks card */}
          <Link href="/ranks" className="group block">
            <div className="relative w-full aspect-[4/3] group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(220,38,38,0.15)] group-hover:drop-shadow-[0_0_40px_rgba(220,38,38,0.3)]">
              <Image src={rankLandImg} alt="Ranks" fill className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out" />
            </div>
            <div className="mt-2 px-1">
              <p className="text-white font-black tracking-widest uppercase text-sm">Ranks</p>
              <p className="text-white/40 text-xs mt-0.5">Permanent perks &amp; kits</p>
            </div>
          </Link>
          </div>
          <p className="text-white/30 text-[10px] text-center mt-4 tracking-wide">It could take between 1–20 minutes for your purchase to be credited in-game</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
