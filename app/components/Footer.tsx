import Link from "next/link";
import Image from "next/image";
import visaImg   from "@/pic/payment-processors/visanew.png";
import masterImg from "@/pic/payment-processors/masternew.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-4 px-8 bg-black/40 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Left — copyright + links */}
        <p className="text-white/40 text-[11px] tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>&copy; 2026, BlindMC</span>
          <span className="text-white/20">&middot;</span>
          <Link href="/privacy" className="hover:text-white transition-colors duration-150">Privacy Policy</Link>
          <span className="text-white/20">&middot;</span>
          <Link href="/terms" className="hover:text-white transition-colors duration-150">Terms of Service</Link>
          <span className="text-white/20">&middot;</span>
          <Link href="/contact" className="hover:text-white transition-colors duration-150">Contact Information</Link>
        </p>

        {/* Right — payment processors */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="rounded px-2 py-1 flex items-center justify-center h-8">
            <Image src="/esewa.png" alt="eSewa" height={16} width={40} className="object-contain" />
          </div>
          <div className="rounded px-2 py-1 flex items-center justify-center h-8">
            <Image src="/khalti.png" alt="Khalti" height={16} width={40} className="object-contain" />
          </div>
          <div className="rounded px-2 py-1 flex items-center justify-center h-8">
            <Image src={visaImg} alt="Visa" height={16} width={52} className="object-contain" />
          </div>
          <div className="rounded px-2 py-1 flex items-center justify-center h-8">
            <Image src={masterImg} alt="Mastercard" height={16} width={40} className="object-contain" />
          </div>
          <div className="rounded px-2 py-1 flex items-center justify-center h-8">
            <Image src="/fonepay.png" alt="Fonepay" height={20} width={56} className="object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
