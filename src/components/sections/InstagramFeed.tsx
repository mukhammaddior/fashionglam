import Image from 'next/image';
import Link from 'next/link';

const instagramImages = [
  '/image/instafeed/insta1.png',
  '/image/instafeed/insta2.png',
  '/image/instafeed/insta3.png',
  '/image/instafeed/insta4.png',
  '/image/instafeed/insta5.png',
];

export default function InstagramFeed() {
  return (
    <section className="w-full flex flex-col md:flex-row overflow-hidden">
      {instagramImages.map((src, index) => (
        <Link 
          href="https://instagram.com/islomjonov.dev" 
          target="_blank" 
          key={index} 
          className="relative w-full md:w-1/5 aspect-square md:aspect-[4/5] group overflow-hidden bg-neutral-200 block"
        >
          <Image
            src={src}
            alt={`Instagram Feed ${index + 1}`}
            fill
            className="object-cover grayscale transition-transform duration-700 group-hover:scale-110"
          />
          {/* Hover bo'lganda chiqadigan qora parda va Instagram ikonkasi */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
        </Link>
      ))}
    </section>
  );
}