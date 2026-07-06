import { Suspense } from 'react'
import WishlistClient from './WishlistClient'

export const metadata = {
  title: 'Wishlist | Organick',
  description: 'Your saved products',
}

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest text-black mb-4">
          Your Wishlist
        </h1>
        <p className="text-gray-500 text-sm font-light">
          Saved items you love
        </p>
      </div>

      <Suspense fallback={<div className="text-center text-sm font-mono uppercase tracking-widest py-12">Loading wishlist...</div>}>
        <WishlistClient />
      </Suspense>
    </div>
  )
}
