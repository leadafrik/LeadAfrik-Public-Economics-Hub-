import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subscriber',
  title: 'Newsletter Subscriber',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
      readOnly: false,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: false,
    }),
    defineField({
      name: 'subscriptionDate',
      title: 'Subscription Date',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Mark as inactive to unsubscribe',
    }),
  ],
  preview: {
    select: {
      email: 'email',
      name: 'name',
    },
    prepare(selection) {
      const { email, name } = selection
      return {
        title: name || email,
        subtitle: email,
      }
    },
  },
})
