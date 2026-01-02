import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'economicDocument',
  title: 'Economic Document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
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
      name: 'year',
      title: 'Year Published',
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(2100),
    }),
    defineField({
      name: 'institution',
      title: 'Source Institution',
      type: 'string',
      description: 'e.g., Treasury, Parliament, KNBS, KIPPRA',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Constitution & Public Finance', value: 'Constitution & Public Finance'},
          {title: 'Finance Acts & Tax Amendments', value: 'Finance Acts & Tax Amendments'},
          {title: 'Bills', value: 'Bills'},
          {title: 'Budget Documents', value: 'Budget Documents'},
          {title: 'Sessional Papers', value: 'Sessional Papers'},
          {title: 'Manifestos', value: 'Manifestos'},
          {title: 'Vision 2030 & Sector Strategies', value: 'Vision 2030 & Sector Strategies'},
          {title: 'County & Devolution Frameworks', value: 'County & Devolution Frameworks'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: '150-300 words explaining the document',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key Takeaways',
      type: 'array',
      of: [{type: 'string'}],
      description: '3-5 bullet points',
    }),
    defineField({
      name: 'commentary',
      title: 'Commentary',
      type: 'text',
      description: 'Optional longer explanation of why this document matters',
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
      year: 'year',
      institution: 'institution',
    },
    prepare(selection) {
      const {year, institution} = selection
      return {
        title: selection.title,
        subtitle: `${year} • ${institution}`,
      }
    },
  },
})
