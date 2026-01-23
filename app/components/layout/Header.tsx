"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { navigation, companyInfo } from "@/app/data/content";
import Button from "@/app/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial scroll position
    setIsScrolled(window.scrollY > 20);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle mobile menu link click
  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Handle mobile menu button click (for Button component)
  const handleMobileButtonClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[80px] flex items-center justify-center z-50 transition-all duration-300 px-[1.5rem] md:px-[2.5rem] border-b border-gray-100/75 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md"
          : "bg-transparent"
      }`} >
      <div className="container-custom header-padding">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            className="flex items-center gap-2"
            onClick={(e) => {
              // Use smooth scroll handler on mobile, let default behavior work on desktop
              if (window.innerWidth < 768) {
                handleMobileNavClick(e, "#accueil");
              }
            }}
          >
            <Image
              src="/logo.png"
              alt="Smailji Multi-Services"
              width={120}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navigation.filter((item) => item.label !== "Équipe").map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-base font-medium transition-colors hover:text-[var(--color-primary)] ${
                      isScrolled
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-primary)]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={<Phone className="w-4 h-4" />}
            >
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--color-dark)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--color-dark)]" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/70 backdrop-blur-md border-t border-gray-100 shadow-lg z-50"
          >
            <div className="container-custom mx-auto px-[1.5rem] py-6">
              <ul className="flex flex-col gap-4">
                {navigation.filter((item) => item.label !== "Équipe").map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block py-2 text-lg font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
                      onClick={(e) => handleMobileNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<Phone className="w-4 h-4" />}
                  onClick={() => handleMobileButtonClick("#contact")}
                >
                  Devis Gratuit
                </Button>

                {/* Contact info in mobile menu */}
                <div className="mt-6 flex justify-center">
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

