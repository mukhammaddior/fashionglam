"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';
import { getNavigation } from '@/lib/nav';

const navItems = getNavigation();

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <header className="w-full bg-white relative z-50">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between border-b border-neutral-200">
        
        {/* Left: Mobile Menu Button & Desktop Nav Links */}
        <div className="flex items-center h-full">
          <button 
            className="lg:hidden text-black hover:opacity-60 transition-opacity mr-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
          
          <nav className="hidden lg:flex items-center space-x-10 text-[11px] md:text-[13px] font-mono tracking-[0.2em] text-neutral-800 uppercase h-full">
            {navItems.map((item) => (
              <div key={item.label} className="group h-full flex items-center">
                <Link href={item.href} className="hover:text-black transition-colors h-full flex items-center border-b-2 border-transparent group-hover:border-black">
                  {item.label}
                </Link>

                {/* Mega Menu Overlay */}
                {item.type === 'megamenu' && item.categories && (
                  <div className="absolute top-[80px] left-0 w-full bg-white border-b border-neutral-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 cursor-default">
                    <div className="max-w-[1400px] mx-auto px-12 py-10 flex gap-16">
                      
                      {/* Categories Grid */}
                      <div className="flex-1 grid grid-cols-3 gap-8">
                        {item.categories.map((cat, idx) => (
                          <div key={idx}>
                            <h4 className="font-serif text-lg tracking-wider mb-6 text-black border-b border-neutral-100 pb-2">{cat.title}</h4>
                            <ul className="space-y-4">
                              {cat.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <Link href={link.href} className="text-xs text-neutral-500 hover:text-black transition-colors flex items-center">
                                    <span className="w-0 h-[1px] bg-black mr-0 transition-all duration-300 group-hover/link:w-3 group-hover/link:mr-2"></span>
                                    <span className="group/link hover:pl-2 transition-all duration-300">{link.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Featured Image */}
                      {item.featuredImage && (
                        <div className="w-[320px] relative group/feat overflow-hidden bg-neutral-100 hidden xl:block">
                          <div className="w-full h-[280px] relative">
                            <Image 
                              src={item.featuredImage} 
                              alt="Featured" 
                              fill 
                              className="object-cover grayscale opacity-90 group-hover/feat:scale-105 transition-transform duration-700" 
                            />
                          </div>
                          {item.featuredText && (
                            <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover/feat:opacity-100 transition-opacity duration-300 bg-black/40">
                              <Link 
                                href={item.featuredLink || item.href} 
                                className="bg-white text-black py-3 px-6 text-xs tracking-widest font-mono font-bold hover:bg-black hover:text-white transition-colors"
                              >
                                {item.featuredText}
                              </Link>
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Middle: Logo (Absolutely Centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px] sm:text-2xl md:text-3xl font-brand tracking-[0.1em] md:tracking-[0.15em] text-black uppercase font-medium whitespace-nowrap">
          <Link href="/">FASHIONGLAM</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-8 text-black">
          <button aria-label="Wishlist" className="hover:opacity-60 transition-opacity cursor-pointer">
            <Heart className="w-4 h-4 md:w-[18px] md:h-[18px] fill-current text-black stroke-[1.5]" />
          </button>
          <button aria-label="Cart" className="hover:opacity-60 transition-opacity cursor-pointer">
            <ShoppingCart className="w-4 h-4 md:w-[18px] md:h-[18px] fill-current text-black stroke-[1.5]" />
          </button>
          <button aria-label="Account" className="hover:opacity-60 transition-opacity cursor-pointer">
            <User className="w-4 h-4 md:w-[18px] md:h-[18px] fill-current text-black stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-xl flex flex-col z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col border-b border-neutral-100">
              {item.type === 'megamenu' ? (
                <button 
                  className="py-4 px-6 text-[13px] font-mono tracking-[0.2em] text-neutral-800 uppercase hover:text-black font-bold flex justify-between items-center w-full text-left" 
                  onClick={() => toggleAccordion(item.label)}
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === item.label ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link 
                  href={item.href} 
                  className="py-4 px-6 text-[13px] font-mono tracking-[0.2em] text-neutral-800 uppercase hover:text-black font-bold flex items-center w-full" 
                  onClick={() => setIsMobileMenuOpen(false)}
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
                              onClick={() => setIsMobileMenuOpen(false)}
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
      )}
    </header>
  );
}