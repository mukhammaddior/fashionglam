import Image from 'next/image';
import Link from 'next/link';

// Ma'lumotlarni alohida saqlash (Buni ham JSON ga o'tkazish mumkin)
const articlesData = [
  {
    id: 1,
    image: '/image/newsarticles/news1.png',
    date: 'Feb 22, 2024',
    category: 'Fashion',
    title: 'How To Master Timeless Fashion',
    excerpt: 'Pharetra sit fermentum non vulputate morbi. Donec sed est felis purus donec porta.',
    link: '/news/timeless-fashion'
  },
  {
    id: 2,
    image: '/image/newsarticles/news2.png',
    date: 'Feb 22, 2024',
    category: 'Fashion',
    title: 'Top Trends For Every Season',
    excerpt: 'Pharetra sit fermentum non vulputate morbi. Donec sed est felis purus donec porta.',
    link: '/news/top-trends'
  },
  {
    id: 3,
    image: '/image/newsarticles/news3.png',
    date: 'Feb 22, 2024',
    category: 'Fashion',
    title: 'How To Wear The Latest Trends',
    excerpt: 'Pharetra sit fermentum non vulputate morbi. Donec sed est felis purus donec porta.',
    link: '/news/latest-trends'
  }
];

export default function NewsArticles() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full">
        {/* Sarlavha */}
        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-serif uppercase text-center text-black mb-12 tracking-wide">
          News Articles
        </h2>

        {/* Maqolalar tarmog'i - edge to edge */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-b border-black divide-y md:divide-y-0 md:divide-x divide-black">
          
          {articlesData.map((article) => (
            <Link 
              href={article.link} 
              key={article.id}
              className="flex flex-col group p-4 md:p-6 lg:p-8 transition-colors hover:bg-white"
            >
              {/* Rasm qismi */}
              <div className="relative aspect-square w-full mb-3 overflow-hidden bg-neutral-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Sana va Kategoriya */}
              <div className="text-[10px] md:text-[11px] font-mono tracking-[0.1em] text-gray-500 mb-1.5 flex items-center gap-3">
                {article.date} <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span> {article.category}
              </div>

              {/* Maqola Sarlavhasi */}
              <h3 className="text-xl md:text-[22px] lg:text-[26px] xl:text-[28px] font-serif text-black mb-2 group-hover:underline decoration-1 underline-offset-4">
                {article.title}
              </h3>

              {/* Qisqa matn */}
              <p className="text-[10px] md:text-[11px] font-mono text-gray-500 leading-relaxed max-w-[95%]">
                {article.excerpt}
              </p>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}