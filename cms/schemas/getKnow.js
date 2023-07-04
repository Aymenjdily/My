import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'getKnow',
  title: 'GetKnow',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
    defineField({
      name: 'textOne',
      title: 'TextOne',
      type: 'text',
    }),
    defineField({
      name: 'textTwo',
      title: 'TextTwo',
      type: 'text',
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
      name: 'profileImage',
      title: 'ProfileImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'careerImage',
      title: 'CareerImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    defineField({
      name: 'career',
      title: 'Career',
      type: 'text',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of : [
        {
            type : "object",
            fields :[
              {type: "string", name: "title"},
              {type: "image", name: "image"}
            ]
        }
      ]
    }),
  ],
})
