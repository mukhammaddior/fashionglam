'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useShopStore } from '@/lib/store'
import Image from 'next/image'
import Link from 'next/link'

export default function AccountPage() {
  const user = useShopStore((state) => state.user)
  const orders = useShopStore((state) => state.orders)
  const logout = useShopStore((state) => state.logout)
  const router = useRouter()

  useEffect(() => {
    // If user is not logged in, redirect them
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null // Return nothing while redirecting
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-gray-50 p-8 text-center md:text-left">
            <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-3xl mx-auto md:mx-0 mb-6">
              {user.name.charAt(0)}
            </div>
            <h2 className="text-xl font-medium uppercase tracking-widest">{user.name}</h2>
            <p className="text-sm font-light text-gray-500 mt-2">{user.email}</p>
            
            <div className="mt-10 border-t border-gray-200 pt-6 space-y-4">
              <button className="text-sm font-medium uppercase tracking-widest text-black hover:opacity-60 transition-opacity block w-full text-left">Order History</button>
              <button 
                onClick={handleLogout}
                className="text-sm font-medium uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors block w-full text-left"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-light uppercase tracking-widest mb-8">Order History</h1>
          
          {orders.length === 0 ? (
            <div className="text-center py-16 bg-gray-50">
              <p className="text-gray-500 font-light mb-6">You haven't placed any orders yet.</p>
              <Link 
                href="/shop/women"
                className="inline-block px-8 py-3 bg-black text-white text-xs font-medium uppercase tracking-widest hover:bg-gray-900 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {orders.map((order) => (
                <div key={order.id} className="border border-gray-200 p-6">
                  <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 pb-4 mb-4 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">Order Number</p>
                      <p className="font-medium mt-1">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">Date Placed</p>
                      <p className="font-medium mt-1">{new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">Total Amount</p>
                      <p className="font-medium mt-1">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex items-center gap-4">
                        <div className="relative w-16 h-20 bg-gray-100 shrink-0">
                          <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-grow">
                          <Link href={`/product/${item.slug}`} className="text-sm font-medium uppercase tracking-wider hover:text-gray-600">
                            {item.name}
                          </Link>
                          <div className="text-xs text-gray-500 mt-1 space-x-2">
                            {item.size && <span>Size: {item.size}</span>}
                            {item.color && <span>Color: {item.color}</span>}
                            <span>Qty: {item.quantity}</span>
                          </div>
                        </div>
                        <div className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
