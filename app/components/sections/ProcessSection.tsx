"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ClipboardList, PenTool, CheckCircle, LucideIcon } from "lucide-react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/app/lib/animations";
import { urlFor } from "@/app/lib/sanity";

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  PenTool,
  CheckCircle,
};

interface ProcessSectionProps {
  sectionTitle: {
    title: string;
    subtitle: string;
  };
  processSteps: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
  }>;
  processImage?: {
    image: any;
    alt?: string;
  };
}

export default function ProcessSection({ sectionTitle, processSteps, processImage }: ProcessSectionProps) {
  const imageUrl = processImage?.image 
    ? urlFor(processImage.image).width(600).height(750).url() 
    : "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop";
  return (
    <section className="section-padding bg-[var(--color-off-white)]">
      <div className="container-custom mx-auto px-4 md:px-6">
        <SectionHeading
          title={sectionTitle.title}
          subtitle={sectionTitle.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ marginTop: "30px", marginBottom: "30px" }}>
          {/* Steps */}
          <motion.div
            className="space-y-6 flex flex-wrap gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || ClipboardList;
              
              return (
                <motion.div
                  key={step.id}
                  className="flex gap-6 items-start"
                  variants={staggerItem}
                >
                  {/* Step number/icon */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {/* Connector line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-full bg-[var(--color-primary)]/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-[var(--color-primary)]">
                        Étape {step.id}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              variants={slideInRight}
            >
              <Image
                src={imageUrl}
                alt={processImage?.alt || "Processus de rénovation"}
                width={600}
                height={750}
                className="object-cover w-full"
                style={{ height: "469px" }}
              />
              
              {/* Overlay card */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 md:gap-4 !py-[10px] !px-[15px]">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-bold text-[var(--color-text-primary)] text-sm md:text-base"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Satisfaction Garantie
                    </p>
                    <p className="text-xs md:text-sm text-[var(--color-text-secondary)]">
                      98% de nos clients nous recommandent
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -z-10 -top-8 -right-8 w-full h-full bg-[var(--color-primary)]/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

