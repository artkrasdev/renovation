import {defineField, defineType} from 'sanity'

// Icônes Lucide disponibles utilisées dans le composant ServiceCard
const availableIcons = [
  {title: 'Toque de Chef (Cuisine)', value: 'ChefHat'},
  {title: 'Baignoire (Salle de Bain)', value: 'Bath'},
  {title: 'Grille (Revêtement de Sol)', value: 'Grid3x3'},
  {title: 'Palette (Design)', value: 'Palette'},
  {title: 'Pinceau (Peinture)', value: 'Paintbrush'},
  {title: 'Clé (Plomberie/Électricité)', value: 'Wrench'},
]

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      placeholder: 'Rénovation de Cuisine',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      placeholder: 'Transformez votre cuisine en un espace moderne et fonctionnel. De la conception des plans à l’installation des équipements, nous créons la cuisine de vos rêves.',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'string',
      description: 'Sélectionnez une icône pour ce service. L\'icône sera affichée sur la carte du service.',
      options: {
        list: availableIcons,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Caractéristiques',
      type: 'array',
      of: [{
        type: 'string',
        validation: (Rule) => Rule.max(60),
      }],
      description: 'Liste des caractéristiques clés ou avantages pour ce service',
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
      title: 'title',
      icon: 'icon',
    },
    prepare({title, icon}) {
      const iconLabel = availableIcons.find(i => i.value === icon)?.title || icon
      return {
        title: title,
        subtitle: icon ? `Icône: ${iconLabel}` : '',
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
