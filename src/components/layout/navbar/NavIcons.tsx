'use client'

import { Heart, ShoppingCart, User } from 'lucide-react';
import { useShopStore } from '@/lib/store';
import Link from 'next/link';

export default function NavIcons() {
  const cart = useShopStore((state) => state.cart);
  const wishlist = useShopStore((state) => state.wishlist);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8 text-black">
      <Link href="/wishlist" aria-label="Wishlist" className="hover:opacity-60 transition-opacity cursor-pointer relative">
        <Heart className="w-5 h-5 md:w-[18px] md:h-[18px] fill-current text-black stroke-[1.5]" />
        {wishlistCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] min-w-[16px] min-h-[16px] flex items-center justify-center rounded-full font-bold">
            {wishlistCount}
          </span>
        )}
      </Link>
      <Link href="/cart" aria-label="Cart" className="hover:opacity-60 transition-opacity cursor-pointer relative">
        <ShoppingCart className="w-5 h-5 md:w-[18px] md:h-[18px] fill-current text-black stroke-[1.5]" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] min-w-[16px] min-h-[16px] flex items-center justify-center rounded-full font-bold">
            {cartItemsCount}
          </span>
        )}
      </Link>
      <Link href="/account" aria-label="Account" className="hover:opacity-60 transition-opacity cursor-pointer">
        <User className="w-5 h-5 md:w-[18px] md:h-[18px] fill-current text-black stroke-[1.5]" />
      </Link>
    </div>
  );
}
