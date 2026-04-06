import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionTitle',
  title: 'Titre de Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionKey',
      title: 'Clé de Section',
      type: 'string',
      description: 'Identifiant unique de la section (ex: "services", "portfolio", "process")',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Services', value: 'services'},
          {title: 'Portfolio', value: 'portfolio'},
          {title: 'Processus', value: 'process'},
          {title: 'Équipe', value: 'team'},
          {title: 'Témoignages', value: 'testimonials'},
          {title: 'FAQ', value: 'faq'},
          {title: 'Contact', value: 'contact'},
          {title: 'Newsletter', value: 'newsletter'},
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      placeholder: 'Votre Rénovation en Trois Étapes Simples',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text',
      placeholder: 'Des solutions complètes pour transformer votre appartement selon vos envies',
      validation: (Rule) => Rule.required().max(160),
    }),
  ],
  preview: {
    select: {
      sectionKey: 'sectionKey',
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({sectionKey, title, subtitle}) {
      return {
        title: `${sectionKey}: ${title}`,
        subtitle: subtitle,
      }
    },
  },
})
