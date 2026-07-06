import { Globe, Clock, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Shipping & Delivery | FASHIONGLAM',
  description: 'Information about FASHIONGLAM shipping rates, delivery times, and international shipping.',
}

const shippingOptions = [
  {
    name: 'Standard Delivery',
    time: '3 - 5 Business Days',
    cost: '$10.00',
    freeAt: 'Free over $200'
  },
  {
    name: 'Express Delivery',
    time: '1 - 2 Business Days',
    cost: '$25.00',
    freeAt: 'Free over $500'
  },
  {
    name: 'Next Day Delivery',
    time: 'Next Business Day (Order by 2PM)',
    cost: '$35.00',
    freeAt: 'N/A'
  },
  {
    name: 'International Standard',
    time: '7 - 14 Business Days',
    cost: '$40.00',
    freeAt: 'Varies by destination'
  }
]

export default function ShippingPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#ebebeb] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest mb-4">Shipping & Delivery</h1>
          <p className="text-sm font-light tracking-widest uppercase text-gray-500">We deliver worldwide with care and precision</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center">
          <div className="flex flex-col items-center">
            <Globe className="w-8 h-8 mb-4 text-black" strokeWidth={1} />
            <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Worldwide Shipping</h3>
            <p className="text-xs font-light text-gray-500">Delivering to over 150 countries via DHL and local premium couriers.</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 mb-4 text-black" strokeWidth={1} />
            <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Fast Processing</h3>
            <p className="text-xs font-light text-gray-500">Orders placed before 2PM EST are dispatched the same business day.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 mb-4 text-black" strokeWidth={1} />
            <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Insured Packages</h3>
            <p className="text-xs font-light text-gray-500">Every shipment is fully insured against theft and accidental damage.</p>
          </div>
        </div>

        {/* Shipping Table */}
        <div className="mb-20">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-8 text-center border-b border-gray-200 pb-6">Delivery Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-4 text-xs font-medium uppercase tracking-widest text-gray-500">Method</th>
                  <th className="py-4 px-4 text-xs font-medium uppercase tracking-widest text-gray-500">Estimated Time</th>
                  <th className="py-4 px-4 text-xs font-medium uppercase tracking-widest text-gray-500">Cost</th>
                  <th className="py-4 px-4 text-xs font-medium uppercase tracking-widest text-gray-500">Free Shipping</th>
                </tr>
              </thead>
              <tbody>
                {shippingOptions.map((option, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-4 text-sm font-medium">{option.name}</td>
                    <td className="py-6 px-4 text-sm font-light text-gray-600">{option.time}</td>
                    <td className="py-6 px-4 text-sm font-light text-gray-600">{option.cost}</td>
                    <td className="py-6 px-4 text-sm font-light text-gray-600">{option.freeAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Info */}
        <div className="bg-gray-50 p-8 md:p-12 border border-gray-200">
          <h2 className="text-lg font-medium uppercase tracking-widest mb-6">Important Information</h2>
          <ul className="space-y-4 text-sm font-light text-gray-600 list-disc list-inside">
            <li>Delivery times are estimates and commence from the date of shipping, rather than the date of order.</li>
            <li>We are unable to redirect orders once items have been dispatched.</li>
            <li>All orders require a signature upon receipt.</li>
            <li>Taxes and duties are calculated according to your shipping destination. Make sure you select your location to view the correct local market pricing, delivery times and shipping costs.</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}
