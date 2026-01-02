import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'learnSettings',
  title: 'Learn Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'Main heading (e.g., "Learn")',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      description: 'Subtitle/intro text for the page',
    }),
    defineField({
      name: 'instructionsTitle',
      title: 'Instructions Section Title',
      type: 'string',
      description: 'e.g., "How to Use This"',
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'step',
              title: 'Step Number',
              type: 'number',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
      description: 'Steps for how users should approach the learning modules',
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
})
