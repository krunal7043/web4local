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
        <div className="text-center md:text-left">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-slate-700">web4local</span>. Tailored websites for
            local businesses.
          </p>
          <p className="text-xs mt-1 text-slate-400">
            Developed with ❤️ by <span className="font-medium text-slate-600">Krunal</span> - Full Stack Developer
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">
            Based in India – working with shops worldwide
          </span>
          <a
            href="#contact"
            className="px-3 py-1 rounded-full border border-slate-200 text-slate-700 hover:border-brand-cyan hover:text-brand-cyan hover:bg-brand-cyan/10 transition-colors duration-300"
          >
            Start your project
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
