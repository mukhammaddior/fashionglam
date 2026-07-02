import Carousel from "@/components/sections/Carousel";
import Collections from "@/components/sections/Collections";
import Hero from "@/components/sections/Hero";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Marquee from "@/components/sections/Marquee";
import NewsArticles from "@/components/sections/NewsArticles";
import Testimonials from "@/components/sections/Testimonials";
import TrendingItems from "@/components/sections/TrendingItems";
import VideoBanner from "@/components/sections/VideoBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingItems/>
      <Marquee />
      <Carousel/>
      <Collections/>
      <Testimonials/>
      <VideoBanner />
      <NewsArticles/>
      <InstagramFeed/>
    </main>
  );
}