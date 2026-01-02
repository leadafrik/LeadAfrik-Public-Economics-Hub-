import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeSettings',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Home Settings',
      hidden: true,
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: "Kenya's economic policy—explained clearly.",
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'string',
      initialValue: 'Documents, explainers, episodes, and data-informed analysis.',
    }),
    defineField({
      name: 'featuredBlogPost',
      title: 'Featured Blog Post',
      type: 'reference',
      to: [{type: 'post'}],
    }),
    defineField({
      name: 'featuredDocument',
      title: 'Featured Document',
      type: 'reference',
      to: [{type: 'economicDocument'}],
    }),
    defineField({
      name: 'featuredEpisode',
      title: 'Featured Episode',
      type: 'reference',
      to: [{type: 'episode'}],
    }),
  ],
})
