"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo, footerContent } from "@/app/data/content";
import { fadeInUp, staggerContainer, staggerItem } from "@/app/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="container-custom mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Company info */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.jpg"
                alt="Smailji Multi-Services"
                width={150}
                height={75}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {footerContent.description}
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={staggerItem}>
            <h4
              className="text-lg font-semibold mb-6 text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4
              className="text-lg font-semibold mb-6 text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Nos Services
            </h4>
            <ul className="space-y-3">
              {footerContent.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={staggerItem}>
            <h4
              className="text-lg font-semibold mb-6 text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-[var(--color-primary-light)] transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-[var(--color-primary-light)] transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  {companyInfo.address.street}
                  <br />
                  {companyInfo.address.postalCode} {companyInfo.address.city}
                  <br />
                  {companyInfo.address.country}
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} {companyInfo.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[var(--color-primary-light)] transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-[var(--color-primary-light)] transition-colors">
              Politique de Confidentialité
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

