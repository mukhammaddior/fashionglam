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
  type?: 'link' | 'megamenu';
  categories?: NavCategory[];
  featuredImage?: string;
  featuredText?: string;
  featuredLink?: string;
}
