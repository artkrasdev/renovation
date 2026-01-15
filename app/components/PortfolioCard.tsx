"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerItem } from "@/app/lib/animations";

interface PortfolioCardProps {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  onViewClick?: () => void;
}

export default function PortfolioCard({
  title,
  category,
  beforeImage,
  afterImage,
  onViewClick,
}: PortfolioCardProps) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden shadow-lg bg-white p- border border-gray-500/10"
      variants={staggerItem}
    >
      {/* Image container with aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        {/* Before image (default) */}
        <Image
          src={beforeImage}
          alt={`${title} - Avant`}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        
        {/* After image (on hover) */}
        <Image
          src={afterImage}
          alt={`${title} - Après`}
          fill
          className="object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
        />

        {/* Gradient overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content positioned absolutely at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
            {category}
          </span>
          <h3
            className="mt-1 text-lg font-semibold !text-white"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

