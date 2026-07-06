"use client"

import { useEffect, useState } from 'react'
import { useShopStore } from '@/lib/store'
import { getProductsBySlugs } from '@/actions/product'
import Link from 'next/link'
import Image from 'next/image'
import WishlistButton from '@/components/shared/WishlistButton'

// Minimal product type to avoid importing Prisma types client-side
type Product = {
  id: string
  name: string
  slug: string
  price: number
  originalPrice: number | null
  imageUrl: string
  isNewArrival: boolean
}

export default function WishlistClient() {
  const wishlist = useShopStore(state => state.wishlist)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadWishlist() {
      if (wishlist.length === 0) {
        setProducts([])
        setLoading(false)
        return
      }
      
      setLoading(true)
      const data = await getProductsBySlugs(wishlist)
      setProducts(data as Product[])
      setLoading(false)
    }

    loadWishlist()
  }, [wishlist])

  if (loading) {
    return <div className="py-24 text-center text-gray-500 font-mono uppercase tracking-widest text-sm">Loading products...</div>
  }

  if (products.length === 0) {
    return (
      <div className="py-24 text-center text-gray-500 bg-neutral-50">
        <p className="font-mono uppercase tracking-widest text-sm mb-6">Your wishlist is currently empty.</p>
        <Link href="/shop/women" className="inline-block text-xs uppercase tracking-widest border-b border-black text-black pb-1 hover:text-gray-600 transition-colors">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.slug}`} className="group cursor-pointer flex flex-col">
          <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {product.isNewArrival && (
              <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                New
              </div>
            )}
            <WishlistButton slug={product.slug} />
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest leading-relaxed">{product.name}</h3>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-sm font-light text-black">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
