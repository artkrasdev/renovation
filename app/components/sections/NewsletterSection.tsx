"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";
import { sectionTitles } from "@/app/data/content";
import { fadeInUp, staggerContainer, staggerItem } from "@/app/lib/animations";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Veuillez entrer votre email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Format d'email invalide");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail("");

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]">
      <div className="container-custom mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Icon */}
          <motion.div
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            variants={staggerItem}
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
            variants={staggerItem}
          >
            {sectionTitles.newsletter.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-white/95 text-lg mb-8 max-w-xl mx-auto"
            variants={staggerItem}
          >
            {sectionTitles.newsletter.subtitle}
          </motion.p>

          {/* Form */}
          <motion.div variants={staggerItem}>
            {isSubscribed ? (
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-4 inline-flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-6 h-6 text-white" />
                <span className="text-white font-medium">
                  Merci ! Vous êtes maintenant inscrit à notre newsletter.
                </span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="Entrez votre adresse email"
                    className={`w-full px-6 py-4 rounded-full bg-white/95 text-[var(--color-text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white ${
                      error ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  {error && (
                    <p className="absolute -bottom-6 left-4 text-sm text-red-200">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-[var(--color-dark)] text-white font-medium rounded-full hover:bg-[var(--color-dark-light)] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Inscription...</span>
                  ) : (
                    <>
                      S&apos;abonner
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Privacy note */}
          <motion.p
            className="text-white/90 text-sm mt-6"
            variants={staggerItem}
          >
            Pas de spam. Désabonnement possible à tout moment.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

