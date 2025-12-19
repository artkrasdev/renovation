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

export const metadata: Metadata = {
  title: "Smailji Multi-Services | Rénovation d'Appartements à Paris",
  description:
    "Spécialistes en rénovation d'appartements à Paris. Cuisine, salle de bain, revêtement de sol, design d'intérieur. Devis gratuit et expertise professionnelle.",
  keywords:
    "rénovation appartement, rénovation Paris, cuisine, salle de bain, design intérieur, Smailji",
  authors: [{ name: "Smailji Multi-Services" }],
  openGraph: {
    title: "Smailji Multi-Services | Rénovation d'Appartements",
    description:
      "Transformez votre appartement avec nos experts en rénovation. Services complets de A à Z.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
