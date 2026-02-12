import Link from "next/link";
import type { Metadata } from "next";
import { companyInfo } from "@/app/data/content";
import {
  ArrowLeft,
  Cookie,
  ListChecks,
  ShieldCheck,
  Settings,
  Globe,
  Mail,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gestion des Cookies | Smailji Multi-Services",
  description:
    "Politique de gestion des cookies du site Smailji Multi-Services.",
};

const sections = [
  {
    icon: Cookie,
    title: "Qu'est-ce qu'un cookie ?",
    content: (
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal
        (ordinateur, tablette, smartphone) lors de votre visite sur un site
        internet. Il permet au site de mémoriser des informations relatives à
        votre navigation (pages consultées, date et heure de la visite, etc.).
      </p>
    ),
  },
  {
    icon: ListChecks,
    title: "Cookies utilisés sur ce site",
    content: (
      <>
        <h3 className="font-medium text-[var(--color-text-primary)] mb-2">
          Cookies strictement nécessaires
        </h3>
        <p>
          Ces cookies sont indispensables au fonctionnement du site. Ils vous
          permettent de naviguer sur le site et d&apos;utiliser ses
          fonctionnalités de base. Ils ne peuvent pas être désactivés.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-off-white)]">
                <th className="text-left py-3 px-4 font-medium text-[var(--color-text-primary)]">
                  Cookie
                </th>
                <th className="text-left py-3 px-4 font-medium text-[var(--color-text-primary)]">
                  Finalité
                </th>
                <th className="text-left py-3 px-4 font-medium text-[var(--color-text-primary)]">
                  Durée
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="py-3 px-4">Cookies de session</td>
                <td className="py-3 px-4">
                  Navigation et fonctionnement du site
                </td>
                <td className="py-3 px-4">Session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Votre consentement",
    content: (
      <>
        <p>
          Conformément à la réglementation européenne (RGPD) et aux
          recommandations de la CNIL, nous recueillons votre consentement avant
          de déposer des cookies non essentiels sur votre terminal.
        </p>
        <p className="mt-3">
          Vous pouvez à tout moment modifier vos préférences en matière de
          cookies. Le refus des cookies analytiques n&apos;affectera pas votre
          navigation sur le site.
        </p>
      </>
    ),
  },
  {
    icon: Settings,
    title: "Gérer vos cookies via le navigateur",
    content: (
      <>
        <p>
          Vous pouvez également configurer votre navigateur pour accepter ou
          refuser les cookies :
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              name: "Chrome",
              path: "Paramètres > Confidentialité et sécurité > Cookies",
            },
            {
              name: "Firefox",
              path: "Paramètres > Vie privée et sécurité > Cookies",
            },
            {
              name: "Safari",
              path: "Préférences > Confidentialité > Données de sites",
            },
            {
              name: "Edge",
              path: "Paramètres > Confidentialité et services > Cookies",
            },
          ].map((browser) => (
            <div
              key={browser.name}
              className="p-3 bg-[var(--color-off-white)] rounded-xl"
            >
              <p className="font-medium text-[var(--color-text-primary)] text-sm">
                {browser.name}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                {browser.path}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          La suppression des cookies peut affecter votre expérience de navigation
          et certaines fonctionnalités du site peuvent ne plus être disponibles.
        </p>
      </>
    ),
  },
  {
    icon: Globe,
    title: "Cookies tiers",
    content: (
      <p>
        Ce site peut contenir des liens vers des services tiers (réseaux
        sociaux, cartographie). Ces services peuvent déposer leurs propres
        cookies. Nous n&apos;avons aucun contrôle sur ces cookies et vous
        invitons à consulter les politiques de cookies de ces services.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "Contact",
    content: (
      <>
        <p>
          Pour toute question relative à notre politique de cookies, vous pouvez
          nous contacter :
        </p>
        <ul className="mt-3 space-y-2">
          <li>
            <strong>Email :</strong> {companyInfo.email}
          </li>
          <li>
            <strong>Téléphone :</strong> {companyInfo.phone}
          </li>
          <li>
            <strong>Adresse :</strong> {companyInfo.address.street},{" "}
            {companyInfo.address.postalCode} {companyInfo.address.city}
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: Info,
    title: "En savoir plus",
    content: (
      <p>
        Pour en savoir plus sur les cookies et vos droits, vous pouvez consulter
        le site de la CNIL : <strong>www.cnil.fr</strong>
      </p>
    ),
  },
];

export default function Cookies() {
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
              Vie privée
            </span>
            <div className="h-px bg-[var(--color-primary)] w-12" />
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white!"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Gestion des Cookies
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl">
            Informations sur l&apos;utilisation des cookies sur le site{" "}
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
