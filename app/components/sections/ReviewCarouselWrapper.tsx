import ReviewCarousel from "./ReviewCarousel";
import { testimonials } from "@/app/data/testimonials";

export default function ReviewCarouselWrapper() {
  return <ReviewCarousel reviews={testimonials} />;
}
