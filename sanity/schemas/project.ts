import { defineField, defineType } from 'sanity';

export const projectSchema = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Full Stack', value: 'Full Stack' },
          { title: 'MERN', value: 'MERN' },
          { title: 'Real-Time', value: 'Real-Time' },
          { title: 'Frontend', value: 'Frontend' },
        ],
      },
    }),
    defineField({
      name: 'problem',
      title: 'Problem Statement',
      type: 'text',
    }),
    defineField({
      name: 'architecture',
      title: 'Architecture Overview',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'Technical Solution',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Repository URL',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Deployment URL',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Showcase Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
});
