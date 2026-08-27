import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerLocation',
      title: 'Customer Location',
      type: 'string',
      description: 'City or neighborhood (e.g., Nairobi, Mombasa, Eldoret)',
    }),
    defineField({
      name: 'brand',
      title: 'Brand Referenced',
      type: 'reference',
      to: [{ type: 'brand' }],
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
          { title: '2 Stars', value: 2 },
          { title: '1 Star', value: 1 },
        ],
      },
      initialValue: 5,
    }),
    defineField({
      name: 'customerPhoto',
      title: 'Customer Photo (optional)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'approved',
      title: 'Approved for Display',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'dateReceived',
      title: 'Date Received',
      type: 'date',
    }),
  ],
});
