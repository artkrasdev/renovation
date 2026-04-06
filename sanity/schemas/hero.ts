import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Section Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      placeholder: "Rénovation d'Appartements",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text',
      placeholder: "Entrez dans un monde où l'art de la rénovation est méticuleusement façonné pour allier élégance intemporelle et innovation moderne.",
      validation: (Rule) => Rule.required().max(280),
    }),
    defineField({
      name: 'ctaText',
      title: 'Texte du Bouton Principal',
      type: 'string',
      placeholder: 'Démarrer un Projet',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Texte du Bouton Secondaire',
      type: 'string',
      placeholder: 'Découvrir nos Services',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryImage',
      title: 'Image Secondaire',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'badgeText',
      title: 'Texte du Badge',
      type: 'string',
      placeholder: 'Experts en Rénovation depuis 2009',
      description: 'Texte affiché dans le badge (ex: "Experts en Rénovation depuis 2009")',
      validation: (Rule) => Rule.max(60),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
