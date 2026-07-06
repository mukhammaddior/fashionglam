import Image from 'next/image'
import { MapPin, Phone, Clock } from 'lucide-react'

export const metadata = {
  title: 'Store Locator | FASHIONGLAM',
  description: 'Find a FASHIONGLAM flagship store near you.',
}

const stores = [
  {
    city: 'New York',
    name: 'Fifth Avenue Flagship',
    image: '/image/men/category1.jpg',
    address: '611 5th Ave, New York, NY 10022, USA',
    phone: '+1 212-555-0198',
    hours: 'Mon-Sat: 10AM - 8PM\nSun: 11AM - 7PM',
  },
  {
    city: 'Paris',
    name: 'Le Marais Boutique',
    image: '/image/women/category1.jpg',
    address: '45 Rue de Sévigné, 75003 Paris, France',
    phone: '+33 1 42 78 55 55',
    hours: 'Mon-Sat: 10:30AM - 7:30PM\nSun: Closed',
  },
  {
    city: 'Milan',
    name: 'Via Montenapoleone',
    image: '/image/men/category3.jpg',
    address: 'Via Montenapoleone, 8, 20121 Milano MI, Italy',
    phone: '+39 02 7600 5555',
    hours: 'Mon-Sat: 10AM - 7PM\nSun: 12PM - 7PM',
  }
]

export default function FindUsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#ebebeb] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest mb-4">Find Us</h1>
          <p className="text-sm font-light tracking-widest uppercase text-gray-500">Visit our flagship boutiques worldwide</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stores.map((store, index) => (
            <div key={index} className="border border-gray-200 overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={store.image} 
                  alt={store.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 bg-gray-50">
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">{store.city}</p>
                <h3 className="text-xl font-light uppercase tracking-widest mb-6">{store.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                    <p className="text-sm font-light text-gray-600">{store.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                    <p className="text-sm font-light text-gray-600">{store.phone}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                    <p className="text-sm font-light text-gray-600 whitespace-pre-line">{store.hours}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="w-full text-xs font-medium uppercase tracking-widest hover:text-gray-500 transition-colors text-left flex items-center justify-between group-hover:text-black">
                    <span>Get Directions</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
