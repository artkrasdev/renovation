"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import TeamMemberCard from "@/app/components/TeamMemberCard";
import { sectionTitles } from "@/app/data/content";
import { teamMembers } from "@/app/data/team";
import { staggerContainer } from "@/app/lib/animations";

export default function TeamSection() {
  return (
    <section id="equipe" className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-6">
        <SectionHeading
          title={sectionTitles.team.title}
          subtitle={sectionTitles.team.subtitle}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>

        {/* Team stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-[var(--color-off-white)] rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          {[
            { value: "15+", label: "Années d'Expérience" },
            { value: "25+", label: "Professionnels Qualifiés" },
            { value: "100%", label: "Certifiés RGE" },
            { value: "24/7", label: "Support Client" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

