"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function ProductGallery({ images, name }: { images: string[], name: string }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="w-full flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:w-20 lg:w-24 shrink-0 no-scrollbar">
          {images.map((img, idx) => (
            <button 
              key={idx} 
              onClick={() => setMainImage(img)}
              className={`relative w-20 md:w-full aspect-[3/4] bg-gray-50 shrink-0 border-2 transition-all ${mainImage === img ? 'border-black' : 'border-transparent hover:border-gray-300'}`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                fill
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
      
      {/* Main Image */}
      <div className="relative w-full aspect-[3/4] bg-gray-50 order-1 md:order-2">
        <Image
          src={mainImage}
          alt={name}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  )
}
