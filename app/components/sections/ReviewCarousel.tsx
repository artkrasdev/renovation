import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "/src/App.css";
import AutoScroll from 'embla-carousel-auto-scroll'

export default function ReviewCarousel({ reviews, scroll, direction, dir}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: `${direction}` },  scroll ? [AutoScroll({ playOnInit: true, speed: 0.3, direction: `${dir}`})] : 
  [Autoplay({delay: 3000})]);

  const isDirectionY = direction == "y";

 

  return (
    <div className="embla flex flex-row items-center justify-center w-full mx-4 h-[35rem]">
        <div className={`embla__viewport w-full h-full rounded-lg`} ref={emblaRef}>
          <div className={`embla__container max-h-full ${isDirectionY ? "flex-col" : ""}`}>

            {reviews.map((src, index) => 
              <div className={`w-full h-auto p-5 my-5 bg-gradient-to-t from-medg/50 to-lightg/50 rounded-xl border border-border/50`} key={index}>
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-row'>
                    <img src={src.image} className='h-[3.5rem] w-[3.5rem] rounded-full border border-border/50'/>
                    <div className='flex flex-col ms-3 mb-5'>
                      <div className='flex flex-row items-center'>
                        <h3 className='font-bold'>{src.name}</h3>
                        <img src={src.check} className={src.check ? 'ms-2 h-4 w-4' : ''}/>
                      </div>
                      <h4 className='font-light text-sm'>@{src.nickname}</h4>
                    </div>
                    </div>
                  <img src="/images/reviews/Twitter-Logo.png" className='h-4 w-auto'/>
                </div>
                <p className=''>{src.review}</p>
              </div>
            )}

          </div>
        </div>
    </div>
  )
}
