import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'episode',
  title: 'Podcast / YouTube Episode',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Episode Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Podcast', value: 'podcast'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'Both', value: 'both'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'embedUrl',
      title: 'Embed URL',
      type: 'string',
      description: 'YouTube embed URL or podcast player URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'relatedDocuments',
      title: 'Related Documents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'economicDocument'}]}],
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Blog Posts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      platform: 'platform',
    },
    prepare(selection) {
      const {date, platform} = selection
      return {
        title: selection.title,
        subtitle: `${platform} • ${new Date(date).toLocaleDateString()}`,
      }
    },
  },
})
