"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import ContactForm from "@/app/components/ContactForm";
import { sectionTitles, companyInfo } from "@/app/data/content";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/app/lib/animations";

// Dynamic import for the map to avoid SSR issues with Leaflet
const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Chargement de la carte...</div>
    </div>
  ),
});

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${companyInfo.address.street}, ${companyInfo.address.postalCode} ${companyInfo.address.city}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${companyInfo.address.street}, ${companyInfo.address.postalCode} ${companyInfo.address.city}`
    )}`,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Sam: 8h - 19h",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[var(--color-off-white)]">
      <div className="container-custom mx-auto px-4 md:px-6">
        <SectionHeading
          title={sectionTitles.contact.title}
          subtitle={sectionTitles.contact.subtitle}
        />

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
          {/* Contact form - Order 3 on mobile, Order 1 on desktop */}
          <motion.div
            className="order-3 lg:order-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center md:text-left flex flex-col justify-center items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <h3
              className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 w-full"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Demande de Devis Gratuit
            </h3>
            <ContactForm />
          </motion.div>

          {/* Contact info & Map container - Order 1-2 on mobile, Order 2 on desktop */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            {/* Contact cards - Order 1 on mobile */}
            <motion.div
              className="order-1"
            >
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <motion.div
                      className={`p-3 md:p-5 bg-white rounded-xl shadow-md transition-shadow h-full ${
                        info.href ? "cursor-pointer" : ""
                      }`}
                      variants={staggerItem}
                    >
                      <div className="flex items-start gap-2 md:gap-4" style={{ height: "fit-content" }}>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-[var(--color-primary)]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs md:text-sm text-[var(--color-text-muted)] mb-1">
                            {info.label}
                          </p>
                          <p className="text-sm md:text-base font-medium text-[var(--color-text-primary)]">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );

                  return info.href ? (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="h-full">{content}</div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Map - Order 2 on mobile */}
            <motion.div
              className="order-2 h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
              variants={fadeInUp}
            >
              <Map />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

