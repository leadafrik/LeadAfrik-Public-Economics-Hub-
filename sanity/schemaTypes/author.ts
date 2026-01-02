import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      description: '1-2 sentences',
    }),
    defineField({
      name: 'longBio',
      title: 'Long Bio',
      type: 'text',
      description: 'Full biography for About page',
    }),
    defineField({
      name: 'image',
      title: 'Professional Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Professional photo for About page and author cards',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
    }),
    defineField({
      name: 'podcast',
      title: 'Podcast URL',
      type: 'url',
    }),
  ],
})
