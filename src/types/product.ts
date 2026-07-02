export type TrendingItemType = 'product' | 'banner';

export interface TrendingItem {
  id: string;
  type: TrendingItemType;
  image: string;
  
  // For 'product' type
  title?: string;
  price?: number;
  
  // For 'banner' type
  heading?: string[];
  description?: string;
  linkUrl?: string;
  linkText?: string;
}
