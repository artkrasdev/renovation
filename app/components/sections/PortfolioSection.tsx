"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import PortfolioCard from "@/app/components/PortfolioCard";
import { sectionTitles } from "@/app/data/content";
import { staggerContainer, staggerItem } from "@/app/lib/animations";

// Portfolio projects with Unsplash images
const portfolioProjects = [
  {
    id: "1",
    title: "Appartement Haussmannien",
    category: "Rénovation Complète",
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Cuisine Moderne",
    category: "Rénovation Cuisine",
    beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Salle de Bain Spa",
    category: "Rénovation Salle de Bain",
    beforeImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Salon Contemporain",
    category: "Design d'Intérieur",
    beforeImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Suite Parentale",
    category: "Rénovation Chambre",
    beforeImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Loft Industriel",
    category: "Rénovation Complète",
    beforeImage: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
];

const categories = [
  "Tous",
  "Rénovation Complète",
  "Rénovation Cuisine",
  "Rénovation Salle de Bain",
  "Design d'Intérieur",
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(true);

  const filteredProjects =
    selectedCategory === "Tous"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setShowAfter(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
    setShowAfter(true);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
    setShowAfter(true);
  };

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom mx-auto px-4 md:px-6">
        <SectionHeading
          title={sectionTitles.portfolio.title}
          subtitle={sectionTitles.portfolio.subtitle}
        />

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[var(--color-dark)] text-white"
                  : "bg-[var(--color-off-white)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          key={selectedCategory}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PortfolioCard
                  title={project.title}
                  category={project.category}
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  onViewClick={() => openLightbox(index)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-[var(--color-primary)] transition-colors z-10"
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 p-2 text-white hover:text-[var(--color-primary)] transition-colors z-10"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 p-2 text-white hover:text-[var(--color-primary)] transition-colors z-10"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image container */}
            <motion.div
              className="relative max-w-5xl w-full aspect-[4/3]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <Image
                src={
                  showAfter
                    ? filteredProjects[currentImageIndex].afterImage
                    : filteredProjects[currentImageIndex].beforeImage
                }
                alt={filteredProjects[currentImageIndex].title}
                fill
                className="object-contain rounded-lg"
              />

              {/* Info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 md:p-6 rounded-b-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {filteredProjects[currentImageIndex].title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {filteredProjects[currentImageIndex].category}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAfter(!showAfter)}
                    className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-full text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors shrink-0"
                  >
                    {showAfter ? "Voir Avant" : "Voir Après"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

