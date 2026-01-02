import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutSettings',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hubTitle',
      title: 'Hub Title',
      type: 'string',
      description: 'Main title for LeadAfrik Public Economics Hub',
    }),
    defineField({
      name: 'hubDescription',
      title: 'Hub Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Main description and mission statement for the hub',
    }),
    defineField({
      name: 'founderName',
      title: 'Founder Name',
      type: 'string',
      description: 'Name of the founder',
    }),
    defineField({
      name: 'founderTitle',
      title: 'Founder Section Title',
      type: 'string',
      description: 'Section title for founder bio (e.g., "About Stephen")',
    }),
    defineField({
      name: 'founderBio',
      title: 'Founder Biography',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Detailed biography of the founder',
    }),
    defineField({
      name: 'founderImage',
      title: 'Founder Image',
      type: 'image',
      description: 'Portrait image of the founder',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'founderLinkedin',
      title: 'Founder LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'founderEmail',
      title: 'Founder Email',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'hubTitle',
    },
  },
})
