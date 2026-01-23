import { getPortfolioProjects, getSectionTitles } from "@/app/lib/sanity/queries";
import PortfolioSection from "./PortfolioSection";
import { sectionTitles as fallbackSectionTitles } from "@/app/data/content";
import { portfolioProjects as fallbackProjects } from "@/app/data/portfolio";

export default async function PortfolioSectionWrapper() {
  let sectionTitle, projects;
  
  try {
    const [titlesData, projectsData] = await Promise.all([
      getSectionTitles(),
      getPortfolioProjects(),
    ]);
    
    sectionTitle = titlesData?.portfolio || fallbackSectionTitles.portfolio;
    projects = projectsData && projectsData.length > 0 
      ? projectsData 
      : fallbackProjects.map(p => ({
          _id: p.id,
          title: p.title,
          category: p.category,
          description: p.description,
          images: p.images,
        }));
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    sectionTitle = fallbackSectionTitles.portfolio;
    projects = fallbackProjects.map(p => ({
      _id: p.id,
      title: p.title,
      category: p.category,
      description: p.description,
      images: p.images,
    }));
  }

  return <PortfolioSection sectionTitle={sectionTitle} projects={projects} />;
}
