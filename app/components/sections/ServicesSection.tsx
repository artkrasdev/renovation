"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import ServiceCard from "@/app/components/ServiceCard";
import { sectionTitles } from "@/app/data/content";
import { services } from "@/app/data/services";
import { staggerContainer } from "@/app/lib/animations";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[var(--color-off-white)]">
      <div className="container-custom mx-auto px-4 md:px-6">
        <SectionHeading
          title={sectionTitles.services.title}
          subtitle={sectionTitles.services.subtitle}
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
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

