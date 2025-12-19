"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { fadeInUp } from "@/app/lib/animations";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
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

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 20) {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

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
        className="bg-green-50 rounded-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3
          className="text-xl font-bold text-green-800 mb-2"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Message Envoyé !
        </h3>
        <p className="text-green-700">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5"
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
      <div className="grid md:grid-cols-2 gap-5">
        <motion.div variants={fadeInUp}>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
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
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
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
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </motion.div>
      </div>

      {/* Phone & Project type row */}
      <div className="grid md:grid-cols-2 gap-5">
        <motion.div variants={fadeInUp}>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
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
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
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
            <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>
          )}
        </motion.div>
      </div>

      {/* Message */}
      <motion.div variants={fadeInUp}>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
        >
          Décrivez Votre Projet *
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
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </motion.div>

      {/* Submit button */}
      <motion.div variants={fadeInUp}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-4 bg-[var(--color-dark)] text-white font-medium rounded-full hover:bg-[var(--color-dark-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
        </button>
      </motion.div>

      {/* Privacy note */}
      <motion.p
        className="text-xs text-[var(--color-text-muted)]"
        variants={fadeInUp}
      >
        En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
        Vos données ne seront jamais partagées avec des tiers.
      </motion.p>
    </motion.form>
  );
}

