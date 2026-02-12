import Link from "next/link";
import type { Metadata } from "next";
import { companyInfo } from "@/app/data/content";
import {
  ArrowLeft,
  UserCheck,
  Database,
  Target,
  Landmark,
  Clock,
  Users,
  Shield,
  Lock,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Smailji Multi-Services",
  description:
    "Politique de confidentialité et de protection des données personnelles de Smailji Multi-Services.",
};

const sections = [
  {
    icon: UserCheck,
    title: "Responsable du traitement",
    content: (
      <>
        <p>
          Le responsable du traitement des données personnelles collectées sur ce
          site est :
        </p>
        <ul className="mt-3 space-y-2">
          <li>
            <strong>{companyInfo.name}</strong>
          </li>
          <li>
            {companyInfo.address.street}, {companyInfo.address.postalCode}{" "}
            {companyInfo.address.city}
          </li>
          <li>Email : {companyInfo.email}</li>
          <li>Téléphone : {companyInfo.phone}</li>
        </ul>
      </>
    ),
  },
  {
    icon: Database,
    title: "Données collectées",
    content: (
      <>
        <p>
          Nous collectons les données personnelles suivantes lorsque vous
          utilisez notre formulaire de contact :
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Message et détails de votre projet</li>
        </ul>
        <p className="mt-3">
          Ces données sont collectées uniquement lorsque vous les saisissez
          volontairement dans notre formulaire de contact.
        </p>
      </>
    ),
  },
  {
    icon: Target,
    title: "Finalités du traitement",
    content: (
      <>
        <p>
          Vos données personnelles sont traitées pour les finalités suivantes :
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>Répondre à vos demandes de contact et de devis</li>
          <li>Assurer le suivi de votre projet de rénovation</li>
          <li>
            Vous envoyer des informations relatives à nos services, avec votre
            consentement
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: Landmark,
    title: "Base légale du traitement",
    content: (
      <>
        <p>Le traitement de vos données repose sur :</p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>
            <strong>Votre consentement</strong> lors de l&apos;envoi du
            formulaire de contact
          </li>
          <li>
            <strong>L&apos;intérêt légitime</strong> de {companyInfo.name} pour
            répondre à vos demandes
          </li>
          <li>
            <strong>L&apos;exécution d&apos;un contrat</strong> dans le cadre de
            la réalisation de travaux
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: Clock,
    title: "Durée de conservation",
    content: (
      <p>
        Vos données personnelles sont conservées pour une durée maximale de 3
        ans à compter de votre dernier contact avec {companyInfo.name}, sauf
        obligation légale de conservation plus longue.
      </p>
    ),
  },
  {
    icon: Users,
    title: "Destinataires des données",
    content: (
      <>
        <p>
          Vos données personnelles sont destinées uniquement à{" "}
          {companyInfo.name}. Elles ne sont ni vendues, ni louées, ni transmises
          à des tiers à des fins commerciales.
        </p>
        <p className="mt-3">
          Elles peuvent être transmises à nos sous-traitants techniques
          (hébergement, outils de gestion) dans le cadre strict de leurs
          missions.
        </p>
      </>
    ),
  },
  {
    icon: Shield,
    title: "Vos droits (RGPD)",
    content: (
      <>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD)
          et à la loi Informatique et Libertés, vous disposez des droits
          suivants :
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>
            <strong>Droit d&apos;accès :</strong> obtenir la confirmation que
            vos données sont traitées et en obtenir une copie
          </li>
          <li>
            <strong>Droit de rectification :</strong> demander la correction de
            vos données inexactes ou incomplètes
          </li>
          <li>
            <strong>Droit à l&apos;effacement :</strong> demander la suppression
            de vos données personnelles
          </li>
          <li>
            <strong>Droit à la limitation :</strong> demander la limitation du
            traitement de vos données
          </li>
          <li>
            <strong>Droit à la portabilité :</strong> recevoir vos données dans
            un format structuré et couramment utilisé
          </li>
          <li>
            <strong>Droit d&apos;opposition :</strong> vous opposer au
            traitement de vos données à tout moment
          </li>
        </ul>
        <div className="mt-4 p-4 bg-[var(--color-off-white)] rounded-xl">
          <p className="text-sm">
            Pour exercer ces droits, contactez-nous à :{" "}
            <strong>{companyInfo.email}</strong>
          </p>
          <p className="text-sm mt-2">
            Vous pouvez également introduire une réclamation auprès de la CNIL
            (Commission Nationale de l&apos;Informatique et des Libertés) :{" "}
            <strong>www.cnil.fr</strong>
          </p>
        </div>
      </>
    ),
  },
  {
    icon: Lock,
    title: "Sécurité des données",
    content: (
      <p>
        {companyInfo.name} met en œuvre les mesures techniques et
        organisationnelles appropriées pour garantir la sécurité et la
        confidentialité de vos données personnelles, et les protéger contre tout
        accès non autorisé, perte, altération ou divulgation.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    title: "Modification de la politique",
    content: (
      <p>
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Toute modification sera publiée sur cette
        page avec une date de mise à jour.
      </p>
    ),
  },
];

export default function PolitiqueConfidentialite() {
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
              Protection des données
            </span>
            <div className="h-px bg-[var(--color-primary)] w-12" />
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white!"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Politique de Confidentialité
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl">
            Découvrez comment {companyInfo.name} protège vos données personnelles
            conformément au RGPD.
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
