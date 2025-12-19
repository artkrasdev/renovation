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

        <div className="grid lg:grid-cols-2 gap-12" style={{ marginTop: "30px", marginBottom: "30px" }}>
          {/* Contact form */}
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <h3
              className="text-2xl font-bold text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Demande de Devis Gratuit
            </h3>
            <ContactForm />
          </motion.div>

          {/* Contact info & Map */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            {/* Contact cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <motion.div
                    className={`p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow ${
                      info.href ? "cursor-pointer" : ""
                    }`}
                    variants={staggerItem}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-text-muted)] mb-1">
                          {info.label}
                        </p>
                        <p className="font-medium text-[var(--color-text-primary)]">
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
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </motion.div>

            {/* Map */}
            <motion.div
              className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
              variants={fadeInUp}
            >
              <Map />
            </motion.div>

            {/* Service area note */}
            <motion.div
              className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-4"
              variants={fadeInUp}
            >
              <p className="text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-primary)]">Zone d&apos;intervention :</strong>{" "}
                Nous intervenons à Paris et dans toute l&apos;Île-de-France (rayon de 30km environ).
                Le cercle sur la carte indique notre zone de service principale.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

