'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useShopStore, Order } from '@/lib/store'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function CheckoutSuccessPage() {
  const { orders, user } = useShopStore()
  const router = useRouter()
  const [latestOrder, setLatestOrder] = useState<Order | null>(null)

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }
    if (orders.length === 0) {
      router.push('/shop/women')
      return
    }
    
    // The latest order is the first one in the array because we prepend it in placeOrder
    setLatestOrder(orders[0])
  }, [user, orders, router])

  if (!latestOrder) {
    return null
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-20 h-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-light uppercase tracking-widest mb-4">Thank You for Your Order</h1>
        <p className="text-gray-500 font-light">Your order has been successfully placed and is being processed.</p>
      </div>

      <div className="border border-gray-200 p-8 md:p-12 bg-gray-50 mb-12">
        <h2 className="text-xl font-medium uppercase tracking-widest mb-8 text-center border-b border-gray-200 pb-6">Order Receipt</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-sm font-light">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Order Details</p>
            <p><span className="font-medium">Order Number:</span> {latestOrder.id}</p>
            <p><span className="font-medium">Date:</span> {new Date(latestOrder.date).toLocaleString()}</p>
            <p><span className="font-medium">Payment:</span> Pay on Delivery</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Shipping Address</p>
            <p className="font-medium">{latestOrder.shippingAddress.fullName}</p>
            <p>{latestOrder.shippingAddress.address}</p>
            <p>{latestOrder.shippingAddress.city}, {latestOrder.shippingAddress.zipCode}</p>
            <p>{latestOrder.shippingAddress.phone}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Items Purchased</p>
          <div className="space-y-6">
            {latestOrder.items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 items-center">
                <div className="relative w-16 h-20 bg-gray-100 shrink-0">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium uppercase tracking-wider">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity} {item.size ? `| Size: ${item.size}` : ''} {item.color ? `| Color: ${item.color}` : ''}</p>
                </div>
                <div className="text-sm font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex justify-between text-lg font-medium uppercase tracking-wider">
            <span>Total Paid</span>
            <span>${latestOrder.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/shop/women"
          className="inline-block px-10 py-4 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-gray-900 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
