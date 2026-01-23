import { getServices, getSectionTitles } from "@/app/lib/sanity/queries";
import ServicesSection from "./ServicesSection";
import { sectionTitles as fallbackSectionTitles } from "@/app/data/content";
import { services as fallbackServices } from "@/app/data/services";

export default async function ServicesSectionWrapper() {
  let sectionTitle, services;
  
  try {
    const [titlesData, servicesData] = await Promise.all([
      getSectionTitles(),
      getServices(),
    ]);
    
    sectionTitle = titlesData?.services || fallbackSectionTitles.services;
    services = servicesData && servicesData.length > 0 ? servicesData : fallbackServices.map(s => ({
      _id: s.id,
      title: s.title,
      description: s.description,
      icon: s.icon,
      features: s.features,
    }));
  } catch (error) {
    console.error("Error fetching services:", error);
    sectionTitle = fallbackSectionTitles.services;
    services = fallbackServices.map(s => ({
      _id: s.id,
      title: s.title,
      description: s.description,
      icon: s.icon,
      features: s.features,
    }));
  }

  return <ServicesSection sectionTitle={sectionTitle} services={services} />;
}
