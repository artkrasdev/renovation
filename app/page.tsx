import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import ServicesSectionWrapper from "@/app/components/sections/ServicesSectionWrapper";
import PortfolioSectionWrapper from "@/app/components/sections/PortfolioSectionWrapper";
import ProcessSectionWrapper from "@/app/components/sections/ProcessSectionWrapper";
import FAQSectionWrapper from "@/app/components/sections/FAQSectionWrapper";
import ContactSectionWrapper from "@/app/components/sections/ContactSectionWrapper";
// ReviewCarousel can be added later if needed
// import ReviewCarouselWrapper from "@/app/components/sections/ReviewCarouselWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSectionWrapper />
        <PortfolioSectionWrapper />
        <ProcessSectionWrapper />
        <FAQSectionWrapper />
        <ContactSectionWrapper />
      </main>
      <Footer />
    </>
  );
}
