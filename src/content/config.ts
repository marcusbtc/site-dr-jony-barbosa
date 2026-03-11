import { defineCollection } from 'astro:content'
import { payloadLocalLoader } from 'astro-payload-local-loader'
import payloadConfig from '../payload/payload.config'

// Define collections using Payload CMS with SQLite
const posts = defineCollection({
  loader: payloadLocalLoader({
    payloadConfig,
    draft: false,
  }),
})

const services = defineCollection({
  loader: payloadLocalLoader({
    payloadConfig,
    draft: false,
  }),
})

export const collections = {
  posts,
  services,
}
