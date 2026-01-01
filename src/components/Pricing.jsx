import { motion } from "framer-motion";

const freebies = [
  "✅ 1 Year Free Domain (.com / .in)",
  "✅ 1 Year Free Hosting (Online 24/7)",
  "✅ Mobile Friendly Design",
  "✅ WhatsApp Chat Button",
  "✅ 6 Months Free Support",
  "✅ Google Map Integration",
  "✅ SEO Friendly Structure",
  "✅ Social Media Integration",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Simple & Transparent Pricing
          </h2>
          <p className="text-brand-cyan text-lg font-medium tracking-wide uppercase">
            One clear price for your local business
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl hover:shadow-sky-100 transition-all duration-300 max-w-3xl mx-auto relative overflow-hidden hover:border-brand-cyan/50"
        >
          {/* Shine effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Complete Website Package
              </h3>
              <div className="flex flex-col items-center md:items-start gap-2 mb-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl text-slate-400 line-through">₹9,999</span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                    Save ₹2,000
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-brand-cyan drop-shadow-sm">
                    ₹7,999
                  </span>
                  <span className="text-slate-500 text-lg">all-in</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-8 font-normal">
                You get the full package for ₹9,999 domain, hosting, mobile-first design, WhatsApp/chat, maps, SEO-friendly setup,
                and social links. Final tweaks depend on pages/features you request.
              </p>
              <a
                href="https://wa.me/917043754778?text=Hello%2C%20I%20want%20to%20get%20started%20with%20the%20website%20package%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 text-center rounded-xl font-semibold text-base md:text-lg bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-md shadow-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/60 hover:brightness-110 hover:-translate-y-0.5 transition-transform transition-shadow"
              >
                Get Started on WhatsApp
              </a>
            </div>

            <div className="h-px w-full md:w-px md:h-64 bg-gradient-to-b from-transparent via-slate-300/60 to-transparent" />

            <div className="flex-1">
              <h4 className="font-bold text-lg mb-6 text-slate-900">Included Free</h4>
              <ul className="space-y-4">
                {freebies.map((feat, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-slate-700 hover:text-brand-cyan transition-colors cursor-default"
                  >
                    <span className="text-brand-cyan drop-shadow-[0_0_5px_rgba(56,189,248,0.8)] hover:scale-110 transition-transform">✓</span>
                    <span className="font-light">{feat.replace('✅ ', '')}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-slate-500 mt-8 text-sm">
          Renewal charges for Domain & Hosting apply after 1 year
        </p>
      </div>
    </section>
  );
}
