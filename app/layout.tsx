import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://smailji-multiservices.fr"),
  title: "Smailji Multi-Services | Rénovation & Multiservice à Saint-Étienne",
  description:
    "Spécialistes en rénovation d'appartements et multiservice à Saint-Étienne (42). Cuisine, salle de bain, aménagement et design d'intérieur. Devis gratuit.",
  keywords:
    "rénovation appartement Saint-Étienne, entreprise de rénovation 42, artisan multiservice Saint-Étienne, aménagement intérieur, Smailji Multi-Services",
  authors: [{ name: "Smailji Multi-Services" }],
  openGraph: {
    title: "Smailji Multi-Services | Rénovation & Multiservice à Saint-Étienne",
    description:
      "Transformez votre intérieur avec nos experts en rénovation à Saint-Étienne. Services complets de A à Z : cuisine, salle de bain, et multiservices.",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph.webp",
        width: 1200,
        height: 630,
        alt: "Smailji Multi-Services Saint-Étienne",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Smailji Multi-Services",
    "image": "https://smailji-multiservices.fr/logo.png",
    "@id": "https://smailji-multiservices.fr",
    "url": "https://smailji-multiservices.fr",
    "telephone": "+33 7 64 17 78 40",
    "email": "contact@smailji-multiservices.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "25 rue Joseph Pupier",
      "addressLocality": "Saint-Étienne",
      "postalCode": "42100",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.439695,
      "longitude": 4.387178
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        <Script
          id="local-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
