"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import ServiceCard from "@/app/components/ServiceCard";
import { staggerContainer } from "@/app/lib/animations";

interface ServicesSectionProps {
  sectionTitle: {
    title: string;
    subtitle: string;
  };
  services: Array<{
    _id: string;
    title: string;
    description: string;
    icon: string;
    features?: string[];
    image?: any;
  }>;
}

export default function ServicesSection({ sectionTitle, services }: ServicesSectionProps) {
  return (
    <section id="services" className="section-padding bg-[var(--color-off-white)]">
      <div className="container-custom mx-auto px-4 md:px-6">
        <SectionHeading
          title={sectionTitle.title}
          subtitle={sectionTitle.subtitle}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          {services.map((service) => (
            <ServiceCard key={service._id} service={{
              id: service._id,
              title: service.title,
              description: service.description,
              icon: service.icon,
              features: service.features,
            }} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

