import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
    }),
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
    }),
    defineField({
      name: 'imageClient',
      title : 'ImageClient',
      type : 'image',
      options : {
        hotspot:true
      }
    })
  ],
})
