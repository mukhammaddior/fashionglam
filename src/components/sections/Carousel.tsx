"use client";

import { useState } from 'react';
import Image from 'next/image';

// Vaqtinchalik ma'lumotlar. Buni ham keyinchalik products.json ga o'tkazishingiz mumkin
const carouselData = [
    { id: 2, image: '/image/carusel/slide2.png', title: 'CLASSIC BLACK COAT', price: 1850.00 },
    { id: 3, image: '/image/carusel/slide3.png', title: 'MINIMALIST SHIRT', price: 950.00 },
    { id: 1, image: '/image/carusel/slide1.png', title: 'LOREM IPSUM DOLOR SIT', price: 1250.00 },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = carouselData.length;

  // Keyingi va oldingi indekslarni aniqlash
  const next = () => setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));

  // Yondagi rasmlarni to'g'ri ko'rsatish uchun matematik mantiq
  const getPrevIndex = () => (currentIndex === 0 ? length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === length - 1 ? 0 : currentIndex + 1);

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 relative">
        
        {/* Slider Asosiy Konteyneri */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[550px] w-full flex items-center justify-center">
          
          {carouselData.map((item, index) => {
            // Gorizontal cheksiz aylanish effekti uchun offsetni hisoblash
            let offset = index - currentIndex;
            const halfLength = Math.floor(length / 2);
            if (offset > halfLength) offset -= length;
            if (offset < -halfLength) offset += length;
            
            const isCenter = offset === 0;

            return (
              <div 
                key={item.id} 
                className="absolute w-[80%] md:w-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out left-[calc(50%+calc(var(--offset)*90%))] md:left-[calc(50%+calc(var(--offset)*58%))]"
                style={{ 
                  "--offset": offset,
                  opacity: Math.abs(offset) > 1 ? 0 : 1 // Faqat ko'rinishi kerak bo'lganlarni yorug' qilamiz
                } as React.CSSProperties}
              >
                {/* Rasm qismi */}
                <div className="relative aspect-[4/3] md:aspect-[16/11] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                
                {/* Matn qismi (Faqat markazdagi faol rasmda ko'rinadi) */}
                <div className={`mt-4 md:mt-6 flex justify-between items-center text-[10px] md:text-[11px] text-gray-500 font-mono tracking-[0.15em] transition-opacity duration-700 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="uppercase">{item.title}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              </div>
            );
          })}

          {/* Chapga tugma (Arrows) */}
          <button 
            onClick={prev}
            className="absolute left-[3%] md:left-[21%] z-30 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-gray-400 rounded-full bg-transparent hover:bg-black hover:text-white hover:border-black text-black transition-all -translate-x-1/2"
            aria-label="Previous Slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* O'ngga tugma (Arrows) */}
          <button 
            onClick={next}
            className="absolute right-[3%] md:right-[21%] z-30 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-gray-400 rounded-full bg-transparent hover:bg-black hover:text-white hover:border-black text-black transition-all translate-x-1/2"
            aria-label="Next Slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>

        {/* Eng pastdagi nuqtalar (Pagination Dots) */}
        <div className="flex items-center justify-center gap-2 mt-12 md:mt-16 z-30 relative">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-1.5 h-1.5 bg-black' 
                  : 'w-1.5 h-1.5 bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}