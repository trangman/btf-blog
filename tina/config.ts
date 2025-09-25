import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'

console.log('TinaCMS Config:', {
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ? 'Set' : 'Not set',
  token: process.env.TINA_TOKEN ? 'Set' : 'Not set'
})

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'mdx',
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publish Date',
            required: true,
          },
          {
            type: 'string',
            name: 'heroImage',
            label: 'Hero Image',
          },
          {
            type: 'string',
            name: 'categories',
            label: 'Categories',
            description: 'Comma-separated list of categories (general, buyer, accountant, developer, lawyer, property-owner)',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'audience',
            label: 'Target Audience',
            description: 'Primary audience for this article',
            options: [
              'BUYER',
              'ACCOUNTANT', 
              'DEVELOPER',
              'LAWYER',
              'EXISTING_PROPERTY_OWNER',
              'GENERAL'
            ],
            ui: {
              component: 'select',
            },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
})
