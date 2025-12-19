import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import PortfolioSection from "@/app/components/sections/PortfolioSection";
import ProcessSection from "@/app/components/sections/ProcessSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import FAQSection from "@/app/components/sections/FAQSection";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
