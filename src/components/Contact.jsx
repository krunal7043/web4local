import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time error clearing
    if (errors[name]) {
      let isValid = false;
      switch (name) {
        case 'name':
          isValid = value.trim() !== '';
          break;
        case 'email':
          isValid = /\S+@\S+\.\S+/.test(value);
          break;
        case 'phone':
          isValid = /^\d{10}$/.test(value);
          break;
        case 'service':
          isValid = value !== '';
          break;
        default:
          break;
      }
      if (isValid) {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must contain only digits";
    } else if (formData.phone.length < 10) {
      tempErrors.phone = "Phone number is too short (must be 10 digits)";
    } else if (formData.phone.length > 10) {
      tempErrors.phone = "Phone number is too long (must be 10 digits)";
    }
    if (!formData.service) tempErrors.service = "Please select a service";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // EmailJS configuration - replace with your actual IDs
    const serviceID = 'service_8o8btoq';
    const templateID = 'template_rr9ajkm';
    const publicKey = 'vmv0ehjKQucLyTB-H';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setErrors({});
        setTimeout(() => setShowSuccess(false), 5000);
      }, (error) => {
        console.error('Email send failed:', error.text);
        setIsSubmitting(false);
        alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
      });
  };

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
              Fill out the form below to request our services.{" "}
              <span className="text-brand-cyan font-semibold">We'll get back to you with a quote and plan.</span>
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                  >
                    <option value="">Select Service</option>
                    <option value="website">Website Development</option>
                    <option value="ecommerce">E-commerce Site</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="4"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`lg:w-[40%] sm:w-full px-8 py-4 bg-brand-cyan text-white rounded-full font-semibold text-lg transition-all duration-300 ease-out shadow-md ${
                  isSubmitting
                    ? 'animate-pulse opacity-75 cursor-not-allowed'
                    : 'hover:bg-brand-cyan/80 hover:brightness-95 hover:shadow-xl hover:shadow-brand-cyan/50 hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending message...' : 'Submit Request'}
              </button>
            </form>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10 mt-8">
              <a
                href="https://wa.me/917043754778?text=Hello%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:bg-[#20b85a] hover:brightness-95 hover:shadow-xl hover:shadow-emerald-500/60 hover:scale-105 transition-all duration-300 ease-out shadow-md shadow-emerald-500/40"
              >
                <span className="text-2xl">💬</span> Chat on WhatsApp
              </a>
              <a
                href="tel:+917043754778"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 hover:brightness-110 hover:shadow-xl hover:shadow-slate-800/50 hover:scale-105 transition-all duration-300 ease-out shadow-md"
              >
                <span className="text-2xl">📞</span> Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Message Box */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-green-200 rounded-lg p-6 shadow-lg flex items-center gap-4"
          >
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-green-500 text-3xl"
            >
              ✓
            </motion.span>
            <p className="text-lg font-semibold text-gray-800">Message sent successfully!</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
