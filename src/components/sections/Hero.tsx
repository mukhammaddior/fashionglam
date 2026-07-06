import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-white flex justify-center pt-2 sm:pt-4 md:pt-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Rasm markazda bo'lishi uchun responisve padding */}
        <div className="relative w-full lg:px-[100px] xl:px-[120px] flex justify-center">
          <div className="relative w-full">
            <Image
              src="/image/hero-image.png"
              alt="Fashion Hero"
              width={1316}
              height={914}
              priority
              className="w-full h-auto grayscale opacity-95 object-cover"
            />
            
            {/* Tugma rasmga nisbatan foizlarda qotiriladi */}
            <div className="absolute bottom-[4%] right-[4%] sm:bottom-[6%] sm:right-[6%] md:bottom-[8%] md:right-[2%] pointer-events-auto">
              <Link 
                href="/shop" 
                className="inline-block px-5 py-2.5 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-black text-white rounded-full text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.2em] md:tracking-[0.25em] hover:bg-neutral-800 transition-colors uppercase shadow-md"
              >
                Shop All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}