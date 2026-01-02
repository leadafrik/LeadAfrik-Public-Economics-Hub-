import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'datasetBundle',
  title: 'Dataset Bundle',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Bundle Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'e.g., "CPI + Fuel Prices + Exchange Rate"',
    }),
    defineField({
      name: 'datasets',
      title: 'Datasets in Bundle',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dataset'}]}],
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: 'regularPrice',
      title: 'Regular Price (KES)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'bundlePrice',
      title: 'Bundle Price (KES)',
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
      title: 'name',
      regularPrice: 'regularPrice',
      bundlePrice: 'bundlePrice',
    },
    prepare({title, regularPrice, bundlePrice}) {
      const savings = Math.round(((regularPrice - bundlePrice) / regularPrice) * 100);
      return {
        title,
        subtitle: `KES ${bundlePrice} (was ${regularPrice}) - Save ${savings}%`,
      }
    },
  },
})
