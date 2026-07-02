import Image from 'next/image';
import Link from 'next/link';

export default function Collections() {
  return (
    <section className="w-full">
      {/* 1-Qator: Leather Collection */}
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Rasm (Desktopda chapda, Mobileda tepada) */}
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:min-h-[600px] lg:min-h-[700px] overflow-hidden group">
          <Image
            src="/image/collection/leather-collection.png" 
            alt="Leather Collection"
            fill
            className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* Matn (Desktopda o'ngda, Mobileda pastda) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 md:p-16 lg:p-24 xl:px-32">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-serif uppercase leading-[1.1] text-black tracking-wide mb-6">
            Leather <br /> Collection
          </h2>
          <p className="text-[10px] md:text-xs font-mono text-gray-500 mb-10 max-w-[420px] leading-loose tracking-[0.15em] uppercase">
            Lorem ipsum dolor sit amet consectetur. Pharetra sit fermentum non vulputate morbi. Donec sed est.
          </p>
          <Link 
            href="/leather-collection"
            className="inline-block px-10 py-4 bg-black text-white rounded-[30px] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
          >
            View Page
          </Link>
        </div>

      </div>

      {/* 2-Qator: Woolen Collection */}
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Matn (Desktopda chapda, Mobileda pastda) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 md:p-16 lg:p-24 xl:px-32 order-2 md:order-1">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-serif uppercase leading-[1.1] text-black tracking-wide mb-6">
            Woolen <br /> Collection
          </h2>
          <p className="text-[10px] md:text-xs font-mono text-gray-500 mb-10 max-w-[420px] leading-loose tracking-[0.15em] uppercase">
            Lorem ipsum dolor sit amet consectetur. Pharetra sit fermentum non vulputate morbi. Donec sed est.
          </p>
          <Link 
            href="/woolen-collection"
            className="inline-block px-10 py-4 bg-black text-white rounded-[30px] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
          >
            View Page
          </Link>
        </div>

        {/* Rasm (Desktopda o'ngda, Mobileda tepada) */}
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:min-h-[600px] lg:min-h-[700px] overflow-hidden group order-1 md:order-2">
          <Image
            src="/image/collection/woolen-collection.png" 
            alt="Woolen Collection"
            fill
            className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}