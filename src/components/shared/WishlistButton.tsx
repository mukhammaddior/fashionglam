"use client"

import { Heart } from 'lucide-react'
import { useShopStore } from '@/lib/store'

interface WishlistButtonProps {
  slug: string
  className?: string
}

export default function WishlistButton({ slug, className }: WishlistButtonProps) {
  const wishlist = useShopStore((state) => state.wishlist)
  const toggleWishlist = useShopStore((state) => state.toggleWishlist)
  
  const isWishlisted = wishlist.includes(slug)

  return (
    <button 
      onClick={(e) => {
        e.preventDefault() // Prevents navigation if inside a Link
        e.stopPropagation()
        toggleWishlist(slug)
      }}
      className={`absolute top-4 right-4 p-2 bg-white rounded-full transition-all duration-300 shadow-sm z-10 ${
        isWishlisted ? 'text-red-500 opacity-100' : 'text-black hover:bg-black hover:text-white opacity-100 lg:opacity-0 group-hover:opacity-100'
      } ${className || ''}`}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} />
    </button>
  )
}
