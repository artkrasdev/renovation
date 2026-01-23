import { getFAQItems, getSectionTitles } from "@/app/lib/sanity/queries";
import FAQSection from "./FAQSection";
import { sectionTitles as fallbackSectionTitles } from "@/app/data/content";
import { faqItems as fallbackFAQItems } from "@/app/data/faq";

export default async function FAQSectionWrapper() {
  let sectionTitle, faqItems;
  
  try {
    const [titlesData, faqData] = await Promise.all([
      getSectionTitles(),
      getFAQItems(),
    ]);
    
    sectionTitle = titlesData?.faq || fallbackSectionTitles.faq;
    faqItems = faqData && faqData.length > 0 
      ? faqData.map((item: any) => ({
          id: item._id || item.id,
          question: item.question,
          answer: item.answer,
        }))
      : fallbackFAQItems;
  } catch (error) {
    console.error("Error fetching FAQ content:", error);
    sectionTitle = fallbackSectionTitles.faq;
    faqItems = fallbackFAQItems;
  }

  return <FAQSection sectionTitle={sectionTitle} faqItems={faqItems} />;
}
