import { CollectionConfig, Field } from 'payload';

export const MyJoinField: Field = {
  name: 'relatedPlayers',
  type: 'join',
  collection: 'players',
  on: 'club',
}

// relationship field in another collection [Player.ts]:
export const MyRelationshipField: Field = {
  name: 'club',
  type: 'relationship',
  relationTo: 'club',
}

export const Club: CollectionConfig = {
  slug: 'club',
  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Club',
    plural: 'Clubs',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'crest',
      type: 'upload',
      relationTo: 'media',
      // required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
    },

    // {
    //   name: 'players',
    //   type: 'relationship',
    //   relationTo: 'players',
    //   hasMany: true,
    // },
    {
      name: 'players',
      type: 'join',
      collection: 'players',
      on: 'club',
    },
  

    {
      name: 'social_media',
      type: 'group',
      fields: [
        {
          name: 'instagram',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
        {
          name: 'tiktok',
          type: 'text',
        },
      ],
    },
  ],
};
