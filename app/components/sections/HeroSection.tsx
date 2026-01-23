import { getHeroContent, getStats } from "@/app/lib/sanity/queries";
import HeroSectionClient from "./HeroSectionClient";
import { heroContent as fallbackHeroContent, stats as fallbackStats } from "@/app/data/content";

export default async function HeroSection() {
  let heroContent, stats;
  
  try {
    const [heroData, statsData] = await Promise.all([
      getHeroContent(),
      getStats(),
    ]);
    
    heroContent = heroData || fallbackHeroContent;
    stats = statsData && statsData.length > 0 ? statsData : fallbackStats;
  } catch (error) {
    console.error("Error fetching hero content:", error);
    heroContent = fallbackHeroContent;
    stats = fallbackStats;
  }

  return <HeroSectionClient heroContent={heroContent} stats={stats} />;
}

