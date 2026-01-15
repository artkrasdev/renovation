import { CompanyInfo, NavItem, StatItem, ProcessStep } from "../types";

export const companyInfo: CompanyInfo = {
  name: "Smailji Multi-Services",
  tagline: "Experts en Rénovation d'Appartements",
  description:
    "Transformez votre espace de vie avec notre expertise en rénovation. De la conception à la réalisation, nous donnons vie à vos projets avec précision et passion.",
  phone: "+33 1 23 45 67 89",
  email: "contact@smailji-multiservices.fr",
  address: {
    street: "25 rue Joseph Pupier",
    city: "Saint-Étienne",
    postalCode: "42100",
    country: "France",
  },
  coordinates: {
    lat: 45.4397,
    lng: 4.3872,
  },
  socialMedia: {
    facebook: "https://facebook.com/smailji-multiservices",
    instagram: "https://instagram.com/smailji_multiservices",
    linkedin: "https://linkedin.com/company/smailji-multiservices",
  },
  siret: "123 456 789 00012",
  rcs: "Paris",
};

export const navigation: NavItem[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "Rénovation d'Appartements",
  subtitle:
    "Entrez dans un monde où l'art de la rénovation est méticuleusement façonné pour allier élégance intemporelle et innovation moderne. Transformez vos espaces de vie en havres de luxe et de satisfaction.",
  ctaText: "Démarrer un Projet",
  ctaSecondary: "Découvrir nos Services",
};

export const stats: StatItem[] = [
  { value: 900, suffix: "+", label: "Projets Réalisés" },
  { value: 850, suffix: "+", label: "Clients Satisfaits" },
  { value: 300, suffix: "+", label: "Styles Uniques" },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation Initiale",
    description:
      "Embarquez dans votre aventure de rénovation. Partagez votre vision et nous créerons ensemble le projet de vos rêves.",
    icon: "ClipboardList",
  },
  {
    id: 2,
    title: "Conception & Planification",
    description:
      "Collaborez étroitement avec notre équipe pour affiner chaque détail. Nous transformons vos idées en plans concrets.",
    icon: "PenTool",
  },
  {
    id: 3,
    title: "Réalisation & Finition",
    description:
      "Voyez votre vision prendre vie. Nous exécutons le projet avec précision pour créer votre espace transformé.",
    icon: "CheckCircle",
  },
];

export const sectionTitles = {
  services: {
    title: "Nos Services",
    subtitle:
      "Des solutions complètes pour transformer votre appartement selon vos envies",
  },
  portfolio: {
    title: "Nos Réalisations",
    subtitle:
      "Découvrez nos projets de rénovation et laissez-vous inspirer par notre savoir-faire",
  },
  process: {
    title: "Votre Rénovation en Trois Étapes Simples",
    subtitle:
      "Un processus simple et transparent pour concrétiser votre projet",
  },
  team: {
    title: "Notre Équipe",
    subtitle:
      "Des professionnels passionnés à votre service pour des résultats exceptionnels",
  },
  testimonials: {
    title: "Ce Que Nos Clients Disent de Nous",
    subtitle:
      "Découvrez les témoignages de nos clients satisfaits",
  },
  faq: {
    title: "Questions Fréquentes",
    subtitle:
      "Trouvez les réponses aux questions les plus courantes sur nos services",
  },
  contact: {
    title: "Contactez-Nous",
    subtitle:
      "Prêt à transformer votre appartement ? Contactez-nous dès aujourd'hui",
  },
  newsletter: {
    title: "Abonnez-vous à Notre Newsletter",
    subtitle:
      "Recevez nos conseils de rénovation, inspirations et offres spéciales directement dans votre boîte mail",
  },
};

export const footerContent = {
  description:
    "Votre partenaire de confiance pour la rénovation d'appartements à Paris et en Île-de-France. Qualité, professionnalisme et satisfaction garantis.",
  quickLinks: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Équipe", href: "#equipe" },
    { label: "Contact", href: "#contact" },
  ],
  serviceLinks: [
    { label: "Rénovation Cuisine", href: "#services" },
    { label: "Rénovation Salle de Bain", href: "#services" },
    { label: "Revêtement de Sol", href: "#services" },
    { label: "Design d'Intérieur", href: "#services" },
  ],
  copyright: `© ${new Date().getFullYear()} Smailji Multi-Services. Tous droits réservés.`,
};

