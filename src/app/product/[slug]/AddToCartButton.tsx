'use client'

import { useState } from 'react'
import { useShopStore } from '@/lib/store'
import { Product } from '@prisma/client'

export default function AddToCartButton({ 
  product, 
  sizes, 
  colors 
}: { 
  product: Product, 
  sizes: string[], 
  colors: string[] 
}) {
  const addToCart = useShopStore((state) => state.addToCart)
  
  const [selectedSize, setSelectedSize] = useState(sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState(colors[0] || '')
  const [isAdded, setIsAdded] = useState(false)

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      imageUrl: product.imageUrl,
      size: selectedSize,
      color: selectedColor,
    })
    
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div>
      {/* Colors */}
      {colors.length > 0 && (
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-gray-900 mb-3 block font-medium">Color: {selectedColor}</span>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor === color ? 'border-black scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: color.toLowerCase() === 'white' ? '#f3f4f6' : color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        </div>
      )}

      {/* Sizes */}
      {sizes.length > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs uppercase tracking-widest text-gray-900 font-medium">Size</span>
            <button className="text-xs text-gray-500 underline font-light hover:text-black">Size Guide</button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 text-sm font-light uppercase tracking-wider border transition-all ${
                  selectedSize === size 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-200 text-gray-600 hover:border-gray-900'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleAdd}
        className={`w-full py-4 text-sm font-medium uppercase tracking-widest transition-all ${
          isAdded 
            ? 'bg-green-600 text-white' 
            : 'bg-black text-white hover:bg-gray-900'
        }`}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}
