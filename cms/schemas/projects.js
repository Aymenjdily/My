import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'ProjectName',
      type: 'string',
    }),
    {
      name:'slug',
      title:'Slug',
      type:'slug',
      options:{
          source:'projectName',
          maxLength:90,
      }
  },
    defineField({
      name: 'projectType',
      title: 'ProjectType',
      type: 'string',
    }),
    defineField({
      name: 'projectDescription',
      title: 'ProjectDescription',
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
      name: 'secondImage',
      title: 'SecondImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'techs',
      title: 'Techs',
      type: 'array',
      of : [
        {
          type:"image",
          options: {
            hotspot: true,
          },
        }
      ]
    }),
  ],
})
