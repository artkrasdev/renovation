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
      placeholder: 'Smailji Multi-Services',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      placeholder: '+33 7 64 17 78 40',
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      placeholder: 'contact@smailji-multiservices.fr',
      validation: (Rule) => Rule.required().email().max(80),
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
          placeholder: '25 rue Joseph Pupier',
          validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
          name: 'city',
          title: 'Ville',
          type: 'string',
          placeholder: 'Saint-Étienne',
          validation: (Rule) => Rule.required().max(80),
        }),
        defineField({
          name: 'postalCode',
          title: 'Code Postal',
          type: 'string',
          placeholder: '42100',
          validation: (Rule) => Rule.required().max(10),
        }),
        defineField({
          name: 'country',
          title: 'Pays',
          type: 'string',
          placeholder: 'France',
          validation: (Rule) => Rule.required().max(60),
        }),
      ],
      validation: (Rule) => Rule.required(),
      description: 'L\'adresse sera utilisée pour afficher l\'emplacement sur la carte',
    }),
    defineField({
      name: 'businessHours',
      title: 'Horaires d\'Ouverture',
      type: 'string',
      placeholder: 'Lun - Sam: 8h - 19h',
      description: 'Ex: "Lun - Sam: 8h - 19h"',
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: 'siret',
      title: 'SIRET',
      type: 'string',
      placeholder: '123 456 789 00012',
      description: 'Numéro d\'immatriculation de l\'entreprise',
      validation: (Rule) => Rule.max(20),
    }),
    defineField({
      name: 'rcs',
      title: 'RCS',
      type: 'string',
      placeholder: 'Paris',
      description: 'Registre du commerce',
      validation: (Rule) => Rule.max(80),
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
