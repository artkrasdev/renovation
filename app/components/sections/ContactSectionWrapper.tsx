import { getCompanyInfo, getSectionTitles } from "@/app/lib/sanity/queries";
import ContactSection from "./ContactSection";
import { sectionTitles as fallbackSectionTitles, companyInfo as fallbackCompanyInfo } from "@/app/data/content";

export default async function ContactSectionWrapper() {
  let sectionTitle, companyInfo;
  
  try {
    const [titlesData, companyData] = await Promise.all([
      getSectionTitles(),
      getCompanyInfo(),
    ]);
    
    sectionTitle = titlesData?.contact || fallbackSectionTitles.contact;
    companyInfo = companyData || fallbackCompanyInfo;
  } catch (error) {
    console.error("Error fetching contact content:", error);
    sectionTitle = fallbackSectionTitles.contact;
    companyInfo = fallbackCompanyInfo;
  }

  return <ContactSection sectionTitle={sectionTitle} companyInfo={companyInfo} />;
}
