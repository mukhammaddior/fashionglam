'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useShopStore, Order } from '@/lib/store'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { use } from 'react'

export default function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { orders, user } = useShopStore()
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }
    
    const foundOrder = orders.find(o => o.id === resolvedParams.id)
    if (!foundOrder) {
      router.push('/account')
      return
    }
    
    setOrder(foundOrder)
  }, [user, orders, router, resolvedParams.id])

  if (!order) {
    return null
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/account" className="inline-flex items-center text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Account
        </Link>
      </div>

      <div className="border border-gray-200 p-8 md:p-12 bg-gray-50 mb-12">
        <h2 className="text-xl font-medium uppercase tracking-widest mb-8 text-center border-b border-gray-200 pb-6">Order Receipt</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-sm font-light">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Order Details</p>
            <p><span className="font-medium">Order Number:</span> {order.id}</p>
            <p><span className="font-medium">Date:</span> {new Date(order.date).toLocaleString()}</p>
            <p><span className="font-medium">Payment:</span> {order.paymentDetails ? `Credit Card ending in **${order.paymentDetails.last4}` : 'Pay on Delivery'}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Shipping Address</p>
            <p className="font-medium">{order.shippingAddress?.fullName}</p>
            <p>{order.shippingAddress?.address}</p>
            <p>{order.shippingAddress?.city}, {order.shippingAddress?.zipCode}</p>
            <p>{order.shippingAddress?.phone}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Items Purchased</p>
          <div className="space-y-6">
            {order.items.map((item, index) => (
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
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
