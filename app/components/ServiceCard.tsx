"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  Bath,
  Grid3x3,
  Palette,
  Paintbrush,
  Wrench,
  LucideIcon,
} from "lucide-react";
import { staggerItem } from "@/app/lib/animations";
import { Service } from "@/app/types";

const iconMap: Record<string, LucideIcon> = {
  ChefHat,
  Bath,
  Grid3x3,
  Palette,
  Paintbrush,
  Wrench,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Palette;

  return (
    <motion.div
      className="group bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
      variants={staggerItem}
      style={{ padding: "30px" }}
    >
      {/* Icon */}
      <div className="w-14 h-14 mb-6 rounded-lg bg-[var(--color-off-white)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-300">
        <IconComponent
          className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3
        className="text-xl font-semibold mb-3 text-[var(--color-text-primary)]"
        style={{ fontFamily: "var(--font-poppins)", padding: "10px 0" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed" style={{ padding: "10px 0" }}>
        {service.description}
      </p>

      {/* Features list */}
      {service.features && service.features.length > 0 && (
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

