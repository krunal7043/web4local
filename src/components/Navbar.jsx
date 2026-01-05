import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      // Hide on scroll down, show on scroll up
      if (currentY > 80 && currentY > lastY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b transform ${
        scrolled || open
          ? "bg-white/90 backdrop-blur-xl border-slate-200 shadow-md shadow-slate-200/60"
          : "bg-transparent border-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="web4local"
            className="h-10 w-auto object-contain bg-white/10 rounded-lg p-1"
          />
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-brand-dark tracking-wide group-hover:text-brand-cyan transition-colors duration-300">
                web4local
              </span>
              <span className="text-xs font-semibold text-brand-cyan tracking-wide">
                by Krunal
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">
              Websites for local business
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-brand-dark">
          {["Services", "Projects", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-brand-cyan transition-colors duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-brand-dark text-2xl focus:outline-none w-10 h-10 flex items-center justify-center bg-white/70 rounded-lg border border-slate-200 shadow-sm hover:bg-white hover:border-brand-cyan hover:text-brand-cyan transition-colors duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? "✕" : "☰"}
          </motion.span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-[73px] bg-white/95 backdrop-blur-xl border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-6 pb-32">
              {["Services", "Projects", "Pricing", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold text-brand-dark hover:text-brand-cyan transition-colors duration-300 tracking-wide"
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                href="tel:+917043754778"
                className="mt-8 px-8 py-3 bg-brand-cyan text-brand-dark rounded-full font-bold text-lg hover:bg-brand-cyan/80 hover:brightness-95 hover:shadow-xl hover:shadow-brand-cyan/40 hover:scale-105 transition-all duration-300 ease-out shadow-lg shadow-brand-cyan/20"
              >
                📞 Call Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
