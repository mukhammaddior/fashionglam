"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = containerRef.current;
    const marquee = marqueeRef.current;
    if (!wrapper || !marquee) return;

    // Remove automatic animation for scroll-driven behavior
    marquee.classList.remove("animate-marquee");

    const onScroll = () => {
      const windowHeight = window.innerHeight;
      const rect = wrapper.getBoundingClientRect();
      
      // If not in view, don't update
      if (rect.top > windowHeight || rect.bottom < 0) return;

      const totalDistance = windowHeight + rect.height;
      const currentDistance = windowHeight - rect.top;

      let progress = currentDistance / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Scroll from 0 to -50% to make it look like an endless marquee
      const translateX = progress * -50;
      marquee.style.transform = `translateX(${translateX}%)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Boshlang'ich joylashuvni aniqlash uchun bir marta chaqiramiz
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full overflow-hidden bg-white py-12 md:py-20 flex items-center">
      <div className="w-full flex">
        {/* Yuguruvchi qator */}
        <div ref={marqueeRef} className="flex whitespace-nowrap animate-marquee">
          
          {/* Birinchi blok */}
          <div className="flex items-center text-[40px] md:text-[80px] font-serif uppercase tracking-widest mx-4">
            <span className="text-gray-200">Trending</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
            <span className="text-black">Stylish</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
            <span className="text-gray-200">Fashion</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
          </div>

          {/* Ikkinchi blok (Birinchisining aniq nusxasi, uzluksizlik uchun) */}
          <div className="flex items-center text-[40px] md:text-[80px] font-serif uppercase tracking-widest mx-4">
            <span className="text-gray-200">Trending</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
            <span className="text-black">Stylish</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
            <span className="text-gray-200">Fashion</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
          </div>
          
          {/* Uchinchi blok (Katta ekranlarda ham joy yetib ortishi uchun) */}
          <div className="flex items-center text-[40px] md:text-[80px] font-serif uppercase tracking-widest mx-4">
            <span className="text-gray-200">Trending</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
            <span className="text-black">Stylish</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
            <span className="text-gray-200">Fashion</span>
            <span className="mx-8 md:mx-12 text-gray-200 text-2xl md:text-4xl">•</span>
          </div>

        </div>
      </div>
    </section>
  );
}