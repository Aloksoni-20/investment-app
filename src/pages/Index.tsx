import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import {
  AboutSection,
  WhyAttendSection,
  EditionsSection,
  AgendaSection,
  AudienceSection,
  SpeakersSection,
  PartnersSection,
} from "@/components/Sections";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <WhyAttendSection />
      <div id="events"><EditionsSection /></div>
      <div id="agenda"><AgendaSection /></div>
      <AudienceSection />
      <SpeakersSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
