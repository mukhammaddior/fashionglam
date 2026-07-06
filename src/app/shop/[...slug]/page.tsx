import { getProducts } from '@/actions/product'
import Link from 'next/link'
import Image from 'next/image'
import WishlistButton from '@/components/shared/WishlistButton'

export default async function ShopPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const resolvedParams = await params
  const slug = resolvedParams.slug || []
  
  const gender = slug[0]
  const category = slug[1]
  const subCategory = slug[2]

  const products = await getProducts({ gender, category, subCategory })

  const title = subCategory || category || gender || 'Shop'

  return (
    <div className="min-h-screen bg-white pt-0 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Hero Banner for Category */}
      <div className="w-full h-[250px] md:h-[300px] bg-neutral-100 relative mb-12 flex items-center justify-center overflow-hidden">
        <Image 
          src={gender === 'women' ? '/image/women-featured.jpg' : gender === 'men' ? '/image/men-featured.webp' : '/image/hero-image.png'}
          alt="Category Banner"
          fill
          className="object-cover opacity-60 grayscale"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest text-black mb-4">
            {title.replace('-', ' ')}
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs text-black uppercase tracking-widest font-mono font-medium">
            <Link href="/" className="hover:text-gray-500 transition-colors">Home</Link>
            {gender && (
              <>
                <span className="text-gray-400">/</span>
                <Link href={`/shop/${gender}`} className="hover:text-gray-500 transition-colors">{gender}</Link>
              </>
            )}
            {category && (
              <>
                <span className="text-gray-400">/</span>
                <Link href={`/shop/${gender}/${category}`} className="hover:text-gray-500 transition-colors">{category}</Link>
              </>
            )}
            {subCategory && (
              <>
                <span className="text-gray-400">/</span>
                <span>{subCategory}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters (Visual only for now) */}
        <div className="w-full lg:w-1/4 hidden lg:block">
          <h3 className="font-serif text-lg tracking-wider mb-6 text-black border-b border-neutral-100 pb-4">Filters</h3>
          
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href={`/shop/${gender || 'women'}/clothing`} className="hover:text-black">Clothing</Link></li>
              <li><Link href={`/shop/${gender || 'women'}/accessories`} className="hover:text-black">Accessories</Link></li>
              <li><Link href={`/shop/${gender || 'women'}/shoes`} className="hover:text-black">Shoes</Link></li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Price</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><button className="hover:text-black">Under $50</button></li>
              <li><button className="hover:text-black">$50 - $100</button></li>
              <li><button className="hover:text-black">Over $100</button></li>
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-100">
            <span className="text-xs text-gray-500 uppercase tracking-widest">{products.length} Products</span>
            <select className="text-xs uppercase tracking-widest border-none bg-transparent outline-none cursor-pointer">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          {products.length === 0 ? (
            <div className="py-24 text-center text-gray-500 bg-neutral-50">
              <p className="font-mono uppercase tracking-widest text-sm">No products found in this category.</p>
              <Link href={`/shop/${gender || 'women'}`} className="mt-6 inline-block text-xs uppercase tracking-widest border-b border-black text-black pb-1">View All Products</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:gap-x-6 md:gap-y-10">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.slug}`} className="group cursor-pointer flex flex-col">
                  <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden mb-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {product.isNewArrival && (
                      <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                        New
                      </div>
                    )}
                    <WishlistButton slug={product.slug} />
                  </div>
                  <div className="flex flex-col flex-1 justify-between">
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest leading-relaxed">{product.name}</h3>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-sm font-light text-black">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
