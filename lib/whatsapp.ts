/**
 * Helper utility for constructing pre-filled, URL-encoded WhatsApp links
 * targeting Dextron Enterprise's customer service and sales desks.
 */

export const DEFAULT_WHATSAPP_NUMBER = '254722750766';
export const DEFAULT_PHONE_NUMBER = '+254 700 546792';

export function cleanPhoneNumber(phone?: string): string {
  if (!phone) return DEFAULT_WHATSAPP_NUMBER;
  return phone.replace(/[^0-9]/g, '');
}

export function getWhatsAppLink(message: string = '', phoneNumber?: string): string {
  const number = cleanPhoneNumber(phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}${message ? `?text=${encoded}` : ''}`;
}

export function getBrandOrderLink(brandName: string, productName?: string, location?: string): string {
  let msg = `Hello Dextron Enterprise! 👋\nI would like to inquire about ordering *${brandName}*`;
  if (productName) {
    msg += ` (${productName})`;
  }
  if (location) {
    msg += ` to my location in *${location}*`;
  }
  msg += `.\nPlease share pricing, nearest stockist, and delivery options. Thank you!`;
  return getWhatsAppLink(msg);
}

export function getDistributorInquiryLink(businessName?: string, location?: string): string {
  let msg = `Hello Dextron Wholesale Team! 🏢\nI am interested in becoming an authorized distributor/stockist of Dextron products.`;
  if (businessName) {
    msg += `\nBusiness Name: *${businessName}*`;
  }
  if (location) {
    msg += `\nTarget Location / Town: *${location}*`;
  }
  msg += `\nPlease send me your wholesale catalog, minimum order quantities, and distributor price list.`;
  return getWhatsAppLink(msg);
}

export function getStockistInquiryLink(userLocation?: string): string {
  let msg = `Hello Dextron! 📍\nI am looking for the nearest supermarket or shop stocking Dextron products`;
  if (userLocation) {
    msg += ` around *${userLocation}*`;
  }
  msg += `. Could you kindly assist me?`;
  return getWhatsAppLink(msg);
}
