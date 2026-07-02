import Image from 'next/image';

export default function VideoBanner() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Yuqoridagi bo'limlar bilan bir xil simmetriyani saqlash uchun */}
        <div className="w-full md:px-[100px]">
          
          {/* Rasm va Video qismi (aspect ratio orqali keng ekran formatida) */}
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-neutral-200 overflow-hidden group cursor-pointer">
            
            {/* Orqa fon videosi */}
            <video
              src="/image/video-banner.webm"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />

            {/* O'rtadagi Play tugmasi va Aylanuvchi yozuv */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[140px] h-[140px] md:w-[180px] md:h-[180px]">
                
                {/* Aylanuvchi matn (SVG textPath) */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 200 200">
                  <defs>
                    <path 
                      id="videoCircleText" 
                      d="M 100, 100 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" 
                    />
                  </defs>
                  <text className="text-[9px] md:text-[10px] uppercase font-mono tracking-[0.25em] fill-white opacity-95">
                    <textPath href="#videoCircleText" startOffset="0%">
                      CLASSIC COLLECTION 2022 • CLASSIC COLLECTION 2023 • 
                    </textPath>
                  </text>
                </svg>

                {/* Play ikonkasi */}
                <div className="z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-white transition-transform duration-300 group-hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

              </div>
            </div>
            
            {/* Qoramtir gradient (rasm ochiq rangli bo'lsa oq matn ko'rinishi uchun) */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
            
            {/* Videodagi suv belgisini (watermark) yopish uchun logo (Kreativ dizayn) */}
            <div className="hidden md:flex absolute bottom-0 right-0 bg-black/95 backdrop-blur-sm px-12 py-5 z-20 items-center justify-center rounded-tl-[40px] border-t border-l border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-105 origin-bottom-right">
              <span className="text-xl font-brand text-white uppercase tracking-[0.2em] font-bold">
                FASHIONGLAM
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}