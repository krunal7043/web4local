import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/70 text-slate-500 py-8 border-t border-slate-200 mt-8"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-slate-700">web4local</span>. Tailored websites for
          local businesses.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">
            Based in India – working with shops worldwide
          </span>
          <a
            href="#contact"
            className="px-3 py-1 rounded-full border border-slate-200 text-slate-700 hover:border-brand-cyan/60 hover:text-brand-cyan transition-colors"
          >
            Start your project
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
