"use client";

import { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    quote: "“Best fitted white denim shirt more white denim than expected flexible crazy soft.”",
    author: "DENIM CRAZE"
  },
  {
    id: 2,
    quote: "“More than expected crazy soft, flexible and best fitted white simple denim shirt.”",
    author: "CASUAL WAY"
  },
  {
    id: 3,
    quote: "“Best fitted white denim shirt more than expected crazy soft, flexible and b”",
    author: "UPTOP"
  },
  {
    id: 4,
    quote: "“Absolutely Love The Fabric And The Fit. Highly Recommend For Everyday Use.”",
    author: "FASHIONISTA"
  },
  {
    id: 5,
    quote: "“Minimalist Design With Maximum Comfort. A Must Have In Your Wardrobe.”",
    author: "URBAN STYLE"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = testimonialsData.length;

  const next = () => setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 relative flex flex-col items-center">
        
        {/* Slider Konteyneri */}
        <div className="relative w-full h-[300px] flex items-center justify-center">
          
          {/* Chapga tugma */}
          <button 
            onClick={prev}
            className="absolute left-[3%] md:left-[15%] lg:left-[18%] z-30 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-gray-400 rounded-full text-black hover:bg-black hover:text-white transition-all bg-transparent"
            aria-label="Previous Testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Matnlar qismi */}
          <div className="w-full flex justify-center items-center relative h-full">
            {testimonialsData.map((item, index) => {
              // Har bir slayd markazdan qancha uzoqlikda (offset) ekanligini hisoblaymiz
              let offset = index - currentIndex;
              const halfLength = Math.floor(length / 2);
              if (offset > halfLength) offset -= length;
              if (offset < -halfLength) offset += length;
              
              // Ekranda ko'rinish va xiralik holati
              const isCenter = offset === 0;
              const opacity = isCenter ? 1 : 0.25;
              
              return (
                <div 
                  key={item.id} 
                  className="absolute w-[80%] md:w-[45%] lg:w-[40%] top-1/2 -translate-y-1/2 -translate-x-1/2 text-center transition-all duration-700 ease-in-out flex flex-col items-center left-[calc(50%+calc(var(--offset)*100%))] md:left-[calc(50%+calc(var(--offset)*65%))]"
                  style={{ 
                    "--offset": offset,
                    opacity: opacity 
                  } as React.CSSProperties}
                >
                  <h3 className="text-xl md:text-3xl lg:text-[34px] font-serif leading-[1.4] mb-8 text-black">
                    {item.quote}
                  </h3>
                  <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-gray-500 font-bold">
                    {item.author}
                  </span>
                </div>
              );
            })}
          </div>

          {/* O'ngga tugma */}
          <button 
            onClick={next}
            className="absolute right-[3%] md:right-[15%] lg:right-[18%] z-30 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-gray-400 rounded-full text-black hover:bg-black hover:text-white transition-all bg-transparent"
            aria-label="Next Testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>

        {/* Pastdagi nuqtalar (Pagination) */}
        <div className="flex items-center justify-center gap-2 mt-8 z-30">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-1.5 h-1.5 bg-black' 
                  : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}