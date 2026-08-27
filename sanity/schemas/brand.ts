import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short positioning statement (e.g., "Every spoonful builds them up")',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Baby Care', value: 'baby-care' },
          { title: 'Infant Nutrition', value: 'infant-nutrition' },
          { title: 'Feminine Hygiene', value: 'feminine-hygiene' },
          { title: 'Home Cleaning', value: 'home-cleaning' },
          { title: 'Health Supplements', value: 'health-supplements' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Accent Color',
      type: 'string',
      description: 'Hex code for the brand accent color',
      options: {
        list: [
          { title: 'Soft Blue (Nuna Diapers)', value: '#2563EB' },
          { title: 'Warm Amber (Nunalac)', value: '#EA580C' },
          { title: 'Deep Rose (Bilan)', value: '#BE185D' },
          { title: 'Fresh Green (SoFresh SoClean)', value: '#16A34A' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Brand Description',
      type: 'text',
      description: 'Full description of the brand, its products, and key benefits',
    }),
    defineField({
      name: 'keyBenefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points highlighting what makes this brand stand out',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main image for the brand page hero section',
    }),
    defineField({
      name: 'productImages',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      description: 'Additional product photos or lifestyle images',
    }),
    defineField({
      name: 'productLine',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productName', title: 'Product Name', type: 'string' },
            { name: 'productImage', title: 'Product Image', type: 'image' },
            { name: 'productDescription', title: 'Product Description', type: 'text' },
            { name: 'productBenefits', title: 'Product Benefits', type: 'array', of: [{ type: 'string' }] },
            { name: 'productSize', title: 'Available Sizes/Pack Sizes', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Brand',
      type: 'boolean',
      description: 'Should this brand appear on the homepage?',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the brand appears (1 = first)',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
      ],
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
