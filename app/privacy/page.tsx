import Footer from "@/app/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider uppercase text-center mb-10">
            Privacy Policy
          </h1>

          <p className="text-white/40 text-sm mb-8">Last updated: June 2026</p>

          <div className="space-y-6 text-white/70 text-[15px] leading-relaxed">
            <p>Welcome to BlindMC (&quot;BlindMC&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website, game servers, online store, Discord community, or any related services (collectively, the &quot;Services&quot;).</p>
            <p>By accessing or using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Information We Collect</h2>
            <p><strong className="text-white/90">Account Information:</strong> Minecraft username, email address, Discord username and ID, account identifiers.</p>
            <p><strong className="text-white/90">Transaction Information:</strong> Purchase history, transaction details, payment status, and purchased products or services. BlindMC does not directly store credit card or banking information â€” payments are securely processed by trusted third-party payment providers.</p>
            <p><strong className="text-white/90">Technical Information:</strong> IP address, browser type and version, device information, operating system, connection logs, server activity logs.</p>
            <p><strong className="text-white/90">Usage Information:</strong> Server activity, gameplay statistics, website interactions, support requests, and community participation.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">How We Use Your Information</h2>
            <p>We use collected information to provide and maintain our Services, process purchases and donations, deliver purchased ranks and items, prevent fraud and unauthorized activity, improve server performance and user experience, respond to support requests, enforce our Terms of Service, and comply with legal obligations.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Sharing of Information</h2>
            <p>We do not sell your personal information. We may share information with third-party service providers that assist with payment processing, website hosting, cloud infrastructure, analytics, and customer support. We may also disclose information if required by law or to protect our rights, investigate fraud, respond to legal requests, or ensure community safety.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Data Retention</h2>
            <p>We retain personal information only for as long as necessary to operate our Services, fulfill purchases, resolve disputes, comply with legal obligations, and enforce our agreements. Some server logs and transaction records may be retained for security and administrative purposes.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Data Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your information against unauthorized access, loss, misuse, disclosure, and alteration. However, no internet-based service can guarantee absolute security.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Cookies</h2>
            <p>Our website may use cookies and similar technologies to remember user preferences, improve website functionality, analyze traffic and usage, and enhance user experience. You may disable cookies through your browser settings, although some features may not function properly.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Children&apos;s Privacy</h2>
            <p>BlindMC does not knowingly collect personal information from children under the age required by applicable laws without appropriate parental consent. If you believe a child has provided personal information to us, please contact us so that we may remove the information where appropriate.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights including access to your personal information, correction of inaccurate information, deletion, restriction of processing, objection to processing, data portability, and withdrawal of consent. Requests may be submitted through our support channels.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Third-Party Services</h2>
            <p>Our Services may contain links to third-party websites, platforms, or services. BlindMC is not responsible for the privacy practices or content of third-party websites. We encourage users to review the privacy policies of any external services they use.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes become effective immediately upon publication on our website. Continued use of our Services after changes are posted constitutes acceptance of the updated Privacy Policy.</p>

            <h2 className="text-xl font-black uppercase tracking-wider text-white pt-4">Contact Information</h2>
            <p><strong className="text-white/90">Support Email:</strong> blindmcsupport@gmail.com<br />
            <strong className="text-white/90">Discord:</strong>{" "}
            <a href="https://dsc.gg/blindmc" className="text-red-400 hover:text-red-300" target="_blank" rel="noopener noreferrer">dsc.gg/blindmc</a><br />
            <strong className="text-white/90">Website:</strong> blindmc.fun</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

