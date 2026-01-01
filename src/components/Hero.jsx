import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-96 bg-linear-to-b from-white/80 via-sky-50/80 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/70 border border-sky-100 text-sky-700 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase shadow-sm hover:bg-white/90 hover:border-sky-200 hover:shadow-md transition-all cursor-default">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Local business website specialist
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Modern websites for
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan via-brand-purple to-brand-pink drop-shadow-sm">
              local shops & businesses
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Get a clean, fast website that makes your shop easy to find online.{" "}
            <span className="text-brand-cyan font-semibold">No technical skills needed</span> – I set up everything for you,
            from WhatsApp buttons to Google Maps and basic SEO.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="#pricing"
              className="px-10 py-4 bg-brand-cyan text-brand-dark rounded-full font-semibold text-base md:text-lg shadow-lg shadow-brand-cyan/30 hover:shadow-brand-cyan/50 hover:-translate-y-0.5 hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-2"
            >
              <span className="text-lg">💰</span>
              <span>View Pricing</span>
            </a>
            <a
              href="#contact"
              className="px-10 py-4 bg-white/80 text-slate-900 border border-slate-200 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:border-brand-cyan/40 hover:text-brand-dark transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              <span className="text-lg">📞</span>
              <span>Call Now</span>
            </a>
          </div>

          {/* Quick benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-600"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-lg">
                ✓
              </span>
              <span>Complete setup: domain, hosting, WhatsApp & contact</span>
            </div>
            <div className="hidden md:block h-px w-10 bg-slate-200" />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-lg">
                ⚡
              </span>
              <span>Delivered fast – usually within a few working days</span>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex flex-col items-center text-xs text-slate-500">
              <span>Scroll to see how it works</span>
              <span className="mt-3 h-9 w-px bg-linear-to-b from-slate-300 to-transparent relative overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-9 w-px bg-linear-to-b from-brand-cyan via-transparent to-transparent animate-[scrollLine_1.4s_ease-in-out_infinite]" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
