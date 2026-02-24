import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import RegistrationForm from "@/components/RegistrationForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="InvestConnect Summit" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-hero-gradient opacity-60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            May 2026 · Johannesburg & Cape Town
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
        >
          Invest<span className="text-gradient-gold">Connect</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-xl md:text-2xl text-muted-foreground mb-4 italic"
        >
          Pitch & Partner
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Where Startups Meet Investors — A premier networking summit bringing together
          visionary entrepreneurs and leading investors to pitch, connect, and grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <RegistrationForm>
            <button className="inline-block bg-gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Register Now
            </button>
          </RegistrationForm>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
