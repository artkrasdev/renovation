import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stat',
  title: 'Statistique',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Valeur',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'suffix',
      title: 'Suffixe',
      type: 'string',
      placeholder: '+',
      description: 'Texte après le nombre (ex: "+", "%")',
      initialValue: '+',
      validation: (Rule) => Rule.max(5),
    }),
    defineField({
      name: 'label',
      title: 'Libellé',
      type: 'string',
      placeholder: 'Projets Réalisés',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: 'order',
      title: 'Ordre',
      type: 'number',
      description: 'Ordre d\'affichage (les nombres plus petits apparaissent en premier)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      value: 'value',
      suffix: 'suffix',
      label: 'label',
    },
    prepare({value, suffix, label}) {
      return {
        title: `${value}${suffix || ''} ${label}`,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
