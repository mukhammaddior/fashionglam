import { getProductBySlug } from '@/actions/product'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AddToCartButton from './AddToCartButton'
import ProductGallery from './ProductGallery'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const product = await getProductBySlug(resolvedParams.slug)

  if (!product) {
    notFound()
  }

  const sizes = JSON.parse(product.sizes || '[]')
  const colors = JSON.parse(product.colors || '[]')
  const images = JSON.parse(product.images || '[]')

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 uppercase tracking-widest">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/shop/${product.gender}`} className="hover:text-black transition-colors">{product.gender}</Link>
        <span>/</span>
        <Link href={`/shop/${product.gender}/${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-black">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Images */}
        <div className="w-full md:w-1/2">
          <ProductGallery images={images.length > 0 ? images : [product.imageUrl]} name={product.name} />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col pt-4 md:pt-12">
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-wider text-black mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <div className="prose prose-sm text-gray-600 mb-8 font-light leading-relaxed">
            <p>{product.description}</p>
          </div>

          <AddToCartButton product={product} sizes={sizes} colors={colors} />
          
          {/* Accordion Info */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <div className="mb-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-black mb-2">Delivery & Returns</h3>
              <p className="text-sm text-gray-500 font-light">Free standard shipping on orders over $200. Return within 30 days of purchase.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-black mb-2">Product Details</h3>
              <ul className="list-disc list-inside text-sm text-gray-500 font-light space-y-1">
                <li>Material: 100% Premium Quality</li>
                <li>Care: Machine wash cold</li>
                <li>Imported</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
