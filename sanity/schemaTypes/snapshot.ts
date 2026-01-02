import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'snapshot',
  title: 'Kenya Economy Snapshot',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Kenya Economy Snapshot',
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(12),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2020),
    }),
    defineField({
      name: 'dateRange',
      title: 'Date Range Description',
      type: 'string',
      description: 'e.g., "October - December 2025"',
    }),
    defineField({
      name: 'indicators',
      title: 'Key Indicators',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Indicator Name'},
            {name: 'value', type: 'string', title: 'Value'},
            {name: 'change', type: 'string', title: 'Change (e.g., "+1.2%")'},
            {name: 'note', type: 'string', title: 'Note'},
          ],
        },
      ],
    }),
    defineField({
      name: 'narrative',
      title: 'What Changed (Narrative)',
      type: 'array',
      of: [{type: 'string'}],
      description: '5-10 bullet points explaining economic shifts',
    }),
    defineField({
      name: 'sources',
      title: 'Data Sources',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., KNBS, CBK, National Treasury',
    }),
  ],
  preview: {
    select: {
      month: 'month',
      year: 'year',
    },
    prepare(selection) {
      const {month, year} = selection
      const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ]
      return {
        title: 'Kenya Economy Snapshot',
        subtitle: `${monthNames[month - 1]} ${year}`,
      }
    },
  },
})
