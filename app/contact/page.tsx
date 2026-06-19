import Footer from "@/app/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider uppercase text-center mb-10">
            Contact Information
          </h1>

          <div className="space-y-6 text-white/70 text-[15px] leading-relaxed">
            <p>For purchase issues, delivery problems, or general inquiries, reach the Blind MC staff team through any of the channels below.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Discord</h2>
            <p>Fastest response â€” open a support ticket in our server.<br />
            <a href="https://dsc.gg/blindmc" className="text-red-400 hover:text-red-300" target="_blank" rel="noopener noreferrer">dsc.gg/blindmc</a></p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Email</h2>
            <p><a href="mailto:blindmcsupport@gmail.com" className="text-red-400 hover:text-red-300">blindmcsupport@gmail.com</a></p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Server</h2>
            <p>blindmc.fun</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Response Times</h2>
            <p>Discord tickets are typically answered within 24 hours. For purchase-related issues, include your Minecraft username and transaction details to speed up resolution.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

