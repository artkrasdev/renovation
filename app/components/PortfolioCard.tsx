"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerItem } from "@/app/lib/animations";

interface PortfolioCardProps {
  title: string;
  category: string;
  coverImage: string;
  imageCount: number;
  onClick: () => void;
}

export default function PortfolioCard({
  title,
  category,
  coverImage,
  imageCount,
  onClick,
}: PortfolioCardProps) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-500/10 cursor-pointer"
      variants={staggerItem}
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image container with aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        {/* Cover image */}
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Image count badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{imageCount}</span>
        </div>

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

        {/* Hover overlay with "View" indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <span className="px-4 py-2 rounded-full bg-white/90 text-gray-900 font-medium text-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Voir le projet
          </span>
        </div>
      </div>
    </motion.div>
  );
}

