import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'blogName',
      title: 'BlogName',
      type: 'string',
    }),
    {
      name:'slug',
      title:'Slug',
      type:'slug',
      options:{
          source:'blogName',
          maxLength:90,
      }
  },
    defineField({
      name: 'blogCategory',
      title: 'BlogCategory',
      type: 'string',
    }),
    defineField({
      name: 'blogTextOne',
      title: 'BlogTextOne',
      type: 'text',
    }),
    defineField({
      name: 'blogTextTwo',
      title: 'BlogTextTwo',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'MainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondImage',
      title: 'SecondImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ],
})
