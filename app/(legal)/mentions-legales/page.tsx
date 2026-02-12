import Link from "next/link";
import type { Metadata } from "next";
import { companyInfo } from "@/app/data/content";
import { ArrowLeft, Building2, User, Server, ShieldCheck, AlertTriangle, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | Smailji Multi-Services",
  description:
    "Mentions légales de Smailji Multi-Services, entreprise de rénovation d'appartements.",
};

const sections = [
  {
    icon: Building2,
    title: "Éditeur du site",
    content: (
      <>
        <p>
          Le site <strong>smailji-multiservices.fr</strong> est édité par :
        </p>
        <ul className="mt-3 space-y-2">
          <li>
            <strong>Raison sociale :</strong> {companyInfo.name}
          </li>
          <li>
            <strong>Adresse :</strong> {companyInfo.address.street},{" "}
            {companyInfo.address.postalCode} {companyInfo.address.city},{" "}
            {companyInfo.address.country}
          </li>
          <li>
            <strong>Téléphone :</strong> {companyInfo.phone}
          </li>
          <li>
            <strong>Email :</strong> {companyInfo.email}
          </li>
          <li>
            <strong>SIRET :</strong> {companyInfo.siret}
          </li>
          <li>
            <strong>RCS :</strong> {companyInfo.rcs}
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: User,
    title: "Directeur de la publication",
    content: (
      <p>
        Le directeur de la publication est le représentant légal de{" "}
        {companyInfo.name}.
      </p>
    ),
  },
  {
    icon: Server,
    title: "Hébergement",
    content: (
      <>
        <p>Le site est hébergé par :</p>
        <ul className="mt-3 space-y-2">
          <li>
            <strong>Hébergeur :</strong> Vercel Inc.
          </li>
          <li>
            <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA
            91723, États-Unis
          </li>
          <li>
            <strong>Site web :</strong> vercel.com
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Propriété intellectuelle",
    content: (
      <>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, graphismes,
          logo, icônes, sons, logiciels, etc.) est la propriété exclusive de{" "}
          {companyInfo.name} ou de ses partenaires et est protégé par les lois
          françaises et internationales relatives à la propriété intellectuelle.
        </p>
        <p className="mt-3">
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite sauf autorisation écrite
          préalable de {companyInfo.name}.
        </p>
      </>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Limitation de responsabilité",
    content: (
      <>
        <p>
          {companyInfo.name} ne pourra être tenu responsable des dommages
          directs ou indirects causés au matériel de l&apos;utilisateur lors de
          l&apos;accès au site, résultant de l&apos;utilisation d&apos;un
          matériel ne répondant pas aux spécifications techniques requises ou de
          l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
        </p>
        <p className="mt-3">
          {companyInfo.name} ne pourra également être tenu responsable des
          dommages indirects consécutifs à l&apos;utilisation du site.
        </p>
      </>
    ),
  },
  {
    icon: Scale,
    title: "Droit applicable",
    content: (
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas
        de litige, les tribunaux français seront seuls compétents.
      </p>
    ),
  },
];

export default function MentionsLegales() {
  return (
    <main>
      {/* Hero banner */}
      <section className="gradient-dark text-white py-16 md:py-24">
        <div className="container-custom mx-auto px-[1.5rem] md:px-[2.5rem]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-[var(--color-primary)] w-12" />
            <span className="text-sm font-medium text-[var(--color-primary-light)] uppercase tracking-wider">
              Informations légales
            </span>
            <div className="h-px bg-[var(--color-primary)] w-12" />
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white!"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Mentions Légales
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl">
            Informations légales relatives au site et à la société{" "}
            {companyInfo.name}.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[var(--color-off-white)]">
        <div className="container-custom mx-auto px-[1.5rem] md:px-[2.5rem]">
          <div className="grid gap-6 md:gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div className="min-w-0">
                      <h2
                        className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] mb-3"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {section.title}
                      </h2>
                      <div className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
