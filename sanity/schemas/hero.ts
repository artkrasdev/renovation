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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Texte du Bouton Principal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Texte du Bouton Secondaire',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      description: 'Texte affiché dans le badge (ex: "Experts en Rénovation depuis 2009")',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
