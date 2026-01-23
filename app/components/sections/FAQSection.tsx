"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import FAQItem from "@/app/components/FAQItem";
import { fadeInUp, staggerContainer, staggerItem } from "@/app/lib/animations";
import { FAQItem as FAQItemType } from "@/app/types";

interface FAQSectionProps {
  sectionTitle: {
    title: string;
    subtitle: string;
  };
  faqItems: FAQItemType[];
}

export default function FAQSection({ sectionTitle, faqItems }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
        <SectionHeading
          title={sectionTitle.title}
          subtitle={sectionTitle.subtitle}
        />

        {/* FAQ Items */}
        <motion.div
          className="bg-[var(--color-off-white)] rounded-2xl p-6 md:p-8"
          variants={staggerItem}
          style={{ width: "100%", marginTop: "30px", marginBottom: "30px", marginLeft: "0px", marginRight: "0px" }}
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id || `faq-${index}`}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
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

