// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
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
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})


// import sharp from 'sharp'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { buildConfig } from 'payload'
// export default buildConfig({
//   // If you'd like to use Rich Text, pass your editor here
//   editor: lexicalEditor(),
//   // Define and configure your collections in this array
//   collections: [],
//   // Your Payload secret - should be a complex and secure string, unguessable
//   secret: process.env.PAYLOAD_SECRET || '',
//   // Whichever Database Adapter you're using should go here
//   // Mongoose is shown as an example, but you can also use Postgres
//   db: mongooseAdapter({
//     url: process.env.DATABASE_URI || '',
//   }),
//   // If you want to resize images, crop, set focal point, etc.
//   // make sure to install it and pass it to the config.
//   // This is optional - if you don't need to do these things,
//   // you don't need it!
//   sharp,
// })