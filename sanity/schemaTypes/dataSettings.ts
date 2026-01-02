import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dataSettings',
  title: 'Data Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'e.g., "Kenya Data Store"',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      description: 'Main description under the title',
    }),
    defineField({
      name: 'pageIntro',
      title: 'Page Introduction',
      type: 'text',
      description: 'Longer intro paragraph explaining the data service',
    }),
    defineField({
      name: 'audiences',
      title: 'Target Audiences',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Audience Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
      description: 'Who uses the data (Researchers, Policy Makers, etc.)',
    }),
    defineField({
      name: 'dataStandardsApproach',
      title: 'Data Standards - Our Approach',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of things we do',
    }),
    defineField({
      name: 'dataStandardsDont',
      title: 'Data Standards - What We Don\'t Do',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of things we don\'t do',
    }),
    defineField({
      name: 'legalNotice',
      title: 'Legal Notice',
      type: 'text',
      description: 'Legal/licensing information',
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      description: 'Call-to-action headline at bottom',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      description: 'CTA description',
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
})
