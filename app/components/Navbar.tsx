"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logoImg from "@/pic/Logo/logonew.png";
import { FaDiscord, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
];

const socials = [
  { href: "https://dsc.gg/blindmc", label: "Discord", icon: <FaDiscord size={17} />, hover: "hover:text-indigo-400" },
  { href: "https://www.youtube.com/@blindmcofficial", label: "YouTube", icon: <FaYoutube size={17} />, hover: "hover:text-red-500" },
  { href: "https://www.instagram.com/blindpvp", label: "Instagram", icon: <FaInstagram size={17} />, hover: "hover:text-pink-400" },
  { href: "https://www.tiktok.com/blindmc", label: "TikTok", icon: <FaTiktok size={15} />, hover: "hover:text-white" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 px-4 sm:px-8 py-1.5 flex items-center gap-6 sticky top-0 bg-black/50 backdrop-blur-md z-50">
      <Link href="/" onClick={() => setOpen(false)}>
        <Image src={logoImg} alt="Blind MC" height={40} width={100} className="object-contain mr-2 sm:mr-4" />
      </Link>

      {/* Desktop links */}
      <div className="hidden sm:flex items-center gap-6">
        {navLinks.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-150 ${
                active
                  ? "text-white underline underline-offset-4 decoration-white/50 hover:decoration-red-400"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Desktop socials */}
      <div className="hidden sm:flex ml-auto items-center gap-4">
        {socials.map(({ href, label, icon, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`text-white/40 ${hover} transition-colors duration-150`}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Mobile: socials + hamburger */}
      <div className="ml-auto flex sm:hidden items-center gap-3">
        {socials.map(({ href, label, icon, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`text-white/40 ${hover} transition-colors duration-150`}
          >
            {icon}
          </a>
        ))}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="ml-1 flex flex-col gap-[5px] p-1 cursor-pointer"
        >
          <span className={`block h-[2px] w-5 bg-white/60 transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-5 bg-white/60 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-white/60 transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 flex flex-col py-3 sm:hidden">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-6 py-2.5 text-sm font-medium transition-colors duration-150 ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
