"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { fadeInUp } from "@/app/lib/animations";

const EMAILJS_SERVICE_ID = "service_u0r63uj";
const EMAILJS_TEMPLATE_ID = "template_yzp3m4n";
const EMAILJS_PUBLIC_KEY = "Jnb-BGYejg0fUONS8";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string; phone?: string; projectType?: string;
  message?: string;
}

const projectTypes = [
  "Rénovation Complète",
  "Rénovation Cuisine",
  "Rénovation Salle de Bain",
  "Revêtement de Sol",
  "Design d'Intérieur",
  "Peinture & Finitions",
  "Plomberie & Électricité",
  "Autre",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Format de téléphone invalide";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Veuillez sélectionner un type de projet";
    }

    // Message is optional, but if provided, validate minimum length
    if (formData.message.trim() && formData.message.trim().length < 20) {
      newErrors.message = "Le message doit contenir au moins 20 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message || "Aucun message fourni",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ message: "Erreur lors de l'envoi. Veuillez réessayer." });
      return;
    }

    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ marginTop: "25px", minHeight: "450px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(4, 47, 255, 0.1)" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-10 h-10" style={{ color: "var(--color-primary)" }} />
        </motion.div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "var(--font-poppins)", color: "var(--color-text-primary)" }}
        >
          Message Envoyé !
        </h3>
        <p
          className="text-base max-w-sm"
          style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}
        >
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5 w-full"
      style={{ display: "flex", flexDirection: "column", gap: "22px", marginTop: "25px" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {/* Name & Email row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div variants={fadeInUp} className="w-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--color-text-primary)] mb-2 text-left"
          >
            Nom Complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:ring-[var(--color-primary)]"
            } focus:outline-none focus:ring-2 transition-colors`}
            placeholder="Jean Dupont"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 text-left">{errors.name}</p>
          )}
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--color-text-primary)] mb-2 text-left"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:ring-[var(--color-primary)]"
            } focus:outline-none focus:ring-2 transition-colors`}
            placeholder="jean.dupont@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 text-left">{errors.email}</p>
          )}
        </motion.div>
      </div>

      {/* Phone & Project type row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div variants={fadeInUp} className="w-full">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--color-text-primary)] mb-2 text-left"
          >
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:ring-[var(--color-primary)]"
            } focus:outline-none focus:ring-2 transition-colors`}
            placeholder="06 12 34 56 78"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 text-left">{errors.phone}</p>
          )}
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full">
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-[var(--color-text-primary)] mb-2 text-left"
          >
            Type de Projet *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.projectType
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:ring-[var(--color-primary)]"
            } focus:outline-none focus:ring-2 transition-colors bg-white`}
          >
            <option value="">Sélectionnez un type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-1 text-sm text-red-500 text-left">{errors.projectType}</p>
          )}
        </motion.div>
      </div>

      {/* Message */}
      <motion.div variants={fadeInUp} className="w-full">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-2 text-left"
        >
          Décrivez Votre Projet
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:ring-[var(--color-primary)]"
          } focus:outline-none focus:ring-2 transition-colors resize-none`}
          placeholder="Décrivez votre projet de rénovation, vos attentes, votre budget approximatif..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500 text-left">{errors.message}</p>
        )}
      </motion.div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        variants={fadeInUp}
        className="w-full px-8 py-4 bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-dark-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        style={{ gap: "17px", borderRadius: "13px" }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le Message
            <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}

