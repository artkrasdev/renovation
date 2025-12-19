"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, ArrowLeftRight } from "lucide-react";
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
  const [showAfter, setShowAfter] = useState(true);

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden shadow-lg bg-white"
      variants={staggerItem}
      whileHover={{ y: -4 }}
    >
      {/* Image container with aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Before image */}
        <Image
          src={beforeImage}
          alt={`${title} - Avant`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            showAfter ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* After image */}
        <Image
          src={afterImage}
          alt={`${title} - Après`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {/* Toggle before/after button */}
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
            aria-label={showAfter ? "Voir avant" : "Voir après"}
          >
            <ArrowLeftRight className="w-5 h-5 text-[var(--color-dark)]" />
          </button>

          {/* View full button */}
          {onViewClick && (
            <button
              onClick={onViewClick}
              className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Voir en grand"
            >
              <Eye className="w-5 h-5 text-[var(--color-dark)]" />
            </button>
          )}
        </div>

        {/* Before/After label */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 text-[var(--color-dark)] text-sm font-medium rounded-full">
            {showAfter ? "Après" : "Avant"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wider">
          {category}
        </span>
        <h3
          className="mt-1 text-lg font-semibold text-[var(--color-text-primary)]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

