import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NavItem } from '@/types/navigation';
import { useScrollLock } from '@/hooks/useScrollLock';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Lock scroll when mobile menu is open
  useScrollLock(isOpen);

  if (!isOpen) return null;

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-xl flex flex-col z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
      {navItems.map((item) => (
        <div key={item.label} className="flex flex-col border-b border-neutral-100">
          {item.type === 'megamenu' ? (
            <div className="flex justify-between items-center w-full border-b border-neutral-100 last:border-0">
              <Link 
                href={item.href}
                className="py-4 pl-6 pr-4 text-[13px] font-mono tracking-[0.2em] text-neutral-800 uppercase hover:text-black font-bold flex-1"
                onClick={onClose}
              >
                {item.label}
              </Link>
              <button 
                className="py-4 pr-6 pl-4"
                onClick={() => toggleAccordion(item.label)}
                aria-label="Toggle submenu"
              >
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === item.label ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ) : (
            <Link 
              href={item.href} 
              className="py-4 px-6 text-[13px] font-mono tracking-[0.2em] text-neutral-800 uppercase hover:text-black font-bold flex items-center w-full" 
              onClick={onClose}
            >
              {item.label}
            </Link>
          )}
          
          {/* Mobile Sub-items (Accordion Content) */}
          {item.type === 'megamenu' && item.categories && (
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordion === item.label ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-10 pr-6 pb-6 bg-neutral-50 flex flex-col space-y-6 pt-2">
                {item.categories.map((cat, idx) => (
                  <div key={idx}>
                    <h5 className="font-serif text-sm tracking-wider mb-3 text-black">{cat.title}</h5>
                    <div className="flex flex-col space-y-3">
                      {cat.links.map((link, lIdx) => (
                        <Link 
                          key={lIdx} 
                          href={link.href} 
                          className="text-[11px] text-neutral-500 font-mono tracking-widest hover:text-black uppercase"
                          onClick={onClose}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
