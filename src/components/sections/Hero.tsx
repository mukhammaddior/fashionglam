import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-white flex justify-center pt-4  md:pt-8 ">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Rasm "MEN" va "Wishlist" oraliqida (markazda) bo'lishi uchun yondan joy tashlaymiz */}
        <div className="relative w-full md:px-[100px] flex justify-center">
          <div className="relative w-full">
            <Image
              src="/image/hero-image.png"
              alt="Fashion Hero"
              width={1316}
              height={914}
              priority
              className="w-full h-auto grayscale opacity-95"
            />
            
            {/* Tugma rasmga nisbatan foizlarda qotiriladi */}
            <div className="absolute bottom-[5%] right-[5%] md:bottom-[8%] md:right-[2%] pointer-events-auto">
              <Link 
                href="/shop" 
                className="inline-block px-6 py-3 md:px-10 md:py-4 bg-black text-white rounded-full text-[10px] md:text-xs font-semibold tracking-[0.25em] hover:bg-neutral-800 transition-colors uppercase shadow-md"
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