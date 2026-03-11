import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { Posts } from './collections/Posts'
import { Services } from './collections/Services'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const getEnv = (key: string, fallback: string) => {
  // Try import.meta.env first (Astro), then process.env (Node.js)
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env[key] || fallback
  }
  return process.env[key] || fallback
}

export default buildConfig({
  secret: getEnv('PAYLOAD_SECRET', 'seu-secret-seguro-aqui-desenvolvimento'),
  serverURL: getEnv('PAYLOAD_PUBLIC_SERVER_URL', 'http://localhost:3001'),
  admin: {
    disable: true, // API local apenas, sem UI administrativa
  },
  collections: [
    Users,
    Posts,
    Services,
  ],
  editor: lexicalEditor({}),
  db: sqliteAdapter({
    client: {
      url: 'file:payload.db',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
