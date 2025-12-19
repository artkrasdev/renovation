"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import TestimonialCard from "@/app/components/TestimonialCard";
import { sectionTitles } from "@/app/data/content";
import { testimonials } from "@/app/data/testimonials";
import { staggerContainer } from "@/app/lib/animations";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="container-custom mx-auto px-4 md:px-6">
        <SectionHeading
          title={sectionTitles.testimonials.title}
          subtitle={sectionTitles.testimonials.subtitle}
        />

        {/* Desktop view - Grid */}
        <motion.div
          className="hidden lg:grid grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          key={currentIndex}
        >
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Mobile/Tablet view - Single card */}
        <div className="lg:hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[var(--color-primary)] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

