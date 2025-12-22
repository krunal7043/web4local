import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
            Ready to start your website?
          </h2>
          <div className="bg-white border border-slate-100 p-8 rounded-3xl relative overflow-hidden shadow-lg shadow-sky-100/40">
             {/* Background accents */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-[50px] rounded-full pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-pink/10 blur-[50px] rounded-full pointer-events-none"></div>

            <p className="text-lg md:text-xl text-slate-600 mb-8 relative z-10 font-normal">
              Call or WhatsApp to discuss your website in simple language.{" "}
              <span className="text-brand-cyan font-semibold">No hard technical words, just clear steps.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a
                href="https://wa.me/917043754778?text=Hello%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:bg-[#128C7E] transition shadow-md shadow-emerald-500/40"
              >
                <span className="text-2xl">💬</span> Chat on WhatsApp
              </a>
              <a
                href="tel:+917043754778"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-black transition shadow-md"
              >
                <span className="text-2xl">📞</span> Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
