'use client'

import { useShopStore } from '@/lib/store'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2 } from 'lucide-react'

export default function CartClient() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useShopStore()

  if (cart.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-500 mb-8 font-light uppercase tracking-widest">Your cart is empty</p>
        <Link 
          href="/shop/women"
          className="inline-block px-10 py-4 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-gray-900 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="w-full lg:w-2/3">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 border-b border-gray-200 pb-4 mb-6 text-xs font-medium uppercase tracking-widest text-gray-400">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-right">Total</div>
        </div>

        {/* Cart Items */}
        {cart.map((item) => (
          <div key={`${item.id}-${item.size}-${item.color}`} className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 py-6">
            <div className="col-span-6 flex gap-4">
              <Link href={`/product/${item.slug}`} className="relative w-20 h-24 bg-gray-50 shrink-0">
                <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
              </Link>
              <div className="flex flex-col justify-center">
                <Link href={`/product/${item.slug}`} className="text-sm font-medium uppercase tracking-wider hover:text-gray-600 transition-colors">
                  {item.name}
                </Link>
                <div className="text-xs text-gray-500 mt-2 space-y-1">
                  {item.size && <p>Size: {item.size}</p>}
                  {item.color && <p>Color: {item.color}</p>}
                </div>
                <button 
                  onClick={() => removeFromCart(item.id, item.size, item.color)}
                  className="text-xs text-gray-400 hover:text-red-500 mt-3 flex items-center gap-1 transition-colors w-fit"
                >
                  <Trash2 className="w-3 h-3" /> Remove
                </button>
              </div>
            </div>
            <div className="col-span-2 text-center text-sm font-light">
              ${item.price.toFixed(2)}
            </div>
            <div className="col-span-2 flex justify-center">
              <div className="flex items-center border border-gray-200">
                <button onClick={() => decrementQuantity(item.id, item.size, item.color)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black">-</button>
                <span className="w-8 text-center text-sm font-light">{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id, item.size, item.color)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black">+</button>
              </div>
            </div>
            <div className="col-span-2 text-right text-sm font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/3">
        <div className="bg-gray-50 p-8">
          <h2 className="text-lg font-medium uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Order Summary</h2>
          <div className="space-y-4 mb-6 text-sm font-light">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          <div className="flex justify-between text-base font-medium uppercase tracking-wider mb-8 border-t border-gray-200 pt-4">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full py-4 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-gray-900 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
