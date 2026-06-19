"use client";

import Image, { type StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import Footer from "@/app/components/Footer";
import esewaMethodImg from "@/pic/payment-methods/esewa.png";
import khaltiMethodImg from "@/pic/payment-methods/khalti.jpg";
import esewaProcessorImg from "@/pic/payment-processors/esewa.png";
import fonepayProcessorImg from "@/pic/payment-processors/fonepay.png";
import khaltiProcessorImg from "@/pic/payment-processors/khalti.png";
import visaMasterProcessorImg from "@/pic/payment-processors/visa-master.png";
import rankAura   from "@/pic/rank-armor/aura.png";
import rankWizard from "@/pic/rank-armor/wizard.png";
import rankGorkha from "@/pic/rank-armor/gorkha.png";
import rankIsekai from "@/pic/rank-armor/isekai.png";
import rankBlind  from "@/pic/rank-armor/blind.png";
import keySpear   from "@/pic/keys/spear.png";
import keyMace    from "@/pic/keys/mace.png";
import keyIsekai  from "@/pic/keys/isekai.png";
import keyBlind   from "@/pic/keys/blind.png";

const itemPreviewMap: Record<string, StaticImageData | string> = {
  "AURA Rank":    rankAura,
  "WIZARD Rank":  rankWizard,
  "GORKHA Rank":  rankGorkha,
  "ISEKAI Rank":  rankIsekai,
  "BLIND Rank":   rankBlind,
  "Spear Key":    keySpear,
  "Mace Key":     keyMace,
  "Isekai Key":   keyIsekai,
  "Blind Key":    keyBlind,
  "550 Coins":    "/coins1.png",
  "1,500 Coins":  "/coins2.png",
  "1,950 Coins":  "/coins3.png",
  "2,500 Coins":  "/coins4.png",
  "5,000 Coins":  "/coins5.png",
};

const processors = [
  { id: "esewa",      label: "eSewa",       img: esewaProcessorImg,     methodImg: esewaMethodImg },
  { id: "khalti",     label: "Khalti",      img: khaltiProcessorImg,    methodImg: khaltiMethodImg },
  { id: "fonepay",    label: "Fonepay",     img: fonepayProcessorImg,   methodImg: null },
  { id: "visa-master",label: "Visa/Master", img: visaMasterProcessorImg,methodImg: null },
];

function PaymentContent() {
  const params = useSearchParams();
  const item  = params.get("item")  ?? "Item";
  const price = params.get("price") ?? "0";
  const type  = params.get("type")  ?? "";

  const [method, setMethod]     = useState(processors[0].id);
  const [username, setUsername] = useState("");
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofPreview, setProofPreview] = useState<string | null>(null);
  const [notes, setNotes]       = useState("");
  const [status, setStatus]     = useState<"idle"|"loading"|"success"|"error"|"ratelimit">("idle");

  const processor = processors.find(p => p.id === method)!;
  const previewImg = itemPreviewMap[item] ?? null;;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setProofFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setProofPreview(url);
    } else {
      setProofPreview(null);
    }
  };

  const submit = async () => {
    if (!username.trim() || !proofFile) return;
    setStatus("loading");
    try {
      const fd = new FormData();
      fd.append("item", item);
      fd.append("price", price);
      fd.append("type", type);
      fd.append("username", username.trim());
      fd.append("notes", notes.trim());
      fd.append("method", method);
      fd.append("proof", proofFile, proofFile.name);
      const res = await fetch("/api/purchase", { method: "POST", body: fd });
      if (res.status === 429) setStatus("ratelimit");
      else setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <FiCheckCircle size={48} className="text-green-400 mx-auto mb-4" />
          <h2 className="text-white font-black text-2xl tracking-widest uppercase mb-2">Order Received</h2>
          <p className="text-white/50 text-sm mb-1">Your purchase for <span className="text-red-400 font-bold">{item}</span> has been submitted.</p>
          <p className="text-white/40 text-xs tracking-wide">It may take 1–20 minutes to be credited in-game.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 px-6 py-10 max-w-5xl mx-auto w-full">

        {/* Header */}
        <div className="mb-8 flex items-center gap-5">
          {previewImg && (
            <div className="relative w-20 h-20 shrink-0 rounded-xl bg-black/40 border border-white/10 overflow-hidden">
              <Image src={previewImg} alt={item} fill className="object-contain p-2 drop-shadow-[0_0_12px_rgba(220,38,38,0.25)]" priority />
            </div>
          )}
          <div className="flex-1">
            <p className="text-white/30 text-[10px] tracking-[0.6em] uppercase mb-1">blindmc.fun</p>
            <h1 className="text-2xl md:text-3xl font-black tracking-[0.15em] uppercase">
              Purchase: <span className="text-red-400">{item}</span>
            </h1>
            {type === "keys" && (
              <p className="text-white/60 text-sm mt-1 tracking-wide">You can choose anything among the items inside the crates</p>
            )}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mt-3" />
          </div>
        </div>

        {/* Payment processors */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {processors.map(p => (
            <button
              key={p.id}
              onClick={() => setMethod(p.id)}
              className={`relative h-10 px-4 rounded-lg border transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                method === p.id
                  ? "border-red-500/70 bg-red-950/40 shadow-[0_0_14px_rgba(220,38,38,0.25)]"
                  : "border-white/10 bg-black/30 hover:border-white/30"
              }`}
            >
              <div className="relative h-5 w-16">
                <Image src={p.img} alt={p.label} fill className="object-contain" />
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left — Payment Details */}
          <div className="bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
            {(processor.id === "fonepay" || processor.id === "visa-master") ? (
              /* Discord CTA for Fonepay / Visa/Master */
              <div className="flex flex-col items-center justify-center flex-1 gap-6 py-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  <FaDiscord size={32} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-white font-black tracking-widest uppercase text-sm mb-2">
                    {processor.label} Payments
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    To pay via <span className="text-white/80 font-semibold">{processor.label}</span>, join our Discord and open a ticket. Our staff will assist you.
                  </p>
                </div>
                <a
                  href="https://dsc.gg/blindmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black tracking-[0.2em] uppercase text-xs rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.5)] hover:scale-[1.03] active:scale-100"
                >
                  <FaDiscord size={18} />
                  Join Discord
                </a>
                <p className="text-white/20 text-[10px] tracking-wider">
                  Mention: purchasing <span className="text-white/40">{item}</span> — Rs. {price}
                </p>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-1">Payment Details</p>
                  <p className="text-white/60 text-sm">
                    {processor.methodImg ? `Scan the QR to pay via ${processor.label}` : `Pay using ${processor.label}`}
                    {" — "}
                    <span className="text-red-400 font-bold">Rs. {price}</span>
                  </p>
                </div>

                {/* Method image / QR area */}
                {processor.methodImg && (
                  <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      <Image src={processor.methodImg} alt={processor.label} fill className="object-contain" />
                    </div>
                  </div>
                )}

                {/* Steps */}
                <div className="flex flex-col gap-2 text-[12px] border-t border-white/10 pt-4">
                  {[
                    processor.methodImg ? `Scan the QR code` : `Pay using ${processor.label}`,
                    `Pay exactly Rs. ${price} using ${processor.label}`,
                    "Take a screenshot of the payment confirmation.",
                    "Fill out the form on the right and submit.",
                  ].map((s, i) => (
                    <p key={i} className="text-white/60">
                      <span className="text-red-400 font-bold">Step {i + 1}:</span> {s}
                    </p>
                  ))}
                </div>

                {/* Info notices */}
                <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                  <p className="text-white/40 text-[11px] flex items-start gap-1.5">
                    <FiAlertCircle size={12} className="mt-0.5 shrink-0 text-yellow-500/70" />
                    For other payment methods, join our Discord.
                  </p>
                  <p className="text-white/40 text-[11px] flex items-start gap-1.5">
                    <FiAlertCircle size={12} className="mt-0.5 shrink-0 text-yellow-500/70" />
                    Purchase may take 1–20 minutes to be credited in-game.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Right — Your Information */}
          <div className="bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-1">Your Information</p>
              <p className="text-white/60 text-sm">Tell us who to give the items to</p>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-white/60 text-xs tracking-wider uppercase mb-1.5 block">Minecraft Username</label>
                <input
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="e.g. Notch"
                  className="w-full bg-black/50 border border-white/15 focus:border-red-500/60 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200 placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="text-white/60 text-xs tracking-wider uppercase mb-1.5 block">Payment Proof <span className="normal-case text-white/30">(Screenshot)</span></label>
                <label className={`flex flex-col items-center justify-center w-full rounded-lg border-2 border-dashed cursor-pointer transition-colors duration-200 ${proofFile ? "border-red-500/60 bg-red-950/20" : "border-white/15 bg-black/50 hover:border-white/30"}`}>
                  {proofPreview ? (
                    <div className="w-full p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={proofPreview} alt="Proof preview" className="max-h-40 mx-auto rounded object-contain" />
                      <p className="text-white/40 text-[10px] text-center mt-1 truncate px-2">{proofFile?.name}</p>
                    </div>
                  ) : (
                    <div className="py-6 flex flex-col items-center gap-1 text-white/30 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4-4a3 3 0 014.243 0L16 16m-2-2l1.586-1.586a3 3 0 014.243 0L20 20M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span>Click to upload screenshot</span>
                      <span className="text-[10px] text-white/20">PNG, JPG, WEBP accepted</span>
                    </div>
                  )}
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </label>
              </div>

              <div>
                <label className="text-white/60 text-xs tracking-wider uppercase mb-1.5 block">Additional Notes <span className="normal-case text-white/30">(Optional)</span></label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Any extra information..."
                  rows={3}
                  className="w-full bg-black/50 border border-white/15 focus:border-red-500/60 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200 placeholder:text-white/20 resize-none"
                />
              </div>
            </div>

            {status === "error" && (
              <p className="text-red-400 text-xs flex items-center gap-1.5">
                <FiAlertCircle size={12} /> Something went wrong. Try again or join Discord.
              </p>
            )}
            {status === "ratelimit" && (
              <p className="text-yellow-400 text-xs flex items-center gap-1.5">
                <FiAlertCircle size={12} /> Too many submissions. Try again in an hour.
              </p>
            )}

            <button
              onClick={submit}
              disabled={status === "loading" || !username.trim() || !proofFile}
              className="w-full py-3.5 bg-red-700 hover:bg-red-600 active:bg-red-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-black tracking-[0.3em] uppercase text-xs rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(220,38,38,0.5)] hover:scale-[1.02] active:scale-100 cursor-pointer"
            >
              {status === "loading" ? "Submitting…" : `Submit Order — Rs. ${price}`}
            </button>

            <p className="text-white/20 text-[10px] text-center tracking-wider">
              By submitting you confirm payment of Rs. {price} via {processor.label}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense>
      <PaymentContent />
    </Suspense>
  );
}
