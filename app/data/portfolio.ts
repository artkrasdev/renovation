import { PortfolioProject } from "../types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Appartement Haussmannien",
    category: "Rénovation Complète",
    description: "Transformation complète d'un appartement haussmannien de 120m² avec préservation des éléments d'époque.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        alt: "Appartement Haussmannien - Avant",
        description: "État initial de l'appartement avant les travaux de rénovation.",
      },
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        alt: "Appartement Haussmannien - Après",
        description: "Résultat final avec parquet restauré et moulures préservées.",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        alt: "Appartement Haussmannien - Salon",
        description: "Le salon lumineux avec ses grandes fenêtres d'origine.",
      },
    ],
  },
  {
    id: "2",
    title: "Cuisine Moderne",
    category: "Cuisine",
    description: "Rénovation d'une cuisine avec îlot central et finitions haut de gamme.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        alt: "Cuisine Moderne - Avant",
        description: "Cuisine d'origine nécessitant une rénovation complète.",
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop",
        alt: "Cuisine Moderne - Après",
        description: "Nouvelle cuisine équipée avec îlot central et électroménagers intégrés.",
      },
    ],
  },
  {
    id: "3",
    title: "Salle de Bain Spa",
    category: "Salle de Bain",
    description: "Création d'une salle de bain style spa avec douche à l'italienne.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
        alt: "Salle de Bain Spa - Avant",
        description: "Salle de bain datée avant transformation.",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        alt: "Salle de Bain Spa - Après",
        description: "Salle de bain moderne avec douche à l'italienne et ambiance spa.",
      },
    ],
  },
  {
    id: "4",
    title: "Loft Industriel",
    category: "Rénovation Complète",
    description: "Conversion d'un ancien atelier en loft moderne avec espaces ouverts.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
        alt: "Loft Industriel - Avant",
        description: "Ancien atelier industriel avant la conversion.",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        alt: "Loft Industriel - Après",
        description: "Loft moderne avec structure métallique apparente et espaces ouverts.",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
        alt: "Loft Industriel - Détails",
        description: "Détails des finitions industrielles chic.",
      },
    ],
  },
  {
    id: "5",
    title: "Studio Optimisé",
    category: "Aménagement",
    description: "Optimisation d'un studio de 25m² avec rangements intégrés.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1560185008-b033106af5c3?w=800&h=600&fit=crop",
        alt: "Studio Optimisé - Avant",
        description: "Petit studio mal agencé avant optimisation.",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        alt: "Studio Optimisé - Après",
        description: "Studio réaménagé avec rangements intégrés et espace optimisé.",
      },
    ],
  },
  {
    id: "6",
    title: "Salon Contemporain",
    category: "Design d'Intérieur",
    description: "Refonte complète d'un salon avec création d'une ambiance contemporaine.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&h=600&fit=crop",
        alt: "Salon Contemporain - Avant",
        description: "Salon classique avant la refonte design.",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
        alt: "Salon Contemporain - Après",
        description: "Salon contemporain avec mobilier design et éclairage soigné.",
      },
    ],
  },
];
