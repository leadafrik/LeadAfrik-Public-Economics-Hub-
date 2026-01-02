import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dataset',
  title: 'Dataset',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., "Inflation & Prices", "Demographics", "Labour Market"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main description of the dataset',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'coverage',
      title: 'Coverage',
      type: 'string',
      description: 'e.g., "Monthly, 2005–2025 (240 data points)"',
    }),
    defineField({
      name: 'variables',
      title: 'Variables',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of variables in the dataset',
    }),
    defineField({
      name: 'format',
      title: 'File Format',
      type: 'string',
      description: 'e.g., "Excel (.xlsx)"',
    }),
    defineField({
      name: 'price',
      title: 'Price (KES)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
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
      category: 'category',
      price: 'price',
    },
    prepare({title, category, price}) {
      return {
        title,
        subtitle: `${category} • KES ${price}`,
      }
    },
  },
})
