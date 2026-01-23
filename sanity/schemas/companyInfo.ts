import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companyInfo',
  title: 'Informations de l\'Entreprise',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de l\'Entreprise',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Rue',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'city',
          title: 'Ville',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'postalCode',
          title: 'Code Postal',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'country',
          title: 'Pays',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
      description: 'L\'adresse sera utilisée pour afficher l\'emplacement sur la carte',
    }),
    defineField({
      name: 'businessHours',
      title: 'Horaires d\'Ouverture',
      type: 'string',
      description: 'Ex: "Lun - Sam: 8h - 19h"',
    }),
    defineField({
      name: 'siret',
      title: 'SIRET',
      type: 'string',
      description: 'Numéro d\'immatriculation de l\'entreprise',
    }),
    defineField({
      name: 'rcs',
      title: 'RCS',
      type: 'string',
      description: 'Registre du commerce',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      phone: 'phone',
    },
    prepare({name, phone}) {
      return {
        title: name,
        subtitle: phone,
      }
    },
  },
})
