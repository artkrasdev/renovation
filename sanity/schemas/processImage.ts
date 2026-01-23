import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'processImage',
  title: 'Image de la Section Processus',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texte Alternatif',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt',
    },
  },
})
