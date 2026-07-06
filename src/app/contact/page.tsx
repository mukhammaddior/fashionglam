import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | FASHIONGLAM',
  description: 'Get in touch with FASHIONGLAM customer service and headquarters.',
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#ebebeb] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-widest mb-4">Contact Us</h1>
          <p className="text-sm font-light tracking-widest uppercase text-gray-500">We are here to assist you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-light uppercase tracking-widest mb-8">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                <select className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent appearance-none rounded-none">
                  <option>Order Inquiry</option>
                  <option>Returns & Exchanges</option>
                  <option>Product Information</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors font-light bg-transparent resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="px-10 py-4 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 p-10 h-full">
              <h2 className="text-2xl font-light uppercase tracking-widest mb-10">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Headquarters</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      123 Fashion Avenue<br />
                      Suite 100<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Phone</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      Toll Free: +1 (800) 123-4567<br />
                      Local: +43 720 11 52 78
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Email</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      Customer Service: info@yourcompany.com<br />
                      Press Inquiries: pr@fashionglam.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gray-400 shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Business Hours</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM (EST)<br />
                      Saturday: 10:00 AM - 4:00 PM (EST)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
