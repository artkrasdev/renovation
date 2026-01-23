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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text',
      validation: (Rule) => Rule.required(),
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
