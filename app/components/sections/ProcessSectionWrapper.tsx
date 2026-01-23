import { getProcessSteps, getProcessImage, getSectionTitles } from "@/app/lib/sanity/queries";
import ProcessSection from "./ProcessSection";
import { sectionTitles as fallbackSectionTitles, processSteps as fallbackProcessSteps } from "@/app/data/content";

export default async function ProcessSectionWrapper() {
  let sectionTitle, steps, processImage;
  
  try {
    const [titlesData, stepsData, imageData] = await Promise.all([
      getSectionTitles(),
      getProcessSteps(),
      getProcessImage(),
    ]);
    
    sectionTitle = titlesData?.process || fallbackSectionTitles.process;
    steps = stepsData && stepsData.length > 0 ? stepsData : fallbackProcessSteps;
    processImage = imageData || undefined;
  } catch (error) {
    console.error("Error fetching process content:", error);
    sectionTitle = fallbackSectionTitles.process;
    steps = fallbackProcessSteps;
    processImage = undefined;
  }

  return <ProcessSection sectionTitle={sectionTitle} processSteps={steps} processImage={processImage} />;
}
