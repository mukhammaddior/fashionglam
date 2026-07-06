'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useShopStore } from '@/lib/store'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

export default function CheckoutPage() {
  const { cart, user, placeOrder } = useShopStore()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    } else if (cart.length === 0) {
      router.push('/cart')
    }
  }, [user, cart, router])

  if (!user || cart.length === 0) {
    return null
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 15.00 // Fixed shipping for demonstration
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing delay (2 seconds)
    setTimeout(() => {
      // Extract just the shipping info
      const shippingAddress = {
        fullName: formData.fullName,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
        phone: formData.phone
      }
      
      // Extract mock payment info
      const paymentDetails = {
        last4: formData.cardNumber.slice(-4) || '0000'
      }

      placeOrder(total, shippingAddress, paymentDetails)
      router.push('/checkout/success')
    }, 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-light uppercase tracking-widest mb-10 text-center">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Checkout Form */}
        <div className="w-full lg:w-2/3">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-lg font-medium uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                    placeholder="123 Fashion Ave, Suite 100"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Zip / Postal Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                    placeholder="10001"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium uppercase tracking-widest mb-6 border-b border-gray-200 pb-4 mt-12">Payment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name on Card</label>
                  <input
                    type="text"
                    name="cardName"
                    required
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    maxLength={19}
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent tracking-widest"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    required
                    maxLength={5}
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent tracking-widest"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    required
                    maxLength={4}
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent tracking-widest"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-50 p-8 sticky top-24">
            <h2 className="text-lg font-medium uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-gray-100 shrink-0">
                    <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-xs font-medium uppercase tracking-wider">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-sm font-medium flex items-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 text-sm font-light border-t border-gray-200 pt-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between text-base font-medium uppercase tracking-wider mb-8 border-t border-gray-200 pt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button 
              type="submit" 
              form="checkout-form"
              disabled={isProcessing}
              className={`w-full py-4 text-white text-sm font-medium uppercase tracking-widest transition-colors flex justify-center items-center gap-2 ${
                isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
              }`}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Complete Order'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
