"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PortfolioProject } from "@/app/types";

interface PortfolioModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({
  project,
  isOpen,
  onClose,
}: PortfolioModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !project) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) =>
          prev > 0 ? prev - 1 : project.images.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) =>
          prev < project.images.length - 1 ? prev + 1 : 0
        );
      }
    },
    [isOpen, project, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  const currentImage = project.images[currentIndex];
  const hasMultipleImages = project.images.length > 1;

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : project.images.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev < project.images.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Image container */}
            <div className="relative aspect-[16/10] bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt || project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Fermer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                    aria-label="Image précédente"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                    aria-label="Image suivante"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Thumbnail previews on top */}
              {hasMultipleImages && (
                <div className="absolute top-4 left-4 p-2 right-20 z-20 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all backdrop-blur-sm ${
                        index === currentIndex
                          ? "ring-2 ring-blue-500 ring-offset-1 scale-105"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt || `Photo ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Content positioned absolutely at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                  {project.category}
                </span>
                <h2
                  className="mt-1 text-2xl font-bold !text-white"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {project.title}
                </h2>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    className="mt-3 text-white/90"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentImage.description || project.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
