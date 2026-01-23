import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {projectId, dataset, useCdn} from '../../sanity/sanity.env'

export const client = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
