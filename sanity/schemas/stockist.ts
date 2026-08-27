import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'stockist',
  title: 'Stockist / Retail Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Store Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Store Type',
      type: 'string',
      options: {
        list: [
          { title: 'Supermarket', value: 'supermarket' },
          { title: 'Pharmacy', value: 'pharmacy' },
          { title: 'Wholesaler', value: 'wholesaler' },
          { title: 'Baby Shop', value: 'baby-shop' },
          { title: 'Online Store', value: 'online-store' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location / Region',
      type: 'string',
      description: 'Neighborhood, town, or city (e.g., Eastleigh, Nairobi CBD, Mombasa, Nakuru)',
    }),
    defineField({
      name: 'address',
      title: 'Full Address',
      type: 'text',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'brandsStocked',
      title: 'Brands Stocked',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'brand' }],
        },
      ],
      description: 'Which Dextron brands does this stockist carry?',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Stockist',
      type: 'boolean',
      description: 'Should this stockist appear prominently on the Where to Buy page?',
      initialValue: false,
    }),
  ],
});
