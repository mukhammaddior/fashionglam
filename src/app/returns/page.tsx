'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const returnPolicies = [
  {
    title: 'Return Window',
    content: 'We accept returns within 30 days of the original delivery date. Items must be postmarked by the 30th day to be eligible for a full refund.'
  },
  {
    title: 'Condition of Items',
    content: 'All returned items must be in their original, unworn, and unwashed condition with all tags attached. Shoes must be returned in their original designer shoebox without damage. We reserve the right to refuse a return if it does not meet these conditions.'
  },
  {
    title: 'How to Initiate a Return',
    content: '1. Log into your account and navigate to Order History.\n2. Select the order and click "Request Return".\n3. Print the pre-paid return shipping label.\n4. Pack your items securely and attach the label.\n5. Drop the package off at any authorized shipping location.'
  },
  {
    title: 'Refund Process & Timing',
    content: 'Once we receive your return, please allow 3-5 business days for our warehouse to inspect the items. After approval, the refund will be processed to your original payment method. Depending on your bank, it may take an additional 2-7 business days for the funds to appear in your account.'
  },
  {
    title: 'Exchanges',
    content: 'If you need a different size or color, we recommend returning your original item for a refund and placing a new order. This ensures the replacement item does not sell out while your return is in transit.'
  },
  {
    title: 'Final Sale Items',
    content: 'Items marked as "Final Sale" at the time of purchase are not eligible for return, exchange, or store credit.'
  }
]

export default function ReturnsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#ebebeb] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest mb-4">Returns & Exchanges</h1>
          <p className="text-sm font-light tracking-widest uppercase text-gray-500">Everything you need to know</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-4">
          {returnPolicies.map((policy, index) => (
            <div 
              key={index} 
              className="border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-sm md:text-base font-medium uppercase tracking-widest">{policy.title}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-[500px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-white text-gray-600 font-light text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {policy.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm font-light text-gray-500 mb-6">Still have questions about your return?</p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 border border-black text-xs font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
