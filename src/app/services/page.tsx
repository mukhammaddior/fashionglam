import { Scissors, Truck, Shirt, Star } from 'lucide-react'

export const metadata = {
  title: 'Services | FASHIONGLAM',
  description: 'Explore the premium services offered by FASHIONGLAM.',
}

const services = [
  {
    icon: <Scissors className="w-8 h-8 mb-6 text-black" strokeWidth={1} />,
    title: 'Premium Tailoring',
    description: 'Our expert tailors ensure every garment fits you flawlessly. We offer complimentary basic alterations on all full-price purchases to guarantee the perfect silhouette.'
  },
  {
    icon: <Shirt className="w-8 h-8 mb-6 text-black" strokeWidth={1} />,
    title: 'Personal Styling',
    description: 'Book a one-on-one session with our in-house stylists. Whether you need a wardrobe refresh or an outfit for a special occasion, we provide curated recommendations.'
  },
  {
    icon: <Truck className="w-8 h-8 mb-6 text-black" strokeWidth={1} />,
    title: 'White Glove Delivery',
    description: 'Experience luxury from store to door. Our premium delivery service ensures your garments arrive in pristine condition, hung and ready to wear in specialized garment bags.'
  },
  {
    icon: <Star className="w-8 h-8 mb-6 text-black" strokeWidth={1} />,
    title: 'VIP Membership',
    description: 'Join our exclusive club for early access to new collections, private sale events, and dedicated customer support available 24/7 for all your fashion needs.'
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-6">Our Services</h1>
          <p className="text-sm md:text-base font-light tracking-widest uppercase text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Beyond the garments, we offer a suite of premium services designed to elevate your shopping and wearing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-gray-50 cursor-pointer group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium uppercase tracking-widest mb-4">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-black text-white p-12 md:p-20 text-center">
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest mb-6">Book an Appointment</h2>
          <p className="text-gray-400 font-light mb-10 max-w-xl mx-auto">
            Ready to experience FASHIONGLAM tailored just for you? Contact our concierge team to schedule your personalized visit.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-4 bg-white text-black text-sm font-medium uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Contact Concierge
          </a>
        </div>
      </div>
    </div>
  )
}
