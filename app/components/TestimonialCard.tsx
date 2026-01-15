"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { staggerItem } from "@/app/lib/animations";
import { Testimonial } from "@/app/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full flex flex-col"
      variants={staggerItem}
    >
      {/* Quote icon */}
      <div className="mb-4">
        <Quote
          className="w-10 h-10 text-[var(--color-primary)] opacity-30"
          strokeWidth={1}
          fill="currentColor"
        />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-[var(--color-text-secondary)] leading-relaxed flex-grow mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        {testimonial.image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p
            className="font-semibold text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {testimonial.name}
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            {testimonial.location}
          </p>
        </div>
      </div>

      {/* Project type badge */}
      <div className="mt-4">
        <span className="inline-block px-3 py-1 bg-[var(--color-off-white)] text-[var(--color-primary)] text-xs font-medium rounded-full">
          {testimonial.projectType}
        </span>
      </div>
    </motion.div>
  );
}

