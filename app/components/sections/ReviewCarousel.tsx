"use client";

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { urlFor } from '@/app/lib/sanity'
import { Testimonial } from '@/app/types'

interface ReviewCarouselProps {
  reviews: Testimonial[];
  direction?: 'x' | 'y';
}

export default function ReviewCarousel({ reviews, direction = 'x' }: ReviewCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: `${direction}` }, [Autoplay({delay: 3000})]);

  const isDirectionY = direction == "y";

 

  return (
    <div className="embla flex flex-row items-center justify-center w-full mx-4 h-[35rem]">
        <div className={`embla__viewport w-full h-full rounded-lg`} ref={emblaRef}>
          <div className={`embla__container max-h-full ${isDirectionY ? "flex-col" : ""}`}>

            {reviews.map((review, index) => {
              const imageUrl = review.image 
                ? (typeof review.image === 'string' 
                    ? review.image 
                    : urlFor(review.image).width(100).height(100).url())
                : undefined;
              
              return (
                <div className={`w-full h-auto p-5 my-5 bg-gradient-to-t from-medg/50 to-lightg/50 rounded-xl border border-border/50`} key={review.id || index}>
                  <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                      {imageUrl && (
                        <img src={imageUrl} alt={review.name} className='h-[3.5rem] w-[3.5rem] rounded-full border border-border/50'/>
                      )}
                      <div className='flex flex-col ms-3 mb-5'>
                        <div className='flex flex-row items-center'>
                          <h3 className='font-bold'>{review.name}</h3>
                        </div>
                        <h4 className='font-light text-sm'>{review.location}</h4>
                      </div>
                    </div>
                  </div>
                  <p className=''>{review.text}</p>
                  <p className='text-sm text-gray-600 mt-2'>{review.projectType}</p>
                </div>
              );
            })}

          </div>
        </div>
    </div>
  )
}
