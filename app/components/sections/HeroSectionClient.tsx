"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/app/components/ui/Button";
import StatCard from "@/app/components/StatCard";
import { fadeInUp, fadeIn, slideInLeft, slideInRight, staggerContainer } from "@/app/lib/animations";
import { urlFor } from "@/app/lib/sanity";

interface HeroSectionClientProps {
  heroContent: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaSecondary: string;
    badgeText?: string;
    mainImage?: any;
    secondaryImage?: any;
  };
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
  }>;
}

export default function HeroSectionClient({ heroContent, stats }: HeroSectionClientProps) {
  const mainImageUrl = heroContent.mainImage 
    ? urlFor(heroContent.mainImage).width(800).height(600).url() 
    : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop";
  
  const secondaryImageUrl = heroContent.secondaryImage 
    ? urlFor(heroContent.secondaryImage).width(400).height(300).url() 
    : "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop";

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-off-white)] via-white to-[var(--color-cream)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />

      <div className="container-custom mx-auto relative z-10 max-md:px-[1rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="text-center lg:text-left max-md:flex max-md:items-center max-md:justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            {heroContent.badgeText && (
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full mb-6"
                variants={fadeInUp}
                style={{ paddingTop: "5px", paddingBottom: "5px", paddingLeft: "15px", paddingRight: "15px", width: "fit-content" }}
              >
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[var(--color-primary)]">
                  {heroContent.badgeText}
                </span>
              </motion.div>
            )}

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
              variants={fadeInUp}
            >
              <span className="text-[var(--color-text-primary)]">
                {heroContent.title.split(" ")[0]}
              </span>
              <br />
              <span className="text-[var(--color-primary)]">
                {heroContent.title.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={fadeInUp}
            >
              <Button
                href="#contact"
                variant="primary"
                size="md"
              >
                {heroContent.ctaText}
              </Button>
              <Button
                href="#services"
                variant="outline"
                size="md"
              >
                {heroContent.ctaSecondary}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="!mt-4 !pt-8 border-t border-gray-200"
              variants={staggerContainer}
            >
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={stat.label} stat={stat} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Images */}
          <motion.div
            className="relative hidden lg:block"
            initial="hidden"
            animate="visible"
          >
            {/* Main image */}
            <motion.div
              className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
              variants={slideInRight}
            >
              <Image
                src={mainImageUrl}
                alt="Rénovation d'intérieur moderne"
                width={600}
                height={450}
                className="object-cover"
                style={{ width: "100%" }}
                priority
              />
            </motion.div>

            {/* Secondary image - overlapping */}
            <motion.div
              className="absolute -bottom-20 left-10 z-30 w-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <Image
                src={secondaryImageUrl}
                alt="Cuisine rénovée"
                width={256}
                height={192}
                className="object-cover"
              />
            </motion.div>

            {/* Decorative badge */}
            <motion.div
              className="absolute top-8 -right-4 z-30 bg-white rounded-2xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              style={{ width: "fit-content", left: "325px", top: "-35px", padding: "15px" }}
            >
              <div className="flex items-center gap-3 w-fit justify-center ps-[10px] pe-[23px]">
                <Image
                  src="/maps.png"
                  alt="Google Maps"
                  width={24}
                  height={24}
                  className="w-8 h-8 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-base font-bold text-[var(--color-text-primary)]">4.4</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">/5</span>
                    <div className="flex items-center gap-0.5 ml-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          className="w-3 h-3 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                      {/* Half star */}
                      <div className="relative w-3 h-3">
                        <Star className="absolute w-3 h-3 text-gray-300" />
                        <div className="absolute overflow-hidden w-[50%] h-full">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Google Maps
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
          <span className="text-sm">Découvrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-text-muted)] flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[var(--color-primary)] rounded-full animate-bounce" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
