import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'Dextron Enterprise',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code without symbols (e.g. 254722750766)',
      initialValue: '+254722750766',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      initialValue: '+254700546792',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'info@dextron.co.ke',
    }),
    defineField({
      name: 'physicalAddress',
      title: 'Physical Address',
      type: 'text',
      initialValue: 'Nairobi, Kenya',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Homepage Hero Headline',
      type: 'string',
      initialValue: 'Nurturing Kenyan Families with Quality Care',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Homepage Hero Sub-headline',
      type: 'text',
      initialValue: 'Quality baby care, feminine hygiene, and home cleaning products — made for Kenyan families, priced for real life.',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'string',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok URL',
      type: 'string',
    }),
  ],
});
