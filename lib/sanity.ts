import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import {
  SEED_BRANDS,
  SEED_STOCKISTS,
  SEED_TESTIMONIALS,
  SEED_FAQS,
  SEED_SITE_SETTINGS,
  BrandData,
  StockistData,
  TestimonialData,
  FAQData,
  SiteSettingsData,
} from './seed-data';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const isSanityConfigured = Boolean(projectId && projectId !== 'your_sanity_project_id' && projectId !== 'dummy-project-id');

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

// Safe builder for Sanity images
const builder = client ? imageUrlBuilder(client) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any): string {
  if (!source) return '';
  if (typeof source === 'string') return source;
  if (builder && source?.asset) {
    try {
      return builder.image(source).url();
    } catch {
      return '';
    }
  }
  return source?.url || '';
}

export async function getBrands(): Promise<BrandData[]> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "brand"] | order(order asc)`);
      if (data && Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Failed to fetch brands from Sanity, falling back to seed data:', err);
    }
  }
  return SEED_BRANDS;
}

export async function getBrandBySlug(slug: string): Promise<BrandData | undefined> {
  if (client) {
    try {
      const data = await client.fetch(
        `*[_type == "brand" && slug.current == $slug][0]`,
        { slug }
      );
      if (data) return data;
    } catch (err) {
      console.warn(`Failed to fetch brand ${slug} from Sanity:`, err);
    }
  }
  return SEED_BRANDS.find((b) => b.slug.current === slug);
}

export async function getStockists(): Promise<StockistData[]> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "stockist"]`);
      if (data && Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Failed to fetch stockists from Sanity:', err);
    }
  }
  return SEED_STOCKISTS;
}

export async function getTestimonials(): Promise<TestimonialData[]> {
  if (client) {
    try {
      const data = await client.fetch(
        `*[_type == "testimonial" && approved == true]`
      );
      if (data && Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Failed to fetch testimonials from Sanity:', err);
    }
  }
  return SEED_TESTIMONIALS;
}

export async function getFAQs(category?: string): Promise<FAQData[]> {
  if (client) {
    try {
      const query = category
        ? `*[_type == "faq" && category == $category] | order(order asc)`
        : `*[_type == "faq"] | order(order asc)`;
      const data = await client.fetch(query, { category });
      if (data && Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Failed to fetch FAQs from Sanity:', err);
    }
  }
  if (category && category !== 'all') {
    return SEED_FAQS.filter((f) => f.category === category);
  }
  return SEED_FAQS;
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  if (client) {
    try {
      const data = await client.fetch(`*[_type == "siteSettings"][0]`);
      if (data && data.companyName) {
        return data;
      }
    } catch (err) {
      console.warn('Failed to fetch site settings from Sanity:', err);
    }
  }
  return SEED_SITE_SETTINGS;
}
