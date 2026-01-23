import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {projectId, dataset} from './sanity.env'

export default defineConfig({
  name: 'renovation',
  title: 'CMS Rénovation',
  projectId,
  dataset,
  basePath: '/dashboard',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
