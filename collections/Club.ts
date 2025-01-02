import { CollectionConfig } from 'payload'


export const Club: CollectionConfig = {
    slug: 'club',
    access: {
        read: () => true,
    
    },
    upload: true,
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

        {

        name: 'players',
        type: 'relationship',
        relationTo: 'players',
        hasMany: true,
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
}