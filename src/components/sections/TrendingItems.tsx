import Image from 'next/image';
import Link from 'next/link';
import { getTrendingProducts } from '@/actions/product';
import WishlistButton from '@/components/shared/WishlistButton';

export default async function TrendingItems() {
  const products = await getTrendingProducts();
  
  // We want to limit to 2 or 5 products depending on layout, let's take up to 5 products
  // and insert a static banner at index 1 to maintain the original design.
  const displayProducts = products.slice(0, 5);

  const bannerItem = {
    id: 'static-banner',
    type: 'banner',
    image: '/image/hero-image.png',
    heading: ["FASHION", "NO RULES", "TREND"],
    description: "WE DON'T DO FASHION WE ARE FASHION",
    linkText: "SHOP NOW",
    linkUrl: "/shop/women"
  };

  const items = [];
  displayProducts.forEach((p, index) => {
    if (index === 1) {
      items.push(bannerItem);
    }
    items.push({
      id: p.id,
      type: 'product',
      title: p.name,
      price: p.price,
      image: p.imageUrl,
      slug: p.slug
    });
  });

  // If there were no products, at least show the banner
  if (items.length === 0) items.push(bannerItem);

  return (
    <section className="w-full bg-[#8b939e] py-16 md:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="w-full lg:px-[100px]">
          
          <div className="flex justify-between items-start mb-12 md:mb-16">
            <h2 className="text-[40px] md:text-[64px] text-white font-serif uppercase tracking-wider leading-[1.1]">
              Trending <br /> Items
            </h2>
            
            <div className="hidden md:flex relative w-[160px] h-[160px] items-center justify-center">
              <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 200 200">
                <defs>
                  <path 
                    id="textCircle" 
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
                  />
                </defs>
                <text className="text-[12px] uppercase font-mono tracking-[0.2em] fill-white opacity-90">
                  <textPath href="#textCircle" startOffset="0%">
                    CHECK OUR NEW ARRIVALS AT FASHIONISTA AT AFFORDABLE PRICE !!
                  </textPath>
                </text>
              </svg>
              
              <Image 
                src="/image/Vector.png" 
                alt="Arrow Right" 
                width={48} 
                height={48} 
                className="z-10 object-contain w-12 h-12"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
          {items.map((item) => {
            if (item.type === 'product') {
              return (
                <Link href={`/product/${item.slug}`} key={item.id} className="relative aspect-[3/4] group overflow-hidden bg-black block">
                  <Image
                    src={item.image}
                    alt={item.title || "Product"}
                    fill
                    className="object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.slug && <WishlistButton slug={item.slug} className="top-2 right-2 scale-75 md:scale-100 md:top-4 md:right-4" />}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex justify-between items-end text-white text-[9px] md:text-[8px] lg:text-xs tracking-[0.1em] lg:tracking-[0.2em] uppercase font-mono z-10 pointer-events-none">
                    <span className="truncate mr-2">{item.title}</span>
                    <span className="whitespace-nowrap">${item.price?.toFixed(2)}</span>
                  </div>
                </Link>
              );
            }

            if (item.type === 'banner') {
              return (
                <div key={item.id} className="relative aspect-[3/4] group overflow-hidden bg-neutral-900 flex flex-col items-start justify-center p-8 md:p-10 text-white text-left">
                  <Image
                    src={item.image}
                    alt="Banner Background"
                    fill
                    className="object-cover grayscale opacity-40"
                  />
                  <div className="relative z-10 flex flex-col items-start w-full">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl leading-[1.2] font-serif mb-2 lg:mb-4 uppercase tracking-wide text-left">
                      {item.heading?.map((line: string, idx: number) => (
                        <span key={idx}>
                          {line}
                          {idx < (item.heading?.length || 0) - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                    <p className="text-[9px] lg:text-[10px] opacity-90 mb-4 lg:mb-8 max-w-[280px] leading-relaxed text-left font-mono tracking-widest break-words">
                      {item.description}
                    </p>
                    <Link 
                      href={item.linkUrl || "/shop"} 
                      className="inline-block px-5 py-2 lg:px-10 lg:py-3 bg-white text-black rounded-[30px] text-[8px] lg:text-[11px] font-brand font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase hover:bg-gray-200 transition-colors"
                    >
                      {item.linkText}
                    </Link>
                  </div>
                </div>
              );
            }

            return null;
          })}
          </div>
        </div>
      </div>
    </section>
  );
}