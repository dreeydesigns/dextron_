import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Nuna Diapers', value: 'nuna-diapers' },
          { title: 'Nunalac', value: 'nunalac' },
          { title: 'Bilan', value: 'bilan' },
          { title: 'SoFresh SoClean', value: 'sofresh-soclean' },
          { title: 'Shipping & Delivery', value: 'shipping-delivery' },
          { title: 'Distribution & Wholesale', value: 'distribution-wholesale' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
