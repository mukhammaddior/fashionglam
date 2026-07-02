import navData from '@/data/navigation.json';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavCategory {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  type: 'link' | 'megamenu';
  categories?: NavCategory[];
  featuredImage?: string;
  featuredLink?: string;
  featuredText?: string;
}

export function getNavigation(): NavItem[] {
  return navData.navItems as NavItem[];
}
