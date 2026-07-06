import navData from '@/data/navigation.json';
import { NavItem } from '@/types/navigation';

export function getNavigation(): NavItem[] {
  return navData.navItems as NavItem[];
}
