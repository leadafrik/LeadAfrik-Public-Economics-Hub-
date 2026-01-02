import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'learningModule',
  title: 'Learning Module',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the module (shown in grid)',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Module Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Main content for the module detail page',
    }),
    defineField({
      name: 'estimatedTime',
      title: 'Estimated Learning Time',
      type: 'string',
      description: 'e.g., "20-30 minutes", "45 minutes"',
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Lesson Title',
              type: 'string',
            },
            {
              name: 'duration',
              title: 'Duration (minutes)',
              type: 'number',
            },
          ],
        },
      ],
      description: 'Individual lessons within this module',
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Blog Posts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
      description: 'Blog posts that complement this module',
    }),
    defineField({
      name: 'relatedDocuments',
      title: 'Related Documents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'economicDocument'}]}],
      description: 'Documents that provide deeper context',
    }),
    defineField({
      name: 'relatedEpisodes',
      title: 'Related Podcast Episodes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'episode'}]}],
      description: 'Episodes that cover similar topics',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      estimatedTime: 'estimatedTime',
    },
    prepare({title, estimatedTime}) {
      return {
        title,
        subtitle: estimatedTime,
      }
    },
  },
})
