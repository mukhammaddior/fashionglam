'use client'

import { useState } from 'react'
import { Package, Truck, CheckCircle, Clock } from 'lucide-react'

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('')
  const [email, setEmail] = useState('')
  const [isTracking, setIsTracking] = useState(false)
  const [trackingResult, setTrackingResult] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (!orderId || !email) return
    
    setIsTracking(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsTracking(false)
      setTrackingResult(true)
    }, 1500)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#ebebeb] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest mb-4">Track Your Order</h1>
          <p className="text-sm font-light tracking-widest uppercase text-gray-500">Enter your order details to see current status</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        {!trackingResult ? (
          <form onSubmit={handleTrack} className="bg-gray-50 p-8 md:p-12 border border-gray-200">
            <div className="space-y-8 mb-10">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Order Number</label>
                <input
                  type="text"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                  placeholder="e.g. 123456789"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                  placeholder="Used during checkout"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isTracking || !orderId || !email}
              className={`w-full py-4 text-sm font-medium uppercase tracking-widest transition-colors flex items-center justify-center ${
                isTracking || !orderId || !email 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              {isTracking ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </>
              ) : (
                'Track Order'
              )}
            </button>
          </form>
        ) : (
          <div className="bg-gray-50 p-8 md:p-12 border border-gray-200">
            <div className="flex justify-between items-end border-b border-gray-200 pb-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Order Number</p>
                <h2 className="text-2xl font-medium">{orderId}</h2>
              </div>
              <button 
                onClick={() => setTrackingResult(false)}
                className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors underline"
              >
                Track Another
              </button>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gray-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12 relative">
                
                {/* Step 1: Placed */}
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 relative z-10">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base font-medium uppercase tracking-widest mb-1">Order Placed</h3>
                    <p className="text-sm font-light text-gray-500">We have received your order.</p>
                    <p className="text-xs font-mono text-gray-400 mt-2">Oct 24, 2026 - 10:30 AM</p>
                  </div>
                </div>

                {/* Step 2: Processing */}
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 relative z-10">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base font-medium uppercase tracking-widest mb-1">Order Processed</h3>
                    <p className="text-sm font-light text-gray-500">Your items have been packed and are ready.</p>
                    <p className="text-xs font-mono text-gray-400 mt-2">Oct 25, 2026 - 02:15 PM</p>
                  </div>
                </div>

                {/* Step 3: Shipped (Current) */}
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0 relative z-10 animate-pulse">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base font-medium uppercase tracking-widest mb-1">Shipped</h3>
                    <p className="text-sm font-light text-black">Your order is on the way.</p>
                    <p className="text-xs font-mono text-gray-500 mt-2">Oct 26, 2026 - 08:00 AM</p>
                  </div>
                </div>

                {/* Step 4: Delivered (Pending) */}
                <div className="flex gap-6 items-start opacity-40">
                  <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center shrink-0 relative z-10">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base font-medium uppercase tracking-widest mb-1">Delivered</h3>
                    <p className="text-sm font-light text-gray-500">Estimated Delivery</p>
                    <p className="text-xs font-mono text-gray-400 mt-2">Oct 28, 2026</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
