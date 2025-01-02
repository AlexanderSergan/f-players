import { CollectionConfig } from 'payload';

export const Players: CollectionConfig = {
  slug: 'players',
  access: {
    read: () => true,

  },
  upload: true,
  labels: {
    singular: 'Player',
    plural: 'Players',
  },
  fields: [
    {
        name: 'name',
        type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'select',
      options: [
        { label: 'Goalkeeper', value: 'goalkeeper' },
        { label: 'Defender', value: 'defender' },
        { label: 'Midfielder', value: 'midfielder' },
        { label: 'Forward', value: 'forward' },
      ],
      required: true,
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'club',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
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
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
};

export default Players;