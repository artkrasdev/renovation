"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import FAQItem from "@/app/components/FAQItem";
import { sectionTitles } from "@/app/data/content";
import { faqItems } from "@/app/data/faq";
import { fadeInUp, staggerContainer, staggerItem } from "@/app/lib/animations";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQ into two columns
  const midpoint = Math.ceil(faqItems.length / 2);
  const leftColumn = faqItems.slice(0, midpoint);
  const rightColumn = faqItems.slice(midpoint);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
        <SectionHeading
          title={sectionTitles.faq.title}
          subtitle={sectionTitles.faq.subtitle}
        />

        <motion.div
          className="grid lg:grid-cols-2 gap-8 my-[30px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Left column */}
          <motion.div
            className="bg-[var(--color-off-white)] rounded-2xl p-6 md:p-8"
            variants={staggerItem}
          >
            {leftColumn.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            className="bg-[var(--color-off-white)] rounded-2xl p-6 md:p-8"
            variants={staggerItem}
          >
            {rightColumn.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openIndex === index + midpoint}
                onToggle={() => handleToggle(index + midpoint)}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-12 flex flex-col gap-2 items-center justify-center w-fit text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[var(--color-text-secondary)] mb-4">
            Vous avez d&apos;autres questions ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-[15px] py-[10px] bg-[var(--color-primary)] text-white font-medium rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
            style={{ color: "var(--color-white)" }}
          >
            Contactez-Nous
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

