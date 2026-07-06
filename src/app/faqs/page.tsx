'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqCategories = ['All', 'Orders', 'Shipping', 'Returns', 'Product']

const faqs = [
  {
    category: 'Orders',
    question: 'Can I cancel or modify my order after it has been placed?',
    answer: 'Orders are processed immediately to ensure fast delivery. Once an order is confirmed, we are unable to cancel or modify it. If you need a different item, please return the original order for a refund and place a new one.'
  },
  {
    category: 'Orders',
    question: 'How do I know what size to order?',
    answer: 'Each product page features a detailed Size Guide with measurements. If you are between sizes, we recommend sizing up or contacting our personal stylists for personalized advice.'
  },
  {
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 150 countries worldwide. International shipping rates and delivery times are calculated at checkout based on your location.'
  },
  {
    category: 'Shipping',
    question: 'How can I track my order?',
    answer: 'Once your order has been dispatched, you will receive a shipping confirmation email containing a tracking link. You can also track your order directly on our website using the "Track Your Order" page.'
  },
  {
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of the original delivery date. Items must be in their original, unworn condition with all tags attached.'
  },
  {
    category: 'Returns',
    question: 'How long does it take to process a refund?',
    answer: 'Once we receive your return, it takes 3-5 business days to inspect the items. After approval, the refund will be processed to your original payment method, which may take an additional 2-7 business days to appear.'
  },
  {
    category: 'Product',
    question: 'How should I care for my FASHIONGLAM garments?',
    answer: 'Care instructions are provided on the label of each garment. For delicate items like silk and cashmere, we strongly recommend professional dry cleaning.'
  },
  {
    category: 'Product',
    question: 'Will sold-out items be restocked?',
    answer: 'Our collections are produced in limited quantities to maintain exclusivity. While core essentials are restocked regularly, seasonal pieces are usually not reproduced.'
  }
]

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = faqs.filter(faq => activeCategory === 'All' || faq.category === activeCategory)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#ebebeb] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest mb-4">FAQs</h1>
          <p className="text-sm font-light tracking-widest uppercase text-gray-500">Frequently Asked Questions</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setOpenIndex(null)
              }}
              className={`px-6 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-sm md:text-base font-medium pr-8">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
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
                  <div className="p-6 bg-white text-gray-600 font-light text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 font-light py-10">No FAQs found for this category.</p>
          )}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm font-light text-gray-500 mb-6">Didn't find what you were looking for?</p>
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
