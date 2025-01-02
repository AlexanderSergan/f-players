// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
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


// console.log('🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️🏄🏼‍♂️
// 
// 
// 
// \DATABASE_URI', process.env.DATABASE_URI)

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
  db: vercelPostgresAdapter({
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
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
    // storage-adapter-placeholder
  ],
})


// const err =  {"cause":"Error: getaddrinfo ENOTFOUND f-players","status":500,"message":"fetch failed","query":"
//     query getPage($handle: String!) {
//       pageByHandle(handle: $handle) {
//         ...page
//       }
//     }
    
//     fragment page on Page {
//       ... on Page {
//         id
//         title
//         handle
//         body
//         bodySummary
//         seo {
//           ...seo
//         }
//         createdAt
//         updatedAt
//       }
//     }
    
//     fragment seo on SEO {
//       description
//       title
//     }
  
  
//   "}
