// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Club } from './collections/Club'
import { Media } from './collections/Media'
import { Players } from './collections/Player'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


// console.log('🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️\n\n\n\n\DATABASE_URI', process.env.DATABASE_URI)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Players, Club],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
    email: resendAdapter({
    defaultFromAddress: 'info@200kph.dev',
    defaultFromName: 'Football Players',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})

