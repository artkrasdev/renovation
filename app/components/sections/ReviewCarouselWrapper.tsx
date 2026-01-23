import { getTestimonials } from "@/app/lib/sanity/queries";
import ReviewCarousel from "./ReviewCarousel";
import { testimonials as fallbackTestimonials } from "@/app/data/testimonials";

export default async function ReviewCarouselWrapper() {
  let testimonials;
  
  try {
    const testimonialsData = await getTestimonials();
    testimonials = testimonialsData && testimonialsData.length > 0 
      ? testimonialsData.map((t: any) => ({
          id: t._id,
          name: t.name,
          location: t.location,
          rating: t.rating,
          text: t.text,
          projectType: t.projectType,
          image: t.image,
        }))
      : fallbackTestimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    testimonials = fallbackTestimonials;
  }

  return <ReviewCarousel reviews={testimonials} />;
}
