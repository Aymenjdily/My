import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
