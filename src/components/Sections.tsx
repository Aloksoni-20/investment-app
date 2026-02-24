import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import speakerNosipho from "@/assets/speaker-nosipho.jpg";
import nosipikeLogo from "@/assets/nosipike-logo.png";
import BecomePartnerForm from "@/components/BecomePartnerForm";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const SectionHeading = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="text-center mb-16">
    <p className="text-primary font-body text-xs uppercase tracking-[0.3em] mb-3">{subtitle}</p>
    <h2 className="font-heading text-3xl md:text-5xl font-bold">{title}</h2>
    <div className="w-16 h-px bg-primary mx-auto mt-6" />
  </div>
);

const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      id={id}
      className={className}
    >
      {children}
    </motion.section>
  );
};

/* ─── About ─── */
export const AboutSection = () => (
  <AnimatedSection className="section-padding max-w-5xl mx-auto">
    <motion.div variants={fadeUp}>
      <SectionHeading subtitle="About" title="The Summit" />
    </motion.div>
    <motion.p variants={fadeUp} className="text-muted-foreground text-center text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
      InvestConnect | Pitch & Partner is a high-level business and investment event designed to
      connect ambitious startups with active investors, corporate leaders, and strategic partners.
      Founders pitch scalable ideas, investors discover promising ventures, and all participants
      engage in meaningful collaboration.
    </motion.p>
    <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {["Startup Pitch Presentations", "Investor–Founder Networking", "Strategic Partnerships", "Funding & Growth"].map((item) => (
        <motion.div
          key={item}
          variants={fadeUp}
          className="bg-card-gradient gold-border rounded-sm p-6 text-center"
        >
          <p className="text-foreground font-body text-sm font-medium">{item}</p>
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

/* ─── Why Attend ─── */
const reasons = [
  "Pitch your startup to real investors",
  "Discover high-potential business opportunities",
  "Connect with decision-makers and industry leaders",
  "Build partnerships that accelerate growth",
  "Gain insights into funding and scaling strategies",
];

export const WhyAttendSection = () => (
  <AnimatedSection className="section-padding bg-card-gradient">
    <div className="max-w-5xl mx-auto">
      <motion.div variants={fadeUp}>
        <SectionHeading subtitle="Why Attend" title="Unlock Opportunities" />
      </motion.div>
      <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex items-start gap-4 bg-secondary/50 rounded-sm p-6 gold-border"
          >
            <span className="text-primary font-heading text-2xl font-bold mt-[-2px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-foreground font-body text-sm leading-relaxed">{reason}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

/* ─── Where & When ─── */
const editions = [
  {
    city: "Johannesburg",
    date: "Wednesday, 13th May, 2026",
    venue: "Four Seasons Hotel The Westcliff",
    format: "Full-day investment and networking summit",
  },
  {
    city: "Cape Town",
    date: "Wednesday, 20th May, 2026",
    venue: "Century City, Cape Town",
    format: "Full-day investment and networking summit",
  },
];

export const EditionsSection = () => (
  <AnimatedSection className="section-padding max-w-5xl mx-auto">
    <motion.div variants={fadeUp}>
      <SectionHeading subtitle="Editions" title="Where & When" />
    </motion.div>
    <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8">
      {editions.map((ed) => (
        <motion.div
          key={ed.city}
          variants={fadeUp}
          className="bg-card-gradient gold-border rounded-sm p-8 md:p-10 gold-glow"
        >
          <p className="text-primary font-body text-xs uppercase tracking-[0.25em] mb-2">{ed.city} Edition</p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">{ed.city}</h3>
          <div className="space-y-3 text-muted-foreground font-body text-sm">
            <p><span className="text-foreground font-medium">Date:</span> {ed.date}</p>
            <p><span className="text-foreground font-medium">Venue:</span> {ed.venue}</p>
            <p><span className="text-foreground font-medium">Format:</span> {ed.format}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

/* ─── Agenda ─── */
const agenda = [
  "Registration & Welcome Networking",
  "Opening Remarks",
  "Startup Pitch Sessions",
  "Investor & Founder Networking",
  "Panel Discussions & Insights",
  "Partnership Matchmaking",
  "Closing Networking Reception",
];

export const AgendaSection = () => (
  <AnimatedSection className="section-padding bg-card-gradient">
    <div className="max-w-3xl mx-auto">
      <motion.div variants={fadeUp}>
        <SectionHeading subtitle="Program" title="Event Agenda" />
      </motion.div>
      <motion.div variants={stagger} className="space-y-0">
        {agenda.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex items-center gap-6 py-5 border-b border-border/50"
          >
            <span className="text-primary/60 font-body text-xs w-8 flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <p className="text-foreground font-body text-sm md:text-base">{item}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

/* ─── Who Should Attend ─── */
const audiences = [
  "Startup Founders & Entrepreneurs",
  "Angel Investors & Venture Capitalists",
  "Corporate Executives & Business Leaders",
  "Innovation Hubs & Accelerators",
  "Sponsors & Strategic Partners",
];

export const AudienceSection = () => (
  <AnimatedSection className="section-padding max-w-5xl mx-auto">
    <motion.div variants={fadeUp}>
      <SectionHeading subtitle="Attendees" title="Who Should Attend" />
    </motion.div>
    <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4">
      {audiences.map((a) => (
        <motion.div
          key={a}
          variants={fadeUp}
          className="gold-border rounded-full px-6 py-3 font-body text-sm text-foreground hover:bg-primary/10 transition-colors"
        >
          {a}
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

/* ─── Meet Our Speakers and Investors ─── */
export const SpeakersSection = () => (
  <AnimatedSection className="section-padding bg-card-gradient" id="speakers">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div variants={fadeUp}>
        <SectionHeading subtitle="Lineup" title="Meet Our Speakers and Investors" />
      </motion.div>
      <motion.p variants={fadeUp} className="text-muted-foreground font-body text-base leading-relaxed mb-12">
        Industry leaders, investors, and successful founders will share insights,
        experiences, and opportunities.
      </motion.p>
      <motion.div variants={fadeUp} className="inline-block">
        <div className="gold-border rounded-sm p-8 gold-glow max-w-xs mx-auto">
          <img
            src={speakerNosipho}
            alt="Nosipho Pike"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover gold-border"
          />
          <h3 className="font-heading text-xl font-bold mb-1">Nosipho PIKE</h3>
          <p className="text-primary font-body text-sm">CEO of NOSIPIKE</p>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

/* ─── Our Partners & Sponsors ─── */
export const PartnersSection = () => (
  <AnimatedSection className="section-padding max-w-4xl mx-auto text-center" id="partners">
    <motion.div variants={fadeUp}>
      <SectionHeading subtitle="Partners" title="Our Partners & Sponsors" />
    </motion.div>
    <motion.p variants={fadeUp} className="text-muted-foreground font-body text-base leading-relaxed mb-10">
      We collaborate with trusted organizations, investors, and ecosystem partners
      to deliver a high-impact event.
    </motion.p>
    <motion.div variants={fadeUp} className="flex justify-center mb-12">
      <div className="gold-border rounded-sm p-6 inline-block">
        <img src={nosipikeLogo} alt="NOSIPIKE" className="h-20 mx-auto" />
      </div>
    </motion.div>
    <motion.div variants={fadeUp}>
      <BecomePartnerForm>
        <button className="inline-block bg-gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
          Become a Partner
        </button>
      </BecomePartnerForm>
    </motion.div>
  </AnimatedSection>
);
