import { Service } from "../types";

export const services: Service[] = [
  {
    id: "kitchen",
    title: "Rénovation de Cuisine",
    description:
      "Transformez votre cuisine en un espace moderne et fonctionnel. De la conception des plans à l'installation des équipements, nous créons la cuisine de vos rêves.",
    icon: "ChefHat",
    features: [
      "Conception sur mesure",
      "Installation d'électroménagers",
      "Plans de travail premium",
      "Éclairage LED intégré",
    ],
  },
  {
    id: "bathroom",
    title: "Rénovation Salle de Bain",
    description:
      "Créez un havre de paix avec une salle de bain rénovée. Plomberie, carrelage, sanitaires - nous gérons tous les aspects de votre projet.",
    icon: "Bath",
    features: [
      "Douche à l'italienne",
      "Carrelage design",
      "Sanitaires modernes",
      "Ventilation optimisée",
    ],
  },
  {
    id: "flooring",
    title: "Revêtement de Sol",
    description:
      "Donnez une nouvelle vie à vos sols avec nos solutions de revêtement. Parquet, carrelage, béton ciré - choisissez le style qui vous correspond.",
    icon: "Grid3x3",
    features: [
      "Parquet massif et stratifié",
      "Carrelage grand format",
      "Béton ciré décoratif",
      "Moquette haut de gamme",
    ],
  },
  {
    id: "interior-design",
    title: "Design d'Intérieur",
    description:
      "Bénéficiez de conseils d'experts pour optimiser l'agencement et la décoration de votre intérieur. Créons ensemble un espace qui vous ressemble.",
    icon: "Palette",
    features: [
      "Conseil en décoration",
      "Agencement optimal",
      "Choix des matériaux",
      "Plans 3D détaillés",
    ],
  },
  {
    id: "painting",
    title: "Peinture & Finitions",
    description:
      "Apportez couleur et caractère à votre intérieur. Nos peintres qualifiés assurent des finitions impeccables pour un résultat durable.",
    icon: "Paintbrush",
    features: [
      "Peinture écologique",
      "Effets décoratifs",
      "Préparation des surfaces",
      "Protection des espaces",
    ],
  },
  {
    id: "plumbing-electrical",
    title: "Plomberie & Électricité",
    description:
      "Mise aux normes et modernisation de vos installations. Nos artisans certifiés garantissent sécurité et conformité de vos équipements.",
    icon: "Wrench",
    features: [
      "Mise aux normes NF C 15-100",
      "Remplacement de canalisations",
      "Tableaux électriques",
      "Domotique et automatisation",
    ],
  },
];

export const serviceCategories = [
  { id: "all", label: "Tous les services" },
  { id: "renovation", label: "Rénovation" },
  { id: "design", label: "Design" },
  { id: "technique", label: "Technique" },
];

