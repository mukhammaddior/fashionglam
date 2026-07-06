import Image from 'next/image'

export const metadata = {
  title: 'About Us | FASHIONGLAM',
  description: 'Learn more about FASHIONGLAM, our mission, and our team.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/image/men/category2.jpg" 
            alt="Fashionglam About Hero" 
            fill 
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest mb-4">Our Story</h1>
          <p className="text-sm md:text-base font-light tracking-widest uppercase text-gray-700">Redefining modern luxury</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest mb-8">Who We Are</h2>
            <div className="space-y-6 text-gray-500 font-light leading-relaxed">
              <p>
                Founded in 2026, FASHIONGLAM is a contemporary fashion house dedicated to crafting minimalist, 
                high-quality garments for the modern individual. We believe that true luxury lies in simplicity, 
                impeccable tailoring, and sustainable practices.
              </p>
              <p>
                Our collections are designed in Paris and meticulously crafted by skilled artisans across Europe. 
                Every piece tells a story of dedication to the craft, blending timeless silhouettes with avant-garde details.
              </p>
              <p>
                We do not just create clothes; we curate a lifestyle of understated elegance and quiet confidence.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] bg-gray-100">
            <Image 
              src="/image/women/category2.jpg" 
              alt="Fashionglam Studio" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#ebebeb] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-lg font-medium uppercase tracking-widest mb-4">Sustainability</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                We are committed to reducing our environmental footprint by using ethically sourced materials 
                and partnering with eco-conscious suppliers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase tracking-widest mb-4">Craftsmanship</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                Every stitch matters. We work with generations of artisans to ensure our garments are built to 
                last a lifetime, rejecting fast fashion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase tracking-widest mb-4">Innovation</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                While honoring traditional tailoring, we constantly explore innovative fabrics and modern 
                silhouettes to push the boundaries of fashion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
