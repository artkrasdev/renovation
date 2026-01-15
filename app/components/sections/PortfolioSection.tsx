"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import PortfolioCard from "@/app/components/PortfolioCard";
import { sectionTitles } from "@/app/data/content";
import { portfolioProjects } from "@/app/data/portfolio";
import { staggerContainer } from "@/app/lib/animations";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-6">
        <SectionHeading
          title={sectionTitles.portfolio.title}
          subtitle={sectionTitles.portfolio.subtitle}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          {portfolioProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              category={project.category}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
