import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity/schemas'
import {projectId, dataset} from './sanity/sanity.env'

export default defineConfig({
  name: 'renovation',
  title: 'Smailji Multi-Services',
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
