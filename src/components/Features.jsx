import { motion } from "framer-motion";

const items = [
  {
    icon: "🛍️",
    title: "E-Commerce Ready",
    desc: "Showcase your products with a beautiful online catalog. Allow customers to browse and inquire easily.",
  },
  {
    icon: "📱",
    title: "Mobile First Design",
    desc: "Optimized for all smartphones and tablets. Your site will look perfect on any device your customers use.",
  },
  {
    icon: "💬",
    title: "Direct WhatsApp Ordering",
    desc: "Customers can order or chat directly via WhatsApp with a single click. No complex forms.",
  },
  {
    icon: "🔍",
    title: "Local SEO Optimized",
    desc: "Built to rank on Google Maps and Search so local customers can find your business first.",
  },
  { 
    icon: "⚡", 
    title: "Lightning Fast Speed", 
    desc: "Optimized performance ensures your site loads instantly, keeping visitors engaged." 
  },
  { 
    icon: "🛠️", 
    title: "Easy Maintenance", 
    desc: "Simple structure allowing for easy updates. We handle the technical side for you." 
  },
];

export default function Features() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Everything your local business needs
          </h2>
          <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
            From first impression to final order, your website is set up to guide customers smoothly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-7 bg-white rounded-2xl hover:bg-sky-50/50 backdrop-blur-sm transition-all duration-300 border border-slate-100 hover:border-brand-cyan/60 group hover:shadow-xl"
            >
              <div className="text-4xl mb-5 transition-all duration-300 filter drop-shadow-[0_0_10px_rgba(148,163,184,0.4)]">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-brand-cyan transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
