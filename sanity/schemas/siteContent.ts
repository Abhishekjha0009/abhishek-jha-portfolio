import { defineField, defineType } from 'sanity';

export const siteContentSchema = defineType({
  name: 'siteContent',
  title: 'Site Content & Bio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Current Role',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'Hero Subheadline',
      type: 'text',
    }),
    defineField({
      name: 'aboutBio',
      title: 'About Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
  ],
});
