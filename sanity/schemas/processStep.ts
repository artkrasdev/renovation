import {defineField, defineType} from 'sanity'

// Icônes Lucide disponibles pour les étapes du processus
const availableIcons = [
  {title: 'Liste de Presse-papiers (Consultation)', value: 'ClipboardList'},
  {title: 'Stylo (Planification)', value: 'PenTool'},
  {title: 'Cercle de Validation (Finalisation)', value: 'CheckCircle'},
]

export default defineType({
  name: 'processStep',
  title: 'Étape du Processus',
  type: 'document',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Numéro d\'Étape',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'string',
      description: 'Sélectionnez une icône pour cette étape du processus.',
      options: {
        list: availableIcons,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      stepNumber: 'stepNumber',
      title: 'title',
      icon: 'icon',
    },
    prepare({stepNumber, title, icon}) {
      const iconLabel = availableIcons.find(i => i.value === icon)?.title || icon
      return {
        title: `Étape ${stepNumber}: ${title}`,
        subtitle: icon ? `Icône: ${iconLabel}` : '',
      }
    },
  },
  orderings: [
    {
      title: 'Numéro d\'Étape',
      name: 'stepNumberAsc',
      by: [{field: 'stepNumber', direction: 'asc'}],
    },
  ],
})
