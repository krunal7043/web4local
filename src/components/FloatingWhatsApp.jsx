import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917043754778?text=Hello%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="fixed bottom-6 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/30 px-4 py-3 md:px-5 md:py-3 hover:bg-[#128C7E] hover:scale-105 transition-transform"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-2xl">
        💬
      </span>
      <span className="hidden sm:block text-sm font-semibold">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}


