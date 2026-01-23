import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/app/data/content";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Gestion des cookies", href: "/cookies" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-gray-100">
      {/* Main Footer Content */}
      <div className="container-custom py-12 px-[1.5rem] md:px-[2.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-5">
            <a href="#accueil" aria-label="Retour à l'accueil">
              <Image
                src="/logo.png"
                alt={`${companyInfo.name} logo`}
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de rénovation
              en région parisienne.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white! font-semibold text-lg">Informations</h3>
            <nav className="flex flex-col gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-lg" style={{ color: "var(--color-white)" }}>Contact</h3>
            <div className="flex flex-col gap-4 text-sm" style={{ color: "var(--color-white)" }}>
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {companyInfo.email}
              </a>
              <p className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {companyInfo.address.street}
                  <br />
                  {companyInfo.address.postalCode} {companyInfo.address.city}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-gray-500)]" style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)" }}>
        <div className="container-custom py-4 px-[1.5rem] md:px-[2.5rem]" style={{ color: "var(--color-gray-500)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
            <p>
              © {currentYear} {companyInfo.name} — Tous droits réservés
            </p>
            <p>
              SIRET : {companyInfo.siret} — RCS {companyInfo.rcs}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;