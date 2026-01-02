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
    defineField({
      name: 'columns',
      title: 'Data Dictionary (Columns)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Column Name'},
          {name: 'description', type: 'text', title: 'Description'},
          {name: 'unit', type: 'string', title: 'Unit (e.g., KES, %, count)'},
          {name: 'dataType', type: 'string', title: 'Data Type', options: {list: ['string', 'number', 'date', 'boolean']}},
        ]
      }],
      description: 'Define columns for Data Dictionary page',
    }),
    defineField({
      name: 'updateFrequency',
      title: 'Update Frequency',
      type: 'string',
      options: {list: ['Weekly', 'Monthly', 'Quarterly', 'Annual', 'On-demand']},
      description: 'How often is this dataset updated?',
    }),
    defineField({
      name: 'csvPreview',
      title: 'CSV Preview (first 5 rows)',
      type: 'text',
      description: 'CSV format of first 5 rows for preview',
    }),
    defineField({
      name: 'citationFormat',
      title: 'Citation Format',
      type: 'text',
      description: 'e.g., "LeadAfrik Economics. (2025). CPI Monthly..."',
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
