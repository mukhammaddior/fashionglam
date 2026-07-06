"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { getNavigation } from '@/lib/nav';
import { useClickOutside } from '@/hooks/useClickOutside';

import DesktopNav from './navbar/DesktopNav';
import MobileMenu from './navbar/MobileMenu';
import NavIcons from './navbar/NavIcons';

const navItems = getNavigation();

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useClickOutside(navbarRef, () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  });

  return (
    <header className="w-full bg-white relative z-50" ref={navbarRef}>
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between border-b border-neutral-200">
        
        {/* Left: Mobile Menu Button & Desktop Nav Links */}
        <div className="flex items-center h-full">
          <button 
            className="lg:hidden text-black hover:opacity-60 transition-opacity mr-4 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
          
          <DesktopNav navItems={navItems} />
        </div>

        {/* Middle: Logo (Absolutely Centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] sm:text-[18px] md:text-3xl font-brand tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.15em] text-black uppercase font-medium whitespace-nowrap z-40">
          <Link href="/">FASHIONGLAM</Link>
        </div>

        {/* Right: Icons */}
        <NavIcons />
      </div>

      {/* Mobile Menu Dropdown */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={navItems} 
      />
    </header>
  );
}