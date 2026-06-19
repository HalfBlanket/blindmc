import Footer from "@/app/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider uppercase text-center mb-10">
            Terms of Service
          </h1>

          <p className="text-white/40 text-sm mb-8">Last updated: June 2026</p>

          <div className="space-y-6 text-white/70 text-[15px] leading-relaxed">
            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Information About Us</h2>
            <p>This webstore is operated by Blind MC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). These Terms &amp; Conditions govern all purchases made through our store and the use of any products, ranks, cosmetics, virtual currency, or other digital content sold by Blind MC.</p>
            <p>By making a purchase from our store, you agree to these Terms &amp; Conditions.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Contact Us</h2>
            <p>If you require support regarding a purchase, payment issue, or product delivery, please contact the Blind MC staff team through:</p>
            <p><strong className="text-white/90">Discord:</strong>{" "}
            <a href="https://dsc.gg/blindmc" className="text-red-400 hover:text-red-300" target="_blank" rel="noopener noreferrer">dsc.gg/blindmc</a><br />
            <strong className="text-white/90">Email:</strong> blindmcsupport@gmail.com</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Digital Products</h2>
            <p>All products sold through the Blind MC store are digital items intended for use on the Blind MC Minecraft server. Purchases grant you a license to use the purchased content on the account used during checkout. Products may not be transferred, resold, shared, or exchanged for real-world currency.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Refund Policy</h2>
            <p>All purchases are final. Because products are delivered digitally and usually instantly, refunds will not be issued except where required by applicable law. If a player is banned, muted, blacklisted, or otherwise restricted for breaking server rules, they are not entitled to a refund.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Server Access</h2>
            <p>Blind MC does not guarantee uninterrupted access to the server. Server maintenance, updates, technical issues, or permanent closure may affect access to purchased products. Virtual items have no real-world monetary value.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Virtual Currency</h2>
            <p>Any coins, credits, points, or similar virtual currencies issued by Blind MC have no real-world value, cannot be exchanged for cash, and cannot be transferred outside the server unless explicitly allowed.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Age Requirement</h2>
            <p>You must be at least 13 years old, or have permission from a parent or guardian, to make purchases through the Blind MC store.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Pricing</h2>
            <p>Prices may change at any time without notice. Changes will not affect purchases already completed. Taxes and payment processing fees may apply depending on your location and payment method.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Limitation of Liability</h2>
            <p>Blind MC is not liable for: loss of virtual items due to server resets or updates, temporary downtime, account compromises caused by user negligence, or indirect and consequential damages resulting from use of the server or store.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Changes to These Terms</h2>
            <p>We reserve the right to modify these Terms &amp; Conditions at any time. Continued use of the store after changes have been posted constitutes acceptance of the updated Terms.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Governing Rules</h2>
            <p>All players must follow the official Blind MC server rules. Failure to do so may result in punishment, including removal of purchased benefits without refund.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

