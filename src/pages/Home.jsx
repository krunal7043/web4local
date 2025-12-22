import Navbar from "../components/Navbar.jsx";
import LiveBackground from "../components/LiveBackground.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Projects from "../components/Projects.jsx";
import Pricing from "../components/Pricing.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import FloatingWhatsApp from "../components/FloatingWhatsApp.jsx";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <LiveBackground />
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
