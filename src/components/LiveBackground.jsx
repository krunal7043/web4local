import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LiveBackground() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-[#f6f7fb] via-[#eef6ff] to-[#f9fafb]">
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-0 left-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] opacity-50 transform -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-0 left-0 w-80 h-80 bg-brand-purple/16 rounded-full blur-[110px] opacity-45 transform -translate-x-1/2 -translate-y-1/2 translate-x-24 translate-y-16"
      />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-0 left-0 w-72 h-72 bg-brand-pink/14 rounded-full blur-[110px] opacity-40 transform -translate-x-1/2 -translate-y-1/2 -translate-x-10 -translate-y-10"
      />
    </div>
  );
}
