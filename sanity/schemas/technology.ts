import { defineField, defineType } from 'sanity';

export const technologySchema = defineType({
  name: 'technology',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Technology Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Backend', value: 'Backend' },
          { title: 'Database & Cloud', value: 'Database & Cloud' },
          { title: 'Languages & Tools', value: 'Languages & Tools' },
        ],
      },
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name Key',
      type: 'string',
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight in Marquee',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
