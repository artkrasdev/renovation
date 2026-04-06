import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {projectId, dataset} from './sanity.env'
import {frFRLocale} from '@sanity/locale-fr-fr'

export default defineConfig({
  name: 'renovation',
  title: 'CMS Rénovation',
  projectId,
  dataset,
  basePath: '/dashboard',
  plugins: [deskTool(), frFRLocale()],
  schema: {
    types: schemaTypes,
  },
})
